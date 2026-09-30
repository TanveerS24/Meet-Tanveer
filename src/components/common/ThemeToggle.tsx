import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '../../analytics/AnalyticsProvider';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggleTheme = () => {
    const nextIsDark = !isDark;

    const applyTheme = () => {
      if (nextIsDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      setIsDark(nextIsDark);
      trackEvent('theme_toggle', { mode: nextIsDark ? 'dark' : 'light' });
    };

    // Use View Transition API if supported
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        applyTheme();
      });
    } else {
      applyTheme();
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="h-9 px-1.5 rounded-full border border-outline-variant/40 bg-surface-elevated flex items-center gap-1 text-on-surface-variant hover:text-on-surface transition-colors shadow-sm"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={`w-7 h-7 rounded-full flex items-center justify-center text-on-surface shadow-sm ${
          !isDark ? 'bg-primary-container text-white' : 'bg-transparent text-on-surface-variant'
        }`}
      >
        <span className="material-symbols-outlined text-[16px]">light_mode</span>
      </motion.span>
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={`w-7 h-7 rounded-full flex items-center justify-center text-on-surface shadow-sm ${
          isDark ? 'bg-secondary-container text-on-surface' : 'bg-transparent text-on-surface-variant'
        }`}
      >
        <span className="material-symbols-outlined text-[16px]">dark_mode</span>
      </motion.span>
    </button>
  );
};
