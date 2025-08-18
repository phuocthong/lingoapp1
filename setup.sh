#!/bin/bash

echo "========================================"
echo "       LINGO CHALLENGE SETUP"
echo "========================================"
echo

echo "[1/4] Cài đặt dependencies cho frontend..."
npm install
if [ $? -ne 0 ]; then
    echo "Lỗi: Không thể cài đặt frontend dependencies"
    exit 1
fi

echo "[2/4] Cài đặt dependencies cho backend..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "Lỗi: Không thể cài đặt backend dependencies"
    exit 1
fi

echo "[3/4] Migrate database..."
npm run db:migrate
if [ $? -ne 0 ]; then
    echo "Lỗi: Không thể migrate database"
    exit 1
fi

echo "[4/4] Seed database với dữ liệu mẫu..."
npm run db:seed
if [ $? -ne 0 ]; then
    echo "Lỗi: Không thể seed database"
    exit 1
fi

cd ..

echo
echo "========================================"
echo "        SETUP HOÀN THÀNH!"
echo "========================================"
echo
echo "Để chạy ứng dụng:"
echo "  npm run dev:full"
echo
echo "Tài khoản admin:"
echo "  Username: admin"
echo "  Password: password123"
echo
echo "Frontend: http://localhost:9000"
echo "Backend:  http://localhost:3001"
echo "Database Studio: npm run db:studio (trong thư mục backend)"
echo
