import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Cpu, Code2, Terminal, CheckCircle2 } from 'lucide-react';
import CanvasContainer from '../3d/CanvasContainer';
import DigitalUniverseScene from '../3d/DigitalUniverseScene';
import { TOOLS_DATA } from '../../constants/data';
import PhotoPlaceholder from '../common/PhotoPlaceholder';

/**
 * ToolsSection ("The Digital Universe")
 * 
 * Section 2:
 * - 3D React Three Fiber universe canvas with glowing Catmull-Rom tube path
 * - Floating developer tool nodes (React, TypeScript, Node.js, Python, Git, Docker, AWS, etc.)
 * - Center silhouette figure placeholder with volumetric beacon
 * - Layered accessible DOM controls
 * - Heading: "THE TOOLS BEHIND THE CODE"
 */
export default function ToolsSection() {
  const [activeToolId, setActiveToolId] = useState('react');

  const selectedTool = TOOLS_DATA.find((t) => t.id === activeToolId) || TOOLS_DATA[0];

  return (
    <section
      id="tools"
      className="relative min-h-screen w-full py-24 px-4 md:px-8 bg-noir-950 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-radial-gradient from-flame-500/5 via-transparent to-transparent pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-noir-900 border border-flame-500/40 text-xs font-mono text-flame-300">
              <Layers className="w-3.5 h-3.5 text-flame-400" />
              <span>THE DIGITAL UNIVERSE // 01</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              THE TOOLS BEHIND <span className="bg-gradient-to-r from-flame-500 to-amber-400 bg-clip-text text-transparent">THE CODE</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-mono text-noir-muted">
            An interconnected 3D ecosystem of languages, runtimes, cloud platforms, and modern AI pipelines orchestrated to build resilient architectures.
          </p>
        </div>
      </div>

      {/* Center 3D Interactive Canvas */}
      <div className="relative w-full h-[520px] md:h-[620px] my-6 z-10 rounded-3xl overflow-hidden border border-white/10 bg-noir-900/40 shadow-2xl">
        <CanvasContainer camera={{ position: [0, 0, 8.5], fov: 48 }}>
          <DigitalUniverseScene
            activeToolId={activeToolId}
            setActiveToolId={setActiveToolId}
          />
        </CanvasContainer>

        {/* 3D Scene Controls HUD (Top-Right overlay) */}
        <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-noir-950/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-noir-muted">
          <span className="w-2 h-2 rounded-full bg-flame-400 animate-pulse" />
          <span>DRAG TO ROTATE 3D ECOSYSTEM</span>
        </div>

        {/* Active Node Inspector Floating Overlay (Bottom-Left) */}
        <div className="absolute bottom-6 left-6 z-20 max-w-xs w-full p-4 rounded-2xl bg-noir-950/90 border border-flame-500/40 backdrop-blur-xl shadow-flame-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-flame-400">
              {selectedTool.category}
            </span>
            <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded bg-flame-500/20 border border-flame-500/30">
              {selectedTool.level}
            </span>
          </div>
          <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full shadow-sm"
              style={{ backgroundColor: selectedTool.color }}
            />
            {selectedTool.name}
          </h3>
          <p className="text-xs text-noir-muted leading-relaxed font-sans">
            Engineered into production systems with strict performance budgets, type-safety, and automated continuous delivery.
          </p>
        </div>
      </div>

      {/* Accessible DOM Tool Pills Strip */}
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {TOOLS_DATA.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveToolId(tool.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                activeToolId === tool.id
                  ? 'bg-flame-500 text-black border-flame-400 font-bold shadow-flame-sm scale-105'
                  : 'bg-noir-900/90 text-noir-muted hover:text-white border-white/10 hover:border-flame-500/40'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: tool.color }}
              />
              <span>{tool.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
