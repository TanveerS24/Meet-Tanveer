import { useQuery } from '@tanstack/react-query';
import { getGitHubDashboardData, generateFallbackDashboardData } from '../services/github.service';

export function useGithubData(username: string = 'TanveerS24') {
  return useQuery({
    queryKey: ['github-dashboard', username],
    queryFn: () => getGitHubDashboardData(username),
    staleTime: 1000 * 60 * 15, // 15 minutes cache
    retry: 1,
    placeholderData: () => generateFallbackDashboardData(username),
  });
}
