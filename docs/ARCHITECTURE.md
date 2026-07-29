# Architecture Overview

This portfolio platform is designed around real enterprise architecture patterns, emphasizing long-term maintainability, clean separation of concerns, container isolation, and testability.

## Layered Backend Design

```text
HTTP Request ---> Routes Layer ---> Middleware Layer (Helmet, CORS, Rate Limit, Zod)
                                          |
                                    Controllers
                                          |
                                    Service Layer (Business Logic & GitHub GraphQL)
                                          |
                                  Repository Layer (Prisma Data Access)
                                          |
                                    PostgreSQL DB
```

### Responsibility Breakdown

1. **Routes Layer (`src/routes/`)**: Mounts endpoint URIs and binds middleware and controllers. Zero logic.
2. **Middleware Layer (`src/middleware/`)**: Validates input schemas using Zod, enforces rate limiting, and handles operational errors globally.
3. **Controller Layer (`src/controllers/`)**: Parses HTTP query/body/params and delegates execution to services. Zero business logic.
4. **Service Layer (`src/services/`)**: Executes core business logic, handles caching strategies, and queries external APIs (GitHub GraphQL).
5. **Repository Layer (`src/repositories/`)**: Abstracts data storage operations using Prisma Client and PostgreSQL.

---

## Skeuomorphic Frontend Design System

The frontend utilizes Apple-inspired skeuomorphism combined with glassmorphism and modern dark mode ergonomics:

- **Layered Elevation Shadows**: Custom inset and drop shadow utilities for recessed panels and raised cards.
- **Physical Light Highlights**: Specular highlight borders (`border-white/10` with top gradient streaks).
- **Tactile Physics**: Framer Motion spring physics on buttons and card hover interactions.
