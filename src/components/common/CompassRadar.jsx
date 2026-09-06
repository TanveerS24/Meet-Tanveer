import React from 'react';
import { motion } from 'framer-motion';

/**
 * CompassRadar
 * 
 * Cinematic HUD overlay for "The Time Machine" section:
 * Rotating concentric radar rings, azimuth markers, and pulsating scanning sweep.
 */
export default function CompassRadar({ className = "" }) {
  return (
    <div className={`relative w-48 h-48 md:w-64 md:h-64 pointer-events-none select-none ${className}`}>
      {/* Outer Rotating Coordinate Ring */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full opacity-40 text-flame-400"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="8 8" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
        
        {/* Cardinal Ticks */}
        <line x1="100" y1="2" x2="100" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="100" y1="188" x2="100" y2="198" stroke="currentColor" strokeWidth="2" />
        <line x1="2" y1="100" x2="12" y2="100" stroke="currentColor" strokeWidth="2" />
        <line x1="188" y1="100" x2="198" y2="100" stroke="currentColor" strokeWidth="2" />

        <text x="100" y="24" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">N 00°</text>
        <text x="180" y="103" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">E 90°</text>
        <text x="100" y="180" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">S 180°</text>
        <text x="20" y="103" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">W 270°</text>
      </motion.svg>

      {/* Inner Counter-Rotating Sweep */}
      <motion.div
        className="absolute inset-4 rounded-full border border-flame-500/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-flame-glow shadow-flame-sm" />
        <div className="w-full h-full bg-gradient-to-tr from-transparent via-transparent to-flame-500/10 rounded-full" />
      </motion.div>

      {/* Center Target Cross */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-flame-500/80 shadow-flame-sm animate-ping" />
        <div className="w-1.5 h-1.5 rounded-full bg-white absolute" />
      </div>
    </div>
  );
}
