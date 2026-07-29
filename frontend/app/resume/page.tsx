'use client';

import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SkeuoCard } from '../../components/ui/SkeuoCard';
import { SkeuoButton } from '../../components/ui/SkeuoButton';
import { SkeuoBadge } from '../../components/ui/SkeuoBadge';
import { Download, Printer, FileText, CheckCircle2, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { MOCK_EXPERIENCES, MOCK_SKILL_CATEGORIES } from '../../constants/portfolioData';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <PageContainer
      title="Professional Resume & CV"
      subtitle="Interactive and print-ready summary of technical architecture experience, skills, and background."
    >
      <div className="space-y-6">
        {/* Action Header */}
        <div className="flex justify-end gap-3 print:hidden">
          <SkeuoButton variant="secondary" icon={<Printer className="w-4 h-4" />} onClick={handlePrint}>
            Print / Save as PDF
          </SkeuoButton>
        </div>

        {/* Paper Skeuomorphic Resume Container */}
        <SkeuoCard variant="panel" className="bg-[#12151E] p-8 md:p-12 space-y-8 border-slate-700/80 shadow-2xl max-w-4xl mx-auto">
          {/* Header Info */}
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-white">Tanveer</h1>
              <h2 className="text-base font-bold text-blue-400">Principal Software Architect & Lead Engineer</h2>
            </div>
            <div className="text-xs font-mono text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" /> contact@tanveers24.dev
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" /> Bengaluru, India
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400" /> https://tanveers24.dev
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider">
              Executive Summary
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Senior Software Architect with over 7 years of engineering experience delivering distributed backend platforms, microservices architecture, Docker-first container environments, and high-performance React/Next.js web applications. Expert in clean architecture, database optimization, and high availability system design.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider border-b border-white/10 pb-2">
              Work Experience
            </h3>
            {MOCK_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-white text-base">{exp.role}</span>
                  <span className="text-xs font-mono text-blue-400">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <div className="text-xs font-semibold text-slate-400">{exp.company} • {exp.location}</div>
                <ul className="space-y-1 pt-1">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Technical Competencies */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider border-b border-white/10 pb-2">
              Technical Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {MOCK_SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="space-y-1">
                  <span className="font-bold text-white">{cat.category}:</span>
                  <p className="text-slate-300">{cat.skills.map((s) => s.name).join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </SkeuoCard>
      </div>
    </PageContainer>
  );
}
