import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useAnimationGate } from '../../motion/tokens';
import { trackEvent } from '../../analytics/AnalyticsProvider';

interface StickerBadgeProps {
  icon: React.ReactNode;
  label: string;
  badgeClass?: string;
  rotateDeg?: number;
  bobDuration?: number;
  bobDelay?: number;
  onClickEffect?: string;
}

export const StickerBadge: React.FC<StickerBadgeProps> = ({
  icon,
  label,
  badgeClass = '',
  rotateDeg = 0,
  bobDuration = 3.5,
  bobDelay = 0,
  onClickEffect = 'confetti',
}) => {
  const { isReducedMotion } = useAnimationGate();
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    trackEvent('sticker_click', { label });

    // Trigger spin animation
    if (!isSpinning) {
      setIsSpinning(true);
      setTimeout(() => setIsSpinning(false), 600);
    }

    // Trigger lightweight confetti burst (<40 particles)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { x, y },
        colors: ['#FF6B57', '#79F3EA', '#FFC93C', '#5B9BFF'],
        disableForReducedMotion: true,
      });
    } catch (err) {
      // Fallback if canvas-confetti fails
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      animate={
        isReducedMotion
          ? { rotate: rotateDeg }
          : {
              y: [0, -6, 0],
              rotate: [rotateDeg - 2, rotateDeg + 2, rotateDeg - 2],
            }
      }
      transition={{
        y: { duration: bobDuration, repeat: Infinity, ease: 'easeInOut', delay: bobDelay },
        rotate: { duration: bobDuration * 1.2, repeat: Infinity, ease: 'easeInOut', delay: bobDelay },
      }}
      className={`cursor-pointer select-none z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-surface-elevated border border-outline-variant/60 shadow-md transition-transform duration-300 hover:scale-105 active:scale-95 ${
        isSpinning ? 'animate-[spin_0.6s_ease-in-out]' : ''
      } ${badgeClass}`}
    >
      {icon}
      <span className="font-label text-xs md:text-sm text-on-surface font-bold tracking-tight">
        {label}
      </span>
    </motion.div>
  );
};
