import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-surface-container-high/30">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-container via-tertiary-fixed to-secondary-container origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
