import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '../services/api';
import { ProjectItem } from '../types/portfolio';
import { MOCK_PROJECTS } from '../constants/portfolioData';

export function usePortfolioProjects() {
  return useQuery({
    queryKey: ['portfolio-projects'],
    queryFn: () => fetchApi<ProjectItem[]>('/portfolio/projects'),
    staleTime: 1000 * 60 * 30,
    retry: 1,
    placeholderData: MOCK_PROJECTS,
  });
}
