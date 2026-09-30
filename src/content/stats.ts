export interface LeetCodeStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  streak: number;
  badgeName: string;
  lastUpdated: string;
  username: string;
}

export interface OverviewStats {
  leetcodeTotal: number;
  cgpa: number;
  operationsBoost: number; // 178
  streakDays: number;
  githubRepos: number;
}

export const leetCodeData: LeetCodeStats = {
  totalSolved: 272,
  easy: 148,
  medium: 115,
  hard: 9,
  streak: 13,
  badgeName: "50 Days Badge 2025",
  lastUpdated: "Sep 30, 2026",
  username: "TanveerS24"
};

export const overviewStats: OverviewStats = {
  leetcodeTotal: 272,
  cgpa: 9.32,
  operationsBoost: 178,
  streakDays: 13,
  githubRepos: 30
};
