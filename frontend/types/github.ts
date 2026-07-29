export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionWeek {
  days: ContributionDay[];
}

export interface ContributionGraphData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export interface CommitPush {
  repository: string;
  branch: string;
  message: string;
  timestamp: string;
  hash: string;
  filesChanged: number;
  additions: number;
  deletions: number;
}

export interface RepositoryStats {
  totalRepositories: number;
  totalCommits: number;
  stars: number;
  forks: number;
  followers: number;
  following: number;
  pinnedRepositories: number;
}

export interface LanguageStat {
  language: string;
  bytes: number;
  percentage: number;
  color: string;
}

export interface ActivityFeedItem {
  id: string;
  type: 'PUSH' | 'CREATE_REPO' | 'PULL_REQUEST' | 'RELEASE' | 'MERGE';
  title: string;
  repoName: string;
  timestamp: string;
  url?: string;
}

export interface CommitAnalytics {
  commitsByMonth: { month: string; count: number }[];
  commitsByWeekday: { day: string; count: number }[];
  commitsByHour: { hour: number; count: number }[];
  currentStreak: number;
  longestStreak: number;
  mostProductiveDay: string;
  mostProductiveMonth: string;
}

export interface RepositoryCardItem {
  id: string;
  name: string;
  description: string;
  topics: string[];
  primaryLanguage: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  license?: string;
  repoUrl: string;
  demoUrl?: string;
}

export interface GitHubDashboardData {
  contributions: ContributionGraphData;
  recentPushes: CommitPush[];
  stats: RepositoryStats;
  languages: LanguageStat[];
  activity: ActivityFeedItem[];
  analytics: CommitAnalytics;
  pinnedRepos: RepositoryCardItem[];
}
