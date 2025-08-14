# Lingo Challenge - Complete Setup Guide

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

**For Linux/Mac:**

```bash
chmod +x start-full-app.sh
./start-full-app.sh
```

**For Windows:**

```cmd
start-full-app.bat
```

### Option 2: Manual Setup

#### Prerequisites

- Node.js (v18 or higher)
- Bun runtime for backend
- Git

#### Step 1: Install Dependencies

**Backend:**

```bash
cd backend
bun install
```

**Frontend:**

```bash
cd ..
npm install
```

#### Step 2: Database Setup

```bash
cd backend
# Run database migrations
bun run db:migrate

# Seed with initial data (84+ vocabulary words, sample users, etc.)
bun run db:seed
```

#### Step 3: Start Servers

**Terminal 1 - Backend:**

```bash
cd backend
bun run dev
```

**Terminal 2 - Frontend:**

```bash
npm run dev
```

## 🔧 Configuration

### Environment Variables

Create `.env` file in the backend directory if needed:

```env
PORT=3000
JWT_SECRET=your-secret-key
NODE_ENV=development
```

### API Configuration

The app automatically detects the environment:

- **Local development**: Uses `http://localhost:3000/api`
- **Production/Cloud**: Falls back to demo mode

## 📊 Database Schema

The app includes:

- **Users**: Profile data, authentication, XP, levels
- **Vocabulary**: 84+ words across 10 categories
- **Questions**: 50+ questions with multiple difficulty levels
- **Friends**: Friend relationships and requests
- **Progress**: User learning progress and leaderboards
- **Rooms**: Challenge room management

## 🌐 API Endpoints

### Available at http://localhost:3000/swagger

Key endpoints:

- `GET /api/friends` - Get user's friends list
- `GET /api/progress/leaderboard` - Get leaderboard data
- `GET /api/vocabulary/questions` - Get questions
- `POST /api/friends/add` - Send friend request
- `PUT /api/user/profile` - Update user profile

## 🔍 Troubleshooting

### Backend Not Loading

1. **Check if backend is running:**

   ```bash
   curl http://localhost:3000
   ```

2. **Check database exists:**

   ```bash
   cd backend
   ls -la | grep db.sqlite
   ```

3. **Recreate database:**
   ```bash
   cd backend
   rm db.sqlite  # Remove existing database
   bun run db:migrate
   bun run db:seed
   ```

### Frontend Shows Demo Data

This happens when backend API is not accessible. Check:

1. Backend server is running on port 3000
2. No CORS errors in browser console
3. API calls are reaching the backend

### Common Issues

**Port already in use:**

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 9000
lsof -ti:9000 | xargs kill -9
```

**Database errors:**

```bash
cd backend
# Reset database
rm db.sqlite drizzle/meta/*.sql
bun run db:migrate
bun run db:seed
```

**Dependencies issues:**

```bash
# Clean install frontend
rm -rf node_modules package-lock.json
npm install

# Clean install backend
cd backend
rm -rf node_modules bun.lockb
bun install
```

## 📱 Features

### ✅ Working Features

- User authentication and profiles
- Friends system with real database
- Vocabulary learning with 84+ words
- Challenge rooms and battles
- Progress tracking and leaderboards
- Avatar upload and profile editing
- Real-time chat in challenges
- XP system and user ranking

### 🔄 Data Flow

1. Frontend makes API calls to `http://localhost:3000/api`
2. Backend processes requests using ElysiaJS
3. Database operations via Drizzle ORM
4. Real data returned to frontend
5. If backend unavailable, graceful fallback to demo mode

## 🎯 Next Steps After Setup

1. **Register a new user** or use demo credentials
2. **Add friends** using the search functionality
3. **Start challenges** to test vocabulary
4. **Check leaderboards** to see real rankings
5. **Upload avatar** and edit profile

## 📞 Support

If you encounter issues:

1. Check the console for error messages
2. Verify both servers are running
3. Test API endpoints manually
4. Review database setup
5. Check port availability

The app is designed to work offline with demo data, but for the full experience, both frontend and backend must be running.
