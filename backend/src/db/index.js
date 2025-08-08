import { Database } from 'bun:sqlite'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import * as schema from './schema.js'

const sqlite = new Database('lingo-challenge.db', { create: true })
export const db = drizzle(sqlite, { schema })

export default db
