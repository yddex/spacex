import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera } from '@react-three/drei'
import { MarsMesh } from "./MarsMesh";
import "./style.scss";

export function Mars() {
  return (
    <div className="mars">
      <Suspense fallback={<div className="fallback_mars"></div>}>
        <Canvas>
          <ambientLight intensity={0.4} color="#f9d71c" />
          <pointLight position={[13, -7, 0]} color="#f9d71c" intensity={2.2} />
          <pointLight
            position={[-13, 7, 0.5]}
            color="#D8A219"
            intensity={0.5}
          />
          <PerspectiveCamera fov={45} aspect={window.innerWidth / window.innerHeight} near={1} far={1000}> 
            <MarsMesh />
            </PerspectiveCamera>
        </Canvas>
      </Suspense>
    </div>
  );
}
