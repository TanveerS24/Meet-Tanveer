import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Terminal, Cpu } from 'lucide-react';
import { DEVELOPER_INFO, CODE_SNIPPETS } from '../../constants/data';
import PhotoPlaceholder from '../common/PhotoPlaceholder';
import AnimatedCodeBlock from '../common/AnimatedCodeBlock';

/**
 * HeroSection
 * 
 * Section 1: Opening / Hero
 * - Full-viewport dark scene with near-black noir shadows and fiery rim lighting
 * - Eyebrow "WELCOME TO MY WORLD"
 * - Massive bold display name "TANVEER" in orange-red gradient
 * - Full-body cutout portrait placeholder overlapping the name
 * - Vertical label stack on left edge
 * - Pill badge "● DEVELOPER — TANVEER"
 * - Stylized animated code-block terminal in background replacing filmed footage
 * - Scroll-down indicator
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-noir-950"
    >
      {/* Noir Gradient & Ambient Radial Glow Backdrops */}
      <div className="absolute inset-0 bg-noir-gradient pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-flame-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-flame-glow/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Vertical Edge Label Stack (Left side) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 pointer-events-none select-none">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-flame-500/60 to-flame-400" />
        <span className="text-[10px] font-mono tracking-[0.35em] text-noir-muted/70 uppercase [writing-mode:vertical-rl] rotate-180">
          {DEVELOPER_INFO.verticalLabels.join('  •  ')}
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-t from-transparent via-flame-500/60 to-flame-400" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Eyebrow, Giant Name, Badge, CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Eyebrow & Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-900/90 border border-flame-500/40 shadow-flame-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-flame-400 animate-ping" />
              <span className="text-xs font-mono font-medium text-flame-300 tracking-wider">
                {DEVELOPER_INFO.badge}
              </span>
            </div>
            <span className="text-xs font-mono text-noir-muted tracking-widest uppercase">
              // WELCOME TO MY WORLD
            </span>
          </motion.div>

          {/* Massive Display Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-none select-none">
              <span className="bg-gradient-to-r from-flame-500 via-flame-300 to-flame-100 bg-clip-text text-transparent text-glow-flame">
                {DEVELOPER_INFO.name}
              </span>
            </h1>
            <p className="mt-2 text-sm sm:text-base font-mono text-flame-glow/90 tracking-widest uppercase">
              {DEVELOPER_INFO.role}
            </p>
          </motion.div>

          {/* Bio & Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-noir-text/80 max-w-xl leading-relaxed font-sans"
          >
            {DEVELOPER_INFO.bio}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-flame-500 via-flame-400 to-amber-500 hover:from-flame-400 hover:to-amber-400 text-black font-bold font-mono text-sm tracking-wider shadow-flame-md hover:shadow-flame-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Code2 className="w-4 h-4" />
              <span>EXPLORE WORK</span>
            </a>
            <a
              href="#journey"
              className="px-6 py-3.5 rounded-xl bg-noir-900/90 hover:bg-noir-800 border border-white/10 hover:border-flame-500/50 text-white font-mono text-sm tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-flame-400" />
              <span>THE JOURNEY</span>
            </a>
          </motion.div>

          {/* Mini Stats Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full"
          >
            {DEVELOPER_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="font-display font-bold text-xl sm:text-2xl text-white">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono text-noir-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Hero Portrait Placeholder Overlapping Animated Code Terminal */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
          {/* Background Animated Code Panel (Developer Motif replacing footage) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full max-w-lg shadow-2xl relative z-10"
          >
            <AnimatedCodeBlock
              filename="Tanveer.config.ts"
              code={CODE_SNIPPETS.heroSnippet}
              language="typescript"
              autoType={true}
              typingSpeed={14}
            />
          </motion.div>

          {/* Overlapping Hero Full-Body Portrait Silhouette Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full max-w-sm mt-6 relative z-20"
          >
            {/*
              HERO PORTRAIT PHOTO SLOT
              Path: /src/assets/images/hero-portrait.png
              Ideal asset: Full-body transparent cutout or high-contrast noir portrait
              with dramatic warm rim lighting matching the Spider-Noir / Orange flare palette.
            */}
            <PhotoPlaceholder
              src="/src/assets/images/hero-portrait.png"
              alt="Tanveer Developer Hero Portrait"
              type="portrait"
              glowColor="orange"
              idealDescription="Place full-body transparent PNG cutout with dramatic rim lighting and noir silhouette."
              className="w-full border-flame-500/40"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll-Down Indicator */}
      <motion.a
        href="#tools"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-noir-muted hover:text-flame-400 transition-colors select-none cursor-pointer"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-flame-400 animate-bounce" />
        </div>
      </motion.a>
    </section>
  );
}
