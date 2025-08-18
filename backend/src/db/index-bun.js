import { Database } from 'bun:sqlite'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import * as schema from './schema.js'

// Sử dụng Bun's built-in SQLite driver
const sqlite = new Database('lingo-challenge.db')
export const db = drizzle(sqlite, { schema })

export default db
