// Dynamic SQLite driver selection
import * as schema from './schema.js'

let db

if (process.env.USE_BUN_SQLITE === 'true') {
  // Use Bun's built-in SQLite
  const { Database } = await import('bun:sqlite')
  const { drizzle } = await import('drizzle-orm/bun-sqlite')

  const sqlite = new Database('lingo-challenge.db')
  db = drizzle(sqlite, { schema })
} else {
  // Use better-sqlite3 (fallback)
  const Database = (await import('better-sqlite3')).default
  const { drizzle } = await import('drizzle-orm/better-sqlite3')

  const sqlite = new Database('lingo-challenge.db')
  db = drizzle(sqlite, { schema })
}

export { db }
export default db
