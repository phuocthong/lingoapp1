@echo off
echo 🚀 Starting Lingo Challenge Full Application...

:: Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js first.
    pause
    exit /b 1
)

:: Check if Bun is installed
bun --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Bun not found. Please install Bun first.
    echo 📥 Install Bun: powershell -c "irm bun.sh/install.ps1 | iex"
    pause
    exit /b 1
)

:: Set up backend
echo.
echo 🔧 Setting up backend...
cd backend

:: Install backend dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing backend dependencies...
    call bun install
)

:: Check if database exists and is set up
if not exist "db.sqlite" (
    echo 🗄️ Setting up database...
    call bun run db:migrate
    call bun run db:seed
) else (
    echo ✅ Database already exists
)

:: Start backend
echo 🚀 Starting backend server...
start "Backend Server" cmd /k "bun run dev"

:: Wait for backend to start
echo ⏳ Waiting for backend to start...
timeout /t 5 /nobreak >nul

:: Set up frontend
echo.
echo 🔧 Setting up frontend...
cd ..

:: Install frontend dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing frontend dependencies...
    call npm install
)

:: Start frontend
echo 🚀 Starting frontend server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo 🎉 Application started successfully!
echo 📱 Frontend: http://localhost:9000
echo 🔧 Backend API: http://localhost:3000
echo 📚 API Docs: http://localhost:3000/swagger
echo.
echo Both servers are running in separate windows.
echo Close the command windows to stop the servers.
pause
