// Design Tokens & Animation Variants for Cinematic Developer Portfolio

export const THEME_COLORS = {
  bg: '#050507',
  bgCard: '#0f0f13',
  bgElevated: '#14141a',
  accentPrimary: '#ff4500', // Fiery Red-Orange
  accentSecondary: '#ff8c00', // Amber-Orange
  accentGlow: '#ffb703', // Warm Gold Glow
  accentHighlight: '#ffb347',
  coolRim: '#38bdf8', // Noir cool rim light balance
  textPrimary: '#f5f5f0',
  textMuted: '#9ca3af',
  borderSubtle: 'rgba(255, 255, 255, 0.08)',
  borderFlame: 'rgba(255, 69, 0, 0.3)',
};

export const MOTION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 35 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  },
  scaleGlow: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  },
  glowPulse: {
    animate: {
      boxShadow: [
        '0 0 15px rgba(255, 69, 0, 0.2)',
        '0 0 35px rgba(255, 140, 0, 0.45)',
        '0 0 15px rgba(255, 69, 0, 0.2)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
};
