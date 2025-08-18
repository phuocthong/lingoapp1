import { migrate } from 'drizzle-orm/bun-sqlite/migrator'
import { db } from '../db/index-bun.js'

console.log('Running migrations with Bun SQLite...')

try {
  migrate(db, { migrationsFolder: './drizzle' })
  console.log('Migrations completed successfully!')
} catch (error) {
  console.error('Migration failed:', error)
  process.exit(1)
}
