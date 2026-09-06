import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * GlowingTube
 * Smooth 3D glowing spline tube with animated pulse along the curve.
 */
export default function GlowingTube({
  points = [
    new THREE.Vector3(-6, -3, -2),
    new THREE.Vector3(-3, 2, 0),
    new THREE.Vector3(0, -1, 2),
    new THREE.Vector3(3, 3, -1),
    new THREE.Vector3(6, -2, 1),
  ],
  radius = 0.06,
  color = "#ff4500",
  emissiveColor = "#ff8c00",
  pulse = true,
}) {
  const meshRef = useRef();

  // Create smooth CatmullRom curve
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
  }, [points]);

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 100, radius, 8, false);
  }, [curve, radius]);

  useFrame((state) => {
    if (pulse && meshRef.current && meshRef.current.material) {
      const time = state.clock.getElapsedTime();
      const intensity = Math.sin(time * 2.5) * 0.4 + 1.2;
      meshRef.current.material.emissiveIntensity = intensity;
    }
  });

  return (
    <group>
      {/* Core Tube */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color={color}
          emissive={emissiveColor}
          emissiveIntensity={1.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Halo Tube */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color={emissiveColor}
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
          wireframe={false}
        />
      </mesh>
    </group>
  );
}
