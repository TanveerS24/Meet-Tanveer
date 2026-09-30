import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAnimationGate } from '../../motion/tokens';

export const TrophyBadge: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const { isReducedMotion } = useAnimationGate();
  const [isWiggling, setIsWiggling] = useState(false);

  useEffect(() => {
    if (isReducedMotion || !isInView) return;

    // Trigger 700ms sparkle sweep and trophy wiggle every 5 seconds
    const interval = setInterval(() => {
      setIsWiggling(true);
      setTimeout(() => setIsWiggling(false), 700);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, isReducedMotion]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl bg-tertiary-fixed/30 border border-tertiary-fixed-dim/50 p-4 flex items-center gap-3 shadow-sm select-none"
    >
      {/* Sparkle Sweep Gradient Bar */}
      {!isReducedMotion && isWiggling && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine pointer-events-none" />
      )}

      <motion.span
        animate={isWiggling ? { rotate: [-10, 10, -5, 5, 0] } : {}}
        transition={{ duration: 0.5 }}
        className="material-symbols-outlined text-tertiary text-[28px] shrink-0"
      >
        emoji_events
      </motion.span>

      <div>
        <h4 className="font-headline font-bold text-base text-on-surface flex items-center gap-1.5">
          <span>Smart India Hackathon 2025</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-code font-bold">
            1st Place Champion
          </span>
        </h4>
        <p className="font-body text-xs text-on-surface-variant mt-0.5">
          Ministry of Education, Govt. of India • Selected out of 1,200+ competing engineering teams.
        </p>
      </div>
    </div>
  );
};
