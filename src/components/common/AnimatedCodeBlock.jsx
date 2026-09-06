import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check, Sparkles, Cpu, Play } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * AnimatedCodeBlock
 * 
 * Hard Constraint #2:
 * Procedural developer visual motif replacing video footage with an atmospheric,
 * syntax-highlighted, auto-typing terminal HUD.
 */
export default function AnimatedCodeBlock({
  filename = "Tanveer.config.ts",
  code,
  language = "typescript",
  className = "",
  autoType = true,
  typingSpeed = 18,
  glowEffect = true,
}) {
  const [displayedCode, setDisplayedCode] = useState(autoType ? "" : code);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(filename);

  useEffect(() => {
    if (!autoType || !code) {
      setDisplayedCode(code);
      return;
    }

    let currentIndex = 0;
    setDisplayedCode("");

    const interval = setInterval(() => {
      if (currentIndex <= code.length) {
        setDisplayedCode(code.slice(0, currentIndex));
        currentIndex += 2;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [code, autoType, typingSpeed]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple token highlighter for high-performance noir styling
  const renderHighlightedCode = (text) => {
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      // Basic syntax coloring
      const tokens = line.split(/(\s+|[{}()[\];,."']|[a-zA-Z0-9_$]+)/g);
      
      return (
        <div key={lineIdx} className="table-row leading-relaxed font-mono">
          <span className="table-cell select-none pr-4 text-right text-xs text-noir-muted/40 font-mono w-8">
            {lineIdx + 1}
          </span>
          <span className="table-cell whitespace-pre text-xs md:text-sm">
            {tokens.map((token, tokenIdx) => {
              if (['const', 'let', 'var', 'export', 'import', 'from', 'async', 'await', 'function', 'class', 'return', 'readonly', 'type', 'interface'].includes(token)) {
                return <span key={tokenIdx} className="text-flame-400 font-semibold">{token}</span>;
              }
              if (['true', 'false', 'null', 'undefined'].includes(token) || /^\d+$/.test(token)) {
                return <span key={tokenIdx} className="text-flame-glow">{token}</span>;
              }
              if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
                return <span key={tokenIdx} className="text-amber-300">{token}</span>;
              }
              if (['Developer', 'Architect', 'StreamPipeline', 'OfflineSyncQueue', 'AutonomousAgent', 'Problem', 'Solution'].includes(token)) {
                return <span key={tokenIdx} className="text-neon-cyan font-medium">{token}</span>;
              }
              if (token.startsWith('//')) {
                return <span key={tokenIdx} className="text-noir-muted/70 italic">{token}</span>;
              }
              return <span key={tokenIdx} className="text-noir-text/90">{token}</span>;
            })}
          </span>
        </div>
      );
    });
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden glass-panel-flame border border-flame-500/30 transition-all duration-500 ${
        glowEffect ? 'shadow-flame-md' : 'shadow-lg'
      } ${className}`}
    >
      {/* Top Terminal HUD Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-noir-900/90 border-b border-flame-500/20 backdrop-blur-md select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/40" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400/40" />
          </div>
          <div className="ml-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-noir-800 border border-white/10 text-xs font-mono text-flame-200">
            <Terminal className="w-3.5 h-3.5 text-flame-400" />
            <span>{filename}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>NODE ACTIVE</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-noir-800 hover:bg-noir-700 text-noir-muted hover:text-white transition-colors border border-white/5"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Container */}
      <div className="p-4 overflow-x-auto bg-noir-950/90 text-noir-text/95 max-h-[420px] scrollbar-thin">
        <div className="table w-full">
          {renderHighlightedCode(displayedCode)}
        </div>
        {autoType && displayedCode.length < code.length && (
          <span className="inline-block w-2 h-4 bg-flame-400 ml-2 animate-pulse align-middle" />
        )}
      </div>

      {/* Subtle Bottom Ambient Gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-flame-500 via-flame-300 to-amber-500 opacity-60" />
    </div>
  );
}
