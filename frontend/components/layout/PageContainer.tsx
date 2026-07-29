'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, title, subtitle }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20"
    >
      {title && (
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent rounded-full" />
        </div>
      )}
      {children}
    </motion.main>
  );
};
