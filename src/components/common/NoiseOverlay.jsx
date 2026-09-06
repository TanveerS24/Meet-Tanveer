import React from 'react';

/**
 * NoiseOverlay provides subtle film grain and scanlines for the high-contrast noir aesthetic.
 * Completely procedural SVG data URI without loading any external video/gif assets.
 */
export default function NoiseOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.035] mix-blend-overlay select-none"
      aria-hidden="true"
    >
      <svg className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
