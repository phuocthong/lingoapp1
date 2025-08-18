@echo off
echo 🚀 LingoChallenge - Chay voi Bun
echo ==================================
echo.

REM Kiem tra Bun
bun --version >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo ❌ Bun chua duoc cai dat!
    echo Chay: powershell -c "irm bun.sh/install.ps1 | iex"
    pause
    exit /b 1
)

echo ✅ Bun version:
bun --version
echo.

REM Kiem tra dependencies
if not exist "node_modules" (
    echo 📦 Cai dat dependencies...
    bun install
)

if not exist "backend\node_modules" (
    echo 📦 Cai dat backend dependencies...
    cd backend
    bun install
    cd ..
)

REM Kiem tra database
if not exist "backend\lingo-challenge.db" (
    echo 🗄️ Setup database...
    cd backend
    bun run db:migrate
    bun run db:seed
    cd ..
)

echo 🚀 Khoi dong ung dung...
echo Frontend: http://localhost:9000
echo Backend: http://localhost:3001
echo Database Studio: cd backend ^&^& bun run db:studio
echo.

bun run dev:full
