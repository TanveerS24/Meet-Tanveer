import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { trackEvent } from '../../analytics/AnalyticsProvider';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: '3D Corner', href: '#3d-corner' },
    { label: 'Journey', href: '#journey' },
    { label: 'Proof', href: '#proof' },
    { label: 'About', href: '#about' },
  ];

  const handleNavClick = (label: string, href: string) => {
    trackEvent('nav_click', { section: label });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-1 left-0 w-full z-40 px-4 md:px-12 pt-2 pointer-events-auto">
      <div className="h-20 max-w-[1320px] mx-auto flex items-center justify-between px-4 md:px-6 rounded-full bg-surface-elevated/85 backdrop-blur-xl border border-outline-variant/40 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        {/* Stitch Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-1 font-headline font-bold text-2xl tracking-tight text-on-surface select-none group"
        >
          <span>Tanveer</span>
          <span className="inline-block w-2 h-2 rounded-full bg-primary-container group-hover:scale-125 transition-transform" />
        </a>

        {/* Desktop Navigation Capsule */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-low/80 p-1.5 rounded-full border border-outline-variant/30">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.label, item.href)}
              className="text-on-surface-variant font-label text-sm px-4 py-1.5 rounded-full hover:bg-surface-container hover:text-on-surface transition-all font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { target: 'say_hi_navbar' })}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary-container text-white font-label text-sm font-bold hover:bg-primary transition-all shadow-[0_2px_8px_rgba(255,107,87,0.25)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
          >
            Say hi
          </a>

          {/* User Icon Badge from Stitch Design */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden w-9 h-9 rounded-full bg-surface-low border border-outline-variant/40 flex items-center justify-center text-on-surface"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-3xl bg-surface-elevated border border-outline-variant shadow-xl max-w-[1320px] mx-auto flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.label, item.href)}
              className="px-4 py-2.5 rounded-2xl bg-surface-low text-on-surface font-headline font-bold hover:bg-primary-container hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleNavClick('Say hi', '#contact')}
            className="mt-2 py-3 text-center rounded-2xl bg-primary-container text-white font-bold"
          >
            Say hi 👋
          </a>
        </div>
      )}
    </header>
  );
};
