'use client';

import React from 'react';
import { CommitPush } from '../../types/github';
import { SkeuoCard } from '../ui/SkeuoCard';
import { GitCommit, GitBranch, Folder, PlusCircle, MinusCircle } from 'lucide-react';

interface RecentPushesProps {
  pushes: CommitPush[];
}

export const RecentPushes: React.FC<RecentPushesProps> = ({ pushes }) => {
  return (
    <SkeuoCard variant="panel" className="space-y-4">
      <div className="border-b border-white/10 pb-3 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <GitCommit className="w-5 h-5 text-blue-400" />
            <span>Recent Pushes & Commits</span>
          </h3>
          <p className="text-xs text-slate-400">Live commit feed with file diffs and commit hashes</p>
        </div>
      </div>

      <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
        {pushes.map((push, i) => (
          <div
            key={`${push.hash}-${i}`}
            className="p-4 rounded-xl skeuo-inset-container flex flex-col gap-2 hover:border-slate-700 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-blue-400 flex items-center gap-1">
                  <Folder className="w-3.5 h-3.5" />
                  {push.repository}
                </span>
                <span className="text-slate-500">•</span>
                <span className="font-mono text-slate-300 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-white/10">
                  <GitBranch className="w-3 h-3 text-emerald-400" />
                  {push.branch}
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-white/10">
                {push.hash}
              </span>
            </div>

            <p className="text-sm font-medium text-slate-100">{push.message}</p>

            <div className="flex items-center justify-between pt-1 border-t border-white/5 text-xs text-slate-400">
              <span>{new Date(push.timestamp).toLocaleString()}</span>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-emerald-400 flex items-center gap-1">
                  <PlusCircle className="w-3.5 h-3.5" />+{push.additions}
                </span>
                <span className="text-rose-400 flex items-center gap-1">
                  <MinusCircle className="w-3.5 h-3.5" />-{push.deletions}
                </span>
                <span>{push.filesChanged} files</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SkeuoCard>
  );
};
