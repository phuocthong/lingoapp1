# 🎯 LingoChallenge - Ứng Dụng Học Từ Vựng Tiếng Anh

Ứng dụng học từ vựng tiếng Anh tương tác với tính năng thi đua trực tuyến, nhiệm vụ hàng ngày và hệ thống phần thưởng.

## 🚀 Setup Nhanh

### Cách 1: Sử dụng Script Tự Động

**Windows:**
```bash
setup.bat
```

**macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

### Cách 2: Setup Thủ Công

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
- **Database Studio**: `cd backend && npm run db:studio`

## 👤 Tài Khoản Test

- **Username**: `admin`
- **Password**: `password123`

## 📖 Hướng Dẫn Chi Tiết

Xem file [SETUP_GUIDE.md](./SETUP_GUIDE.md) để có hướng dẫn đầy đủ.

## 🗄️ Xem Database

### Drizzle Studio (Khuyến nghị)
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

```bash
npm run dev:full          # Chạy cả frontend và backend
npm run dev               # Chỉ frontend
npm run backend:dev       # Chỉ backend
npm run format           # Format code
npm run lint             # Lint code
```

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
- **Backend**: Node.js + Elysia.js
- **Database**: SQLite + Drizzle ORM
- **Auth**: JWT
- **Real-time**: WebSocket

## 📱 Screenshots

[Thêm screenshots ở đây]

---

🎉 **Happy Learning!** Chúc bạn học tốt với LingoChallenge!
