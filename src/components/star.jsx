import * as THREE from 'three';
import { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame,useThree } from '@react-three/fiber';

function StarBackground() {
  const texture = useTexture('/star_map.png');
  const meshRef=useRef();
  useFrame(()=>{
    if(meshRef){
      meshRef.current.rotation.y+=0.001;
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[500, 60, 40]} />
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