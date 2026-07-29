'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import { NAV_LINKS } from '../../constants/navigation';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0B0D12]/80 border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl skeuo-btn flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400">
            <Cpu className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Tanveer
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
              Architect Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-2xl skeuo-inset-container border border-white/5">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-colors">
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 rounded-xl shadow-skeuo-button border border-blue-400/40"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="skeuo-btn px-4 py-2 text-xs font-bold text-blue-400 hover:text-white rounded-xl border border-blue-500/30 flex items-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            <span>Hire Architect</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-xl skeuo-btn text-slate-300 hover:text-white"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#141720] border-b border-white/10 px-4 pt-2 pb-6"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 shadow-inner'
                        : 'text-slate-300 hover:bg-slate-800/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
