'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkeuoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'metal';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const SkeuoButton: React.FC<SkeuoButtonProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base font-bold rounded-2xl gap-2.5',
  }[size];

  const variantClasses = {
    secondary: 'skeuo-btn text-white',
    primary:
      'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-skeuo-button hover:from-blue-400 hover:to-blue-600 border border-blue-400/30',
    accent:
      'bg-gradient-to-b from-amber-500 to-amber-700 text-white shadow-skeuo-button hover:from-amber-400 hover:to-amber-600 border border-amber-400/30',
    metal:
      'bg-gradient-to-b from-slate-700 to-slate-900 text-slate-100 shadow-skeuo-button border border-slate-600/40',
  }[variant];

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.97 } : undefined}
      disabled={disabled}
      className={`inline-flex items-center justify-center relative overflow-hidden transition-all duration-150 ${variantClasses} ${sizeClasses} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      {...(props as any)}
    >
      {/* Light sheen */}
      <span className="absolute top-0 left-0 right-0 h-[1px] bg-white/30 pointer-events-none" />
      {icon && <span className="inline-flex items-center">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};
