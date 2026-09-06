import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from '../common/Icons';
import { DEVELOPER_INFO } from '../../constants/data';

/**
 * Footer
 * Noir technical footer with live clock, diagnostics, system telemetry, and copyright.
 */
export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-noir-950 border-t border-white/10 pt-16 pb-12 px-6 md:px-12 overflow-hidden select-none">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-flame-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-2xl tracking-wider text-white">
                {DEVELOPER_INFO.name}
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE & COMPILING</span>
              </div>
            </div>
            <p className="text-sm font-mono text-noir-muted">
              {DEVELOPER_INFO.role}
            </p>
          </div>

          {/* Diagnostics Hub */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-noir-muted">
            <div className="px-3 py-1.5 rounded-lg bg-noir-900 border border-white/5 flex items-center gap-2">
              <span className="text-flame-400">TIME:</span>
              <span className="text-white">{timeStr || '00:00:00 UTC'}</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-noir-900 border border-white/5 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SYSTEMS NOMINAL</span>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-noir-900 hover:bg-flame-500/20 border border-white/5 hover:border-flame-500/50 text-noir-text hover:text-flame-300 transition-colors flex items-center gap-1 cursor-pointer"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px] hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright & notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-noir-muted">
          <div>
            © {new Date().getFullYear()} {DEVELOPER_INFO.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>NOIR DEV ENGINE // V2.6</span>
            <span className="text-flame-400">ZERO VIDEO ASSETS</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              SOURCE ARCHIVE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
