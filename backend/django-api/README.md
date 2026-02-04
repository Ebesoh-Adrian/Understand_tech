# Backend - Django API

A Django REST Framework API for Understanding_tech.

## Features
- RESTful API endpoints
- PostgreSQL/SQLite database
- Authentication & Authorization
- Admin panel
- API documentation (Swagger/Redoc)
- Rate limiting
- CORS support
- Caching

## Setup

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

## Project Structure
```
manage.py
requirements.txt
config/                 # Django settings
├── settings.py
├── urls.py
└── wsgi.py

apps/
├── terms/              # Terms app
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   └── urls.py
├── users/              # User management
└── search/             # Search functionality

tests/                  # Test files
static/                 # Static files
media/                  # User uploads
```

## API Endpoints
- `GET /api/terms/` - List all terms
- `GET /api/terms/{id}/` - Get term details
- `POST /api/terms/` - Create term (admin)
- `GET /api/categories/` - List categories
- `GET /api/search/?q=query` - Search terms

## Documentation
API documentation available at `/api/schema/` (Swagger UI) or `/api/docs/` (ReDoc)
