// Canvas_3.jsx
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Earth from './Earth';
import Moon from './moon';
import StarBackground from './star';
import { useRef } from 'react';

function Rotate_scene() {
  const groupRef = useRef();
  const moonOrbitRef = useRef();
  const { clock } = useThree();

  useFrame(() => {
    const t = clock.getElapsedTime();

    // Moon orbits Earth
    moonOrbitRef.current.position.x = Math.sin(t * 0.5) * 13;
    moonOrbitRef.current.position.z = Math.cos(t * 0.5) * 7;
    moonOrbitRef.current.position.y = Math. cos(t * 0.5) * 10;

    // Whole system rotates slowly
  });

  return (
    <group ref={groupRef}>
      <Earth />
      <group ref={moonOrbitRef}>
        <Moon scale={0.6} />
      </group>
    </group>
  );
}

export default function Canvas_3() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 30] }}>
        <StarBackground />
        <Rotate_scene />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls
          minDistance={20}
          maxDistance={100}
          makeDefault
        />
      </Canvas>
    </div>
  );
}