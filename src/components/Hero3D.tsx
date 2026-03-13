import { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';

function VaultCube() {
  const meshRef = useRef<ThreeElements['mesh']>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Slow rotation (10 RPM = 0.6 degrees per frame at 60fps = 0.01 radians)
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <MeshDistortMaterial
          color="#6366F1"
          metalness={0.9}
          roughness={0.1}
          distort={0.2}
          speed={1.5}
          emissive="#A5B4FC"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      {/* Wireframe overlay */}
      <mesh scale={hovered ? 1.1 : 1}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshBasicMaterial
          color="#8B5CF6"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <VaultCube />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
