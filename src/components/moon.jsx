import * as three from 'three';
//used to bring texture and images
import { useTexture } from '@react-three/drei';
//used to create frames for animation
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Earth() {
  const meshRef = useRef();
  const earthTexture = useTexture('/earth.jpg');

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008; // slower, smoother rotation
    }
  });

  const geometry = new three.SphereGeometry(3, 64, 64);

  // Create material with texture and bump map
  const material = new three.MeshPhongMaterial({
    map: earthTexture,
    bumpMap: earthTexture,
    bumpScale: 0.05,
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} />
  );
}