"use client";
import React, { ForwardedRef, Suspense, forwardRef, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

function Model({ url }: { url: string }) {
  const blackHoleRef = useRef<THREE.Mesh>(null);
  const { scene } = useGLTF(url);

  useFrame(() => {
    if (blackHoleRef.current) {
      blackHoleRef.current.rotation.y += 0.03;
    }
  });

  return (
    <motion.mesh
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1.2 }}
      transition={{ duration: 3 }}
      ref={blackHoleRef as any}
      rotation={[0.7, 0, 0]}
    >
      <primitive object={scene} />
    </motion.mesh>
  );
}

const BlackHole = (_: any, ref: ForwardedRef<HTMLCanvasElement>) => {
  return (
    <Canvas
      ref={ref}
      camera={{ fov: 80, near: 1, far: 200, position: [0, 0, 2] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 2]} />
      <Suspense fallback={null}>
        <Model url="/blackhole/blackhole.gltf" />
      </Suspense>
      <OrbitControls enableRotate={false} enableZoom={false} minDistance={0} />
    </Canvas>
  );
};

export default forwardRef(BlackHole);
