import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Navigation, CheckCircle2, Award, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import CanvasContainer from '../3d/CanvasContainer';
import TimeMachineScene from '../3d/TimeMachineScene';
import CompassRadar from '../common/CompassRadar';
import PhotoPlaceholder from '../common/PhotoPlaceholder';
import { TIMELINE_DATA } from '../../constants/data';

/**
 * JourneySection ("The Time Machine")
 * 
 * Section 3:
 * - Rising glowing 3D tube path trending upward through 2022 → 2026
 * - Billboarded 3D milestone planes floating off path
 * - SVG radar / compass HUD overlay
 * - Silhouette peak beacon with concentric glow rings
 * - Heading: "THE JOURNEY SO FAR"
 */
export default function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(4); // Default to current 2026

  const currentMilestone = TIMELINE_DATA[activeIndex] || TIMELINE_DATA[4];

  return (
    <section
      id="journey"
      className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-noir-950 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-flame-500/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-20 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-noir-900 border border-flame-500/40 text-xs font-mono text-flame-300">
              <Clock className="w-3.5 h-3.5 text-flame-400" />
              <span>THE TIME MACHINE // 02</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              THE JOURNEY <span className="bg-gradient-to-r from-flame-500 to-amber-400 bg-clip-text text-transparent">SO FAR</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-mono text-noir-muted">
            Chronological progression from foundational algorithmic craft to zero-latency distributed cloud systems and AI-powered interfaces.
          </p>
        </div>

        {/* Main Grid: 3D Chrono Visualizer + Milestone HUD Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D Time Machine Canvas with Radar HUD Overlay */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[580px] rounded-3xl overflow-hidden border border-white/10 bg-noir-900/40 shadow-2xl">
            <CanvasContainer camera={{ position: [0, 1, 9], fov: 48 }}>
              <TimeMachineScene
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </CanvasContainer>

            {/* SVG Radar Compass HUD Overlay (Top-Right) */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <CompassRadar className="w-32 h-32 md:w-40 md:h-40" />
            </div>

            {/* Timeline Year Stepper (Bottom Overlay) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 p-1.5 rounded-full bg-noir-950/90 border border-flame-500/40 backdrop-blur-xl shadow-flame-sm">
              <button
                onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className="p-1.5 rounded-full text-noir-muted hover:text-white disabled:opacity-30 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {TIMELINE_DATA.map((item, idx) => (
                <button
                  key={item.year}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeIndex === idx
                      ? 'bg-flame-500 text-black shadow-flame-sm'
                      : 'text-noir-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.year}
                </button>
              ))}
              <button
                onClick={() => setActiveIndex(Math.min(TIMELINE_DATA.length - 1, activeIndex + 1))}
                disabled={activeIndex === TIMELINE_DATA.length - 1}
                className="p-1.5 rounded-full text-noir-muted hover:text-white disabled:opacity-30 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Selected Year Milestone Detailed Breakdown & Peak Photo Slot */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              key={currentMilestone.year}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-8 rounded-3xl bg-noir-900/90 border border-flame-500/30 backdrop-blur-xl shadow-flame-md space-y-5"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-display font-black text-4xl text-flame-300">
                    {currentMilestone.year}
                  </span>
                  <div className="px-2.5 py-0.5 rounded bg-flame-500/20 border border-flame-500/40 text-[10px] font-mono text-flame-200 uppercase">
                    PHASE 0{activeIndex + 1}
                  </div>
                </div>
                <span className="text-[11px] font-mono text-noir-muted">
                  {currentMilestone.coords}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-2xl text-white">
                  {currentMilestone.title}
                </h3>
                <p className="text-sm font-mono text-flame-glow">
                  {currentMilestone.tagline}
                </p>
              </div>

              <p className="text-sm text-noir-text/90 leading-relaxed font-sans">
                {currentMilestone.description}
              </p>

              {/* Key Milestones Pill List */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-noir-muted">
                  Key Vector Achievements:
                </span>
                <div className="space-y-2">
                  {currentMilestone.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-flame-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Peak Milestone Photo Placeholder Slot */}
            <div className="space-y-2">
              {/*
                TIMELINE PEAK PHOTO SLOT
                Path: /src/assets/images/timeline-peak.png
                Ideal asset: Silhouette photo of developer standing atop summit / server rack
                with warm backlight and concentric underfoot rings.
              */}
              <PhotoPlaceholder
                src="/src/assets/images/timeline-peak.png"
                alt="Timeline Peak Developer Silhouette"
                type="landscape"
                glowColor="amber"
                idealDescription="Peak apex silhouette photo: Developer standing on luminous platform with concentric glow rings."
                className="w-full h-36"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
