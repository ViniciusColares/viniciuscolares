"use client";
import { ForwardedRef, Suspense, forwardRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import dynamic from "next/dynamic";
import { BlackHoleProps } from "./Model";

const Scene = dynamic(() => import("./Model").then((mod) => mod), {
  ssr: false,
});

const BlackHole = (
  props: BlackHoleProps,
  ref: ForwardedRef<HTMLCanvasElement>
) => {
  return (
    <Canvas
      ref={ref}
      camera={{ fov: 75, near: 1, far: 200, position: [0, 0, 2] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 2]} />
      <Suspense fallback={"loading"}>
        <Scene {...props} />
      </Suspense>
      <OrbitControls enableRotate={false} enableZoom={false} minDistance={0} />
    </Canvas>
  );
};

export default forwardRef(BlackHole);
