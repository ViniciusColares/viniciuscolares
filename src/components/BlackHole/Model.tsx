import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { MotionProps } from "framer-motion";

export interface BlackHoleProps extends MotionProps {
  key?: React.Key;
  rotation: [number, number, number];
}

export default function Model(props: BlackHoleProps) {
  const { scene } = useGLTF("/blackhole/blackhole.gltf");
  const blackHoleRef = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    if (blackHoleRef.current) {
      if (blackHoleRef.current.rotation) {
        blackHoleRef.current.rotation.y += 0.03;
      }
    }
  });

  return (
    // @ts-expect-error: TypeScript does not recognize motion.mesh type
    <motion.mesh ref={blackHoleRef} {...props}>
      <primitive object={scene} />
    </motion.mesh>
  );
}
