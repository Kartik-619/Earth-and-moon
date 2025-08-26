import * as three from 'three';
//used to bring texture and images
import { useTexture } from '@react-three/drei';
//used to create frames for animation
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Sun() {
  const sunRef = useRef();
  const sunTexture = useTexture('/sun.jpg');

  useFrame(() => {
    if (sunRef.current) {
        sunRef.current.rotation.y += 0.0005; // slower, smoother rotation
    }
  });


  return (
    <group position={[300, 100, 200]}> {/* Far away */}
      {/* === Sun Visual === */}
      <mesh ref={sunRef} scale={80}> {/* Big but not too big */}
        <sphereGeometry args={[1, 32, 32]} />{/*the sun is small yet scaled to appear big*/}
        <meshBasicMaterial
          map={sunTexture}
          color="#ffdd99"
          transparent
          opacity={1}
        />
        {/* Optional: Add glow with sprite or shader later */}
      </mesh>

      {/* === Sun Light (Directional = Sunlight) === */}
      <directionalLight
        color="#ffffff"
        intensity={2.5}
        position={[500, 200, 300]}
        castShadow={false}
        shadow-camera-far={1000}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        shadow-mapSize={[1024, 1024]}
        // Follows the visual Sun
      />
    </group>
  );
}