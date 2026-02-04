# Understanding_tech Multi-Stack Project

## Quick Start with Docker Compose

Everything you need is containerized and ready to go.

### Prerequisites
- Docker Desktop installed
- Docker Compose installed
- 8GB RAM minimum

### Start All Services

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### Access Points

- **React Frontend**: http://localhost:3000
- **Next.js Frontend**: http://localhost:3001
- **Django API**: http://localhost:8000
- **Flask API**: http://localhost:8001
- **Node Express API**: http://localhost:5000
- **PostgreSQL**: localhost:5432
- **MongoDB**: localhost:27017
- **Redis**: localhost:6379

### Individual Services

```bash
# Start only Django backend
docker-compose up django

# Start only React frontend
docker-compose up react

# Start only database services
docker-compose up postgres mongodb redis
```

### Development Workflow

1. Backend changes are hot-reloaded (volumes mapped)
2. Frontend changes trigger automatic rebuild
3. Database persists in volumes
4. All services communicate via internal network

### Troubleshooting

```bash
# Clear everything and start fresh
docker-compose down -v
docker-compose up -d

# Check service health
docker-compose ps

# View specific service logs
docker-compose logs django
docker-compose logs react
```

### Production Deployment

Use the guides in the `cloud/` directory for production deployment on AWS, GCP, or Azure.
