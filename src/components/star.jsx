import * as THREE from 'three';
import { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame,useThree } from '@react-three/fiber';

function StarBackground() {
  const texture = useTexture('/star.jpg');
  const meshRef=useRef();
  useFrame(()=>{
    if(meshRef){
      meshRef.current.rotation.y+=0.0003;
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[600, 100, 40]} />
      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}  // Ensures inside of sphere is visible
        depthWrite={false}     // Prevents depth conflicts
        transparent={true}     // Helps with blending
      />
    </mesh>
  );
}

export default StarBackground;