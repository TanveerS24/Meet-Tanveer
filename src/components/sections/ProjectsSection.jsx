import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Code2, Sparkles, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import GlowingCard from '../common/GlowingCard';
import PhotoPlaceholder from '../common/PhotoPlaceholder';
import AnimatedCodeBlock from '../common/AnimatedCodeBlock';
import { PROJECTS_DATA } from '../../constants/data';

/**
 * ProjectsSection
 * 
 * Section 4: Projects Showcase
 * - 5 projects in a dynamic tilted orbit / staggered grid layout
 * - Interactive 3D hover-tilt cards with glowing fiery borders
 * - Image screenshot placeholders with clearly commented paths (/src/assets/images/project-0X.png)
 * - Code snippet peek modal / inline toggle
 * - External repo & live demo links
 */
export default function ProjectsSection() {
  const [activeCodePreview, setActiveCodePreview] = useState(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-28 px-4 md:px-8 bg-noir-950 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-flame-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-flame-glow/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-noir-900 border border-flame-500/40 text-xs font-mono text-flame-300">
              <Briefcase className="w-3.5 h-3.5 text-flame-400" />
              <span>FEATURED PRODUCTION WORK // 03</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              SCATTERED <span className="bg-gradient-to-r from-flame-500 via-flame-300 to-amber-400 bg-clip-text text-transparent">UNIVERSE</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-mono text-noir-muted">
            Mission-critical distributed systems, high-speed telemetry applications, and developer tools built with obsession for scale and polish.
          </p>
        </div>

        {/* Scattered / Orbit Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {PROJECTS_DATA.map((project, index) => {
            // Vary grid span and rotation for scattered orbit aesthetic
            const colSpan = index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
            const tiltAngle = index % 2 === 0 ? 8 : -8;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                className={`${colSpan} flex`}
              >
                <GlowingCard
                  tiltStrength={tiltAngle}
                  className="w-full flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Top Bar: Number & Metrics Pill */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-black text-2xl text-flame-400">
                          {project.number}
                        </span>
                        <span className="text-[10px] font-mono text-noir-muted uppercase">
                          // {project.subtitle}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-flame-500/15 border border-flame-500/30 text-[10px] font-mono text-flame-200">
                        {project.metrics}
                      </span>
                    </div>

                    {/* Project Screenshot Placeholder */}
                    <div className="relative group/image">
                      {/*
                        PROJECT SCREENSHOT PHOTO SLOT
                        Path: project.imagePath (e.g. /src/assets/images/project-01.png)
                        Ideal asset: project.imageComment
                      */}
                      <PhotoPlaceholder
                        src={project.imagePath}
                        alt={`${project.title} Screenshot`}
                        type="card"
                        glowColor={index % 2 === 0 ? "orange" : "amber"}
                        idealDescription={project.imageComment}
                        className="w-full"
                      />

                      {/* Code Peek Trigger Button */}
                      <button
                        onClick={() =>
                          setActiveCodePreview(
                            activeCodePreview === project.id ? null : project.id
                          )
                        }
                        className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-lg bg-noir-950/90 hover:bg-flame-500 text-noir-text hover:text-black border border-white/10 hover:border-flame-400 text-xs font-mono font-medium transition-all duration-300 flex items-center gap-1.5 shadow-lg backdrop-blur-md cursor-pointer"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>{activeCodePreview === project.id ? "HIDE CODE" : "VIEW CODE"}</span>
                      </button>
                    </div>

                    {/* Inline Animated Code Snippet (When toggled) */}
                    {activeCodePreview === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-2"
                      >
                        <AnimatedCodeBlock
                          filename={`${project.id}.ts`}
                          code={project.codeSnippet}
                          language="typescript"
                          autoType={false}
                          glowEffect={false}
                        />
                      </motion.div>
                    )}

                    {/* Project Title & Description */}
                    <div className="space-y-1.5 pt-1">
                      <h3 className="font-display font-bold text-2xl text-white group-hover:text-flame-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-noir-muted leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Tags & Action Links */}
                  <div className="pt-6 mt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded bg-noir-800 border border-white/5 text-[10px] font-mono text-noir-text/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-noir-800 hover:bg-noir-700 text-noir-muted hover:text-white border border-white/5 transition-colors cursor-pointer"
                        title="View Source Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-flame-500/20 hover:bg-flame-500 text-flame-300 hover:text-black border border-flame-500/40 text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-flame-sm"
                      >
                        <span>DEPLOYMENT</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
