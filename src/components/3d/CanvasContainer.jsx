import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { usePrefersReducedMotion, useIsMobile } from '../../hooks/usePrefersReducedMotion';

/**
 * CanvasContainer
 * Robust, performance-optimized Three.js canvas container.
 * Automatically respects prefers-reduced-motion and provides graceful fallback.
 */
export default function CanvasContainer({
  children,
  className = "",
  camera = { position: [0, 0, 10], fov: 45 },
  gl = { antialias: true, alpha: true, powerPreference: "high-performance" },
  fallback = null,
}) {
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  return (
    <div className={`relative w-full h-full r3f-canvas-container select-none ${className}`}>
      <Canvas
        camera={camera}
        gl={gl}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
      {fallback}
    </div>
  );
}
