'use client';

import React from 'react';
import { ExperienceItem } from '../../types/portfolio';
import { SkeuoCard } from '../ui/SkeuoCard';
import { SkeuoBadge } from '../ui/SkeuoBadge';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceListProps {
  experiences: ExperienceItem[];
}

export const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  return (
    <div className="space-y-8">
      {experiences.map((exp) => (
        <SkeuoCard key={exp.id} variant="panel" className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <h3 className="text-2xl font-black text-white">{exp.role}</h3>
              </div>
              <h4 className="text-base font-semibold text-slate-300 pl-8">{exp.company}</h4>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1 text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" /> {exp.location}
              </span>
              <span className="flex items-center gap-1 text-blue-300 bg-blue-950/60 px-3 py-1 rounded-lg border border-blue-500/30">
                <Calendar className="w-3.5 h-3.5 text-blue-400" /> {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">{exp.description}</p>

          <div className="space-y-2 pt-2">
            <h5 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider">
              Key Engineering Impact
            </h5>
            <ul className="space-y-2">
              {exp.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {exp.technologies.map((tech) => (
              <SkeuoBadge key={tech} variant="blue" size="sm">
                {tech}
              </SkeuoBadge>
            ))}
          </div>
        </SkeuoCard>
      ))}
    </div>
  );
};
