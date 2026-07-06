# Use Node.js 22 Alpine as base image for smaller image size
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files to container
COPY package*.json .

# Install dependencies
RUN npm ci

# Copy application code with proper ownership
COPY --chown=node:node . .

# Switch to non-root node user for security
USER node

# Expose port for application
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev"]