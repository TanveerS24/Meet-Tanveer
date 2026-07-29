'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkeuoTooltipProps {
  content: string;
  children: React.ReactNode;
}

export const SkeuoTooltip: React.FC<SkeuoTooltipProps> = ({ content, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none whitespace-nowrap"
          >
            <div className="bg-slate-900 border border-white/15 text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
