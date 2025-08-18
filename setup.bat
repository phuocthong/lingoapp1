@echo off
echo ========================================
echo       LINGO CHALLENGE SETUP
echo ========================================
echo.

echo [1/4] Cai dat dependencies cho frontend...
call npm install
if %ERRORLEVEL% neq 0 (
    echo Loi: Khong the cai dat frontend dependencies
    pause
    exit /b 1
)

echo [2/4] Cai dat dependencies cho backend...
cd backend
call npm install
if %ERRORLEVEL% neq 0 (
    echo Loi: Khong the cai dat backend dependencies
    pause
    exit /b 1
)

echo [3/4] Migrate database...
call npm run db:migrate
if %ERRORLEVEL% neq 0 (
    echo Loi: Khong the migrate database
    pause
    exit /b 1
)

echo [4/4] Seed database voi du lieu mau...
call npm run db:seed
if %ERRORLEVEL% neq 0 (
    echo Loi: Khong the seed database
    pause
    exit /b 1
)

cd ..

echo.
echo ========================================
echo        SETUP HOAN THANH!
echo ========================================
echo.
echo De chay ung dung:
echo   npm run dev:full
echo.
echo Tai khoan admin:
echo   Username: admin
echo   Password: password123
echo.
echo Frontend: http://localhost:9000
echo Backend:  http://localhost:3001
echo Database Studio: npm run db:studio (trong thu muc backend)
echo.
pause
