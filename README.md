# Enterprise Developer Portfolio (Docker-First)

An enterprise-grade, production-ready developer portfolio platform built with **Next.js (App Router)**, **React**, **TypeScript**, **Node.js/Express**, **PostgreSQL**, **Prisma ORM**, and **Docker Compose**.

Designed with an Apple-inspired **Skeuomorphic Design System**, tactile button physics, glass surface reflections, Framer Motion animations, and a live **GitHub GraphQL API telemetry engine**.

---

## Key Features

- **Docker-First Containerization**: Single-command startup with `docker compose up --build`. No local PostgreSQL installation required.
- **Layered Enterprise Architecture**: Strict isolation of concerns (`controllers`, `services`, `repositories`, `routes`, `middleware`, `validators`).
- **Live GitHub GraphQL Dashboard**: Interactive contribution heatmap matrix, commit velocity analytics, language breakdown, activity streams, and commit hashes.
- **Skeuomorphic UI**: Tactile buttons, recessed panels, physical switches, metallic highlights, and glassmorphic translucency.
- **Security & Performance**: Helmet security headers, CORS origin protection, Zod input validation, rate limiting, and stand-alone bundle optimization.

---

## Quick Start (Docker Compose)

Ensure Docker Desktop is running on your machine, then execute:

```bash
# 1. Clone the repository
git clone https://github.com/TanveerS24/Meet-Tanveer.git
cd Meet-Tanveer

# 2. Copy environment variables example
cp .env.example .env

# 3. Spin up PostgreSQL, Express Backend, and Next.js Frontend (with Live Watch)
docker compose up --watch

# Or traditional build and start:
# docker compose up --build
```

Access the application at:
- **Frontend App**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000/api/v1/health](http://localhost:5000/api/v1/health)

---

## Documentation Links

Detailed guides are available in the [`docs/`](./docs) directory:

- [Architecture Overview](./docs/ARCHITECTURE.md)
- [Docker Configuration Guide](./docs/DOCKER.md)
- [Environment Variable Reference](./docs/ENV_VARIABLES.md)
- [API Specification](./docs/API_DOCUMENTATION.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Standards](./docs/CONTRIBUTING.md)

---

## Tech Stack Summary

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Framer Motion, TanStack Query |
| **Backend** | Node.js, Express, TypeScript, Zod, Helmet, Winston, Rate Limiter |
| **Database** | PostgreSQL 16, Prisma ORM |
| **Integrations** | GitHub GraphQL API (with fallback mock metrics) |
| **Containers** | Docker, Docker Compose (Dev & Production targets) |

---

## Testing

```bash
# Backend Tests (Jest & Supertest)
cd backend
npm test

# Frontend Tests (React Testing Library)
cd frontend
npm test
```

---

## License

Distributed under the [MIT License](LICENSE). Built for enterprise software engineers.
