import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu } from 'lucide-react';

/**
 * TransitionBeat
 * 
 * Section 5: Transition Beat
 * - Full-screen kinetic typography beat between Projects & About
 * - "REAL PROJECTS. REAL CODE. REAL IMPACT."
 * - Pulsing flame glow, neon scanlines, and animated particle flares
 */
export default function TransitionBeat() {
  const words = [
    { text: "REAL PROJECTS.", glow: "text-white" },
    { text: "REAL CODE.", glow: "bg-gradient-to-r from-flame-500 to-flame-300 bg-clip-text text-transparent text-glow-flame" },
    { text: "REAL IMPACT.", glow: "bg-gradient-to-r from-flame-glow via-amber-300 to-white bg-clip-text text-transparent text-glow-amber" },
  ];

  return (
    <section className="relative min-h-[70vh] w-full flex items-center justify-center py-24 px-4 bg-noir-950 overflow-hidden border-y border-white/5 select-none">
      {/* Dynamic Animated Core Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[300px] rounded-full bg-flame-500 blur-[130px] pointer-events-none"
      />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Central Kinetic Typography Stack */}
      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-900/90 border border-flame-500/40 text-xs font-mono text-flame-300 tracking-widest shadow-flame-sm"
        >
          <Cpu className="w-3.5 h-3.5 text-flame-400" />
          <span>MANIFESTO // CORE PRINCIPLES</span>
        </motion.div>

        <div className="space-y-2 sm:space-y-4">
          {words.map((item, idx) => (
            <motion.h2
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.18 }}
              className={`font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none ${item.glow}`}
            >
              {item.text}
            </motion.h2>
          ))}
        </div>

        {/* Ambient Horizontal Pulse Line */}
        <div className="pt-8 flex items-center justify-center gap-4 max-w-md mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-flame-500/60 to-transparent" />
          <span className="w-2 h-2 rounded-full bg-flame-400 shadow-flame-sm animate-ping" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-flame-500/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
