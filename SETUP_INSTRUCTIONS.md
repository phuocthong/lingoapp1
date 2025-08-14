# 🚀 Hướng dẫn chạy Lingo Challenge

## **Yêu cầu hệ thống:**

- **Bun** (runtime JavaScript mới nhất)
- **Git**

## **Bước 1: Clone và cài đặt**

```bash
# Clone repository
git clone <repository-url>
cd Lingo_Challenge

# Cài đặt dependencies cho frontend
bun install

# Cài đặt dependencies cho backend
cd backend
bun install
cd ..
```

## **Bước 2: Setup Database**

```bash
# Vào thư mục backend
cd backend

# Migration database (thêm các column mới)
bun run src/scripts/migrate-profile-columns.js

# Seed database với vocabulary và questions
bun run db:seed

# Quay về thư mục gốc
cd ..
```

## **Bước 3: Chạy ứng dụng**

### **Cách 1: Chạy đầy đủ (Backend + Frontend)**

```bash
# Terminal 1 - Chạy backend
cd backend
bun run dev

# Terminal 2 - Chạy frontend (ở terminal mới)
bun run dev
```

### **Cách 2: Chạy chỉ Frontend (Demo mode)**

```bash
# Chỉ chạy frontend - sẽ tự động dùng mock data
bun run dev
```

## **Bước 4: Truy cập ứng dụng**

- **Frontend**: http://localhost:9000
- **Backend API**: http://localhost:3000 (nếu chạy backend)
- **Database Studio**: `cd backend && bun run db:studio`

## **🛠️ Lệnh hữu ích:**

### **Frontend:**

```bash
bun run dev          # Chạy frontend development
bun run build        # Build production
bun run lint         # Check ESLint
```

### **Backend:**

```bash
bun run dev          # Chạy backend development
bun run db:seed      # Seed database
bun run db:studio    # Mở database studio
```

## **📂 Cấu trúc thư mục:**

```
Lingo_Challenge/
├── src/                 # Frontend Vue.js code
├── backend/            # Backend ElysiaJS + Bun
│   ├── src/           # Backend source code
│   └── lingo-challenge.db  # SQLite database
├── package.json       # Frontend dependencies
└── README.md          # Documentation
```

## **🔧 Troubleshooting:**

### **Lỗi database:**

```bash
cd backend
rm lingo-challenge.db  # Xóa database cũ
bun run db:migrate     # Tạo lại database
bun run db:seed        # Seed data
```

### **Lỗi port đang sử dụng:**

- Frontend: Thay đổi port trong `quasar.config.js`
- Backend: Thay đổi PORT trong `backend/src/index.js`

### **Demo mode:**

Nếu backend không chạy, ứng dụng sẽ tự động chuyển sang demo mode với mock data.

---

## **🔄 Workflow khi pull code các lần sau:**

### **Khi có pull request mới từ team:**
```bash
# 1. Pull latest changes
git pull origin main

# 2. Cài đặt dependencies mới (nếu có)
bun install
cd backend && bun install && cd ..

# 3. Check xem có migration database mới không
cd backend
bun run src/scripts/migrate-profile-columns.js
bun run db:seed  # Chỉ chạy nếu cần refresh data

# 4. Chạy app
cd ..
bun run dev
```

### **Khi gặp conflict hoặc lỗi:**
```bash
# Reset về state sạch
git stash  # Lưu changes local
git pull origin main
git stash pop  # Restore changes và resolve conflicts

# Nếu database bị lỗi
cd backend
rm lingo-challenge.db
bun run db:migrate
bun run db:seed
cd ..
```

### **Quick commands cho developer:**
```bash
# Pull và run ngay
git pull && bun install && bun run dev

# Full reset (khi có vấn đề)
git pull && bun install && cd backend && rm lingo-challenge.db && bun run db:migrate && bun run db:seed && cd .. && bun run dev
```

---

**🎯 Ứng dụng sẵn sàng!** Truy cập http://localhost:9000 để bắt đầu.
