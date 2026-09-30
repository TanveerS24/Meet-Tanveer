import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useAnimationGate } from '../../motion/tokens';
import { trackEvent } from '../../analytics/AnalyticsProvider';

// Procedural rotating Torus Knot component with brand colors
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
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// GLTF loader component with procedural fallback
function ModelMesh({ autoRotate }: { autoRotate: boolean }) {
  const [loadError, setLoadError] = useState(false);

  try {
    const gltf = useGLTF('/models/showcase.glb', true);
    return <primitive object={gltf.scene} scale={1.5} />;
  } catch (err) {
    // If GLB model is missing, render procedural torus knot seamlessly
    return <ProceduralTorusKnot autoRotate={autoRotate} />;
  }
}

export const ModelViewer3D: React.FC = () => {
  const { isReducedMotion } = useAnimationGate();
  const [isPlaying, setIsPlaying] = useState(!isReducedMotion);
  const [autoRotate, setAutoRotate] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // Test WebGL context support
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
      <div className="relative w-full h-[400px] rounded-card bg-[#121829] border border-[#2C3760] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        {/* Static Canvas Fallback Graphic */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-4">
          <svg className="w-full h-full text-primary-container" viewBox="0 0 200 200" fill="none">
            <polygon points="100,20 170,60 100,100 30,60" fill="#79F3EA" fillOpacity="0.8" />
            <polygon points="100,100 170,60 170,140 100,180" fill="#FF6B57" fillOpacity="0.8" />
            <polygon points="100,100 30,60 30,140 100,180" fill="#FFC93C" fillOpacity="0.8" />
          </svg>
        </div>
        <p className="font-headline font-bold text-white text-lg mb-2">3D Spatial Viewport</p>
        <p className="font-body text-xs text-gray-400 max-w-sm mb-4">
          {isReducedMotion
            ? 'Reduced motion enabled. Real-time 3D rotation is paused.'
            : 'Interactive WebGL viewport is paused to conserve GPU resources.'}
        </p>
        <button
          type="button"
          onClick={() => {
            setIsPlaying(true);
            trackEvent('3d_play_click');
          }}
          className="px-5 py-2.5 rounded-full bg-primary-container text-white font-label text-sm font-bold shadow-md hover:bg-primary transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">play_arrow</span>
          <span>Play 3D Interactive Stage</span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[460px] rounded-card bg-[#121829] border border-[#2C3760] p-space-md text-white flex flex-col justify-between shadow-xl overflow-hidden select-none">
      {/* Top Status Bar */}
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

      {/* 3D Canvas viewport */}
      <div className="relative my-auto w-full h-72 cursor-grab active:cursor-grabbing">
        <Suspense
          fallback={
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-t-primary-container border-r-transparent animate-spin" />
              <span className="font-code text-xs">Loading WebGL 3D Mesh...</span>
            </div>
          }
        >
          <Canvas
            dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
            camera={{ position: [0, 0, 4.5], fov: 50 }}
            className="w-full h-full"
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

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#1B2340]/90 border border-[#2C3760] font-code text-[11px] text-gray-300 flex items-center gap-1.5 shadow-md pointer-events-none">
          <span className="material-symbols-outlined text-[14px] text-primary-container">touch_app</span>
          <span>Drag to rotate • Zoom disabled for scroll safety</span>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-10 pt-space-xs border-t border-[#2C3760] flex flex-wrap items-center justify-between gap-space-xs text-xs text-gray-400 font-code">
        <div className="flex items-center gap-space-md">
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
