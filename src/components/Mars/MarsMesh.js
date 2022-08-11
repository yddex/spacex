import { useRef, useState,useEffect} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import marsTexture from "../../img/marstexture.jpg";

export function MarsMesh() {
  const texture = useLoader(TextureLoader, marsTexture);
  const [radius, setRadius] = useState(2.4)
  const refMesh = useRef();
  useFrame(() => {
    refMesh.current.rotation.y += 0.001;
  }, []);
  useEffect(()=>{
    if(window.innerWidth < 400){
      setRadius(2);
    }
  },[])
  return (
  
    <mesh ref={refMesh} rotation={[0.5, 0, 0]} position={[-0.1,0,0]}>
      <sphereBufferGeometry attach="geometry" args={[radius,64,32]}/>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
