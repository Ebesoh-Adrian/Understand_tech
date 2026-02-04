# Getting Started Guide

## Choose Your Path

### Path 1: Quick Start (Vanilla HTML)
Perfect for learning and quick prototyping.

```bash
cd frontend/html-vanilla
# Open index.html in browser
# Edit js/api.js to point to your backend
```

### Path 2: Modern Frontend (React)
For interactive, scalable applications.

```bash
cd frontend/react-app
npm install
npm start
# Runs on http://localhost:3000
```

### Path 3: Full Stack (Next.js)
All-in-one solution with backend routes.

```bash
cd frontend/nextjs-app
npm install
npm run dev
# Runs on http://localhost:3000
```

---

## Choose Your Backend

### Option A: Django (Python)
Most comprehensive, batteries-included.

```bash
cd backend/django-api
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
# API on http://localhost:8000
```

### Option B: Flask (Python)
Lightweight and flexible.

```bash
cd backend/flask-api
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
# API on http://localhost:5000
```

### Option C: Node.js/Express
JavaScript full-stack.

```bash
cd backend/node-express-api
npm install
npm run dev
# API on http://localhost:5000
```

---

## Full Stack with Docker

Start everything at once:

```bash
# From project root
docker-compose up -d

# Access:
# - React: http://localhost:3000
# - Next.js: http://localhost:3001
# - Django: http://localhost:8000
# - Flask: http://localhost:8001
# - Express: http://localhost:5000
```

---

## Development Workflow

### 1. Add a New Term

Edit `README.md` and add to the appropriate category:

```markdown
### **Your Term**
**Definition:** Clear explanation.

**Real-life Example:**
- Example 1
- Example 2

**Use Case:** When to use it.
```

### 2. Add Code Examples

Create files in `examples/`:
```bash
examples/
├── data-structures/array.js
├── database/queries.sql
└── patterns/singleton.py
```

### 3. Create a Pull Request

```bash
git checkout -b feature/add-new-terms
git add .
git commit -m "Add new terms: arrays, linked lists"
git push origin feature/add-new-terms
# Create PR on GitHub
```

---

## Environment Setup

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Update these variables:
- `DATABASE_URL` - Your database connection
- `JWT_SECRET` - Secret key for authentication
- `REACT_APP_API_URL` - Frontend API endpoint
- `CLOUD_PROVIDER` - AWS/GCP/Azure

---

## Common Commands

### Backend Development

```bash
# Django
python manage.py shell          # Django shell
python manage.py createsuperuser  # Create admin
python manage.py makemigrations  # Create migrations
python manage.py migrate        # Apply migrations

# Flask
flask db upgrade                # Apply migrations
flask shell                     # Flask shell

# Express
npm run dev                     # Development
npm test                        # Run tests
npm run build                   # Build for production
```

### Frontend Development

```bash
# React
npm start                       # Development
npm run build                   # Production build
npm test                        # Run tests

# Next.js
npm run dev                     # Development
npm run build                   # Production build
npm start                       # Start production server

# Vanilla HTML
# Just open index.html
# Or use: python -m http.server 8000
```

### Docker

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Reset everything
docker-compose down -v
docker-compose up -d
```

---

## Connecting Frontend to Backend

### React/Next.js

Create `.env.local`:
```
REACT_APP_API_URL=http://localhost:8000/api
# or
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Vanilla HTML

Edit `frontend/html-vanilla/js/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:8000/api';
```

---

## Database Setup

### PostgreSQL (Django/Flask)

```bash
# Create database
createdb understand_tech

# Or with Docker
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  postgres:15-alpine
```

### MongoDB (Express)

```bash
# With Docker
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  mongo:7
```

---

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Static files collected
- [ ] Tests passing
- [ ] CORS configured properly
- [ ] SSL/TLS enabled
- [ ] Rate limiting enabled
- [ ] Monitoring set up
- [ ] Backups configured
- [ ] DNS configured

See `ARCHITECTURE.md` for deployment diagrams.
See `cloud/README.md` for cloud platform guides.

---

## Troubleshooting

### Port Already in Use
```bash
# Find process using port
lsof -i :8000

# Kill process
kill -9 <PID>
```

### Database Connection Error
```bash
# Check connection string
# Format: postgresql://user:password@host:port/database

# Test connection
psql postgresql://user:password@localhost:5432/understand_tech
```

### CORS Errors
Check backend CORS configuration:
```python
# Django
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:3001",
]
```

### Cache Issues
```bash
# Clear Redis
redis-cli FLUSHALL

# Or through Docker
docker exec -it redis redis-cli FLUSHALL
```

---

## Need Help?

- 📖 Read `README.md` for terminology
- 🏗️ Check `ARCHITECTURE.md` for system design
- 🤝 See `CONTRIBUTING.md` for contribution guide
- ☁️ Visit `cloud/` for deployment guides
- 📝 Check backend-specific READMEs

---

**Happy coding! 🚀**
