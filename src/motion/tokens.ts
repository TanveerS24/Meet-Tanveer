import { useReducedMotion } from 'framer-motion';

// Motion token constants
export const MOTION_DURATIONS = {
  fast: 0.15,   // 150ms
  normal: 0.3,  // 300ms
  slow: 0.6,    // 600ms
  flip: 0.5,    // 500ms
} as const;

export const MOTION_EASINGS = {
  easeOut: [0.16, 1, 0.3, 1],
  softSpring: { type: 'spring', stiffness: 300, damping: 25 },
  gentleSpring: { type: 'spring', stiffness: 120, damping: 14 },
} as const;

/**
 * Custom hook providing a safe gate for reduced motion.
 * When prefers-reduced-motion is true, returns true so components render static states.
 */
export function useAnimationGate() {
  const shouldReduceMotion = useReducedMotion();
  return {
    isReducedMotion: !!shouldReduceMotion,
  };
}
