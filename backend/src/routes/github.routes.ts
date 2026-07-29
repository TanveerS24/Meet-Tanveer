import { Router } from 'express';
import { gitHubController } from '../controllers/github.controller';
import { asyncHandler } from '../utils/asyncHandler';
import { validateRequest } from '../middleware/validate.middleware';
import { getGitHubQuerySchema } from '../validators/github.validator';

const router = Router();

router.get(
  '/github/dashboard',
  validateRequest(getGitHubQuerySchema),
  asyncHandler(gitHubController.getDashboard)
);

export default router;
