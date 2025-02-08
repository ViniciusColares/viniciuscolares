"use client";
import { useRef, useState } from "react";
import { BlackHole, DualButton, Navigation } from "@/components";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [isGrowing, setIsGrowing] = useState(false);
  const blackHoleRef = useRef<HTMLCanvasElement>(null);

  const blackHoleAnimation = {
    initial: {
      transform:
        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) scaleY(1) scaleX(1) translateY(0)",
      scale: 0,
      zIndex: 1,
      opacity: 0,
    },
    holeScale: {
      scale: [0.8, 1.36, 0.8],
      transition: { duration: 2, ease: [0.87, 0, 0.33, 1] },
    },
    spaghettifyContent: {
      zIndex: 0,
      transform:
        "matrix3d(1, 0, 0, 0, 0, 0.8, 0, -0.00333, 0, 0, 1, 0, 0, 0, 0, 1) scaleY(6) scaleX(0.1)  translateY(500px)",
      transition: {
        transform: {
          duration: 0.5,
          delay: 0.7,
        },
      },
    },
  };

  return (
    <header className="flex flex-col h-screen bg-opacity-50 animate-space overflow-hidden">
      <Navigation />

      <AnimatePresence>
        <motion.div
          style={{ transformStyle: "preserve-3d" }}
          variants={blackHoleAnimation}
          whileInView={{ scale: 1, opacity: 1 }}
          initial={"initial"}
          exit={{ scale: 0, opacity: 0 }}
          animate={isGrowing && "spaghettifyContent"}
          transition={{ duration: 2, delay: 5 }}
          aria-disabled="true"
          className="justify-evenly w-full max-w-screen-md mx-auto flex flex-col items-center mt-6 z-10"
        >
          <h1 className="text-4xl font-bold text-center mb-2 text-white">
            Além do horizonte de eventos
          </h1>
          <h2 className="text-xs font-bold text-center uppercase text-purple-400">
            Todos nós temos algo singular
          </h2>

          <p className="text-base text-center mt-10 w-4/5 px-8 text-white mb-5">
            A tecnologia da informação já mudou o mundo e a forma como vivemos.
            Conheça como as minhas habilidades podem te ajudar a explorar essas
            infinitas possibilidades.
          </p>

          <DualButton
            className="mt-5"
            firstButton={{
              label: "Conhecer habilidades",
              icon: "AcademicCapIcon",
              onClick: () => setIsGrowing(true),
            }}
            secondButton={{
              label: "Fazer proposta",
              icon: "ClipboardDocumentCheckIcon",
              onClick: () => setIsGrowing(true),
            }}
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ bottom: 0 }}
        animate={{ bottom: -333 }}
        transition={{
          duration: 5,
          ease: "linear",
        }}
        className="absolute w-full h-full"
      >
        <BlackHole
          ref={blackHoleRef}
          rotation={[0.5, 0, 0]}
          initial={{ scale: 0 }}
          onAnimationComplete={() => setIsGrowing(false)}
          variants={blackHoleAnimation}
          animate={
            isGrowing
              ? "holeScale"
              : { scale: 0.8, transition: { duration: 5 } }
          }
        />
      </motion.div>
    </header>
  );
}
