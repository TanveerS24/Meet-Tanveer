'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkeuoSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const SkeuoSwitch: React.FC<SkeuoSwitchProps> = ({ checked, onChange, label }) => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
      {label && <span className="text-sm font-medium text-slate-300">{label}</span>}
      <div
        onClick={() => onChange(!checked)}
        className="w-14 h-8 rounded-full p-1 skeuo-inset-container relative transition-colors duration-200"
      >
        <motion.div
          animate={{ x: checked ? 24 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={`w-6 h-6 rounded-full shadow-skeuo-button border border-white/20 relative ${
            checked
              ? 'bg-gradient-to-b from-blue-400 to-blue-600'
              : 'bg-gradient-to-b from-slate-600 to-slate-800'
          }`}
        >
          {/* Top gloss dot */}
          <span className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/40 pointer-events-none" />
        </motion.div>
      </div>
    </label>
  );
};
