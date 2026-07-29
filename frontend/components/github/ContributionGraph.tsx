'use client';

import React from 'react';
import { ContributionGraphData } from '../../types/github';
import { SkeuoCard } from '../ui/SkeuoCard';
import { SkeuoTooltip } from '../ui/SkeuoTooltip';

interface ContributionGraphProps {
  data: ContributionGraphData;
}

export const ContributionGraph: React.FC<ContributionGraphProps> = ({ data }) => {
  const levelColors = {
    0: 'bg-[#151923] border border-white/5',
    1: 'bg-emerald-950 border border-emerald-800/40 shadow-[inset_0_1px_1px_rgba(16,185,129,0.2)]',
    2: 'bg-emerald-800 border border-emerald-600/50 shadow-[inset_0_1px_1px_rgba(16,185,129,0.3)]',
    3: 'bg-emerald-600 border border-emerald-400/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]',
    4: 'bg-emerald-400 border border-emerald-200/80 shadow-[0_0_10px_rgba(52,211,153,0.5)]',
  };

  return (
    <SkeuoCard variant="panel" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>GitHub Contribution Heatmap</span>
          </h3>
          <p className="text-xs text-slate-400">
            Live GraphQL contribution activity across public repositories
          </p>
        </div>
        <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-lg self-start sm:self-auto">
          {data.totalContributions.toLocaleString()} Total Contributions
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto pb-2">
        <div className="inline-flex gap-1.5 min-w-max p-2 rounded-xl skeuo-inset-container">
          {data.weeks.map((week, wIndex) => (
            <div key={wIndex} className="flex flex-col gap-1.5">
              {week.days.map((day, dIndex) => (
                <SkeuoTooltip
                  key={`${wIndex}-${dIndex}`}
                  content={`${day.count} contributions on ${day.date}`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-sm transition-all duration-150 hover:scale-125 cursor-pointer ${
                      levelColors[day.level]
                    }`}
                  />
                </SkeuoTooltip>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap Legend */}
      <div className="flex items-center justify-end gap-2 text-xs text-slate-400 pt-1">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-[#151923] border border-white/5" />
          <div className="w-3 h-3 rounded-sm bg-emerald-950 border border-emerald-800" />
          <div className="w-3 h-3 rounded-sm bg-emerald-800 border border-emerald-600" />
          <div className="w-3 h-3 rounded-sm bg-emerald-600 border border-emerald-400" />
          <div className="w-3 h-3 rounded-sm bg-emerald-400 border border-emerald-200" />
        </div>
        <span>More</span>
      </div>
    </SkeuoCard>
  );
};
