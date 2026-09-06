import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Float, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import ParticleField from './ParticleField';
import GlowingTube from './GlowingTube';
import { TOOLS_DATA } from '../../constants/data';

/**
 * FloatingToolCard (3D Billboarded node)
 */
function FloatingToolCard({ tool, isHovered, onHover }) {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <group position={tool.pos}>
        {/* Visual 3D Ring Anchor */}
        <mesh>
          <torusGeometry args={[0.35, 0.02, 16, 32]} />
          <meshStandardMaterial
            color="#ff4500"
            emissive="#ff8c00"
            emissiveIntensity={1.2}
          />
        </mesh>

        {/* Pulsing Core Particle */}
        <mesh>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Interactive DOM Pill layered in 3D */}
        <Html
          center
          distanceFactor={10}
          className="pointer-events-auto select-none"
        >
          <button
            onMouseEnter={() => onHover(tool.id)}
            onMouseLeave={() => onHover(null)}
            className={`px-3 py-1.5 rounded-xl flex items-center gap-2 border transition-all duration-300 whitespace-nowrap cursor-pointer ${
              isHovered
                ? 'bg-flame-500 text-white border-flame-300 scale-110 shadow-flame-md'
                : 'bg-noir-900/90 text-noir-text border-flame-500/40 hover:border-flame-400 hover:bg-noir-800'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full shadow-sm"
              style={{ backgroundColor: tool.color || '#ff8c00' }}
            />
            <span className="font-mono text-xs font-semibold">{tool.name}</span>
            <span className="text-[10px] text-flame-glow font-mono opacity-80">{tool.level}</span>
          </button>
        </Html>
      </group>
    </Float>
  );
}

/**
 * CentralSilhouetteBeacon
 * Standing developer figure silhouette at the center of the digital universe.
 */
function CentralSilhouetteBeacon() {
  return (
    <group position={[0, -0.4, 0]}>
      {/* Concentric Base Rings */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 0.85, 32]} />
        <meshBasicMaterial color="#ff4500" side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.4, 1.44, 32]} />
        <meshBasicMaterial color="#ff8c00" opacity={0.6} transparent side={THREE.DoubleSide} />
      </mesh>

      {/* Volumetric Beacon Cylinder */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.4, 1.2, 2.4, 32, 1, true]} />
        <meshBasicMaterial
          color="#ff4500"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Standing Silhouette Graphic in 3D Billboard */}
      <Billboard position={[0, 1.1, 0]}>
        <Html center className="pointer-events-none select-none">
          <div className="flex flex-col items-center">
            {/* Stylized Developer Silhouette */}
            <div className="relative w-16 h-28 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-b from-flame-400 to-noir-900 border border-flame-300 absolute top-0 shadow-flame-sm" />
              <div className="w-10 h-16 rounded-t-2xl bg-gradient-to-b from-noir-700 to-noir-950 border border-flame-500/50 absolute bottom-0 shadow-flame-sm" />
              <div className="absolute -inset-2 bg-flame-500/20 blur-lg rounded-full pointer-events-none" />
            </div>
            <div className="mt-2 px-2 py-0.5 rounded bg-noir-900/90 border border-flame-500/40 text-[9px] font-mono text-flame-300 uppercase tracking-widest">
              Core Architect
            </div>
          </div>
        </Html>
      </Billboard>
    </group>
  );
}

/**
 * DigitalUniverseScene
 */
export default function DigitalUniverseScene({ activeToolId, setActiveToolId }) {
  const sceneGroupRef = useRef();

  // Generate spline points that connect through tool positions
  const splinePoints = useMemo(() => {
    return [
      new THREE.Vector3(-4.5, -2.5, -2),
      new THREE.Vector3(-3.2, 1.6, 0.4),
      new THREE.Vector3(-1.8, 2.8, -0.6),
      new THREE.Vector3(0.0, 3.2, 0.7),
      new THREE.Vector3(1.9, 2.5, -0.2),
      new THREE.Vector3(3.4, 1.2, 0.8),
      new THREE.Vector3(2.8, -1.4, -0.5),
      new THREE.Vector3(1.2, -2.6, 0.3),
      new THREE.Vector3(-1.4, -2.7, -0.4),
      new THREE.Vector3(-3.0, -1.2, 0.6),
      new THREE.Vector3(-4.5, -2.5, -2),
    ];
  }, []);

  useFrame((state) => {
    if (!sceneGroupRef.current) return;
    // Gentle parallax from pointer
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.3;
    sceneGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      sceneGroupRef.current.rotation.y,
      targetX,
      0.05
    );
    sceneGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      sceneGroupRef.current.rotation.x,
      -targetY,
      0.05
    );
  });

  return (
    <group ref={sceneGroupRef}>
      {/* Ambient and Key Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#ff7a00" />
      <pointLight position={[-5, -5, -3]} intensity={1.2} color="#00f0ff" />
      <directionalLight position={[0, 8, 4]} intensity={0.8} color="#ffb703" />

      {/* Procedural Stars / Glowing Embers */}
      <ParticleField count={450} speed={0.25} radius={18} color="#ff6200" />

      {/* Winding 3D Glowing Energy Spline Tube */}
      <GlowingTube points={splinePoints} radius={0.045} color="#ff4500" emissiveColor="#ff8c00" />

      {/* Central Developer Silhouette Beacon */}
      <CentralSilhouetteBeacon />

      {/* Floating 3D Tool Nodes */}
      {TOOLS_DATA.map((tool) => (
        <FloatingToolCard
          key={tool.id}
          tool={tool}
          isHovered={activeToolId === tool.id}
          onHover={setActiveToolId}
        />
      ))}
    </group>
  );
}
