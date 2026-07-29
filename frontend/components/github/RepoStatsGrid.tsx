'use client';

import React from 'react';
import { RepositoryStats } from '../../types/github';
import { SkeuoCard } from '../ui/SkeuoCard';
import { FolderGit2, GitCommit, Star, GitFork, Users, Pin } from 'lucide-react';

interface RepoStatsGridProps {
  stats: RepositoryStats;
}

export const RepoStatsGrid: React.FC<RepoStatsGridProps> = ({ stats }) => {
  const cards = [
    {
      label: 'Repositories',
      value: stats.totalRepositories,
      icon: <FolderGit2 className="w-6 h-6 text-blue-400" />,
      subtext: 'Public & Enterprise Repos',
    },
    {
      label: 'Total Commits',
      value: stats.totalCommits.toLocaleString(),
      icon: <GitCommit className="w-6 h-6 text-emerald-400" />,
      subtext: 'Recorded Commits',
    },
    {
      label: 'Stars Earned',
      value: stats.stars,
      icon: <Star className="w-6 h-6 text-amber-400" />,
      subtext: 'Across Repositories',
    },
    {
      label: 'Forks',
      value: stats.forks,
      icon: <GitFork className="w-6 h-6 text-purple-400" />,
      subtext: 'Community Forks',
    },
    {
      label: 'Followers',
      value: stats.followers,
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      subtext: 'GitHub Followers',
    },
    {
      label: 'Pinned Repos',
      value: stats.pinnedRepositories,
      icon: <Pin className="w-6 h-6 text-rose-400" />,
      subtext: 'Featured Codebases',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card, idx) => (
        <SkeuoCard key={idx} variant="panel" className="flex flex-col justify-between p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="p-2 rounded-xl skeuo-btn">{card.icon}</span>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-black text-white tracking-tight">
              {card.value}
            </div>
            <div className="text-xs font-bold text-slate-300 mt-1">{card.label}</div>
            <div className="text-[11px] text-slate-500">{card.subtext}</div>
          </div>
        </SkeuoCard>
      ))}
    </div>
  );
};
