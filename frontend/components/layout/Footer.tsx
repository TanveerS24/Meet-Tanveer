'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Shield, Terminal, Cpu } from 'lucide-react';
import { NAV_LINKS } from '../../constants/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0D0F16] border-t border-white/10 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl skeuo-btn flex items-center justify-center border border-blue-500/30">
                <Cpu className="w-5 h-5 text-blue-400" />
              </div>
              <span className="font-extrabold text-xl text-white">Tanveer</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Enterprise Software Architect & Senior Full Stack Engineer specializing in cloud-native microservices, Docker-first containerization, and Apple-inspired skeuomorphic interfaces.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/TanveerS24"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl skeuo-btn flex items-center justify-center text-slate-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl skeuo-btn flex items-center justify-center text-slate-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@tanveers24.dev"
                className="w-9 h-9 rounded-xl skeuo-btn flex items-center justify-center text-slate-300 hover:text-white"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* System Info */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider mb-4">
              Architecture
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Docker-First Stack</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>PostgreSQL + Prisma</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>GitHub GraphQL API</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Tanveer. Enterprise Grade Software Architecture.</p>
          <div className="flex items-center gap-4">
            <span>Next.js 14 App Router</span>
            <span>•</span>
            <span>Express TypeScript</span>
            <span>•</span>
            <span>Docker Compose</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
