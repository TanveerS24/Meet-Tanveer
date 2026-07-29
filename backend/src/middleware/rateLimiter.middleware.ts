import rateLimit from 'express-rate-limit';
import { envConfig } from '../config/env.config';

export const globalRateLimiter = rateLimit({
  windowMs: envConfig.rateLimitWindowMs,
  max: envConfig.rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests from this IP, please try again after 15 minutes.',
  },
});

export const contactFormLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // limit each IP to 5 contact submissions per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Contact form submission limit reached. Please wait an hour before submitting again.',
  },
});
