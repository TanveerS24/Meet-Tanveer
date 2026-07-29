import winston from 'winston';
import { envConfig } from '../config/env.config';

export const logger = winston.createLogger({
  level: envConfig.nodeEnv === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: 'portfolio-backend' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(
          ({ level, message, timestamp, stack }) => `${timestamp} [${level}]: ${stack || message}`
        )
      ),
    }),
  ],
});
