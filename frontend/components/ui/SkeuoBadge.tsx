'use client';

import React from 'react';

interface SkeuoBadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'amber' | 'purple' | 'slate';
  size?: 'sm' | 'md';
}

export const SkeuoBadge: React.FC<SkeuoBadgeProps> = ({
  children,
  variant = 'blue',
  size = 'sm',
}) => {
  const variantStyles = {
    blue: 'bg-blue-950/80 text-blue-300 border-blue-500/30 shadow-[inset_0_1px_1px_rgba(59,130,246,0.3)]',
    green: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30 shadow-[inset_0_1px_1px_rgba(16,185,129,0.3)]',
    amber: 'bg-amber-950/80 text-amber-300 border-amber-500/30 shadow-[inset_0_1px_1px_rgba(245,158,11,0.3)]',
    purple: 'bg-purple-950/80 text-purple-300 border-purple-500/30 shadow-[inset_0_1px_1px_rgba(168,85,247,0.3)]',
    slate: 'bg-slate-900/90 text-slate-300 border-slate-700/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]',
  }[variant];

  const sizeStyles = size === 'sm' ? 'px-2.5 py-0.5 text-xs font-semibold' : 'px-3 py-1 text-sm font-semibold';

  return (
    <span className={`inline-flex items-center rounded-full border ${variantStyles} ${sizeStyles} shadow-sm backdrop-blur-sm`}>
      {children}
    </span>
  );
};
