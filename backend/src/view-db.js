// Simple database viewer
import Database from 'better-sqlite3'

console.log('🔍 Database Viewer - Lingo Challenge')
console.log('=' .repeat(50))

try {
  const db = new Database('lingo-challenge.db')
  
  // Get all tables
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'").all()
  
  console.log('\n📊 Available Tables:')
  tables.forEach(table => {
    console.log(`   - ${table.name}`)
  })
  
  // Check each table data
  console.log('\n📋 Table Contents:')
  
  tables.forEach(table => {
    const tableName = table.name
    try {
      const count = db.prepare(`SELECT COUNT(*) as count FROM ${tableName}`).get()
      console.log(`\n🗂️  ${tableName.toUpperCase()} (${count.count} records)`)
      
      if (count.count > 0) {
        // Show first 3 records
        const records = db.prepare(`SELECT * FROM ${tableName} LIMIT 3`).all()
        records.forEach((record, index) => {
          console.log(`   ${index + 1}.`, JSON.stringify(record, null, 2).replace(/\n/g, '\n      '))
        })
        if (count.count > 3) {
          console.log(`   ... and ${count.count - 3} more records`)
        }
      } else {
        console.log('   (empty)')
      }
    } catch (error) {
      console.log(`   Error reading ${tableName}: ${error.message}`)
    }
  })
  
  db.close()
  console.log('\n✅ Database view completed!')
  
} catch (error) {
  console.error('❌ Error:', error.message)
  console.log('\n💡 Suggestion: Make sure database exists and is accessible')
}
