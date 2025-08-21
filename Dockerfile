# Frontend Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lock* ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Install quasar CLI globally
RUN npm install -g @quasar/cli

# Build the application
RUN npm run build

# Use nginx to serve the built app
FROM nginx:alpine

# Copy built app from previous stage
COPY --from=0 /app/dist/spa /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
