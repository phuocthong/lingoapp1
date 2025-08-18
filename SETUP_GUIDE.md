# 🚀 Hướng Dẫn Setup và Chạy LingoChallenge

## 📋 Yêu Cầu Hệ Thống

### Tùy chọn 1: Sử dụng Bun (Khuyến nghị - Nhanh hơn)

- **Bun**: phiên bản 1.0+
- **Git**

### Tùy chọn 2: Sử dụng Node.js (Truyền thống)

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

### 🚀 Sử dụng Bun (Khuyến nghị)

```bash
# Cài đặt Bun nếu chưa có
curl -fsSL https://bun.sh/install | bash
# hoặc trên Windows: powershell -c "irm bun.sh/install.ps1 | iex"

# Cài đặt dependencies cho frontend
bun install

# Cài đặt dependencies cho backend
cd backend
bun install
cd ..
```

### 📦 Sử dụng npm/yarn (Truyền thống)

```bash
# Frontend (Root)
npm install
# hoặc: yarn install

# Backend
cd backend
npm install
# hoặc: yarn install
cd ..
```

## 🗄️ Bước 3: Setup Database

### Với Bun:

```bash
cd backend
bun run db:migrate
bun run db:seed
cd ..
```

### Với npm:

```bash
cd backend
npm run db:migrate
npm run db:seed
cd ..
```

## 🚀 Bước 4: Chạy Ứng Dụng

### 🚀 Sử dụng Bun

#### Cách 1: Chạy cả Frontend và Backend (Khuyến nghị)

```bash
# Từ thư mục root
bun run dev:full
```

#### Cách 2: Chạy riêng biệt

**Terminal 1 - Backend:**

```bash
cd backend
bun run dev
```

**Terminal 2 - Frontend:**

```bash
# Từ thư mục root
bun run dev
```

### 📦 Sử dụng npm

#### Cách 1: Chạy cả Frontend và Backend

```bash
npm run dev:full
```

#### Cách 2: Chạy riêng biệt

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**

```bash
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

**Với Bun:**

```bash
cd backend
bun run db:studio
```

**Với npm:**

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

### Với Bun:

```bash
# Tạo migration mới
cd backend && bunx drizzle-kit generate:sqlite

# Chạy migration
cd backend && bun run db:migrate

# Seed lại database
cd backend && bun run db:seed

# Xem database trong Drizzle Studio
cd backend && bun run db:studio

# Format code
bun run format

# Lint code
bun run lint
```

### Với npm:

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

## ⚡ Tại Sao Nên Sử Dụng Bun?

- **Nhanh hơn**: Cài đặt packages nhanh gấp 2-3 lần so với npm
- **All-in-one**: Bundler, test runner, package manager trong một tool
- **Tương thích**: Hoạt động với hầu hết npm packages
- **TypeScript native**: Hỗ trợ TypeScript mà không cần config
- **Hot reload**: Reload nhanh hơn khi development

## ⚠️ Xử Lý Lỗi Thường Gặp

### 1. Bun không được cài đặt

```bash
# macOS/Linux:
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Windows (PowerShell):
powershell -c "irm bun.sh/install.ps1 | iex"
```

### 2. Port đã được sử dụng

```bash
# Kiểm tra process đang sử dụng port
lsof -i :9000  # Frontend
lsof -i :3001  # Backend

# Kill process
kill -9 <PID>
```

### 3. Database bị lỗi

```bash
# Xóa và tạo lại database
cd backend
rm lingo-challenge.db
bun run db:migrate
bun run db:seed
```

### 4. Dependencies bị lỗi với Bun

```bash
# Xóa lock files và node_modules
rm -rf node_modules bun.lockb
bun install

# Làm tương tự cho backend
cd backend
rm -rf node_modules bun.lockb
bun install
```

### 5. Dependencies bị lỗi với npm

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

### Với Bun:

```bash
# Pull latest changes
git pull origin flare-works

# Cài đặt dependencies mới (nếu có)
bun install
cd backend && bun install && cd ..

# Chạy migration mới (nếu có)
cd backend && bun run db:migrate
```

### Với npm:

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

1. Bun/Node.js version: `bun --version` hoặc `node --version`
2. Package manager version: `bun --version` hoặc `npm --version`
3. Log lỗi trong terminal
4. Network tab trong Developer Tools

Happy coding! 🎉
