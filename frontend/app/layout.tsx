import React from 'react';
import type { Metadata } from 'next';
import '../styles/globals.css';
import { Providers } from '../components/layout/Providers';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Tanveer | Principal Software Architect & Senior Full Stack Engineer',
  description:
    'Enterprise-grade developer portfolio featuring Docker-first architecture, Next.js App Router, Express TypeScript backend, PostgreSQL, and live GitHub GraphQL analytics engine.',
  keywords: [
    'Software Architect',
    'Full Stack Engineer',
    'TypeScript',
    'Next.js',
    'Docker',
    'PostgreSQL',
    'Skeuomorphic UI',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0B0D12] text-slate-100 min-h-screen flex flex-col antialiased">
        <Providers>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
