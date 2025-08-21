# Deployment Guide - Lingo Challenge

## 🚀 Deploy to Render

### Option 1: Automatic Deployment with render.yaml

1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Render will automatically detect the `render.yaml` file and deploy both services

### Option 2: Manual Deployment

#### Backend Deployment

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following:
   - **Build Command**: Leave empty (Docker handles this)
   - **Start Command**: Leave empty (Docker handles this)
   - **Dockerfile Path**: `./backend/Dockerfile`
   - **Docker Context**: `./backend`
   - **Port**: `3003`

#### Frontend Deployment

1. Create another Web Service on Render
2. Connect the same GitHub repository
3. Set the following:
   - **Build Command**: Leave empty (Docker handles this)
   - **Start Command**: Leave empty (Docker handles this)
   - **Dockerfile Path**: `./Dockerfile`
   - **Docker Context**: `.`
   - **Port**: `80`

### Environment Variables

Set these environment variables on Render:

**Backend:**

- `NODE_ENV`: `production`
- `PORT`: `3003`
- `JWT_SECRET`: Generate a secure secret key

**Frontend:**

- `BACKEND_URL`: URL of your backend service

## 🐳 Local Docker Deployment

### Prerequisites

- Docker
- Docker Compose

### Quick Start

```bash
# Make the startup script executable
chmod +x start-production.sh

# Start the application
./start-production.sh
```

### Manual Docker Commands

```bash
# Build and start all services
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Stop and remove volumes (⚠️ This will delete database data)
docker-compose down -v
```

## 📋 Service URLs

- **Frontend**: http://localhost:80
- **Backend API**: http://localhost:3003
- **Backend Health**: http://localhost:3003/health

## 🔧 Configuration

### Backend Configuration

The backend uses SQLite database by default. For production, consider:

1. Using PostgreSQL instead of SQLite
2. Setting up proper environment variables
3. Configuring CORS for your frontend domain

### Frontend Configuration

The frontend automatically detects the environment:

- **Local development**: Uses `http://localhost:3003`
- **Production**: Uses the `BACKEND_URL` environment variable

## 🚨 Production Considerations

1. **Database**: SQLite is suitable for development. For production, consider PostgreSQL
2. **Security**: Change default JWT secret
3. **CORS**: Configure proper CORS settings for your domain
4. **HTTPS**: Enable HTTPS in production
5. **Monitoring**: Set up health checks and monitoring

## 📊 Health Checks

Both services include health checks:

- Frontend: HTTP GET to `/`
- Backend: HTTP GET to `/health`

## 🔍 Troubleshooting

### Container Issues

```bash
# Check container status
docker-compose ps

# View container logs
docker-compose logs [service-name]

# Restart a specific service
docker-compose restart [service-name]

# Rebuild a specific service
docker-compose up -d --build [service-name]
```

### Database Issues

```bash
# Access backend container
docker-compose exec backend sh

# Check database file
ls -la *.db

# View database users
bun run src/view-db.js
```

## 📝 Notes

- The SQLite database is stored in a Docker volume for persistence
- Logs are available through Docker Compose
- Both services automatically restart unless stopped manually
