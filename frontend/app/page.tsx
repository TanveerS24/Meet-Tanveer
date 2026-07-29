'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SkeuoCard } from '../components/ui/SkeuoCard';
import { SkeuoButton } from '../components/ui/SkeuoButton';
import { SkeuoBadge } from '../components/ui/SkeuoBadge';
import { Terminal, ShieldCheck, Cpu, ArrowRight, Github, Code2, Layers, Server } from 'lucide-react';
import { MOCK_PROJECTS } from '../constants/portfolioData';

export default function HomePage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full skeuo-inset-container border border-blue-500/30 text-xs font-mono font-bold text-blue-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Docker-First Architecture • Production Ready</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
            Architecting <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Enterprise-Grade</span> Systems.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            I am <strong className="text-white">Tanveer</strong>, a Principal Software Architect & Senior Full Stack Engineer. I build resilient distributed backend services, high-throughput APIs, containerized cloud infrastructure, and tactile skeuomorphic interfaces.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects">
              <SkeuoButton variant="primary" size="lg" icon={<Layers className="w-5 h-5" />}>
                Explore Featured Systems
              </SkeuoButton>
            </Link>
            <Link href="/github">
              <SkeuoButton variant="metal" size="lg" icon={<Github className="w-5 h-5" />}>
                Live GitHub Analytics
              </SkeuoButton>
            </Link>
          </div>
        </div>

        {/* Hero Skeuomorphic Dashboard Card */}
        <div className="lg:col-span-5">
          <SkeuoCard variant="panel" className="border-blue-500/20 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" />
              </div>
              <span className="font-mono text-xs text-slate-400">system-health: 100% UP</span>
            </div>

            <div className="space-y-4">
              <div className="p-3 rounded-xl skeuo-inset-container flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Server className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm font-bold text-white">Backend Layer</div>
                    <div className="text-xs text-slate-400">Express + TypeScript API</div>
                  </div>
                </div>
                <SkeuoBadge variant="blue">Layered Architecture</SkeuoBadge>
              </div>

              <div className="p-3 rounded-xl skeuo-inset-container flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DatabaseIcon className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-sm font-bold text-white">Database Engine</div>
                    <div className="text-xs text-slate-400">PostgreSQL + Prisma ORM</div>
                  </div>
                </div>
                <SkeuoBadge variant="green">Docker Volume</SkeuoBadge>
              </div>

              <div className="p-3 rounded-xl skeuo-inset-container flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-sm font-bold text-white">GitHub GraphQL</div>
                    <div className="text-xs text-slate-400">Live Commit & Heatmap Feed</div>
                  </div>
                </div>
                <SkeuoBadge variant="purple">GraphQL API</SkeuoBadge>
              </div>
            </div>
          </SkeuoCard>
        </div>
      </div>

      {/* Featured Projects Teaser */}
      <div className="mt-20 space-y-8">
        <div className="flex items-end justify-between border-b border-white/10 pb-4">
          <div>
            <h2 className="text-2xl font-black text-white">Featured Architecture Projects</h2>
            <p className="text-xs text-slate-400">Handcrafted solutions following enterprise standards</p>
          </div>
          <Link href="/projects" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_PROJECTS.slice(0, 3).map((proj) => (
            <SkeuoCard key={proj.id} variant="panel" className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-3">{proj.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.techStack.slice(0, 4).map((t) => (
                  <span key={t} className="text-[10px] font-mono bg-slate-900 px-2 py-0.5 rounded text-slate-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </SkeuoCard>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
