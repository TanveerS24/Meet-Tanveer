import dotenv from 'dotenv';
import path from 'path';

// Load environment variables strictly from backend/.env
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config();

export const envConfig = {
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL || '',
  githubToken: process.env.GITHUB_TOKEN || '',
  githubUsername: process.env.GITHUB_USERNAME || 'TanveerS24',
  corsOrigins: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(','),
  rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret_change_in_prod',
};
