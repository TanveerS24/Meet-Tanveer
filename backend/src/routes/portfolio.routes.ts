import { Router } from 'express';
import { portfolioController } from '../controllers/portfolio.controller';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.get('/portfolio/overview', asyncHandler(portfolioController.getOverview));
router.get('/portfolio/projects', asyncHandler(portfolioController.getProjects));

export default router;
