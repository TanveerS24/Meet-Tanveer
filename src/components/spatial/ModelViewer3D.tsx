import React, { useState, useEffect } from 'react';
import { SunModel } from '../3d/SunModel';
import { useAnimationGate } from '../../motion/tokens';
import { trackEvent } from '../../analytics/AnalyticsProvider';

export const ModelViewer3D: React.FC = () => {
  const { isReducedMotion } = useAnimationGate();
  const [isPlaying, setIsPlaying] = useState(!isReducedMotion);
  const [autoRotate, setAutoRotate] = useState(true);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setWebglSupported(supported);
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported || isReducedMotion || !isPlaying) {
    return (
      <div className="rounded-[24px] bg-[#121829] border border-[#2C3760] p-space-md text-white flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[460px]">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary-container" />
            <span className="font-code text-xs text-gray-300">viewport: Sun.glb</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#1B2340] border border-[#2C3760] font-code text-xs text-[#79F3EA]">
              WebGL 2.0
            </span>
          </div>
        </div>

        {/* Isometric SVG Sun Graphic Fallback */}
        <div className="relative my-auto flex flex-col items-center justify-center h-72">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full text-primary-container drop-shadow-[0_0_25px_rgba(255,201,60,0.6)]" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="45" fill="#FFC93C" />
              <circle cx="100" cy="100" r="65" stroke="#FF6B57" strokeWidth="3" strokeDasharray="8 6" />
              <circle cx="100" cy="100" r="85" stroke="#79F3EA" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsPlaying(true);
              trackEvent('3d_play_click');
            }}
            className="mt-4 px-5 py-2.5 rounded-full bg-primary-container text-white font-label text-xs font-bold shadow-md hover:bg-primary transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">play_arrow</span>
            <span>Play Interactive 3D Sun Stage</span>
          </button>
        </div>

        <div className="relative z-10 pt-2 border-t border-[#2C3760] flex items-center justify-between text-xs text-gray-400 font-code">
          <span>Model: Blender 3D Sun | Format: GLB</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] bg-[#121829] border border-[#2C3760] p-[#1.5rem] text-white flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[460px] select-none">
      {/* Top Status Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-primary-container animate-pulse" />
          <span className="font-code text-xs text-gray-300">viewport: Sun.glb</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-[#1B2340] border border-[#2C3760] font-code text-xs text-[#79F3EA]">
            WebGL 2.0
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#1B2340] border border-[#2C3760] font-code text-xs text-[#FFC93C]">
            60 FPS
          </span>
        </div>
      </div>

      {/* 3D Canvas Stage with SunModel */}
      <div className="relative my-auto w-full h-80">
        {/* Ambient background glow ring behind Sun */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-64 h-64 bg-gradient-to-r from-[#FFC93C]/30 via-[#FF6B57]/20 to-transparent rounded-full blur-2xl animate-pulse" />
        </div>

        <SunModel className="w-full h-full relative z-10" autoRotate={autoRotate} />

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#1B2340]/90 border border-[#2C3760] font-code text-[11px] text-gray-300 flex items-center gap-1.5 shadow-md pointer-events-none z-20">
          <span className="material-symbols-outlined text-[14px] text-primary-container">touch_app</span>
          <span>Hover & Drag to rotate • Golden Sun PBR</span>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="relative z-10 pt-2 border-t border-[#2C3760] flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 font-code">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={autoRotate}
              onChange={(e) => {
                setAutoRotate(e.target.checked);
                trackEvent('3d_auto_rotate_toggle', { enabled: e.target.checked });
              }}
              className="w-3.5 h-3.5 rounded accent-primary-container"
            />
            <span>Auto-rotate</span>
          </label>
        </div>
        <span>Model: Blender 3D Sun | Rays & Spheres Included</span>
      </div>
    </div>
  );
};
