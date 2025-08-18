@echo off
echo ========================================
echo    LINGO CHALLENGE SETUP - BUN
echo ========================================
echo.

echo Kiem tra Bun installation...
bun --version >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo Bun chua duoc cai dat. Dang cai dat Bun...
    powershell -c "irm bun.sh/install.ps1 | iex"
    if %ERRORLEVEL% neq 0 (
        echo Loi: Khong the cai dat Bun
        echo Vui long cai dat Bun theo huong dan tai: https://bun.sh/
        pause
        exit /b 1
    )
    echo Bun da duoc cai dat thanh cong!
    echo.
)

echo [1/4] Cai dat dependencies cho frontend bang Bun...
call bun install
if %ERRORLEVEL% neq 0 (
    echo Loi: Khong the cai dat frontend dependencies
    pause
    exit /b 1
)

echo [2/4] Cai dat dependencies cho backend bang Bun...
cd backend
call bun install
if %ERRORLEVEL% neq 0 (
    echo Loi: Khong the cai dat backend dependencies
    pause
    exit /b 1
)

echo [3/4] Migrate database...
call bun run db:migrate
if %ERRORLEVEL% neq 0 (
    echo Loi: Khong the migrate database
    pause
    exit /b 1
)

echo [4/4] Seed database voi du lieu mau...
call bun run db:seed
if %ERRORLEVEL% neq 0 (
    echo Loi: Khong the seed database
    pause
    exit /b 1
)

cd ..

echo.
echo ========================================
echo        SETUP HOAN THANH - BUN!
echo ========================================
echo.
echo De chay ung dung voi Bun:
echo   bun run dev:full
echo.
echo Tai khoan admin:
echo   Username: admin
echo   Password: password123
echo.
echo Frontend: http://localhost:9000
echo Backend:  http://localhost:3001
echo Database Studio: bun run db:studio (trong thu muc backend)
echo.
echo Bun nhanh hon npm 2-3 lan! ⚡
echo.
pause
