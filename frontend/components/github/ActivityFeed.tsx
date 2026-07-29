'use client';

import React from 'react';
import { ActivityFeedItem } from '../../types/github';
import { SkeuoCard } from '../ui/SkeuoCard';
import { GitPullRequest, FolderPlus, Tag, CheckCircle2 } from 'lucide-react';

interface ActivityFeedProps {
  activity: ActivityFeedItem[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activity }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'PULL_REQUEST':
        return <GitPullRequest className="w-4 h-4 text-purple-400" />;
      case 'CREATE_REPO':
        return <FolderPlus className="w-4 h-4 text-blue-400" />;
      case 'RELEASE':
        return <Tag className="w-4 h-4 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <SkeuoCard variant="panel" className="space-y-4">
      <div className="border-b border-white/10 pb-3">
        <h3 className="text-lg font-bold text-white">Chronological Activity Timeline</h3>
        <p className="text-xs text-slate-400 font-sans">Recent GitHub developer activity stream</p>
      </div>

      <div className="space-y-4 relative pl-4 border-l-2 border-slate-800">
        {activity.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full skeuo-btn flex items-center justify-center border border-blue-500/40">
              {getIcon(item.type)}
            </div>

            <div className="p-3 rounded-xl skeuo-inset-container flex flex-col gap-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{item.title}</span>
                <span className="font-mono text-[11px] text-slate-500">
                  {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <span className="text-xs font-mono text-blue-400">{item.repoName}</span>
            </div>
          </div>
        ))}
      </div>
    </SkeuoCard>
  );
};
