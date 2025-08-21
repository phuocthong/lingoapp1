# Backend Dockerfile
FROM oven/bun:1-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Create data directory for SQLite database
RUN mkdir -p /app/data

# Run database migrations and seeding
RUN bun run db:migrate
RUN bun run db:seed

# Expose port
EXPOSE 3003

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD bun --version || exit 1

# Start the application
CMD ["bun", "src/auth-server.js"]
