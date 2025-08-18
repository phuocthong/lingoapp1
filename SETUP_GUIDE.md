# 🚀 Hướng Dẫn Setup và Chạy LingoChallenge

## 📋 Yêu Cầu Hệ Thống

- **Node.js**: phiên bản 18+ (khuyến nghị 20+)
- **npm** hoặc **yarn**
- **Git**

## 🔧 Bước 1: Clone Repository

```bash
# Clone repository
git clone https://github.com/phuocthong/lingoapp1.git
cd lingoapp1

# Checkout branch flare-works
git checkout flare-works
```

## 📦 Bước 2: Cài Đặt Dependencies

### Frontend (Root)

```bash
# Cài đặt dependencies cho frontend
npm install
```

### Backend

```bash
# Cài đặt dependencies cho backend
cd backend
npm install
cd ..
```

## 🗄️ Bước 3: Setup Database

```bash
# Tạo và migrate database
cd backend
npm run db:migrate

# Seed database với dữ liệu mẫu (tài khoản admin)
npm run db:seed
cd ..
```

## 🚀 Bước 4: Chạy Ứng Dụng

### Cách 1: Chạy cả Frontend và Backend cùng lúc (Khuyến nghị)

```bash
# Chạy từ thư mục root
npm run dev:full
```

### Cách 2: Chạy từng phần riêng biệt

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**

```bash
# Từ thư mục root
npm run dev
```

## 🌐 Truy Cập Ứng Dụng

- **Frontend**: http://localhost:9000
- **Backend API**: http://localhost:3001
- **API Documentation**: http://localhost:3001/swagger

## 👤 Tài Khoản Test

Sau khi seed database, bạn có thể đăng nhập với:

- **Username**: `admin`
- **Password**: `password123`

## 🗄️ Xem và Quản Lý Database

### Cách 1: Sử dụng Drizzle Studio (Khuyến nghị)

```bash
cd backend
npm run db:studio
```

Mở trình duyệt tại: http://localhost:4983

### Cách 2: SQLite CLI

```bash
# Vào thư mục backend
cd backend

# Mở database bằng sqlite3
sqlite3 lingo-challenge.db

# Một số lệnh hữu ích:
.tables                    # Xem danh sách bảng
.schema users             # Xem cấu trúc bảng users
SELECT * FROM users;      # Xem dữ liệu users
.quit                     # Thoát
```

### Cách 3: Sử dụng DB Browser for SQLite

1. Tải và cài đặt [DB Browser for SQLite](https://sqlitebrowser.org/)
2. Mở file `backend/lingo-challenge.db`

## 📊 Cấu Trúc Database

Database chứa các bảng chính:

- `users` - Người dùng
- `vocabulary` - Từ vựng
- `questions` - Câu hỏi
- `rooms` - Phòng chơi
- `tasks` - Nhiệm vụ
- `rewards` - Phần thưởng
- `friends` - Bạn bè
- `user_progress` - Tiến độ học tập

## 🛠️ Scripts Hữu Ích

```bash
# Tạo migration mới
cd backend && npx drizzle-kit generate:sqlite

# Chạy migration
cd backend && npm run db:migrate

# Seed lại database
cd backend && npm run db:seed

# Xem database trong Drizzle Studio
cd backend && npm run db:studio

# Format code
npm run format

# Lint code
npm run lint
```

## ⚠️ Xử Lý Lỗi Thường Gặp

### 1. Port đã được sử dụng

```bash
# Kiểm tra process đang sử dụng port
lsof -i :9000  # Frontend
lsof -i :3001  # Backend

# Kill process
kill -9 <PID>
```

### 2. Database bị lỗi

```bash
# Xóa và tạo lại database
cd backend
rm lingo-challenge.db
npm run db:migrate
npm run db:seed
```

### 3. Dependencies bị lỗi

```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install

# Làm tương tự cho backend
cd backend
rm -rf node_modules package-lock.json
npm install
```

## 🔄 Cập Nhật Code

```bash
# Pull latest changes
git pull origin flare-works

# Cài đặt dependencies mới (nếu có)
npm install
cd backend && npm install && cd ..

# Chạy migration mới (nếu có)
cd backend && npm run db:migrate
```

## 📱 Tính Năng Chính

Sau khi setup thành công, bạn có thể:

- ✅ Đăng ký/Đăng nhập
- ✅ Học từ vựng với câu hỏi trắc nghiệm
- ✅ Tham gia phòng chơi online
- ✅ Xem tiến độ học tập
- ✅ Hoàn thành nhiệm vụ
- ✅ Đổi phần thưởng
- ✅ Kết bạn và chat

## 🆘 Hỗ Trợ

Nếu gặp vấn đề, hãy kiểm tra:

1. Node.js version: `node --version`
2. npm version: `npm --version`
3. Log lỗi trong terminal
4. Network tab trong Developer Tools

Happy coding! 🎉
