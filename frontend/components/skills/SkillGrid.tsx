'use client';

import React from 'react';
import { SkillCategory } from '../../types/portfolio';
import { SkeuoCard } from '../ui/SkeuoCard';
import { Cpu, Terminal, Database, Wrench, Layout } from 'lucide-react';

interface SkillGridProps {
  categories: SkillCategory[];
}

export const SkillGrid: React.FC<SkillGridProps> = ({ categories }) => {
  const getCategoryIcon = (cat: string) => {
    if (cat.includes('Frontend')) return <Layout className="w-5 h-5 text-blue-400" />;
    if (cat.includes('Backend')) return <Database className="w-5 h-5 text-emerald-400" />;
    if (cat.includes('DevOps')) return <Wrench className="w-5 h-5 text-amber-400" />;
    if (cat.includes('Languages')) return <Terminal className="w-5 h-5 text-purple-400" />;
    return <Cpu className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((cat, idx) => (
        <SkeuoCard key={idx} variant="panel" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="p-2.5 rounded-xl skeuo-btn">{getCategoryIcon(cat.category)}</div>
            <h3 className="text-xl font-bold text-white tracking-tight">{cat.category}</h3>
          </div>

          <div className="space-y-4">
            {cat.skills.map((skill, sIdx) => (
              <div key={sIdx} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-200">{skill.name}</span>
                  <span className="font-mono text-xs font-bold text-blue-400">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="h-3 w-full rounded-full skeuo-inset-container p-0.5 border border-white/5">
                  <div
                    style={{ width: `${skill.proficiency}%` }}
                    className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full shadow-skeuo-button transition-all duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </SkeuoCard>
      ))}
    </div>
  );
};
