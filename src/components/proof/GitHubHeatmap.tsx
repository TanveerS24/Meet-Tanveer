import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAnimationGate } from '../../motion/tokens';
import { overviewStats } from '../../content/stats';

export const GitHubHeatmap: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { isReducedMotion } = useAnimationGate();

  // Generate 5x26 grid cells representing activity
  const gridCells = Array.from({ length: 130 }, (_, index) => {
    // Generate deterministic green/mint levels for visual demonstration
    const level = (index * 7 + 3) % 4; // 0 (none), 1 (light), 2 (medium), 3 (high)
    return { id: index, level };
  });

  return (
    <div ref={ref} className="rounded-card bg-surface-elevated border border-outline-variant p-space-lg shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-space-md">
          <h3 className="font-headline text-lg font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">commit</span>
            <span>GitHub Footprint</span>
          </h3>
          <span className="font-code text-xs text-secondary font-bold">
            {overviewStats.githubRepos} Public Repositories
          </span>
        </div>

        {/* Heatmap Container */}
        <div className="p-3 rounded-2xl bg-surface-low border border-outline-variant/50">
          <div className="flex justify-between items-center mb-2 font-code text-[11px] text-on-surface-variant">
            <span>52 Weeks Active</span>
            <span>Contributions Matrix</span>
          </div>

          {/* Grid matrix with ripple animation */}
          <div className="grid grid-rows-5 grid-flow-col gap-1 overflow-x-auto py-1">
            {gridCells.map((cell) => {
              const bgClass =
                cell.level === 0
                  ? 'bg-surface-container'
                  : cell.level === 1
                  ? 'bg-secondary-container/40'
                  : cell.level === 2
                  ? 'bg-secondary-container'
                  : 'bg-secondary';

              const colIndex = Math.floor(cell.id / 5);

              return (
                <motion.div
                  key={cell.id}
                  initial={isReducedMotion ? false : { opacity: 0.2, scale: 0.7 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: isReducedMotion ? 0 : colIndex * 0.02, // left-to-right ripple effect!
                  }}
                  className={`w-3 h-3 rounded-sm ${bgClass}`}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-on-surface-variant font-code pt-2">
            <span>Less</span>
            <div className="flex gap-1 items-center">
              <span className="w-2.5 h-2.5 rounded-sm bg-surface-container" />
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary-container/40" />
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary-container" />
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      <div className="pt-space-md border-t border-outline-variant/40 flex items-center justify-between text-sm">
        <span className="text-on-surface-variant">Primary Languages:</span>
        <span className="font-code text-xs font-bold text-on-surface">TypeScript & Python</span>
      </div>
    </div>
  );
};
