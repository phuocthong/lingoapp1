# H\u01b0\u1edbng D\u1eabn Setup Sau Khi Pull Code

## C\u00e1c L\u1ec7nh C\u1ea7n Th\u1ef1c Hi\u1ec7n Sau M\u1ed7i L\u1ea7n Pull Code

### 1. C\u00e0i \u0110\u1eb7t Dependencies

```bash
# C\u00e0i \u0111\u1eb7t frontend dependencies
npm install

# C\u00e0i \u0111\u1eb7t backend dependencies
cd backend
bun install
cd ..
```

### 2. Kh\u1edfi T\u1ea1o Database (N\u1ebfu C\u1ea7n)

```bash
# Ch\u1ea1y migrations (n\u1ebfu c\u00f3 thay \u0111\u1ed5i database schema)
cd backend
bun run db:migrate

# Ch\u1ea1y seed data (n\u1ebfu c\u1ea7n d\u1eef li\u1ec7u m\u1edbi)
bun run db:seed

cd ..
```

### 3. Ch\u1ea1y \u1ee8ng D\u1ee5ng

```bash
# Terminal 1: Ch\u1ea1y backend
cd backend
bun run dev

# Terminal 2: Ch\u1ea1y frontend (terminal m\u1edbi)
npm run dev
```

### 4. Ki\u1ec3m Tra Tr\u1ea1ng Th\u00e1i

- Backend s\u1ebd ch\u1ea1y t\u1ea1i: `http://localhost:3000`
- Frontend s\u1ebd ch\u1ea1y t\u1ea1i: `http://localhost:9000`
- N\u1ebfu c\u00f3 l\u1ed7i, ki\u1ec3m tra console c\u1ee7a b\u1ea3ng terminal

## C\u00e1c L\u1ec7nh H\u1eefu \u00cdch Kh\u00e1c

### Database Management

```bash
cd backend

# Xem database studio (giao di\u1ec7n web)
bun run db:studio

# T\u1ea1o migration m\u1edbi
bun run db:generate

# Reset database ho\u00e0n to\u00e0n
rm database.sqlite
bun run db:migrate
bun run db:seed
```

### Development Tools

```bash
# Ki\u1ec3m tra l\u1ed7i code
npm run lint

# T\u1ef1 \u0111\u1ed9ng format code
npm run format

# Build cho production
npm run build
```

## X\u1eed L\u00fd L\u1ed7i Th\u01b0\u1eddng G\u1eb7p

### 1. L\u1ed7i "Script not found"

```bash
# \u0110\u1ea3m b\u1ea3o b\u1ea1n \u0111ang \u1edf \u0111\u00fang th\u01b0 m\u1ee5c
pwd  # Ki\u1ec3m tra th\u01b0 m\u1ee5c hi\u1ec7n t\u1ea1i

# N\u1ebfu \u1edf th\u01b0 m\u1ee5c g\u1ed1c:
npm run dev  # cho frontend

# N\u1ebfu \u1edf th\u01b0 m\u1ee5c backend:
cd backend
bun run dev  # cho backend
```

### 2. L\u1ed7i Port B\u1ecb Chi\u1ebfm

```bash
# T\u00ecm v\u00e0 t\u1eaft process \u0111ang d\u00f9ng port
netstat -an | findstr :3000  # Windows
lsof -i :3000  # Mac/Linux

# Ho\u1eb7c thay \u0111\u1ed5i port trong quasar.config.js
```

### 3. L\u1ed7i Database

```bash
cd backend

# Reset ho\u00e0n to\u00e0n database
rm database.sqlite
bun run db:migrate
bun run db:seed
```

### 4. L\u1ed7i Dependencies

```bash
# X\u00f3a node_modules v\u00e0 c\u00e0i l\u1ea1i
rm -rf node_modules
rm -rf backend/node_modules
npm install
cd backend && bun install
```

## C\u1ea5u Tr\u00fac Th\u01b0 M\u1ee5c

```
Lingo_Challenge/
\u2502
\u251c\u2500\u2500 frontend files (src/, package.json, etc.)
\u2502
\u2514\u2500\u2500 backend/
    \u251c\u2500\u2500 src/
    \u251c\u2500\u2500 package.json
    \u2514\u2500\u2500 database.sqlite
```

## L\u01b0u \u00dd Quan Tr\u1ecdng

1. **Lu\u00f4n c\u00e0i dependencies sau khi pull**: `npm install` v\u00e0 `cd backend && bun install`
2. **Ki\u1ec3m tra database migrations**: N\u1ebfu c\u00f3 thay \u0111\u1ed5i schema, ch\u1ea1y `db:migrate`
3. **Ch\u1ea1y c\u1ea3 frontend v\u00e0 backend**: C\u1ea7n 2 terminal ri\u00eang bi\u1ec7t
4. **Port m\u1eb7c \u0111\u1ecbnh**: Frontend (9000), Backend (3000)

## Support

N\u1ebfu g\u1eb7p l\u1ed7i, ki\u1ec3m tra:

1. Console c\u1ee7a browser (F12)
2. Terminal output
3. Database connection
4. Port conflicts
