'use client';

import React from 'react';
import { TimelineMilestone } from '../../types/portfolio';
import { SkeuoCard } from '../ui/SkeuoCard';
import { SkeuoBadge } from '../ui/SkeuoBadge';
import { Calendar, Award, Code2, GraduationCap, Briefcase } from 'lucide-react';

interface DeveloperTimelineProps {
  milestones: TimelineMilestone[];
}

export const DeveloperTimeline: React.FC<DeveloperTimelineProps> = ({ milestones }) => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'CAREER':
        return <Briefcase className="w-4 h-4 text-blue-400" />;
      case 'EDUCATION':
        return <GraduationCap className="w-4 h-4 text-amber-400" />;
      case 'OPEN_SOURCE':
        return <Code2 className="w-4 h-4 text-purple-400" />;
      default:
        return <Award className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="relative pl-6 md:pl-10 border-l-2 border-slate-800 space-y-8 my-8">
      {milestones.map((m) => (
        <div key={m.id} className="relative group">
          {/* Milestone Circle Pin */}
          <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-10 h-10 rounded-2xl skeuo-btn flex items-center justify-center border border-blue-500/40 shadow-lg group-hover:scale-110 transition-transform">
            {getCategoryIcon(m.category)}
          </div>

          <SkeuoCard variant="panel" className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/60 border border-blue-500/30 px-2.5 py-0.5 rounded-md">
                  {m.year}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{m.title}</h3>
                <h4 className="text-xs text-slate-400">{m.subtitle}</h4>
              </div>
              <SkeuoBadge variant="purple" size="sm">
                {m.category.replace('_', ' ')}
              </SkeuoBadge>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{m.description}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {m.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-slate-900 px-2.5 py-1 rounded-lg border border-white/5 text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </SkeuoCard>
        </div>
      ))}
    </div>
  );
};
