import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { leetCodeData } from '../../content/stats';
import { useAnimationGate } from '../../motion/tokens';

export const LeetCodeDonut: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const { isReducedMotion } = useAnimationGate();

  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(isReducedMotion ? leetCodeData.totalSolved : 0);

  // Count-up numbers (Animation Spec 7)
  useEffect(() => {
    if (isReducedMotion || !isInView) {
      setDisplayCount(leetCodeData.totalSolved);
      return;
    }

    let start = 0;
    const end = leetCodeData.totalSolved;
    const duration = 1200; // 1.2s
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setDisplayCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, isReducedMotion]);

  // SVG Circumference: radius r=15.9155 -> C = 2 * pi * r = 100
  const easyPct = (leetCodeData.easy / leetCodeData.totalSolved) * 100; // ~54.4%
  const mediumPct = (leetCodeData.medium / leetCodeData.totalSolved) * 100; // ~42.3%
  const hardPct = (leetCodeData.hard / leetCodeData.totalSolved) * 100; // ~3.3%

  return (
    <div ref={containerRef} className="rounded-card bg-surface-elevated border border-outline-variant p-space-lg shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-space-md">
          <h3 className="font-headline text-lg font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FFC93C]">code</span>
            <span>LeetCode Mastery</span>
          </h3>
          <span className="px-2.5 py-0.5 rounded-full bg-surface-low font-code text-xs text-on-surface-variant font-medium">
            Updated: {leetCodeData.lastUpdated}
          </span>
        </div>

        {/* Accessible Visually Hidden Table for Screen Readers */}
        <div className="sr-only">
          <table>
            aria-label="LeetCode Solved Statistics"
            caption="LeetCode Solved Statistics Breakdown"
            <thead>
              <tr>
                <th>Category</th>
                <th>Solved Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Easy</td>
                <td>{leetCodeData.easy}</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>{leetCodeData.medium}</td>
              </tr>
              <tr>
                <td>Hard</td>
                <td>{leetCodeData.hard}</td>
              </tr>
              <tr>
                <td>Total Solved</td>
                <td>{leetCodeData.totalSolved}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SVG Animated Donut Ring */}
        <div className="relative flex items-center justify-center my-space-md">
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              {/* Background Track */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                className="text-surface-low stroke-current"
                strokeWidth="3.5"
                fill="none"
              />

              {/* Segment 1: Easy (Mint) */}
              <motion.circle
                cx="18"
                cy="18"
                r="15.9155"
                className="text-secondary-container stroke-current cursor-pointer hover:opacity-80 transition-opacity"
                strokeWidth="3.8"
                fill="none"
                strokeDasharray={`${easyPct}, 100`}
                strokeDashoffset="0"
                strokeLinecap="round"
                onMouseEnter={() => setActiveTooltip(`Easy: ${leetCodeData.easy} solved`)}
                onMouseLeave={() => setActiveTooltip(null)}
                tabIndex={0}
                role="button"
                aria-label={`Easy: ${leetCodeData.easy}`}
                initial={isReducedMotion ? false : { strokeDasharray: '0, 100' }}
                animate={isInView ? { strokeDasharray: `${easyPct}, 100` } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />

              {/* Segment 2: Medium (Yellow) */}
              <motion.circle
                cx="18"
                cy="18"
                r="15.9155"
                className="text-tertiary-fixed stroke-current cursor-pointer hover:opacity-80 transition-opacity"
                strokeWidth="3.8"
                fill="none"
                strokeDasharray={`${mediumPct}, 100`}
                strokeDashoffset={`-${easyPct}`}
                strokeLinecap="round"
                onMouseEnter={() => setActiveTooltip(`Medium: ${leetCodeData.medium} solved`)}
                onMouseLeave={() => setActiveTooltip(null)}
                tabIndex={0}
                role="button"
                aria-label={`Medium: ${leetCodeData.medium}`}
                initial={isReducedMotion ? false : { strokeDasharray: '0, 100' }}
                animate={isInView ? { strokeDasharray: `${mediumPct}, 100` } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              />

              {/* Segment 3: Hard (Coral) */}
              <motion.circle
                cx="18"
                cy="18"
                r="15.9155"
                className="text-primary-container stroke-current cursor-pointer hover:opacity-80 transition-opacity"
                strokeWidth="3.8"
                fill="none"
                strokeDasharray={`${hardPct}, 100`}
                strokeDashoffset={`-${easyPct + mediumPct}`}
                strokeLinecap="round"
                onMouseEnter={() => setActiveTooltip(`Hard: ${leetCodeData.hard} solved`)}
                onMouseLeave={() => setActiveTooltip(null)}
                tabIndex={0}
                role="button"
                aria-label={`Hard: ${leetCodeData.hard}`}
                initial={isReducedMotion ? false : { strokeDasharray: '0, 100' }}
                animate={isInView ? { strokeDasharray: `${hardPct}, 100` } : {}}
                transition={{ duration: 0.4, delay: 0.8, ease: 'easeOut' }}
              />
            </svg>

            {/* Center Count-Up Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-headline text-3xl font-extrabold text-on-surface tabular-nums">
                {displayCount}
              </span>
              <span className="font-code text-xs text-on-surface-variant font-medium mt-0.5">
                {activeTooltip || 'Solved'}
              </span>
            </div>
          </div>
        </div>

        {/* Legend Cards */}
        <div className="grid grid-cols-3 gap-2 text-center pt-2">
          <div className="p-2 rounded-xl bg-secondary-container/20 border border-secondary/20">
            <span className="block font-headline text-base font-bold text-secondary">{leetCodeData.easy}</span>
            <span className="block font-label text-xs text-secondary font-semibold">Easy</span>
          </div>
          <div className="p-2 rounded-xl bg-tertiary-fixed/30 border border-tertiary-fixed-dim/40">
            <span className="block font-headline text-base font-bold text-tertiary">{leetCodeData.medium}</span>
            <span className="block font-label text-xs text-tertiary font-semibold">Medium</span>
          </div>
          <div className="p-2 rounded-xl bg-primary-container/15 border border-primary-container/30">
            <span className="block font-headline text-base font-bold text-primary">{leetCodeData.hard}</span>
            <span className="block font-label text-xs text-primary font-semibold">Hard</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-space-md mt-space-sm border-t border-outline-variant/40">
        <span className="inline-flex items-center gap-1 font-code text-xs text-on-surface font-semibold">
          <span>{leetCodeData.streak}-day streak</span>
          <span>🔥</span>
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-low font-label text-xs text-on-surface font-semibold">
          <span>{leetCodeData.badgeName}</span>
          <span>🏅</span>
        </span>
      </div>
    </div>
  );
};
