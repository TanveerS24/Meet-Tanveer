import React from 'react';
import { motion } from 'framer-motion';
import { User, Quote, Sparkles, Terminal, CheckCircle, Shield, Zap, Globe } from 'lucide-react';
import { DEVELOPER_INFO, CODE_SNIPPETS } from '../../constants/data';
import PhotoPlaceholder from '../common/PhotoPlaceholder';
import AnimatedCodeBlock from '../common/AnimatedCodeBlock';

/**
 * AboutSection
 * 
 * Section 6: About Me
 * - Name in large display type
 * - Photo placeholder for moody noir portrait
 * - Sharp quote line: "CLEAN CODE SPEAKS LOUDER."
 * - Small label: "A DEVELOPER'S WORLD"
 * - 2-3 sentence bio
 * - Small top-left tags: "IDEAS — CODE — EXPERIENCES — REAL IMPACT"
 * - Architecture & Craft Pillars
 */
export default function AboutSection() {
  const pillars = [
    {
      icon: Zap,
      title: "Sub-Millisecond Performance",
      desc: "Profiling render passes, edge caching, zero-runtime overhead, and database query index optimizations.",
    },
    {
      icon: Shield,
      title: "Fault-Tolerant Architectures",
      desc: "Distributed consensus, circuit breakers, idempotency, and automated healing cloud workloads.",
    },
    {
      icon: Globe,
      title: "Cinematic Interaction Design",
      desc: "Harmonizing physics-driven springs, 3D WebGL scenes, and strict accessibility standards.",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-28 px-4 md:px-8 bg-noir-950 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-flame-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        {/* Top-Left Tags */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-flame-300">
            {DEVELOPER_INFO.aboutTags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span className="px-2.5 py-1 rounded bg-noir-900 border border-flame-500/30 uppercase tracking-widest">
                  {tag}
                </span>
                {idx < DEVELOPER_INFO.aboutTags.length - 1 && (
                  <span className="text-noir-muted select-none">—</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <span className="text-xs font-mono text-noir-muted uppercase tracking-widest">
            // A DEVELOPER'S WORLD
          </span>
        </div>

        {/* Main Content Grid: Portrait & Bio / Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Moody Portrait Slot with Rim Glow */}
          <div className="lg:col-span-5 relative">
            {/*
              ABOUT PORTRAIT PHOTO SLOT
              Path: /src/assets/images/about-portrait.png
              Ideal asset: Close-up moody noir developer portrait with high contrast,
              subtle shadows, and warm orange edge lighting.
            */}
            <PhotoPlaceholder
              src="/src/assets/images/about-portrait.png"
              alt="About Tanveer Portrait"
              type="portrait"
              glowColor="orange"
              idealDescription="Close-up moody noir portrait with high contrast, deep shadows, and warm orange rim lighting."
              className="w-full shadow-2xl"
            />

            {/* Floating Terminal Snippet in Corner */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-72 z-20 shadow-2xl">
              <AnimatedCodeBlock
                filename="Architect.ts"
                code={CODE_SNIPPETS.aboutSnippet}
                language="typescript"
                autoType={false}
                glowEffect={false}
              />
            </div>
          </div>

          {/* Right: Large Name, Sharp Quote & Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-noir-900 border border-flame-500/40 text-xs font-mono text-flame-300">
                <User className="w-3.5 h-3.5 text-flame-400" />
                <span>ABOUT // ARCHITECT</span>
              </div>

              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                {DEVELOPER_INFO.fullName}
              </h2>

              {/* Sharp Quote Line */}
              <div className="p-6 rounded-2xl bg-noir-900/90 border-l-4 border-flame-500 border-t border-r border-b border-white/10 backdrop-blur-xl shadow-flame-sm space-y-2">
                <div className="flex items-center gap-2 text-flame-400">
                  <Quote className="w-5 h-5 fill-current opacity-80" />
                  <span className="font-display font-bold text-lg sm:text-xl tracking-wide text-white">
                    "{DEVELOPER_INFO.quote}"
                  </span>
                </div>
                <p className="text-xs font-mono text-noir-muted">
                  Code isn't just instructions for machines — it's the fundamental architecture of human digital leverage.
                </p>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-noir-text/90 leading-relaxed font-sans">
                <p>
                  I'm a full-stack engineer and creative technologist specializing in crafting mission-critical systems and immersive web applications. My work spans distributed event processing, microservices, and high-performance WebGL graphics.
                </p>
                <p className="text-noir-muted text-sm sm:text-base">
                  When I’m not profiling async loops or tuning Docker clusters, I build open-source primitives and explore the frontiers of human-AI collaboration.
                </p>
              </div>
            </div>

            {/* Three Pillars of Engineering */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-noir-900/80 border border-white/10 hover:border-flame-500/40 transition-colors space-y-2"
                  >
                    <Icon className="w-5 h-5 text-flame-400" />
                    <h4 className="font-mono font-bold text-xs text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-noir-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
