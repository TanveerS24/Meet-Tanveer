import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-low border-t border-outline-variant/30 mt-space-xl py-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 font-headline text-lg text-on-surface font-extrabold">
            <span>S Tanveer Muhammed</span>
            <span className="w-2 h-2 rounded-full bg-primary-container" />
          </div>
          <p className="font-body text-sm text-on-surface-variant text-center md:text-left">
            Full Stack & Spatial 3D Engineer crafting tactile, high-performance web software.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-on-surface-variant font-code text-xs">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/40 text-secondary font-semibold">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Open for 2026 SWE internships & full-time roles
          </span>
          <span>© 2026 S Tanveer Muhammed.</span>
        </div>
      </div>
    </footer>
  );
};
