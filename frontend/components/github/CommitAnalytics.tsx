'use client';

import React from 'react';
import { CommitAnalytics as ICommitAnalytics } from '../../types/github';
import { SkeuoCard } from '../ui/SkeuoCard';
import { Flame, Trophy, Calendar, Clock } from 'lucide-react';

interface CommitAnalyticsProps {
  analytics: ICommitAnalytics;
}

export const CommitAnalytics: React.FC<CommitAnalyticsProps> = ({ analytics }) => {
  return (
    <SkeuoCard variant="panel" className="space-y-6">
      <div className="border-b border-white/10 pb-3">
        <h3 className="text-lg font-bold text-white">Commit Analytics & Velocity</h3>
        <p className="text-xs text-slate-400">Streak metrics, productive weekdays, and monthly distribution</p>
      </div>

      {/* Highlights Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl skeuo-inset-container flex items-center gap-3">
          <div className="p-2.5 rounded-xl skeuo-btn bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
            <Flame className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="text-xl font-bold text-white">{analytics.currentStreak} Days</div>
            <div className="text-xs text-slate-400">Current Streak</div>
          </div>
        </div>

        <div className="p-4 rounded-xl skeuo-inset-container flex items-center gap-3">
          <div className="p-2.5 rounded-xl skeuo-btn bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30">
            <Trophy className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <div className="text-xl font-bold text-white">{analytics.longestStreak} Days</div>
            <div className="text-xs text-slate-400">Longest Streak</div>
          </div>
        </div>

        <div className="p-4 rounded-xl skeuo-inset-container flex items-center gap-3">
          <div className="p-2.5 rounded-xl skeuo-btn bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
            <Calendar className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-xl font-bold text-white">{analytics.mostProductiveDay}</div>
            <div className="text-xs text-slate-400">Peak Weekday</div>
          </div>
        </div>

        <div className="p-4 rounded-xl skeuo-inset-container flex items-center gap-3">
          <div className="p-2.5 rounded-xl skeuo-btn bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
            <Clock className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-xl font-bold text-white">{analytics.mostProductiveMonth}</div>
            <div className="text-xs text-slate-400">Peak Month</div>
          </div>
        </div>
      </div>

      {/* Weekday Visual Bar Chart */}
      <div className="space-y-3">
        <h4 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider">
          Commits by Weekday
        </h4>
        <div className="grid grid-cols-7 gap-2 items-end h-28 p-3 rounded-xl skeuo-inset-container">
          {analytics.commitsByWeekday.map((d, i) => {
            const max = Math.max(...analytics.commitsByWeekday.map((item) => item.count));
            const pct = Math.round((d.count / max) * 100);
            return (
              <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
                <div
                  style={{ height: `${pct}%` }}
                  className="w-full bg-gradient-to-t from-blue-700 to-blue-400 rounded-t-md shadow-md border-t border-white/20 transition-all duration-300 hover:brightness-125"
                />
                <span className="text-[10px] font-mono text-slate-400">{d.day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </SkeuoCard>
  );
};
