# Environment Variable Reference

The application uses separate isolated environment files for the backend service (`backend/.env`) and the frontend web application (`frontend/.env`).

---

## Backend Environment Variables (`backend/.env`)

| Variable Name | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `PORT` | Yes | `5000` | Express backend server listener port. |
| `NODE_ENV` | Yes | `development` | Environment mode (`development` or `production`). |
| `POSTGRES_USER` | Yes | `portfolio_user` | PostgreSQL database user. |
| `POSTGRES_PASSWORD` | Yes | `portfolio_secure...` | PostgreSQL user password. |
| `POSTGRES_DB` | Yes | `portfolio_db` | PostgreSQL database name. |
| `DATABASE_URL` | Yes | `postgresql://...` | Connection URI for Prisma ORM. |
| `GITHUB_TOKEN` | Optional | `""` | GitHub Personal Access Token for GraphQL API. |
| `GITHUB_USERNAME` | Yes | `TanveerS24` | GitHub profile username for telemetry. |
| `CORS_ORIGIN` | Yes | `http://localhost:3000` | Allowed origins for cross-origin requests. |
| `JWT_SECRET` | Yes | `super_secret...` | Secret key for JWT auth tokens. |

---

## Frontend Environment Variables (`frontend/.env`)

| Variable Name | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `PORT` | Yes | `3000` | Next.js frontend web server port. |
| `NODE_ENV` | Yes | `development` | Next.js execution mode. |
| `NEXT_PUBLIC_API_URL` | Yes | `http://localhost:5000/api/v1` | Public API endpoint for client queries. |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional | `""` | Analytics tracking identifier. |
