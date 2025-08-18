// Simple startup script for debugging
console.log('🚀 Starting Lingo Challenge Backend...')

try {
  // Test Bun SQLite
  console.log('Testing Bun SQLite...')
  const { Database } = await import('bun:sqlite')
  const sqlite = new Database('lingo-challenge.db')
  console.log('✅ Bun SQLite works!')

  // Test database connection
  const tables = sqlite.query("SELECT name FROM sqlite_master WHERE type='table'").all()
  console.log(
    '📊 Available tables:',
    tables.map((t) => t.name),
  )

  sqlite.close()

  console.log('✅ Database test completed successfully!')
  console.log('')
  console.log('🎯 Backend is ready! You can now run:')
  console.log('   bun run dev:bun     # Use this version')
  console.log('   bun run dev:node    # Or fallback to Node.js')
} catch (error) {
  console.error('❌ Error testing database:', error.message)
  console.log('')
  console.log('🔄 Fallback options:')
  console.log('   npm run dev:node    # Use Node.js with better-sqlite3')
  console.log('   npm run setup       # Reinstall dependencies')
}
