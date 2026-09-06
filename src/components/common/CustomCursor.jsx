import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CustomCursor
 * High-precision noir glowing reticle cursor for desktop experiences.
 */
export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const onInteractiveHover = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onInteractiveHover);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onInteractiveHover);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Ring */}
      <motion.div
        className="absolute rounded-full border border-flame-400/80 -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovered ? 52 : 28,
          height: isHovered ? 52 : 28,
          backgroundColor: isHovered ? 'rgba(255, 69, 0, 0.12)' : 'rgba(255, 69, 0, 0)',
          borderColor: isHovered ? '#ff8c00' : 'rgba(255, 69, 0, 0.6)',
          boxShadow: isHovered ? '0 0 20px rgba(255, 69, 0, 0.5)' : 'none',
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 32,
          mass: 0.5,
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-flame-300 -translate-x-1/2 -translate-y-1/2 shadow-flame-sm"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 40,
        }}
      />
    </div>
  );
}
