'use client';

import React from 'react';
import Link from 'next/link';
import { PageContainer } from '../../components/layout/PageContainer';
import { SkeuoCard } from '../../components/ui/SkeuoCard';
import { SkeuoButton } from '../../components/ui/SkeuoButton';
import { SkeuoBadge } from '../../components/ui/SkeuoBadge';
import { ShieldCheck, Terminal, Cpu, Download, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const principles = [
    {
      title: 'Docker-First Infrastructure',
      desc: 'Containerizing applications ensures reproducible runtime environments, zero dependency drift, and simple deployment orchestration.',
    },
    {
      title: 'Layered Enterprise Architecture',
      desc: 'Strict separation of concerns—controllers never contain business logic, database queries live exclusively in repository abstraction layers.',
    },
    {
      title: 'Apple-Inspired Skeuomorphism',
      desc: 'Designing interfaces with realistic tactile depth, physical switches, glass reflection, and smooth physics micro-interactions.',
    },
    {
      title: 'Comprehensive Verification',
      desc: 'Targeting 95%+ code coverage with automated Jest integration tests, Supertest endpoint validation, and strict TypeScript types.',
    },
  ];

  return (
    <PageContainer
      title="Architectural Mindset & Philosophy"
      subtitle="Engineering high-availability software platforms designed for longevity, maintainability, and enterprise scale."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Bio Card */}
        <div className="lg:col-span-8 space-y-8">
          <SkeuoCard variant="panel" className="space-y-4">
            <h2 className="text-2xl font-black text-white">Who I Am</h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I am a Principal Software Architect and Senior Full Stack Engineer with extensive experience designing distributed cloud systems, high-volume database pipelines, and modern web applications.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              My engineering philosophy revolves around building production-ready systems from day one. I specialize in TypeScript ecosystems (Next.js, Node.js, Express), containerized PostgreSQL databases, Prisma ORM, and live API integrations.
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
              <Link href="/resume">
                <SkeuoButton variant="primary" icon={<Download className="w-4 h-4" />}>
                  View / Export Resume
                </SkeuoButton>
              </Link>
              <Link href="/contact">
                <SkeuoButton variant="metal" icon={<Terminal className="w-4 h-4" />}>
                  Contact Engineering Lead
                </SkeuoButton>
              </Link>
            </div>
          </SkeuoCard>

          {/* Architectural Principles */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Core Engineering Principles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((p, idx) => (
                <SkeuoCard key={idx} variant="panel" className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h4 className="font-bold text-white text-sm">{p.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                </SkeuoCard>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          <SkeuoCard variant="panel" className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">
              Technical Overview
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Primary Domain</span>
                <span className="font-semibold text-white">Cloud & Enterprise</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Backend Framework</span>
                <span className="font-semibold text-white">Express TypeScript</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Frontend Framework</span>
                <span className="font-semibold text-white">Next.js 14 App Router</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Database Engine</span>
                <span className="font-semibold text-white">PostgreSQL + Prisma</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Orchestration</span>
                <span className="font-semibold text-emerald-400">Docker Compose</span>
              </div>
            </div>
          </SkeuoCard>
        </div>
      </div>
    </PageContainer>
  );
}
