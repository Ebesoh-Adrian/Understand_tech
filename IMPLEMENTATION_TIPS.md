# Implementation Tips & Best Practices

## Frontend Implementation Tips

### React
```javascript
// Use hooks for state management
const [terms, setTerms] = useState([]);
const [loading, setLoading] = useState(false);

// Create custom hooks for API calls
const useFetchTerms = (category) => {
  const [terms, setTerms] = useState([]);
  useEffect(() => {
    // Fetch logic here
  }, [category]);
  return terms;
};

// Use React.memo for performance
const TermCard = React.memo(({ term }) => ...);
```

### Next.js
```javascript
// Use server components for performance
export default async function TermsPage() {
  const terms = await fetchTerms();
  return <TermsList terms={terms} />;
}

// API routes for backend functionality
// app/api/terms/route.js
export async function GET(request) {
  const terms = await Term.find();
  return Response.json(terms);
}

// Use dynamic imports for code splitting
const SearchComponent = dynamic(() => import('./Search'));
```

### Vanilla HTML
```html
<!-- Keep it simple -->
<div id="app">
  <div id="search-container"></div>
  <div id="terms-container"></div>
</div>

<script>
  // Use fetch API
  const API = 'http://localhost:8000/api';
  
  async function loadTerms() {
    const response = await fetch(`${API}/terms`);
    const data = await response.json();
    render(data);
  }
  
  // Keep JavaScript modular
  function render(terms) {
    const container = document.getElementById('terms-container');
    container.innerHTML = terms.map(term => 
      `<div class="term"><h3>${term.name}</h3><p>${term.definition}</p></div>`
    ).join('');
  }
</script>
```

---

## Backend Implementation Tips

### Django
```python
# Use Django ORM efficiently
from django.db.models import Q, Count, Prefetch

# Optimize queries
terms = Term.objects.select_related('category').prefetch_related('related_terms')

# Use DRF features
class TermViewSet(viewsets.ModelViewSet):
    queryset = Term.objects.all()
    serializer_class = TermSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['name', 'definition']
    pagination_class = PageNumberPagination

# Add caching
from django.views.decorators.cache import cache_page

@cache_page(60 * 5)  # 5 minute cache
def get_terms(request):
    pass
```

### Flask
```python
# Use blueprints for organization
from flask import Blueprint

terms_bp = Blueprint('terms', __name__, url_prefix='/api/terms')

@terms_bp.route('/', methods=['GET'])
def list_terms():
    page = request.args.get('page', 1, type=int)
    terms = Term.query.paginate(page=page, per_page=20)
    return jsonify(terms.items)

# Use marshmallow for serialization
class TermSchema(Schema):
    name = fields.Str(required=True)
    definition = fields.Str(required=True)
    category = fields.Nested(CategorySchema)

# Add error handling
@terms_bp.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404
```

### Express.js
```javascript
// Use async/await
router.get('/', async (req, res) => {
  try {
    const terms = await Term.find()
      .limit(20)
      .skip((req.query.page - 1) * 20);
    res.json(terms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Use middleware for common tasks
const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

// Use environment variables
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGODB_URI;

// Structure routes properly
const termsRouter = require('./routes/terms');
app.use('/api/terms', termsRouter);
```

---

## Database Implementation Tips

### PostgreSQL (Django/Flask)
```python
# Use migrations for schema changes
# Django
python manage.py makemigrations
python manage.py migrate

# Flask (with Alembic)
alembic revision --autogenerate -m "Add column"
alembic upgrade head

# Define relationships properly
class Term(models.Model):
    name = models.CharField(max_length=200, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    related_terms = models.ManyToManyField('self', symmetrical=False)

# Add indexes for frequently queried fields
class Meta:
    indexes = [
        models.Index(fields=['name']),
        models.Index(fields=['category']),
    ]
```

### MongoDB (Express)
```javascript
// Define schema properly
const termSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  definition: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  relatedTerms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Term' }],
  createdAt: { type: Date, default: Date.now }
});

// Add indexes
termSchema.index({ name: 'text', definition: 'text' });

// Use pagination
const terms = await Term.find()
  .limit(20)
  .skip((page - 1) * 20)
  .lean();
```

---

## API Design Tips

### Consistent Response Format
```json
{
  "success": true,
  "data": { },
  "message": "Operation successful",
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 100,
    "pages": 5
  }
}
```

### Error Responses
```json
{
  "success": false,
  "error": "VALIDATION_ERROR",
  "message": "Invalid request",
  "details": [
    {
      "field": "name",
      "message": "Name is required"
    }
  ]
}
```

### API Versioning
```
/api/v1/terms     # Current version
/api/v2/terms     # New version when needed
```

---

## Performance Tips

### Frontend
- **Code splitting** - Import components lazily
- **Image optimization** - Use WebP with fallbacks
- **Caching** - Use browser cache for static assets
- **Pagination** - Don't load all items at once
- **Debouncing** - Debounce search input

```javascript
// Debounce search
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

const handleSearch = debounce((query) => {
  fetchTerms(query);
}, 300);
```

### Backend
- **Database indexes** - Index frequently searched fields
- **Caching** - Cache API responses with Redis
- **Pagination** - Return limited results
- **Query optimization** - Use select/prefetch_related
- **Connection pooling** - Reuse database connections

