'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkeuoCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'panel' | 'glass' | 'inset';
  hoverElevation?: boolean;
  onClick?: () => void;
}

export const SkeuoCard: React.FC<SkeuoCardProps> = ({
  children,
  className = '',
  variant = 'panel',
  hoverElevation = true,
  onClick,
}) => {
  const baseVariant =
    variant === 'glass'
      ? 'skeuo-glass rounded-2xl p-6 relative overflow-hidden'
      : variant === 'inset'
      ? 'skeuo-inset-container rounded-2xl p-6 relative overflow-hidden'
      : 'skeuo-panel rounded-2xl p-6 relative overflow-hidden';

  return (
    <motion.div
      whileHover={hoverElevation ? { y: -3, scale: 1.005 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`${baseVariant} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Specular light streak highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
