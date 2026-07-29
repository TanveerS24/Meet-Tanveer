import { Router } from 'express';
import { contactController } from '../controllers/contact.controller';
import { asyncHandler } from '../utils/asyncHandler';
import { validateRequest } from '../middleware/validate.middleware';
import { createContactSchema } from '../validators/contact.validator';
import { contactFormLimiter } from '../middleware/rateLimiter.middleware';

const router = Router();

router.post(
  '/contact',
  contactFormLimiter,
  validateRequest(createContactSchema),
  asyncHandler(contactController.submitMessage)
);

router.get('/contact', asyncHandler(contactController.getMessages));

export default router;
