# AssetHub Enterprise - Production Dockerfile
# Multi-stage build for optimized production image

# Stage 1: Dependencies
FROM node:18.18.0-alpine AS deps
LABEL maintainer="AssetHub Team <it@company.com>"
LABEL description="AssetHub Enterprise Asset Management System"

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
COPY prisma ./prisma/

# Install dependencies
RUN npm ci --only=production --ignore-scripts && npm cache clean --force

# Generate Prisma client
RUN npx prisma generate

# Stage 2: Builder
FROM node:18.18.0-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set build environment
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Build application
RUN npm run build

# Stage 3: Runner (Production)
FROM node:18.18.0-alpine AS production
WORKDIR /app

# Add security updates and utilities
RUN apk add --no-cache \
    curl \
    dumb-init \
    && addgroup -g 1001 -S nodejs \
    && adduser -S nextjs -u 1001

# Set production environment
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy Prisma files
COPY --from=builder /app/prisma ./prisma
COPY --from=deps /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=deps /app/node_modules/@prisma ./node_modules/@prisma

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:3000/api/health || exit 1

# Security: Run as non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set entrypoint
ENTRYPOINT ["dumb-init", "--"]

# Start application
CMD ["node", "server.js"]

# Stage 4: Development (for development with Docker)
FROM node:18.18.0-alpine AS development
WORKDIR /app

RUN apk add --no-cache libc6-compat curl

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port
EXPOSE 3000

# Development command
CMD ["npm", "run", "dev"]