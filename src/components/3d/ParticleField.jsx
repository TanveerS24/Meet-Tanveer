import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * ParticleField
 * Procedural ambient starfield and fiery embers in 3D space.
 */
export default function ParticleField({ count = 350, speed = 0.2, radius = 25, color = "#ff7a00" }) {
  const pointsRef = useRef();

  const [positions, scales, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const scale = new Float32Array(count);
    const col = new Float32Array(count * 3);

    const baseColor = new THREE.Color(color);
    const warmAmber = new THREE.Color('#ffb703');
    const coolWhite = new THREE.Color('#f5f5f0');

    for (let i = 0; i < count; i++) {
      // Cylindrical / spherical distribution
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const r = (Math.random() * 0.8 + 0.2) * radius;

      pos[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(theta);

      scale[i] = Math.random() * 2.5 + 0.8;

      // Color variation (flame to amber to bright star)
      const mixed = baseColor.clone();
      const rand = Math.random();
      if (rand > 0.7) {
        mixed.lerp(coolWhite, 0.6);
      } else if (rand > 0.3) {
        mixed.lerp(warmAmber, 0.5);
      }

      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }

    return [pos, scale, col];
  }, [count, radius, color]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.04 * speed;
    pointsRef.current.rotation.x += delta * 0.02 * speed;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
