import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';

/**
 * PhotoPlaceholder component for cinematic developer portfolio.
 * 
 * Hard Constraint #3:
 * Images are placeholders until real files are placed under /src/assets/images/.
 * Renders a stylized high-contrast noir silhouette/gradient box with fiery rim lighting.
 * If the actual image file is present at `src`, it gracefully loads and reveals it.
 */
export default function PhotoPlaceholder({
  src,
  alt = "Developer Portrait Placeholder",
  type = "portrait", // 'portrait' | 'landscape' | 'fullbody' | 'card'
  idealDescription = "Place high-contrast noir photo here with dramatic rim lighting and transparent or dark background.",
  className = "",
  glowColor = "orange", // 'orange' | 'amber' | 'cyan'
  children,
}) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const glowStyles = {
    orange: 'from-flame-500/20 via-flame-400/5 to-transparent border-flame-500/30 group-hover:border-flame-400/60 shadow-flame-sm',
    amber: 'from-flame-glow/20 via-flame-glow/5 to-transparent border-flame-glow/30 group-hover:border-flame-glow/60',
    cyan: 'from-neon-cyan/20 via-neon-cyan/5 to-transparent border-neon-cyan/30 group-hover:border-neon-cyan/60',
  };

  const aspectMap = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[16/9]',
    fullbody: 'aspect-[2/3] min-h-[480px]',
    card: 'aspect-[16/10]',
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-noir-800 to-noir-950 border transition-all duration-700 group ${aspectMap[type] || ''} ${glowStyles[glowColor] || glowStyles.orange} ${className}`}
    >
      {/* Real image if available */}
      {src && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setHasLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            hasLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
        />
      )}

      {/* Noir Silhouette / Placeholder Canvas */}
      {(!hasLoaded || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
          {/* Ambient Cyber Grid & Glow Ring */}
          <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-flame-500/10 pointer-events-none" />

          {/* Central Silhouette Avatar Graphic */}
          <div className="relative mb-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-b from-noir-700 to-noir-900 border border-flame-500/40 flex items-center justify-center shadow-flame-sm group-hover:scale-105 transition-transform duration-500">
              <Camera className="w-8 h-8 text-flame-300 opacity-80 animate-pulse" />
            </div>
            {/* Dramatic Rim Light Flare */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-flame-500/40 via-transparent to-neon-cyan/30 blur-md pointer-events-none" />
          </div>

          {/* Asset Label & Guidance */}
          <div className="relative z-10 max-w-xs space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-noir-850/80 border border-flame-500/30 text-[10px] font-mono tracking-widest text-flame-300 uppercase">
              <Sparkles className="w-3 h-3 text-flame-glow" />
              <span>Asset Placeholder</span>
            </div>
            <p className="text-xs font-mono text-noir-text/80 truncate px-2" title={src}>
              {src || '/src/assets/images/placeholder.png'}
            </p>
            <p className="text-[11px] text-noir-muted leading-relaxed line-clamp-2">
              {idealDescription}
            </p>
          </div>

          {/* Noir Corner Brackets for High-Tech HUD feel */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-flame-500/50" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-flame-500/50" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-flame-500/50" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-flame-500/50" />
        </div>
      )}

      {/* Children overlays if any */}
      {children}
    </div>
  );
}
