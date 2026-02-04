# Backend - Node.js Express API

A fast and scalable Express.js API for Understanding_tech.

## Features
- Express.js server
- MongoDB with Mongoose ODM
- JWT authentication
- Async/await patterns
- Input validation with Joi
- Error handling middleware
- CORS support
- Rate limiting
- API versioning

## Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server (with nodemon)
npm run dev

# Start production server
npm start

# Run tests
npm test
```

## Project Structure
```
package.json
.env.example
server.js              # Entry point

src/
├── config/            # Configuration
│   └── database.js
├── models/            # Mongoose models
│   ├── Term.js
│   ├── User.js
│   └── Category.js
├── routes/            # API routes
│   ├── terms.js
│   ├── users.js
│   ├── auth.js
│   └── search.js
├── controllers/       # Route controllers
├── middleware/        # Custom middleware
│   ├── auth.js
│   └── errorHandler.js
├── validators/        # Input validation
└── utils/             # Utility functions

tests/                 # Test files
```

## API Endpoints
- `GET /api/v1/terms` - List all terms
- `GET /api/v1/terms/:id` - Get term details
- `POST /api/v1/terms` - Create term
- `GET /api/v1/categories` - List categories
- `GET /api/v1/search?q=query` - Search terms
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration

## Environment Variables
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/understand_tech
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
```

## Database
MongoDB is the primary database. Ensure MongoDB is running before starting the server.

## Deployment
Ready for deployment on Heroku, AWS, DigitalOcean, or any Node.js hosting platform.
