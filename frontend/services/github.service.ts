import { fetchApi } from './api';
import { GitHubDashboardData } from '../types/github';

export async function getGitHubDashboardData(username?: string): Promise<GitHubDashboardData> {
  const query = username ? `?username=${encodeURIComponent(username)}` : '';
  return await fetchApi<GitHubDashboardData>(`/github/dashboard${query}`);
}

export function generateFallbackDashboardData(username: string = 'TanveerS24'): GitHubDashboardData {
  const weeks = [];
  const now = new Date();
  let totalContrib = 0;

  for (let w = 51; w >= 0; w--) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(now.getTime() - (w * 7 + (6 - d)) * 86400000);
      const count = Math.floor(Math.random() * 8);
      totalContrib += count;
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count > 0 && count <= 2) level = 1;
      else if (count <= 4) level = 2;
      else if (count <= 6) level = 3;
      else if (count > 6) level = 4;

      days.push({
        date: date.toISOString().split('T')[0],
        count,
        level,
      });
    }
    weeks.push({ days });
  }

  return {
    contributions: {
      totalContributions: totalContrib || 1420,
      weeks,
    },
    recentPushes: [
      {
        repository: 'Meet-Tanveer',
        branch: 'main',
        message: 'feat: enterprise docker-first architecture & skeuomorphic UI',
        timestamp: new Date().toISOString(),
        hash: '7a8f9b1',
        filesChanged: 14,
        additions: 840,
        deletions: 120,
      },
      {
        repository: 'enterprise-portfolio-backend',
        branch: 'main',
        message: 'refactor: layered express architecture & prisma repository pattern',
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
        hash: '4c3d2e1',
        filesChanged: 8,
        additions: 450,
        deletions: 30,
      },
      {
        repository: 'nextjs-skeuomorphic-ui',
        branch: 'main',
        message: 'ui: add realistic tactile buttons and glassmorphism primitives',
        timestamp: new Date(Date.now() - 3600000 * 12).toISOString(),
        hash: '9e8d7c6',
        filesChanged: 6,
        additions: 310,
        deletions: 15,
      },
    ],
    stats: {
      totalRepositories: 34,
      totalCommits: 1845,
      stars: 128,
      forks: 42,
      followers: 95,
      following: 48,
      pinnedRepositories: 6,
    },
    languages: [
      { language: 'TypeScript', bytes: 145000, percentage: 45.2, color: '#3178c6' },
      { language: 'JavaScript', bytes: 68000, percentage: 21.2, color: '#f7df1e' },
      { language: 'Java', bytes: 45000, percentage: 14.0, color: '#b07219' },
      { language: 'SQL', bytes: 32000, percentage: 10.0, color: '#e38c00' },
      { language: 'Python', bytes: 21000, percentage: 6.5, color: '#3572A5' },
      { language: 'CSS', bytes: 10000, percentage: 3.1, color: '#563d7c' },
    ],
    activity: [
      {
        id: 'act-1',
        type: 'PUSH',
        title: 'Pushed 3 commits to main branch',
        repoName: 'Meet-Tanveer',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'act-2',
        type: 'MERGE',
        title: 'Merged pull request #4: Add Prisma Postgres integration',
        repoName: 'Meet-Tanveer',
        timestamp: new Date(Date.now() - 3600000 * 6).toISOString(),
      },
      {
        id: 'act-3',
        type: 'RELEASE',
        title: 'Tagged release v2.0.0 (Enterprise Suite)',
        repoName: 'Meet-Tanveer',
        timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
      },
    ],
    analytics: {
      commitsByMonth: [
        { month: 'Jan', count: 140 },
        { month: 'Feb', count: 165 },
        { month: 'Mar', count: 210 },
        { month: 'Apr', count: 190 },
        { month: 'May', count: 240 },
        { month: 'Jun', count: 280 },
        { month: 'Jul', count: 310 },
      ],
      commitsByWeekday: [
        { day: 'Mon', count: 220 },
        { day: 'Tue', count: 260 },
        { day: 'Wed', count: 290 },
        { day: 'Thu', count: 275 },
        { day: 'Fri', count: 240 },
        { day: 'Sat', count: 130 },
        { day: 'Sun', count: 120 },
      ],
      commitsByHour: [
        { hour: 9, count: 60 },
        { hour: 11, count: 110 },
        { hour: 14, count: 160 },
        { hour: 16, count: 185 },
        { hour: 19, count: 130 },
        { hour: 21, count: 140 },
      ],
      currentStreak: 32,
      longestStreak: 54,
      mostProductiveDay: 'Wednesday',
      mostProductiveMonth: 'July',
    },
    pinnedRepos: [
      {
        id: 'p-1',
        name: 'Meet-Tanveer',
        description: 'Production-ready enterprise developer portfolio built with Next.js, Express, PostgreSQL, Prisma, and Docker.',
        topics: ['nextjs', 'typescript', 'docker', 'postgresql', 'prisma', 'skeuomorphism'],
        primaryLanguage: 'TypeScript',
        stars: 48,
        forks: 14,
        lastUpdated: new Date().toISOString(),
        license: 'MIT',
        repoUrl: `https://github.com/${username}/Meet-Tanveer`,
      },
      {
        id: 'p-2',
        name: 'enterprise-microservices-suite',
        description: 'Scalable Node.js microservices architecture with Kafka event streaming, Redis caching, and OpenAPI specs.',
        topics: ['nodejs', 'express', 'kafka', 'redis', 'architecture'],
        primaryLanguage: 'TypeScript',
        stars: 32,
        forks: 9,
        lastUpdated: new Date(Date.now() - 86400000 * 3).toISOString(),
        license: 'Apache-2.0',
        repoUrl: `https://github.com/${username}/enterprise-microservices-suite`,
      },
      {
        id: 'p-3',
        name: 'skeuomorphic-design-system',
        description: 'Apple-inspired skeuomorphic React UI component library featuring tactile buttons, glass depth, and metal finishes.',
        topics: ['react', 'tailwindcss', 'framer-motion', 'skeuomorphism', 'ui-kit'],
        primaryLanguage: 'TypeScript',
        stars: 26,
        forks: 5,
        lastUpdated: new Date(Date.now() - 86400000 * 7).toISOString(),
        license: 'MIT',
        repoUrl: `https://github.com/${username}/skeuomorphic-design-system`,
      },
    ],
  };
}
