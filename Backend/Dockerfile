FROM node:18-alpine

# Use production environment
ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

# Install dependencies separately to cache layers
COPY package*.json ./
COPY prisma ./prisma/

# Install exact dependencies
RUN npm ci --only=production

# Generate Prisma Client
RUN npx prisma generate

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start Application
CMD ["node", "src/server.js"]
