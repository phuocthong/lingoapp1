# LingoChallenge Backend API

Backend API cho ứng dụng học tiếng Anh LingoChallenge được xây dựng bằng **Elysia** (TypeScript framework).

## 🚀 Tính năng

- **Authentication**: Đăng ký, đăng nhập, JWT token
- **User Management**: Quản lý profile, thống kê học tập
- **Questions & Answers**: Hệ thống câu hỏi đa dạng (multiple choice, fill blank, reading, listening)
- **Real-time Battles**: Đấu với bot hoặc bạn bè
- **Leaderboard**: Bảng xếp hạng tổng thể và theo chủ đề
- **Progress Tracking**: Theo dõi tiến độ học tập, XP, level

## 🛠️ Công nghệ sử dụng

- **Framework**: Elysia.js
- **Database**: SQLite với Better-SQLite3
- **Authentication**: JWT với bcryptjs
- **Validation**: Elysia built-in validation
- **Documentation**: Swagger/OpenAPI

## 📦 Cài đặt

```bash
cd backend
npm install
```

## 🗄️ Cấu hình Database

Database sẽ được tự đ���ng tạo khi chạy server lần đầu. Để thêm dữ liệu mẫu:

```bash
npm run seed
```

## 🏃‍♂️ Chạy server

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

Server sẽ chạy tại: `http://localhost:3001`

## 📚 API Documentation

Sau khi chạy server, truy cập:
- **Swagger UI**: `http://localhost:3001/swagger`
- **Health Check**: `http://localhost:3001/health`

## 🔗 API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Đăng ký tài khoản
- `POST /login` - Đăng nhập
- `GET /me` - Lấy thông tin user hiện tại
- `POST /change-password` - Đổi mật khẩu

### Users (`/api/users`)
- `PUT /profile` - Cập nhật thông tin cá nhân
- `GET /stats` - Lấy thống kê chi tiết
- `GET /search` - Tìm kiếm người dùng
- `GET /:id` - Lấy thông tin user theo ID

### Questions (`/api/questions`)
- `GET /` - Lấy danh sách câu hỏi (có filter)
- `GET /:id` - Lấy câu hỏi theo ID
- `POST /:id/answer` - Nộp câu trả lời
- `GET /user/history` - Lịch sử trả lời
- `GET /categories` - Danh sách chủ đề

### Leaderboard (`/api/leaderboard`)
- `GET /` - Bảng xếp hạng tổng thể
- `GET /category/:category` - Xếp hạng theo chủ đề
- `GET /friends` - Xếp hạng bạn bè
- `GET /stats` - Thống kê tổng quan

### Chat & Battles (`/api/chat`)
- `POST /battle/bot` - Tạo battle với bot
- `POST /battle/:id/submit` - Nộp kết quả battle
- `GET /battles` - Danh sách battle
- `GET /battle/:id` - Chi tiết battle

## 🗃️ Database Schema

### Tables
- `users` - Thông tin người dùng
- `questions` - Câu hỏi
- `user_answers` - Câu trả lời của user
- `battles` - Trận đấu real-time
- `friendships` - Quan hệ bạn bè
- `achievements` - Thành tích
- `daily_challenges` - Thử thách hàng ngày

## 🔐 Authentication

API sử dụng JWT Bearer token. Thêm header:
```
Authorization: Bearer <your-jwt-token>
```

## 🎮 Game Logic

### Điểm số (XP)
- **Easy**: 10 điểm cơ bản
- **Medium**: 20 điểm cơ bản  
- **Hard**: 30 điểm cơ bản
- **Time bonus**: Trả lời nhanh được thêm điểm

### Level System
- Level = √(XP/100) + 1
- Mỗi level cần nhiều XP hơn level trước

### Battle System
- **Bot Battle**: Đấu với AI, kết quả ngay lập tức
- **Friend Battle**: Đấu với bạn bè (sẽ mở rộng thêm)

## 🌱 Dữ liệu mẫu

File `src/seed.ts` chứa:
- 11 câu hỏi mẫu (vocabulary, grammar, reading, listening)
- 3 user mẫu (admin, alice, bob)
- Thống kê ngẫu nhiên

## 🔧 Environment Variables

```bash
JWT_SECRET=your-secret-key-here
```

## 🤝 Tích hợp với Frontend

Backend API này được thiết kế để tích hợp với ứng dụng Quasar/Vue.js frontend. Cấu hình CORS đã được bật để cho phép kết nối từ frontend.

## 📝 Notes

- Database SQLite được lưu tại `lingo_challenge.db`
- Tất cả password được hash bằng bcryptjs
- API responses có format chuẩn: `{success: boolean, message?: string, data?: any}`
- Validation tự động với Elysia schema
