"use client";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { BlackHole, Button } from "@/components";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [isGrowing, setIsGrowing] = useState(false);
  const blackHoleRef = useRef<HTMLCanvasElement>(null);

  const blackHoleAnimation = {
    initial: {
      transform:
        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) scaleY(1) scaleX(1) translateY(0)",
      zIndex: 1,
      opacity: 0,
    },
    spaghetti: {
      zIndex: 0,
      transform:
        "matrix3d(1, 0, 0, 0, 0, 0.8, 0, -0.00333, 0, 0, 1, 0, 0, 0, 0, 1) scaleY(3) scaleX(0.1)  translateY(500px)",
      transition: {
        transform: {
          duration: 1,
          delay: 0.3,
        },
      },
    },
  };

  return (
    <header className="flex flex-col h-screen bg-opacity-50 animate-space overflow-hidden">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 2.5, stiffness: 50, mass: 1 }}
        className="flex flex-wrap justify-between items-center w-full max-w-screen-xl mx-auto px-4 py-6 gap-4"
      >
        <div className="flex items-center text-xl font-bold">
          <Link href="/">
            <div className="flex">
              <motion.img
                width={70}
                height={70}
                src="/no-bg_face.png"
                alt="Smiling Cartoon Face"
              />
              <div className="flex flex-col items-center">
                <span className="text-2xl text-purple-50">Vinicius</span>
                <span className="text-2xl text-purple-50">Colares</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex gap-4 ml-3">
          <a
            href="https://www.linkedin.com/in/viniciuscolares/"
            target="_blank"
            aria-label="Go to viniciuscolares linkedin page"
          >
            <FaLinkedin
              title="LinkedIn"
              className="stroke-purple-50 text-purple-50 hover:scale-125 transition-all duration-75"
              size={21}
            />
          </a>
          <a
            href="https://pt.stackoverflow.com/users/7922/vinicius-colares"
            target="_blank"
            aria-label="Go to vinicius-colares stack overflow page"
          >
            <FaStackOverflow
              title="StackOverflow"
              className="stroke-purple-50 text-purple-50 hover:scale-125 transition-all duration-75"
              size={21}
            />
          </a>
          <a
            href="https://github.com/ViniciusColares"
            target="_blank"
            aria-label="Go to viniciuscolares github page"
          >
            <FaGithub
              title="GitHub"
              className="stroke-purple-50 text-purple-50 hover:scale-125 transition-all duration-75"
              size={21}
            />
          </a>
        </div>
      </motion.nav>

      <AnimatePresence>
        <motion.div
          style={{ transformStyle: "preserve-3d" }}
          variants={blackHoleAnimation}
          whileInView={{ scale: 1, opacity: 1 }}
          initial={"initial"}
          exit={{ scale: 0, opacity: 0 }}
          animate={isGrowing && "spaghetti"}
          transition={{ duration: 1, delay: 5 }}
          aria-disabled="true"
          className="justify-evenly w-full max-w-screen-md mx-auto flex flex-col items-center mt-6 z-10"
        >
          <h1 className="text-4xl font-bold text-center mb-2 text-white">
            Além do horizonte de eventos
          </h1>
          <h2 className="text-xs font-bold text-center uppercase text-purple-400">
            Todos nós temos algo singular
          </h2>

          <p className="text-base text-center mt-10 w-4/5 px-8 text-white">
            A tecnologia da informação já mudou o mundo e a forma como vivemos.
            Conheça como as minhas habilidades podem te ajudar a explorar essas
            infinitas possibilidades.
          </p>

          <Button
            onClick={() => setIsGrowing((old) => !old)}
            className="mt-10"
            variant="outline"
            size="lg"
          >
            Conhecer habilidades
            <AcademicCapIcon
              className="inline ml-2 stroke-purple-500"
              width={24}
            />
          </Button>
          <small className="my-1 text-gray-400 text-xs">ou</small>
          <a
            href="#!"
            className="text-gray-400 text-xs underline hover:text-gray-200"
          >
            me faça uma proposta de trabalho
          </a>
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
          animate={
            isGrowing
              ? {
                  scale: [0.9, 1.36, 0.9],
                  transition: { duration: 1, ease: [0.87, 0, 0.33, 1] },
                }
              : { scale: 0.9, transition: { duration: 5 } }
          }
        />
      </motion.div>
    </header>
  );
}
