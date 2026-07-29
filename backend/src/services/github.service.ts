import { envConfig } from '../config/env.config';
import { gitHubRepository } from '../repositories/github.repository';
import { fetchGitHubGraphQLData, generateFallbackDashboardData } from '../github/github.graphql';
import { GitHubDashboardData } from '../types/github.types';
import { logger } from '../utils/logger';

export class GitHubService {
  private readonly cacheKeyPrefix = 'github_dashboard_';

  public async getDashboardData(username?: string): Promise<GitHubDashboardData> {
    const targetUsername = username || envConfig.githubUsername;
    const cacheKey = `${this.cacheKeyPrefix}${targetUsername}`;

    // 1. Try cache first
    const cachedData = await gitHubRepository.getCache(cacheKey);
    if (cachedData) {
      logger.info(`Serving GitHub dashboard data from cache for user: ${targetUsername}`);
      return cachedData;
    }

    // 2. Fetch fresh live GraphQL data
    let freshData = await fetchGitHubGraphQLData(targetUsername);

    if (!freshData) {
      freshData = generateFallbackDashboardData(targetUsername);
    }

    // 3. Save to cache
    await gitHubRepository.setCache(cacheKey, freshData);
    return freshData;
  }
}

export const gitHubService = new GitHubService();
