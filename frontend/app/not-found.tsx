'use client';

import React from 'react';
import Link from 'next/link';
import { PageContainer } from '../components/layout/PageContainer';
import { SkeuoCard } from '../components/ui/SkeuoCard';
import { SkeuoButton } from '../components/ui/SkeuoButton';
import { AlertTriangle, Home, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <PageContainer>
      <div className="py-16 flex items-center justify-center">
        <SkeuoCard variant="panel" className="max-w-md w-full text-center space-y-6 p-8 border-rose-500/20 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl skeuo-btn mx-auto flex items-center justify-center border border-rose-500/40 text-rose-400">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-400 font-bold uppercase tracking-widest">
              HTTP 404 • Resource Not Found
            </span>
            <h1 className="text-3xl font-black text-white">Route Unreachable</h1>
            <p className="text-sm text-slate-400">
              The requested architecture endpoint or page path does not exist on this server.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <SkeuoButton variant="primary" icon={<Home className="w-4 h-4" />}>
                Return to Home
              </SkeuoButton>
            </Link>
            <Link href="/github">
              <SkeuoButton variant="metal" icon={<Terminal className="w-4 h-4" />}>
                GitHub Dashboard
              </SkeuoButton>
            </Link>
          </div>
        </SkeuoCard>
      </div>
    </PageContainer>
  );
}
