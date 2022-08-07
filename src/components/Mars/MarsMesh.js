import { useRef} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import marsTexture from "../../img/marstexture.jpg";

export function MarsMesh() {
  const texture = useLoader(TextureLoader, marsTexture);
  const refMesh = useRef();
  useFrame(() => {
    refMesh.current.rotation.y += 0.001;
  }, []);

  return (
  
    <mesh ref={refMesh} rotation={[0.5, 0, 0]} position={[-0.1,0,0]}>
      <sphereBufferGeometry attach="geometry" args={[2.5,64,32]}/>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
