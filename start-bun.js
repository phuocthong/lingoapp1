// Simple script to start both frontend and backend with Bun
import { spawn } from 'bun'

console.log('🚀 Starting Lingo Challenge with Bun...')

// Start backend on port 3010
const backend = spawn(['bun', 'run', 'src/bun-server.js'], {
  cwd: './backend',
  env: { ...process.env, PORT: '3010' },
  stdio: 'inherit',
})

// Wait a bit then start frontend
setTimeout(() => {
  console.log('🎨 Starting frontend...')
  const frontend = spawn(['bun', 'run', 'dev'], {
    stdio: 'inherit',
  })

  // Handle cleanup
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping servers...')
    backend.kill()
    frontend.kill()
    process.exit(0)
  })
}, 2000)
