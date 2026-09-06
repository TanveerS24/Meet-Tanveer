import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Billboard, Float } from '@react-three/drei';
import * as THREE from 'three';
import ParticleField from './ParticleField';
import GlowingTube from './GlowingTube';
import { TIMELINE_DATA } from '../../constants/data';

/**
 * TimelineBillboardNode
 */
function TimelineBillboardNode({ item, index, isActive, onSelect }) {
  // Calculated 3D coordinates ascending along an S-curve path
  const y = (index - 2) * 2.2;
  const x = Math.sin(index * 1.3) * 3.2;
  const z = Math.cos(index * 1.1) * 1.5 - 1;

  return (
    <group position={[x, y, z]}>
      {/* 3D Milestone Anchor Sphere */}
      <mesh>
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshStandardMaterial
          color={isActive ? '#ffffff' : '#ff4500'}
          emissive={isActive ? '#ffb703' : '#ff8c00'}
          emissiveIntensity={isActive ? 2 : 1}
        />
      </mesh>

      {/* Orbiting Halo Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[0.42, 0.02, 16, 32]} />
        <meshBasicMaterial color={isActive ? '#ffb703' : '#ff4500'} />
      </mesh>

      {/* Billboarded DOM Milestone Card */}
      <Billboard position={[x > 0 ? 1.8 : -1.8, 0, 0]}>
        <Html
          center
          distanceFactor={9}
          className="pointer-events-auto select-none"
        >
          <div
            onClick={() => onSelect(index)}
            className={`w-64 p-3.5 rounded-xl border backdrop-blur-xl transition-all duration-500 cursor-pointer ${
              isActive
                ? 'bg-noir-900/95 border-flame-400 shadow-flame-md scale-105'
                : 'bg-noir-950/80 border-white/10 hover:border-flame-500/50 hover:bg-noir-900/90'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="px-2 py-0.5 rounded bg-flame-500/20 border border-flame-500/40 text-xs font-mono font-bold text-flame-300">
                {item.year}
              </span>
              <span className="text-[10px] font-mono text-noir-muted">
                PHASE 0{index + 1}
              </span>
            </div>
            <h4 className="text-xs font-bold text-noir-text tracking-wide mb-1">
              {item.title}
            </h4>
            <p className="text-[11px] text-noir-muted line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        </Html>
      </Billboard>
    </group>
  );
}

/**
 * PeakApexBeacon
 * Pulsing concentric glow rings & silhouette figure standing at the path's peak (2026).
 */
function PeakApexBeacon({ position = [0, 5.2, -1] }) {
  const ringsRef = useRef();

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group position={position}>
      {/* Concentric Apex Glow Rings */}
      <group ref={ringsRef} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh>
          <ringGeometry args={[1.2, 1.28, 36]} />
          <meshBasicMaterial color="#ffb703" side={THREE.DoubleSide} />
        </mesh>
        <mesh>
          <ringGeometry args={[1.8, 1.86, 36]} />
          <meshBasicMaterial color="#ff4500" side={THREE.DoubleSide} transparent opacity={0.7} />
        </mesh>
        <mesh>
          <ringGeometry args={[2.4, 2.45, 36]} />
          <meshBasicMaterial color="#00f0ff" side={THREE.DoubleSide} transparent opacity={0.4} />
        </mesh>
      </group>

      {/* Upward Volumetric Apex Light Cone */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[2.5, 0.8, 4, 32, 1, true]} />
        <meshBasicMaterial
          color="#ff6200"
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Apex 2026 Trophy & Standing Developer Avatar */}
      <Billboard position={[0, 1.4, 0]}>
        <Html center className="pointer-events-none select-none">
          <div className="flex flex-col items-center">
            <div className="relative px-3 py-1 rounded-full bg-gradient-to-r from-flame-500 to-amber-500 border border-white/20 text-[10px] font-mono font-bold text-white shadow-flame-md tracking-wider">
              ✦ 2026 APEX PEAK
            </div>
            <div className="mt-2 w-10 h-18 rounded-t-xl bg-gradient-to-b from-flame-300 to-noir-900 border border-flame-400 shadow-flame-sm" />
          </div>
        </Html>
      </Billboard>
    </group>
  );
}

/**
 * TimeMachineScene
 */
export default function TimeMachineScene({ activeIndex, setActiveIndex, scrollProgress = 0 }) {
  const groupRef = useRef();

  // 3D Ascending Time Spline
  const timeSplinePoints = useMemo(() => {
    return [
      new THREE.Vector3(Math.sin(0 * 1.3) * 3.2, (0 - 2) * 2.2, Math.cos(0 * 1.1) * 1.5 - 1),
      new THREE.Vector3(Math.sin(1 * 1.3) * 3.2, (1 - 2) * 2.2, Math.cos(1 * 1.1) * 1.5 - 1),
      new THREE.Vector3(Math.sin(2 * 1.3) * 3.2, (2 - 2) * 2.2, Math.cos(2 * 1.1) * 1.5 - 1),
      new THREE.Vector3(Math.sin(3 * 1.3) * 3.2, (3 - 2) * 2.2, Math.cos(3 * 1.1) * 1.5 - 1),
      new THREE.Vector3(Math.sin(4 * 1.3) * 3.2, (4 - 2) * 2.2, Math.cos(4 * 1.1) * 1.5 - 1),
      new THREE.Vector3(0, 5.2, -1),
    ];
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle rotation & camera offset
    const time = state.clock.getElapsedTime();
    groupRef.current.position.y = -activeIndex * 0.8;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 6, 4]} intensity={2} color="#ffb703" />
      <pointLight position={[0, -4, 2]} intensity={1.5} color="#ff4500" />

      {/* Stars & Floating Dust */}
      <ParticleField count={400} speed={0.2} radius={22} color="#ff8c00" />

      {/* Ascending Glowing Chrono Tube */}
      <GlowingTube points={timeSplinePoints} radius={0.06} color="#ff4500" emissiveColor="#ffb703" />

      {/* Timeline Milestone Billboard Nodes */}
      {TIMELINE_DATA.map((item, index) => (
        <TimelineBillboardNode
          key={item.year}
          item={item}
          index={index}
          isActive={activeIndex === index}
          onSelect={setActiveIndex}
        />
      ))}

      {/* Peak 2026 Apex Beacon */}
      <PeakApexBeacon />
    </group>
  );
}
