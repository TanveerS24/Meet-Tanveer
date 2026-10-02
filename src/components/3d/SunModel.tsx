import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, OrbitControls, Bounds } from '@react-three/drei';
import * as THREE from 'three';
import { useAnimationGate } from '../../motion/tokens';

/**
 * Inner component that renders the actual Blender Sun GLB model.
 *
 * Key decisions:
 * - We do NOT call computeVertexNormals(). Blender already exports correct
 *   smooth-shaded normals; recalculating them produces a faceted, boxy look.
 * - We do NOT force flatShading = false either — the materials are already
 *   smooth in the GLB. Touching them was causing needless recalculation.
 * - We clone the scene so React strict-mode double-mounts don't share state.
 */
function SunMesh({ autoRotate }: { autoRotate: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF('/data/models/Sun.glb');

  // Clone scene — preserve original normals and materials exactly as Blender exported them
  const clonedScene = useMemo(() => {
    const cloned = scene.clone(true);

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        // Ensure double-sided rendering so no faces disappear at angles
        if (mesh.material) {
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          mats.forEach((mat) => {
            mat.side = THREE.DoubleSide;
            // Ensure the material receives shadows and lighting properly
            if ((mat as THREE.MeshStandardMaterial).metalness !== undefined) {
              // Keep existing metalness/roughness — don't overwrite
            }
          });
        }
      }
    });

    return cloned;
  }, [scene]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Continuous smooth rotation around Y axis
    if (autoRotate) {
      groupRef.current.rotation.y += delta * 0.35;
    }

    // Smooth mouse parallax tilt via lerp
    const targetX = state.pointer.y * 0.15;
    const targetZ = -state.pointer.x * 0.15;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.05
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      targetZ,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  );
}

// Preload the GLB
useGLTF.preload('/data/models/Sun.glb');

interface SunModelProps {
  className?: string;
  autoRotate?: boolean;
}

export const SunModel: React.FC<SunModelProps> = ({
  className = 'w-full h-full',
  autoRotate = true,
}) => {
  const { isReducedMotion } = useAnimationGate();

  return (
    <div className={`relative ${className}`}>
      <Canvas
        dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
        camera={{ position: [0, 0, 8], fov: 40 }}
        className="w-full h-full"
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
      >
        {/*
          Lighting rig designed to match Blender's default viewport shading.
          - Soft hemisphere fill so no face is pure black
          - One key directional light from the top-right (like Blender's default)
          - One warm fill from below-left to bring out the golden hue
          No Environment map — it was adding strong reflections that made the
          golden material look washed-out and grey.
        */}
        <hemisphereLight
          color="#FFF8E7"
          groundColor="#5C3D00"
          intensity={0.8}
        />
        <directionalLight
          position={[5, 6, 4]}
          color="#FFFFFF"
          intensity={1.5}
          castShadow={false}
        />
        <directionalLight
          position={[-3, -2, -3]}
          color="#FFAE42"
          intensity={0.5}
        />

        <Suspense
          fallback={
            <mesh>
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial color="#FFC93C" wireframe />
            </mesh>
          }
        >
          <Bounds fit clip observe margin={1.4}>
            <Center>
              <SunMesh autoRotate={!isReducedMotion && autoRotate} />
            </Center>
          </Bounds>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};
