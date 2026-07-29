import { CorsOptions } from 'cors';
import { envConfig } from './env.config';

export const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || envConfig.corsOrigins.includes(origin) || envConfig.nodeEnv === 'development') {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy violation: ${origin} not allowed.`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};
