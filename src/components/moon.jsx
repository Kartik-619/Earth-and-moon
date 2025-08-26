import * as three from 'three';
//used to bring texture and images
import { useTexture } from '@react-three/drei';
//used to create frames for animation
import { useFrame,useThree } from '@react-three/fiber';
import { useRef } from 'react';


export default function Moon({ children, ...props }) {
  const meshRef = useRef();
  const { clock } = useThree();
  const moonTexture = useTexture('/moon.jpg');

  const geometry = new three.SphereGeometry(3, 64, 64);
  const material = new three.MeshPhongMaterial({
    map: moonTexture,
    bumpMap: moonTexture,
    bumpScale: 0.05,
  });

  useFrame(() => {
    // Match rotation to orbit (1 rotation per orbit = tidally locked)
    meshRef.current.rotation.y += 0.03;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} {...props}>
      {children}
    </mesh>
  );
}