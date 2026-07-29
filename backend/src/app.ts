import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { corsConfig } from './config/cors.config';
import { securityMiddleware } from './config/security.config';
import { globalRateLimiter } from './middleware/rateLimiter.middleware';
import { errorHandler } from './middleware/errorHandler.middleware';
import routes from './routes';

const app: Express = express();

// Security & Headers
app.use(securityMiddleware);
app.use(cors(corsConfig));
app.use(globalRateLimiter);

// Body Parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// API V1 Routes
app.use('/api/v1', routes);

// 404 Route Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// Centralized Error Handling Middleware
app.use(errorHandler);

export default app;
