import { Request, Response } from 'express';
import { portfolioService } from '../services/portfolio.service';

export class PortfolioController {
  public getOverview = async (_req: Request, res: Response): Promise<Response> => {
    const overview = await portfolioService.getOverview();
    return res.status(200).json({
      success: true,
      data: overview,
    });
  };

  public getProjects = async (_req: Request, res: Response): Promise<Response> => {
    const projects = await portfolioService.getProjects();
    return res.status(200).json({
      success: true,
      data: projects,
    });
  };
}

export const portfolioController = new PortfolioController();
