// Express.js Routes - Basic Setup Example
// backend/node-express-api/src/routes/terms.js

const express = require('express');
const router = express.Router();
const Term = require('../models/Term');
const { validateTerm } = require('../validators/term');
const { authenticate, authorize } = require('../middleware/auth');

// Get all terms
router.get('/', async (req, res) => {
  try {
    const { category, difficulty, page = 1, limit = 20 } = req.query;
    
    let query = {};
    if (category) query.category = category;
    if (difficulty) query.difficulty = difficulty;

    const skip = (page - 1) * limit;
    
    const terms = await Term.find(query)
      .limit(limit)
      .skip(skip)
      .sort({ name: 1 });

    const total = await Term.countDocuments(query);

    res.json({
      success: true,
      data: terms,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get single term
router.get('/:id', async (req, res) => {
  try {
    const term = await Term.findById(req.params.id)
      .populate('relatedTerms');
    
    if (!term) {
      return res.status(404).json({ 
        success: false, 
        error: 'Term not found' 
      });
    }

    res.json({ success: true, data: term });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create term (admin only)
router.post('/', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { error, value } = validateTerm(req.body);
    if (error) {
      return res.status(400).json({ 
        success: false, 
        error: error.details[0].message 
      });
    }

    const term = new Term(value);
    term.author = req.user._id;
    await term.save();

    res.status(201).json({ 
      success: true, 
      data: term,
      message: 'Term created successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Search terms
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.length < 2) {
      return res.status(400).json({ 
        success: false, 
        error: 'Search query too short' 
      });
    }

    const terms = await Term.find({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { definition: { $regex: q, $options: 'i' } },
        { examples: { $regex: q, $options: 'i' } }
      ]
    }).limit(20);

    res.json({ 
      success: true, 
      data: terms,
      count: terms.length
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
