import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

function StarBackground() {
  const texture = useTexture('/star_map.png');

  return (
    <mesh>
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