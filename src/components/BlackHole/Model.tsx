import { useRef } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import * as THREE from "three";
import { MotionProps } from "framer-motion";

export interface BlackHoleProps extends MotionProps {
  key?: React.Key;
  rotation: [number, number, number];
}

export default function Model(props: BlackHoleProps) {
  const { scene } = useGLTF("/blackhole/blackhole.gltf");
  const blackHoleRef = useRef<MeshProps>(null);

  useFrame(() => {
    if (blackHoleRef.current) {
      if (blackHoleRef.current.rotation) {
        (blackHoleRef.current.rotation as THREE.Euler).y += 0.03;
      }
    }
  });

  return (
    <motion.mesh ref={blackHoleRef} {...props} key={props.key ?? undefined}>
      <primitive object={scene} />
    </motion.mesh>
  );
}
