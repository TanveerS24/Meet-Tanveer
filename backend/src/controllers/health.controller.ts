import { Request, Response } from 'express';

export class HealthController {
  public getHealth = (_req: Request, res: Response): Response => {
    return res.status(200).json({
      status: 'UP',
      timestamp: new Date().toISOString(),
      service: 'portfolio-backend',
      version: '1.0.0',
      uptime: process.uptime(),
    });
  };
}

export const healthController = new HealthController();
