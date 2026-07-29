import { Request, Response } from 'express';
import { gitHubService } from '../services/github.service';

export class GitHubController {
  public getDashboard = async (req: Request, res: Response): Promise<Response> => {
    const username = req.query.username as string | undefined;
    const data = await gitHubService.getDashboardData(username);
    return res.status(200).json({
      success: true,
      data,
    });
  };
}

export const gitHubController = new GitHubController();
