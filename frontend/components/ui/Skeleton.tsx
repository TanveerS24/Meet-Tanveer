'use client';

import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div
      className={`animate-pulse bg-slate-800/80 rounded-xl border border-white/5 shadow-inner ${className}`}
    />
  );
};
