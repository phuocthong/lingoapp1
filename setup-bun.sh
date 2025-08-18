#!/bin/bash

echo "========================================"
echo "    LINGO CHALLENGE SETUP - BUN"
echo "========================================"
echo

# Kiểm tra và cài đặt Bun nếu chưa có
if ! command -v bun &> /dev/null; then
    echo "Bun chưa được cài đặt. Đang cài đặt Bun..."
    curl -fsSL https://bun.sh/install | bash
    
    # Reload shell để sử dụng bun
    source ~/.bashrc 2>/dev/null || source ~/.zshrc 2>/dev/null || true
    
    # Kiểm tra lại
    if ! command -v bun &> /dev/null; then
        echo "❌ Lỗi: Không thể cài đặt Bun"
        echo "Vui lòng cài đặt Bun theo hướng dẫn tại: https://bun.sh/"
        echo "Sau đó chạy lại script này."
        exit 1
    fi
    
    echo "✅ Bun đã được cài đặt thành công!"
    echo
fi

echo "🚀 Sử dụng Bun version: $(bun --version)"
echo

echo "[1/4] Cài đặt dependencies cho frontend bằng Bun..."
bun install
if [ $? -ne 0 ]; then
    echo "❌ Lỗi: Không thể cài đặt frontend dependencies"
    exit 1
fi

echo "[2/4] Cài đặt dependencies cho backend bằng Bun..."
cd backend
bun install
if [ $? -ne 0 ]; then
    echo "❌ Lỗi: Không thể cài đặt backend dependencies"
    exit 1
fi

echo "[3/4] Migrate database..."
bun run db:migrate
if [ $? -ne 0 ]; then
    echo "❌ Lỗi: Không thể migrate database"
    exit 1
fi

echo "[4/4] Seed database với dữ liệu mẫu..."
bun run db:seed
if [ $? -ne 0 ]; then
    echo "❌ Lỗi: Không thể seed database"
    exit 1
fi

cd ..

echo
echo "========================================"
echo "        SETUP HOÀN THÀNH - BUN!"
echo "========================================"
echo
echo "Để chạy ứng dụng với Bun:"
echo "  bun run dev:full"
echo
echo "Tài khoản admin:"
echo "  Username: admin"
echo "  Password: password123"
echo
echo "Frontend: http://localhost:9000"
echo "Backend:  http://localhost:3001"
echo "Database Studio: bun run db:studio (trong thư mục backend)"
echo
echo "🚀 Bun nhanh hơn npm 2-3 lần! ⚡"
echo
