import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError';
import { logger } from '../utils/logger';

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err.message || 'Internal Server Error';

  logger.error(`[${req.method}] ${req.originalUrl} - ${statusCode} - ${message}`, {
    stack: err.stack,
  });

  return res.status(statusCode).json({
    success: false,
    error: message,
    meta: {
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      path: req.originalUrl,
    },
  });
};
