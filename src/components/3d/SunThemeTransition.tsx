import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunModel } from './SunModel';

/**
 * Immersive full-screen Sun transition overlay when switching from dark mode to light mode.
 *
 * Sequence:
 * 1. Screen dims into an immersive focused overlay (0.0s - 0.8s) as the Sun flies in from the bottom-left.
 * 2. Sun locks into the center for a dedicated 2.5s golden showcase (0.8s - 3.3s), spinning with radiant flares and corona glow.
 * 3. Sun swoops down into the bottom-right (3.3s - 4.1s) and reveals the crisp light mode.
 */
export const SunThemeTransition: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleTrigger = () => {
      setIsVisible(true);
    };

    window.addEventListener('sun-theme-light-transition', handleTrigger);
    return () => {
      window.removeEventListener('sun-theme-light-transition', handleTrigger);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          onClick={handleDismiss}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden cursor-pointer select-none [perspective:1200px]"
        >
          {/* Immersive Darkened Backdrop Overlay - Isolates Sun Component Alone */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.92, 0.92, 0],
            }}
            transition={{
              duration: 4.1,
              times: [0, 0.18, 0.82, 1],
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl pointer-events-auto"
          />

          {/* Ambient Warm Golden Sunlight Bloom & Radial Flares */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: [0, 0.6, 0.85, 0.6, 0],
              scale: [0.3, 1.2, 1.6, 1.2, 0.4],
            }}
            transition={{
              duration: 4.1,
              times: [0, 0.2, 0.5, 0.8, 1],
              ease: 'easeInOut',
            }}
            className="absolute w-[700px] h-[700px] md:w-[950px] md:h-[950px] rounded-full bg-gradient-radial from-amber-400/40 via-yellow-400/20 to-transparent blur-3xl pointer-events-none"
          />

          {/* Corona Glow Ring Behind 3D Sun */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: 4.1,
              times: [0, 0.2, 0.8, 1],
              ease: 'linear',
            }}
            className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] pointer-events-none"
          >
            <div className="w-full h-full rounded-full border border-dashed border-amber-300/40 animate-pulse" />
          </motion.div>

          {/* Large Animated 3D Sun Trajectory:
              0.0s - 0.8s: Fly in from Bottom-Left (-60vw, 60vh) -> Center
              0.8s - 3.3s: 2.5s Center Stage Presence & 360° X-axis Spin
              3.3s - 4.1s: Fly out to Bottom-Right (+60vw, 60vh)
          */}
          <motion.div
            initial={{
              x: '-60vw',
              y: '60vh',
              scale: 0.35,
              opacity: 0,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
            }}
            animate={{
              x: ['-60vw', '0vw', '0vw', '60vw'],
              y: ['60vh', '0vh', '0vh', '60vh'],
              scale: [0.35, 1.15, 1.25, 0.35],
              opacity: [0, 1, 1, 0],
              rotateX: [0, 0, 360, 360],
              rotateY: 0,
              rotateZ: 0,
            }}
            transition={{
              duration: 4.1,
              times: [0, 0.2, 0.8, 1],
              ease: [0.25, 1, 0.35, 1],
            }}
            onAnimationComplete={() => setIsVisible(false)}
            className="relative flex flex-col items-center justify-center w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] md:w-[640px] md:h-[640px] pointer-events-none [transform-style:preserve-3d]"
          >
            {/* Floating Golden Status Capsule kept at the TOP with 360° spin */}
            <motion.div
              initial={{ opacity: 0, y: -25, scale: 0.85, rotateX: 0 }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                y: [-25, -25, 0, 0, -25],
                scale: [0.85, 0.85, 1, 1, 0.85],
                rotateX: [0, 0, 360, 360, 360],
              }}
              transition={{
                duration: 4.1,
                times: [0, 0.18, 0.45, 0.78, 0.95],
                ease: 'easeInOut',
              }}
              className="absolute -top-8 sm:-top-10 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 text-white font-label font-extrabold text-sm tracking-widest uppercase shadow-[0_4px_30px_rgba(245,158,11,0.5)] border border-amber-200/80 backdrop-blur-md flex items-center gap-2.5 z-20 pointer-events-auto"
            >
              <span className="material-symbols-outlined text-[20px] animate-spin">wb_sunny</span>
              <span>Light Mode Activated</span>
            </motion.div>

            {/* Deep Warm Solar Center Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-amber-400/40 via-amber-500/20 to-transparent blur-3xl" />

            {/* Dressed 3D Sun Model */}
            <div className="w-full h-full relative z-10 flex items-center justify-center">
              <SunModel speed={1.2} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
