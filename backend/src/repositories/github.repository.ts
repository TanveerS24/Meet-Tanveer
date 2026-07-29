import { prisma } from './prisma.client';
import { GitHubDashboardData } from '../types/github.types';

export class GitHubRepository {
  public async getCache(key: string): Promise<GitHubDashboardData | null> {
    try {
      const record = await prisma.gitHubCache.findUnique({
        where: { key },
      });
      if (!record) return null;
      return record.data as unknown as GitHubDashboardData;
    } catch (error) {
      return null;
    }
  }

  public async setCache(key: string, data: GitHubDashboardData): Promise<void> {
    try {
      await prisma.gitHubCache.upsert({
        where: { key },
        update: { data: data as any },
        create: { key, data: data as any },
      });
    } catch (error) {
      // Ignored if DB is disconnected
    }
  }
}

export const gitHubRepository = new GitHubRepository();
