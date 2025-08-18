#!/bin/bash

echo "🚀 LingoChallenge - Chạy với Bun"
echo "=================================="
echo

# Kiểm tra Bun
if ! command -v bun &> /dev/null; then
    echo "❌ Bun chưa được cài đặt!"
    echo "Chạy: curl -fsSL https://bun.sh/install | bash"
    exit 1
fi

echo "✅ Bun version: $(bun --version)"
echo

# Kiểm tra dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Cài đặt dependencies..."
    bun install
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📦 Cài đặt backend dependencies..."
    cd backend && bun install && cd ..
fi

# Kiểm tra database
if [ ! -f "backend/lingo-challenge.db" ]; then
    echo "🗄️ Setup database..."
    cd backend
    bun run db:migrate
    bun run db:seed
    cd ..
fi

echo "🚀 Khởi động ứng dụng..."
echo "Frontend: http://localhost:9000"
echo "Backend: http://localhost:3001"
echo "Database Studio: cd backend && bun run db:studio"
echo

bun run dev:full
