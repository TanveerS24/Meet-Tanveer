'use client';

import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SkeuoCard } from '../../components/ui/SkeuoCard';
import { SkeuoBadge } from '../../components/ui/SkeuoBadge';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { MOCK_ACHIEVEMENTS } from '../../constants/portfolioData';

export default function AchievementsPage() {
  return (
    <PageContainer
      title="Certifications & Honors"
      subtitle="Industry accreditations, cloud architecture certifications, and open-source contributions."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_ACHIEVEMENTS.map((ach) => (
          <SkeuoCard key={ach.id} variant="panel" className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl skeuo-btn">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{ach.title}</h3>
                    <div className="text-xs text-slate-400">{ach.issuer}</div>
                  </div>
                </div>
                <SkeuoBadge variant="amber">{ach.category}</SkeuoBadge>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{ach.description}</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5 text-blue-400" /> {ach.date}
              </span>

              {ach.credentialUrl && (
                <a
                  href={ach.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:text-white font-bold transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </SkeuoCard>
        ))}
      </div>
    </PageContainer>
  );
}