```python
# Cache API responses
from django_redis import get_redis_connection

def get_terms_cached(category):
    cache_key = f'terms_{category}'
    cached = cache.get(cache_key)
    if cached:
        return cached
    
    terms = Term.objects.filter(category=category)
    cache.set(cache_key, terms, 3600)  # 1 hour
    return terms
```

---

## Security Tips

### Authentication
```python
# Use JWT for stateless auth
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

class TermViewSet(viewsets.ModelViewSet):
    authentication_classes = [JSONWebTokenAuthentication]
    permission_classes = [IsAuthenticated]
```

### Input Validation
```python
# Always validate input
from marshmallow import Schema, fields, validate

class TermSchema(Schema):
    name = fields.Str(required=True, validate=validate.Length(min=1, max=200))
    definition = fields.Str(required=True)
```

### CORS
```python
# Django
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://yourdomain.com",
]

# Flask
from flask_cors import CORS
CORS(app)

# Express
const cors = require('cors');
app.use(cors({
  origin: process.env.CORS_ORIGIN.split(',')
}));
```

### Environment Variables
```bash
# Never commit secrets
# Use .env files with .env.example as template

# Load environment variables
# Python: python-dotenv
# Node: dotenv

# Example .env
DATABASE_URL=postgresql://...
JWT_SECRET=long-random-string
API_KEY=...
```

---

## Testing Tips

### Frontend Testing
```javascript
// React Testing Library
import { render, screen } from '@testing-library/react';
import TermsList from './TermsList';

test('renders term list', () => {
  render(<TermsList terms={mockTerms} />);
  expect(screen.getByText(/Learning/i)).toBeInTheDocument();
});
```

### Backend Testing
```python
# Django Test Case
from django.test import TestCase
from .models import Term

class TermTestCase(TestCase):
    def setUp(self):
        Term.objects.create(name="API", definition="...")
    
    def test_term_creation(self):
        term = Term.objects.get(name="API")
        self.assertEqual(term.definition, "...")

# Flask Testing
def test_list_terms(client):
    response = client.get('/api/terms')
    assert response.status_code == 200
    assert isinstance(response.json, list)
```

---

## Deployment Tips

### Docker Best Practices
```dockerfile
# Use minimal base images
FROM python:3.11-slim

# Install only necessary packages
RUN pip install --no-cache-dir -r requirements.txt

# Use multi-stage builds
FROM node:18 AS builder
RUN npm run build

FROM node:18-alpine
COPY --from=builder /app/dist /app/dist
```

### Environment-Specific Configuration
```python
# settings.py or config.py
import os
from dotenv import load_dotenv

load_dotenv()

ENV = os.getenv('ENV', 'development')

if ENV == 'production':
    DEBUG = False
    ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS', '').split(',')
else:
    DEBUG = True
    ALLOWED_HOSTS = ['*']
```

---

## Monitoring Tips

### Logging
```python
import logging

logger = logging.getLogger(__name__)
logger.info(f"Fetched {count} terms")
logger.error(f"Database error: {error}")
```

### Health Checks
```python
# Add health check endpoint
@app.route('/health', methods=['GET'])
def health():
    return {'status': 'healthy'}, 200
```

### Error Tracking
```python
# Use Sentry for error tracking
import sentry_sdk
sentry_sdk.init("your-sentry-dsn")
```

---

## Documentation Tips

### Code Comments
```python
# Good: Explain WHY, not WHAT
# We cache for 1 hour because term definitions rarely change
# and this reduces database load significantly
cache.set(cache_key, terms, 3600)

# Bad: Obvious from code
# Set cache to 3600 seconds
cache.set(cache_key, terms, 3600)
```

### API Documentation
```
GET /api/v1/terms
Query Parameters:
  - category: Filter by category (string)
  - difficulty: Filter by difficulty (beginner|intermediate|advanced)
  - page: Page number (default: 1)
  - limit: Items per page (default: 20)

Response:
  {
    "success": true,
    "data": [...],
    "pagination": {...}
  }
```

---

## Common Patterns

### Search with Filtering
```python
# Django ORM
terms = Term.objects.filter(
    Q(name__icontains=query) | Q(definition__icontains=query)
).filter(
    category=category
).order_by('-created_at')
```

### Pagination
```python
# Django REST Framework
from rest_framework.pagination import PageNumberPagination

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100
```

### Rate Limiting
```python
# Django-ratelimit
from django_ratelimit.decorators import ratelimit

@ratelimit(key='ip', rate='100/h')
def api_endpoint(request):
    pass
```

---

## Troubleshooting Common Issues

### CORS Errors
Check backend CORS configuration and ensure frontend URL is whitelisted.

### Database Connection Issues
Verify connection string, ensure database is running, check credentials.

### Port Already in Use
```bash
# Find and kill process
lsof -i :8000
kill -9 <PID>
```

### Module Not Found
```bash
# Reinstall dependencies
pip install -r requirements.txt  # Python
npm install                      # Node
```

### Slow API Responses
Check database indexes, add caching, optimize queries.

---

## Resources

- **Django**: https://docs.djangoproject.com/
- **Flask**: https://flask.palletsprojects.com/
- **Express**: https://expressjs.com/
- **React**: https://react.dev/
- **Next.js**: https://nextjs.org/
- **MongoDB**: https://docs.mongodb.com/
- **PostgreSQL**: https://www.postgresql.org/docs/

---

**Happy coding! These patterns will help you build a professional, scalable application.** 🚀
