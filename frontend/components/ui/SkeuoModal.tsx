'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SkeuoCard } from './SkeuoCard';

interface SkeuoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const SkeuoModal: React.FC<SkeuoModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative z-10 w-full max-w-2xl"
          >
            <SkeuoCard variant="panel" hoverElevation={false} className="border-slate-700/60 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <h3 className="text-xl font-bold text-slate-100">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white rounded-lg skeuo-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div>{children}</div>
            </SkeuoCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
