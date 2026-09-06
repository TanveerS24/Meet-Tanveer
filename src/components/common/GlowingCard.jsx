import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * GlowingCard
 * 
 * Interactive 3D tilt card with radial mouse-following gradient and fiery noir rim light.
 */
export default function GlowingCard({
  children,
  className = "",
  glowColor = "rgba(255, 69, 0, 0.25)",
  tiltStrength = 12,
  ...props
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    setMousePos({ x: xPercent, y: yPercent });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -tiltStrength;
    const rotY = ((x - centerX) / centerX) * tiltStrength;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={`relative rounded-2xl bg-noir-900/80 border border-white/10 p-6 backdrop-blur-xl transition-shadow duration-500 hover:border-flame-500/50 hover:shadow-flame-md group ${className}`}
      {...props}
    >
      {/* Mouse Radial Glow Accent */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Subtle Inner Highlight */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Noir Corner Accent */}
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-flame-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
