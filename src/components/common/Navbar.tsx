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
    <header className="fixed top-2 left-0 w-full z-40 px- margin-mobile md:px-margin pt- space-xs pointer-events-auto">
      <div className="h-16 md:h-20 max-w-[1320px] mx-auto flex items-center justify-between px-space-md md:px-space-lg rounded-full bg-surface-elevated/85 backdrop-blur-xl border border-outline-variant/40 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-space-xs font-headline text-xl md:text-2xl font-extrabold text-on-surface select-none group"
        >
          <span>Tanveer</span>
          <span className="w-2.5 h-2.5 rounded-full bg-primary-container group-hover:scale-125 transition-transform" />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-low/80 p-1 rounded-full border border-outline-variant/30">
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

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { target: 'say_hi_navbar' })}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary-container text-white font-label text-sm font-bold hover:bg-primary transition-all shadow-coral-btn hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
          >
            Say hi
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-9 h-9 rounded-full bg-surface-low border border-outline-variant/40 flex items-center justify-center text-on-surface"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-3xl bg-surface-elevated border border-outline-variant/50 shadow-xl max-w-[1320px] mx-auto flex flex-col gap-2">
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
