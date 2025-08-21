#!/bin/bash

# Production startup script for Lingo Challenge

echo "🚀 Starting Lingo Challenge in production mode..."

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Set production environment variables
export NODE_ENV=production
export JWT_SECRET=${JWT_SECRET:-$(openssl rand -base64 32)}

# Build and start the application
echo "🔨 Building Docker images..."
docker-compose build --no-cache

echo "🚀 Starting services..."
docker-compose up -d

echo "✅ Application started successfully!"
echo "📱 Frontend: http://localhost:80"
echo "��� Backend: http://localhost:3003"
echo "📊 Health checks:"
echo "   - Frontend: http://localhost:80"
echo "   - Backend: http://localhost:3003/health"

# Show container status
echo "📋 Container status:"
docker-compose ps

# Show logs
echo "📝 Logs (press Ctrl+C to exit):"
docker-compose logs -f
