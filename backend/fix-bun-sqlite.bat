@echo off
echo 🔧 Fixing Bun SQLite Compatibility
echo ==================================

REM Option 1: Try to reinstall better-sqlite3 with bun
echo 1. Trying to reinstall better-sqlite3 with Bun...
call bun remove better-sqlite3
call bun add better-sqlite3

echo 2. Testing migration with better-sqlite3...
call bun run db:migrate:better
if %ERRORLEVEL% equ 0 (
    echo ✅ Success with better-sqlite3!
    echo You can use: bun run db:migrate:better
    echo          or: bun run db:seed:better
    goto :end
)

echo ❌ better-sqlite3 still not working with Bun
echo 3. Falling back to Bun's built-in SQLite...

call bun run db:migrate
if %ERRORLEVEL% equ 0 (
    echo ✅ Success with Bun's built-in SQLite!
    echo You can use: bun run db:migrate
    echo          or: bun run db:seed
    goto :end
)

echo ❌ Bun SQLite also failed
echo 4. Using Node.js as fallback...
echo You should use: bun run db:migrate:node
echo             or: bun run db:seed:node

:end
echo.
echo Available options:
echo   bun run db:migrate        # Bun built-in SQLite
echo   bun run db:migrate:better # better-sqlite3 with Bun
echo   bun run db:migrate:node   # Node.js with better-sqlite3
pause
