import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export interface BlackHoleProps {
  key?: React.Key;
  rotation: [number, number, number];
}

export default function Model(props: BlackHoleProps) {
  const { scene } = useGLTF("/blackhole/blackhole.gltf");
  const blackHoleRef = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    if (blackHoleRef.current) {
      if (blackHoleRef.current.rotation) {
        (blackHoleRef.current.rotation as THREE.Euler).y += 0.03;
      }
    }
  });

  return (
    <motion.mesh ref={blackHoleRef as React.Ref<THREE.Mesh>} {...props}>
      <primitive object={scene} />
    </motion.mesh>
  );
}
