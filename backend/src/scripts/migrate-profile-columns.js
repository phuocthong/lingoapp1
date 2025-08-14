#!/usr/bin/env bun
import { Database } from 'bun:sqlite'
import { readFileSync } from 'fs'
import { join } from 'path'

const db = new Database('./lingo-challenge.db')

console.log('Adding missing profile columns to users table...')

try {
  // Check if columns already exist
  const columns = db.prepare('PRAGMA table_info(users)').all()
  const columnNames = columns.map((col) => col.name)

  console.log('Existing columns:', columnNames)

  // Add missing columns
  if (!columnNames.includes('phone')) {
    console.log('Adding phone column...')
    db.exec('ALTER TABLE users ADD COLUMN phone TEXT;')
  }

  if (!columnNames.includes('bio')) {
    console.log('Adding bio column...')
    db.exec('ALTER TABLE users ADD COLUMN bio TEXT;')
  }

  if (!columnNames.includes('is_public_profile')) {
    console.log('Adding is_public_profile column...')
    db.exec('ALTER TABLE users ADD COLUMN is_public_profile INTEGER DEFAULT 1;')
  }

  if (!columnNames.includes('allow_friend_requests')) {
    console.log('Adding allow_friend_requests column...')
    db.exec('ALTER TABLE users ADD COLUMN allow_friend_requests INTEGER DEFAULT 1;')
  }

  console.log('✅ Profile columns migration completed successfully!')
} catch (error) {
  console.error('❌ Migration failed:', error)
  process.exit(1)
} finally {
  db.close()
}
