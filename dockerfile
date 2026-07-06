# Use Node.js 22 Alpine as the base image for smaller image size
FROM node:22-alpine AS base

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install production dependencies only
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Run container as non-root user for security
USER node

# Expose port for the application
EXPOSE 3000

# Set production environment
ENV NODE_ENV=production

# Start the application
CMD [ "npm", "start" ]
