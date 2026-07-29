'use client';

import React from 'react';
import { RepositoryCardItem } from '../../types/github';
import { SkeuoCard } from '../ui/SkeuoCard';
import { SkeuoBadge } from '../ui/SkeuoBadge';
import { Star, GitFork, ExternalLink, Github, Clock } from 'lucide-react';

interface RepoGridProps {
  repos: RepositoryCardItem[];
}

export const RepoGrid: React.FC<RepoGridProps> = ({ repos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <SkeuoCard key={repo.id} variant="panel" className="flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-lg font-bold text-white tracking-tight hover:text-blue-400 transition-colors">
                {repo.name}
              </h4>
              <SkeuoBadge variant="blue" size="sm">
                {repo.primaryLanguage}
              </SkeuoBadge>
            </div>

            <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
              {repo.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {repo.topics.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono bg-slate-900/80 border border-white/5 px-2 py-0.5 rounded text-slate-400"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3 text-slate-400">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5 text-purple-400" /> {repo.forks}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={repo.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg skeuo-btn text-slate-300 hover:text-white"
                title="View Codebase"
              >
                <Github className="w-4 h-4" />
              </a>
              {repo.demoUrl && (
                <a
                  href={repo.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg skeuo-btn text-blue-400 hover:text-white"
                  title="Live Application Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </SkeuoCard>
      ))}
    </div>
  );
};
