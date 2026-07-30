# Docker Configuration & Orchestration Guide

The entire portfolio ecosystem runs inside isolated Docker containers using Docker Compose.

## Container Topology

1. **`portfolio-postgres`**: PostgreSQL 16 Alpine container with a named volume `postgres_data` ensuring data persistence.
2. **`portfolio-backend`**: Express TypeScript service running Node 20 Alpine. Connects to `postgres` via Prisma.
3. **`portfolio-frontend`**: Next.js App Router application built using multi-stage Docker builds.

## Available Compose Files

- **`docker-compose.yml`**: Base service definitions, health checks, and Docker Compose Watch rules (`develop.watch`).
- **`docker-compose.dev.yml`**: Development environment overlay with volume mounts and live watch configuration.
- **`docker-compose.prod.yml`**: Production overlay utilizing multi-stage build outputs.

## Common Operations

```bash
# Start Containers with Live Watch Flag (Hot Reload & Auto Sync)
docker compose up --watch

# Or Run Watch Explicitly
docker compose watch

# Start Development Environment Overlay
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build

# Start Production Build
docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d

# Check Service Health
docker compose ps

# View Backend Logs
docker compose logs -f backend
```

## Docker Compose Watch Rules (`develop.watch`)

- **Backend**: Syncs changes in `./backend` directly into `/app` inside the container (excluding `node_modules` & `dist`). Rebuilds automatically when `./backend/package.json` changes.
- **Frontend**: Syncs code edits in `./frontend` directly into `/app` inside the container (excluding `node_modules` & `.next`). Rebuilds automatically when `./frontend/package.json` changes.
