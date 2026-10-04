import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, Environment, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Enhanced 3D Sun Mesh with vibrant golden PBR materials, smooth rotation, and emissive warmth.
 */
function SunMesh({ speed = 1, autoRotate = true }: { speed?: number; autoRotate?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/Sun.glb');

  // Clone scene & dress in rich golden PBR materials so the model is never naked
  const clonedScene = useMemo(() => {
    const cloned = scene.clone(true);

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          mats.forEach((mat) => {
            mat.side = THREE.DoubleSide;

            // Apply vibrant warm golden Sun styling
            if (mat instanceof THREE.MeshStandardMaterial || 'color' in mat) {
              const stdMat = mat as THREE.MeshStandardMaterial;
              // Radiant sun gold base
              stdMat.color = new THREE.Color('#FFB300');
              stdMat.roughness = 0.22;
              stdMat.metalness = 0.35;
              // Warm golden-orange emissive core
              stdMat.emissive = new THREE.Color('#FF7700');
              stdMat.emissiveIntensity = 0.45;
            }
            mat.needsUpdate = true;
          });
        }
      }
    });
    return cloned;
  }, [scene]);

  useFrame((_, delta) => {
    if (!groupRef.current || !autoRotate) return;
    // Elegant, smooth spin
    groupRef.current.rotation.y += delta * 1.8 * speed;
    groupRef.current.rotation.z += delta * 0.3 * speed;
  });

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  );
}

// Preload the GLB
useGLTF.preload('/models/Sun.glb');

class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Three.js Canvas Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
            <div className="w-32 h-32 rounded-full bg-amber-400/20 flex items-center justify-center animate-pulse">
              <span className="material-symbols-outlined text-6xl text-amber-500 animate-spin">wb_sunny</span>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export interface SunModelProps {
  className?: string;
  speed?: number;
  autoRotate?: boolean;
}

export const SunModel: React.FC<SunModelProps> = ({
  className = 'w-full h-full',
  speed = 1.0,
  autoRotate = true,
}) => {
  return (
    <div className={`relative ${className} select-none`}>
      <ThreeErrorBoundary>
        <Canvas
          dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
          camera={{ position: [0, 0, 5.2], fov: 45 }}
          className="w-full h-full"
          gl={{
            antialias: true,
            alpha: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.4,
          }}
        >
          <OrbitControls enableZoom={false} enablePan={false} />
          {/* Ambient + Directional lighting rig for rich golden sheen */}
          <ambientLight intensity={0.9} color="#FFF5E1" />
          <hemisphereLight
            color="#FFF8E7"
            groundColor="#663300"
            intensity={1.1}
          />
          <directionalLight
            position={[5, 8, 4]}
            color="#FFFFFF"
            intensity={2.2}
          />
          <directionalLight
            position={[-5, -4, -3]}
            color="#FFA726"
            intensity={1.2}
          />
          <pointLight position={[0, 0, 4]} intensity={1.5} color="#FFD54F" />

          <Suspense
            fallback={
              <mesh>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial
                  color="#FFB300"
                  emissive="#FF8F00"
                  emissiveIntensity={0.5}
                  roughness={0.2}
                />
              </mesh>
            }
          >
            <Environment preset="sunset" />
            <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
              <Center scale={1.75}>
                <SunMesh speed={speed} autoRotate={autoRotate} />
              </Center>
            </Float>
          </Suspense>
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
};
