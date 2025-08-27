import * as three from 'three';
//used to bring texture and images
import { useTexture } from '@react-three/drei';
//used to create frames for animation
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Venus() {
  const meshRef = useRef();
  const venusTexture = useTexture('/venus.jpg');

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008; // slower, smoother rotation
    }
  });

  const geometry = new three.SphereGeometry(4, 64, 64);

  // Create material with texture and bump map
  const material = new three.MeshPhongMaterial({
    map:venusTexture,
    bumpMap: venusTexture,
    bumpScale: 0.05,
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} />
  );
}