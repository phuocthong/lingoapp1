import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/db/schema.js',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'bun:sqlite',
  dbCredentials: {
    url: './lingo-challenge.db',
  },
  verbose: true,
  strict: true,
})
