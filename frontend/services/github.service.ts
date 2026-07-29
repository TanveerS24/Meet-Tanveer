import { fetchApi } from './api';
import { GitHubDashboardData } from '../types/github';

export async function getGitHubDashboardData(username?: string): Promise<GitHubDashboardData> {
  const query = username ? `?username=${encodeURIComponent(username)}` : '';
  return await fetchApi<GitHubDashboardData>(`/github/dashboard${query}`);
}
