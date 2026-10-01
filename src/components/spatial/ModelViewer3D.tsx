import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useAnimationGate } from '../../motion/tokens';
import { trackEvent } from '../../analytics/AnalyticsProvider';

function ProceduralTorusKnot({ autoRotate }: { autoRotate: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  useEffect(() => {
    return () => {
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        if (Array.isArray(meshRef.current.material)) {
          meshRef.current.material.forEach((m) => m.dispose());
        } else {
          meshRef.current.material.dispose();
        }
      }
    };
  }, []);

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
      <meshStandardMaterial
        color="#FF6B57"
        roughness={0.2}
        metalness={0.8}
        emissive="#AE3123"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

function ModelMesh({ autoRotate }: { autoRotate: boolean }) {
  try {
    const gltf = useGLTF('/models/showcase.glb', true);
    return <primitive object={gltf.scene} scale={1.5} />;
  } catch (err) {
    return <ProceduralTorusKnot autoRotate={autoRotate} />;
  }
}

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
            <span className="font-code text-xs text-gray-300">viewport: spatial_artifact_v4.glb</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#1B2340] border border-[#2C3760] font-code text-xs text-[#79F3EA]">
              WebGL 2.0
            </span>
          </div>
        </div>

        {/* Isometric SVG Crystal Stage from Stitch Design */}
        <div className="relative my-auto flex flex-col items-center justify-center h-72">
          <svg className="w-48 h-48 drop-shadow-[0_15px_30px_rgba(121,243,234,0.35)]" fill="none" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="facetA" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6B57" />
                <stop offset="100%" stopColor="#AE3123" />
              </linearGradient>
              <linearGradient id="facetB" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#79F3EA" />
                <stop offset="100%" stopColor="#006A65" />
              </linearGradient>
              <linearGradient id="facetC" x1="0%" x2="100%" y1="100%" y2="0%">
                <stop offset="0%" stopColor="#FFDF9A" />
                <stop offset="100%" stopColor="#C29400" />
              </linearGradient>
            </defs>
            <polygon points="100,20 170,60 100,100 30,60" fill="url(#facetB)" fillOpacity="0.9" />
            <polygon points="100,100 170,60 170,140 100,180" fill="url(#facetA)" fillOpacity="0.85" />
            <polygon points="100,100 30,60 30,140 100,180" fill="url(#facetC)" fillOpacity="0.95" />
            <line x1="100" y1="20" x2="100" y2="100" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="170" y2="60" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="30" y2="60" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="100" y2="180" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.5" />
          </svg>

          <button
            type="button"
            onClick={() => {
              setIsPlaying(true);
              trackEvent('3d_play_click');
            }}
            className="mt-4 px-5 py-2.5 rounded-full bg-primary-container text-white font-label text-xs font-bold shadow-md hover:bg-primary transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">play_arrow</span>
            <span>Play Interactive 3D Stage</span>
          </button>
        </div>

        <div className="relative z-10 pt-2 border-t border-[#2C3760] flex items-center justify-between text-xs text-gray-400 font-code">
          <span>Vertices: 14,820 | Materials: 3</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] bg-[#121829] border border-[#2C3760] p-[#1.5rem] text-white flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[460px] select-none">
      {/* Top Status Bar from Stitch */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-primary-container animate-pulse" />
          <span className="font-code text-xs text-gray-300">viewport: spatial_artifact_v4.glb</span>
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

      {/* 3D Canvas Stage */}
      <div className="relative my-auto w-full h-72 cursor-grab active:cursor-grabbing">
        {/* Orbital decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
          <div className="w-64 h-64 border border-dashed border-[#79F3EA] rounded-full animate-spin [animation-duration:30s]" />
          <div className="absolute w-44 h-44 border border-[#FF6B57] rounded-full" />
        </div>

        <Suspense
          fallback={
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-t-primary-container border-r-transparent animate-spin" />
              <span className="font-code text-xs">Loading WebGL Stage...</span>
            </div>
          }
        >
          <Canvas
            dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
            camera={{ position: [0, 0, 4.5], fov: 50 }}
            className="w-full h-full relative z-10"
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} />
            <ModelMesh autoRotate={autoRotate} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={autoRotate}
              autoRotateSpeed={2.5}
              dampingFactor={0.05}
            />
          </Canvas>
        </Suspense>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#1B2340]/90 border border-[#2C3760] font-code text-[11px] text-gray-300 flex items-center gap-1.5 shadow-md pointer-events-none z-20">
          <span className="material-symbols-outlined text-[14px] text-primary-container">touch_app</span>
          <span>Drag to rotate • Realtime PBR Shader</span>
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
        <span>Vertices: 14,820 | Materials: 3</span>
      </div>
    </div>
  );
};
