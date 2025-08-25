import {Canvas, useFrame,useThree} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Earth from './Earth';
import StarBackground from './star';
import { useRef } from 'react';

function Rotate_scene(){
    const groupRef=useRef();
    useFrame(()=>{
        if(groupRef.current){
            groupRef.current.rotation.y+=0.005;
        }
    });
    //group is returned directly as its a THRee js object and can't be wrapped
    return <group ref={groupRef}><Earth/></group>
      

}

export default function Canvas_3(){
   
    return(
        <div className="w-screen h-screen bg-black">
            
            <Canvas camera={{ position: [0, 0, 30] }}>
                
            <StarBackground/>

               <Rotate_scene/>
                <ambientLight intensity={0.8}/>
                <directionalLight position={[5,5,5]} intensity={1}/>
                
               
                
                <OrbitControls /> {/*Enables Mouse interation*/}
            </Canvas>
        </div>
    )
} 