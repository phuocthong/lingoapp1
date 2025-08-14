#!/bin/bash

# Lingo Challenge Full App Startup Script
echo "🚀 Starting Lingo Challenge Full Application..."

# Function to check if port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null ; then
        echo "❌ Port $port is already in use"
        return 1
    else
        echo "✅ Port $port is available"
        return 0
    fi
}

# Check required ports
echo "📡 Checking required ports..."
check_port 3000 # Backend
check_port 9000 # Frontend (Quasar default)

# Set up backend
echo ""
echo "🔧 Setting up backend..."
cd backend

# Install backend dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    bun install
fi

# Check if database exists and is set up
if [ ! -f "db.sqlite" ]; then
    echo "🗄️ Setting up database..."
    bun run db:migrate
    bun run db:seed
else
    echo "✅ Database already exists"
fi

# Start backend in background
echo "🚀 Starting backend server..."
bun run dev &
BACKEND_PID=$!

# Wait for backend to start
echo "⏳ Waiting for backend to start..."
sleep 3

# Check if backend is running
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Backend started successfully on http://localhost:3000"
else
    echo "❌ Backend failed to start"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

# Set up frontend
echo ""
echo "🔧 Setting up frontend..."
cd ..

# Install frontend dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
fi

# Start frontend
echo "🚀 Starting frontend server..."
npm run dev &
FRONTEND_PID=$!

# Function to cleanup when script exits
cleanup() {
    echo ""
    echo "🛑 Shutting down servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ Cleanup complete"
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

echo ""
echo "🎉 Application started successfully!"
echo "📱 Frontend: http://localhost:9000"
echo "🔧 Backend API: http://localhost:3000"
echo "📚 API Docs: http://localhost:3000/swagger"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for user to stop
wait
