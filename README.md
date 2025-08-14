# Lingo Challenge 🎯

Ứng dụng học từ vựng tiếng Anh với tính năng thách đấu và bạn bè.

## 🚀 Quick Start

### Tự động (Khuyên dùng)

```bash
# Cài đặt tất cả dependencies và setup database
npm run setup

# Chạy cả frontend và backend cùng lúc
npm run dev:full
```

### Manual Setup

```bash
# 1. Cài đặt frontend dependencies
npm install

# 2. Cài đặt backend dependencies
npm run backend:install

# 3. Setup database
npm run backend:setup

# 4. Chạy backend (terminal 1)
npm run backend:dev

# 5. Chạy frontend (terminal 2)
npm run dev
```

## 📱 Tính năng

- **Học từ vựng**: 84+ từ vựng qua 10 chủ đề
- **Thách đấu Bot**: Câu hỏi tự động mỗi 20 giây
- **Hệ thống bạn bè**: Thêm bạn, gửi lời mời
- **Bảng xếp hạng**: Theo dõi tiến độ học tập
- **Profile cá nhân**: Upload avatar, chỉnh sửa thông tin
- **Phòng thách đấu**: Thi đấu với bạn bè
- **Hệ thống XP**: Tích lũy kinh nghiệm và cấp độ

## 🔧 Kiểm tra kết nối

App sẽ hiển thị banner cảnh báo nếu backend chưa chạy:

- **Có kết nối**: Dữ liệu thật từ database
- **Không kết nối**: Demo data (bạn bè và bảng xếp hạng giả)

## 📚 API & Database

- **Frontend**: Vue 3 + Quasar Framework (Port 9000)
- **Backend**: ElysiaJS + Bun (Port 3000)
- **Database**: SQLite với Drizzle ORM
- **API Docs**: http://localhost:3000/swagger

## 🛠️ Scripts có sẵn

```bash
npm run dev              # Chỉ chạy frontend
npm run backend:dev      # Chỉ chạy backend
npm run dev:full         # Chạy cả hai cùng lúc
npm run setup            # Setup toàn bộ project
npm run backend:setup    # Chỉ setup database
npm run build            # Build production
npm run lint             # Check code quality
```

## 📁 Cấu trúc project

```
lingo-challenge/
├── src/                 # Frontend Vue.js
├── backend/             # Backend ElysiaJS
├── start-full-app.sh    # Script tự động (Linux/Mac)
├── start-full-app.bat   # Script tự động (Windows)
└── COMPLETE_SETUP_GUIDE.md  # Hướng dẫn chi tiết
```

## 🔍 Troubleshooting

**App hiển thị demo data?**

- Kiểm tra backend có chạy trên port 3000
- Refresh lại trang sau khi backend khởi động

**Backend không start được?**

```bash
# Xóa và cài lại dependencies
cd backend
rm -rf node_modules bun.lockb
bun install

# Reset database
rm *.db *.sqlite
bun run db:migrate
bun run db:seed
```

**Port đã được sử dụng?**

```bash
# Kill process đang dùng port 3000
lsof -ti:3000 | xargs kill -9

# Kill process đang dùng port 9000
lsof -ti:9000 | xargs kill -9
```

## 🎯 Demo Account

Khi chạy với demo data:

- Username: `demo_user`
- Password: `demo123`
- 3 bạn bè mẫu có sẵn
- Bảng xếp hạng demo

Để có trải nghiệm đầy đủ, hãy đảm bảo backend đang chạy!
