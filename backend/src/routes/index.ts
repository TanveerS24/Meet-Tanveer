import { Router } from 'express';
import healthRoutes from './health.routes';
import githubRoutes from './github.routes';
import contactRoutes from './contact.routes';
import portfolioRoutes from './portfolio.routes';

const router = Router();

router.use('/', healthRoutes);
router.use('/', githubRoutes);
router.use('/', contactRoutes);
router.use('/', portfolioRoutes);

export default router;
