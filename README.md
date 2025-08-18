# 🎯 LingoChallenge - Ứng Dụng Học Từ Vựng Tiếng Anh

Ứng dụng học từ vựng tiếng Anh tương tác với tính năng thi đua trực tuyến, nhiệm vụ hàng ngày và hệ thống phần thưởng.

## 🚀 Setup Nhanh

### ⚡ Sử dụng Bun (Khuyến nghị - Nhanh hơn 2-3 lần)

**Windows:**
```bash
setup-bun.bat
```

**macOS/Linux:**
```bash
chmod +x setup-bun.sh
./setup-bun.sh
```

### 📦 Sử dụng npm (Truyền thống)

**Windows:**
```bash
setup.bat
```

**macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

## 🛠️ Setup Thủ Công

### Với Bun:
```bash
# 1. Cài đặt Bun (nếu chưa có)
curl -fsSL https://bun.sh/install | bash

# 2. Cài đặt dependencies
bun install
cd backend && bun install && cd ..

# 3. Setup database
cd backend
bun run db:migrate
bun run db:seed
cd ..

# 4. Chạy ứng dụng
bun run dev:full
```

### Với npm:
```bash
# 1. Cài đặt dependencies
npm install
cd backend && npm install && cd ..

# 2. Setup database
cd backend
npm run db:migrate
npm run db:seed
cd ..

# 3. Chạy ứng dụng
npm run dev:full
```

## 🌐 Truy Cập

- **Frontend**: http://localhost:9000
- **Backend API**: http://localhost:3001
- **Database Studio**: `cd backend && bun run db:studio`

## 👤 Tài Khoản Test

- **Username**: `admin`
- **Password**: `password123`

## 📖 Hướng Dẫn Chi Tiết

Xem file [SETUP_GUIDE.md](./SETUP_GUIDE.md) để có hướng dẫn đầy đủ.

## 🗄️ Xem Database

### Drizzle Studio (Khuyến nghị)

**Với Bun:**
```bash
cd backend
bun run db:studio
# Mở http://localhost:4983
```

**Với npm:**
```bash
cd backend
npm run db:studio
# Mở http://localhost:4983
```

### SQLite CLI
```bash
cd backend
sqlite3 lingo-challenge.db
.tables
SELECT * FROM users;
```

### DB Browser
Tải [DB Browser for SQLite](https://sqlitebrowser.org/) và mở file `backend/lingo-challenge.db`

## 🛠️ Scripts Hữu Ích

### Với Bun (Khuyến nghị):
```bash
bun run dev:full          # Chạy cả frontend và backend
bun run dev               # Chỉ frontend
bun run backend:dev       # Chỉ backend
bun run format           # Format code
bun run lint             # Lint code
```

### Với npm:
```bash
npm run dev:full          # Chạy cả frontend và backend
npm run dev               # Chỉ frontend
npm run backend:dev:npm   # Chỉ backend
npm run format           # Format code
npm run lint             # Lint code
```

## ⚡ Tại Sao Nên Sử Dụng Bun?

- **⚡ Nhanh hơn**: Cài đặt packages nhanh gấp 2-3 lần so với npm
- **🔧 All-in-one**: Bundler, test runner, package manager trong một tool
- **🔄 Tương thích**: Hoạt động với hầu hết npm packages
- **📘 TypeScript native**: Hỗ trợ TypeScript mà không cần config
- **🔥 Hot reload**: Reload nhanh hơn khi development
- **📦 Nhỏ gọn**: Một tool thay thế nhiều tools

## 🎯 Tính Năng Chính

- ✅ Đăng ký/Đăng nhập
- ✅ Học từ vựng với câu hỏi trắc nghiệm
- ✅ Phòng chơi online multiplayer
- ✅ Hệ thống nhiệm vụ và phần thưởng
- ✅ Theo dõi tiến độ học tập
- ✅ Kết bạn và chat
- ✅ Responsive design

## 🔧 Tech Stack

- **Frontend**: Vue 3 + Quasar Framework
- **Backend**: Node.js/Bun + Elysia.js
- **Database**: SQLite + Drizzle ORM
- **Auth**: JWT
- **Real-time**: WebSocket
- **Package Manager**: Bun/npm

## 🆘 Xử Lý Lỗi Thường Gặp

### 1. Bun không được cài đặt
```bash
# macOS/Linux:
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Windows (PowerShell):
powershell -c "irm bun.sh/install.ps1 | iex"
```

### 2. Fallback sang npm nếu Bun có vấn đề
```bash
# Sử dụng npm scripts thay thế
npm run backend:dev:npm    # Thay vì bun run backend:dev
npm run db:studio         # Thay vì bun run db:studio
```

### 3. Port đã được sử dụng
```bash
# Kill process đang sử dụng port
lsof -i :9000 && kill -9 <PID>  # Frontend
lsof -i :3001 && kill -9 <PID>  # Backend
```

## 🚀 So Sánh Performance

| Command | npm | Bun | Tốc độ |
|---------|-----|-----|--------|
| install | ~30s | ~10s | 3x nhanh hơn |
| dev start | ~5s | ~2s | 2.5x nhanh hơn |
| hot reload | ~1s | ~300ms | 3x nhanh hơn |

## 📱 Screenshots

[Thêm screenshots ở đây]

---

🎉 **Happy Learning with Bun!** Chúc bạn học tốt với LingoChallenge! ⚡
