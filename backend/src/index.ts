import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { cors } from '@elysiajs/cors';
import { jwt } from '@elysiajs/jwt';
import { cookie } from '@elysiajs/cookie';
import { staticPlugin } from '@elysiajs/static';

// Import routes
import { authRoutes } from './routes/auth';
import { questionRoutes } from './routes/questions';
import { userRoutes } from './routes/users';
import { leaderboardRoutes } from './routes/leaderboard';
import { chatRoutes } from './routes/chat';

// JWT Secret - trong production nên dùng environment variable
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here';

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: 'LingoChallenge API',
          version: '1.0.0',
          description: 'API cho ứng dụng học tiếng Anh LingoChallenge'
        },
        tags: [
          { name: 'Auth', description: 'Authentication endpoints' },
          { name: 'Users', description: 'User management' },
          { name: 'Questions', description: 'Question and quiz management' },
          { name: 'Leaderboard', description: 'Rankings and statistics' },
          { name: 'Chat', description: 'Real-time chat and battles' }
        ]
      }
    })
  )
  .use(cors({
    origin: true,
    credentials: true
  }))
  .use(cookie())
  .use(
    jwt({
      name: 'jwt',
      secret: JWT_SECRET,
      exp: '7d'
    })
  )
  .use(staticPlugin())
  .get('/', () => ({
    message: 'LingoChallenge API đang hoạt động!',
    version: '1.0.0',
    docs: '/swagger'
  }))
  .get('/health', () => ({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  }))
  // Mount các routes
  .use(authRoutes)
  .use(userRoutes)
  .use(questionRoutes)
  .use(leaderboardRoutes)
  .use(chatRoutes)
  .listen(3001);

console.log(
  `🚀 LingoChallenge API đang chạy tại http://${app.server?.hostname}:${app.server?.port}`
);
console.log(`📚 API Documentation: http://${app.server?.hostname}:${app.server?.port}/swagger`);

export type App = typeof app;
