# Backend - Flask API

A lightweight Flask application for Understanding_tech API.

## Features
- Lightweight and flexible
- SQLAlchemy ORM
- Flask-RESTful for API endpoints
- JWT authentication
- Database migrations with Alembic
- Error handling
- CORS support
- Input validation

## Setup

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up database
python manage.py db init
python manage.py db migrate
python manage.py db upgrade

# Start development server
python app.py
```

## Project Structure
```
app.py                  # Main application
requirements.txt
config.py              # Configuration

app/
├── __init__.py
├── models/             # Database models
│   ├── term.py
│   ├── user.py
│   └── category.py
├── routes/             # API routes
│   ├── terms.py
│   ├── users.py
│   └── search.py
├── schemas/            # Request/response schemas
└── utils/              # Utility functions

migrations/             # Database migrations
tests/                  # Test files
```

## API Endpoints
- `GET /api/terms` - List all terms
- `GET /api/terms/<id>` - Get term details
- `POST /api/terms` - Create term
- `GET /api/categories` - List categories
- `GET /api/search?q=query` - Search terms

## Configuration
Environment variables in `.env`:
- `FLASK_ENV=development`
- `DATABASE_URL=sqlite:///app.db`
- `SECRET_KEY=your-secret-key`
