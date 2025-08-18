#!/bin/bash

echo "🔧 Fixing Bun SQLite Compatibility"
echo "=================================="

# Option 1: Try to reinstall better-sqlite3 with bun
echo "1. Trying to reinstall better-sqlite3 with Bun..."
bun remove better-sqlite3
bun add better-sqlite3

echo "2. Testing migration with better-sqlite3..."
if bun run db:migrate:better; then
    echo "✅ Success with better-sqlite3!"
    echo "You can use: bun run db:migrate:better"
    echo "          or: bun run db:seed:better"
else
    echo "❌ better-sqlite3 still not working with Bun"
    echo "3. Falling back to Bun's built-in SQLite..."
    
    if bun run db:migrate; then
        echo "✅ Success with Bun's built-in SQLite!"
        echo "You can use: bun run db:migrate"
        echo "          or: bun run db:seed"
    else
        echo "❌ Bun SQLite also failed"
        echo "4. Using Node.js as fallback..."
        echo "You should use: bun run db:migrate:node"
        echo "             or: bun run db:seed:node"
    fi
fi

echo
echo "Available options:"
echo "  bun run db:migrate        # Bun built-in SQLite"
echo "  bun run db:migrate:better # better-sqlite3 with Bun"
echo "  bun run db:migrate:node   # Node.js with better-sqlite3"
