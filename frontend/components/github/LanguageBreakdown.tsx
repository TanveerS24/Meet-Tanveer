'use client';

import React from 'react';
import { LanguageStat } from '../../types/github';
import { SkeuoCard } from '../ui/SkeuoCard';

interface LanguageBreakdownProps {
  languages: LanguageStat[];
}

export const LanguageBreakdown: React.FC<LanguageBreakdownProps> = ({ languages }) => {
  return (
    <SkeuoCard variant="panel" className="space-y-4">
      <div className="border-b border-white/10 pb-3">
        <h3 className="text-lg font-bold text-white">Language Breakdown</h3>
        <p className="text-xs text-slate-400">Byte percentage across active codebases</p>
      </div>

      {/* Stacked Multi-Color Progress Bar */}
      <div className="h-4 w-full rounded-full skeuo-inset-container flex overflow-hidden p-0.5 border border-white/10">
        {languages.map((lang, index) => (
          <div
            key={index}
            style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
            className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-500 shadow-inner"
            title={`${lang.language}: ${lang.percentage}%`}
          />
        ))}
      </div>

      {/* Language List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2.5 rounded-xl skeuo-inset-container text-xs"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                style={{ backgroundColor: lang.color }}
              />
              <span className="font-semibold text-slate-200">{lang.language}</span>
            </div>
            <span className="font-mono font-bold text-slate-400">{lang.percentage}%</span>
          </div>
        ))}
      </div>
    </SkeuoCard>
  );
};
