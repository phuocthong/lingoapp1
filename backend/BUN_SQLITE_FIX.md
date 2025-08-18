# 🔧 Fix Lỗi Bun SQLite Compatibility

## ⚠️ Vấn Đề

Khi chạy `bun run db:migrate` hoặc `bun run db:seed`, bạn gặp lỗi:

```
error: The module 'better_sqlite3' was compiled against a different Node.js ABI version using NODE_MODULE_VERSION 115. This version of Bun requires NODE_MODULE_VERSION 137.
```

## 🛠️ Các Giải Pháp (Theo Thứ Tự Ưu Tiên)

### ✅ Giải Pháp 1: Sử dụng Bun's Built-in SQLite (Khuyến nghị)

```bash
# Các scripts đã được cập nhật để sử dụng Bun SQLite
bun run db:migrate    # Sử dụng Bun's built-in SQLite
bun run db:seed       # Sử dụng Bun's built-in SQLite
```

### ✅ Giải Pháp 2: Auto Fix Script

**Windows:**

```bash
cd backend
fix-bun-sqlite.bat
```

**macOS/Linux:**

```bash
cd backend
chmod +x fix-bun-sqlite.sh
./fix-bun-sqlite.sh
```

### ✅ Giải Pháp 3: Reinstall better-sqlite3

```bash
cd backend
bun remove better-sqlite3
bun add better-sqlite3

# Test
bun run db:migrate:better
bun run db:seed:better
```

### ✅ Giải Pháp 4: Fallback sang Node.js

```bash
cd backend
bun run db:migrate:node
bun run db:seed:node
```

### ✅ Giải Pháp 5: Xóa và Cài Lại

```bash
cd backend
rm -rf node_modules bun.lockb
bun install
bun run db:migrate
```

## 📝 Available Scripts

Sau khi fix, bạn có các scripts sau:

```bash
# Bun SQLite (built-in) - Khuyến nghị
bun run db:migrate
bun run db:seed
bun run db:studio

# better-sqlite3 với Bun (nếu compatible)
bun run db:migrate:better
bun run db:seed:better

# Node.js fallback (luôn hoạt động)
bun run db:migrate:node
bun run db:seed:node
bun run db:studio:npm
```

## 🎯 Khuyến Nghị

1. **Ưu tiên**: Sử dụng Bun's built-in SQLite (`bun run db:migrate`)
2. **Fallback**: Sử dụng Node.js (`bun run db:migrate:node`)
3. **Development**: Có thể mix cả 2 phương pháp

## ✅ Kiểm Tra Hoạt Động

```bash
cd backend

# Test migration
bun run db:migrate
# hoặc: bun run db:migrate:node

# Test seeding
bun run db:seed
# hoặc: bun run db:seed:node

# Test database studio
bun run db:studio
# hoặc: bun run db:studio:npm
```

## 🚀 Chạy Ứng Dụng

Sau khi database setup thành công:

```bash
# Từ thư mục root
bun run dev:full

# Hoặc riêng biệt
cd backend && bun run dev
# Frontend: bun run dev (từ root)
```

## 🆘 Nếu Vẫn Lỗi

1. Sử dụng Node.js cho database operations:

   ```bash
   cd backend
   bun run db:migrate:node
   bun run db:seed:node
   ```

2. Chỉ sử dụng Bun cho application server:

   ```bash
   bun run dev    # Chạy server với Bun
   ```

3. Hoặc quay về npm hoàn toàn:
   ```bash
   npm run dev:full
   ```

Lỗi này là do Bun và better-sqlite3 có ABI version khác nhau, nhưng các giải pháp trên sẽ fix được! 🎉
