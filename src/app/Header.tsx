"use client";
import { LegacyRef, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { FaDev, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const BlackHole = dynamic(() => import("./components/BlackHole"), {
  ssr: false,
});

export default function Header() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  async function handleSubmitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
      }
      setMessage("Subscription successful!");
      setEmail("");
    } else {
      setMessage(data.error || "Something went wrong");
    }
  }

  return (
    <ParallaxProvider>
      <header className="relative flex flex-col bg-startdust h-screen bg-opacity-50 animate-space">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-wrap justify-center sm:justify-between items-center w-full max-w-screen-xl mx-auto p-4 gap-4"
        >
          <div className="flex items-center text-xl font-bold">
            <a href="/">
              <div className="flex">
                <Image
                  width={70}
                  height={70}
                  priority={false}
                  src="/no-bg_face.png"
                  alt="Smiling Cartoon Face"
                />
                <div className="flex flex-col items-center">
                  <span className="text-2xl">Vinicius</span>
                  <span className="text-2xl">Colares</span>
                </div>
              </div>
            </a>
          </div>
          <div className="flex gap-6 justify-evenly">
            <a
              href="#!"
              className="text-center cursor-not-allowed text-purple-200 opacity-30"
            >
              <span className="block font-bold text-xs bg-yellow-default text-purple-900 rounded-full">
                EM BREVE
              </span>{" "}
              Meus GPTs
            </a>
            <a
              href="#!"
              className="text-center cursor-not-allowed text-purple-200 opacity-30"
            >
              <span className="block font-bold text-xs bg-yellow-default text-purple-900 rounded-full">
                EM BREVE
              </span>{" "}
              Buy me a coffee
            </a>
          </div>
          <div className="flex gap-4 ml-3">
            <a
              href="https://www.linkedin.com/in/viniciuscolares/"
              target="_blank"
            >
              <FaLinkedin size={21} />
            </a>
            <a
              href="https://pt.stackoverflow.com/users/7922/vinicius-colares"
              target="_blank"
            >
              <FaStackOverflow size={21} />
            </a>
            <a href="https://github.com/ViniciusColares" target="_blank">
              <FaGithub size={21} />
            </a>
            <a href="https://dev.to/viniciuscolares" target="_blank">
              <FaDev size={21} />
            </a>
          </div>
        </motion.nav>

        <motion.section
          initial={{
            opacity: 0,
            transformStyle: "preserve-3d",
            transform: "rotateX(0deg) translateY(-60px) scale(0.3)",
          }}
          animate={{
            opacity: 1,
            transform: "rotateX(6deg) translateY(0px) scale(1)",
          }}
          transition={{ duration: 3, delay: 2 }}
          className="hero-section relative flex flex-col mx-auto max-w-4xl pt-10 items-center"
        >
          <h1 className="hero-text text-5xl font-black px-16 text-center">
            Me <span className="text-purple-500">permita</span> te mostrar{" "}
            <span className="text-purple-600">um novo universo</span> de{" "}
            <span className="text-purple-700">possibilidades</span> de se
            descobrir capaz.
          </h1>

          <form
            onSubmit={handleSubmitNewsletter}
            className="flex w-full justify-center items-center gap-3 mt-8"
          >
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu.melhor@email.com"
              className="rounded-full p-3 max-w-[280px] text-center bg-purple-dark text-white w-full"
            />
            <button
              type="submit"
              className="flex gap-2 items-center bg-purple-900 hover:bg-purple-dark rounded-full transition-colors py-3 px-4"
            >
              <PaperAirplaneIcon
                className="cursor-pointer"
                width={24}
                type="submit"
              />
              ENVIAR
            </button>
            <audio ref={audioRef} src="/galatic_sweep.wav" />
          </form>
          <p className="mt-2 text-sm text-purple-300">
            Zero spam, só conteúdo sinistro e ideia mil grau.
          </p>
        </motion.section>

        <motion.div className="w-full h-3/5 max-h-[60vw] absolute bottom-0">
          <BlackHole />

          <motion.div
            initial={{ y: 320 }}
            animate={{ y: 0 }}
            transition={{ duration: 2.25, delay: 1, ease: "easeOut" }}
            className="absolute w-full bottom-0 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
              <path
                className="shadow fill-gray-50"
                fillOpacity="1"
                d="M0,256L40,245.3C80,235,160,213,240,181.3C320,149,400,107,480,96C560,85,640,107,720,122.7C800,139,880,149,960,149.3C1040,149,1120,139,1200,149.3C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </motion.div>
        </motion.div>
      </header>
    </ParallaxProvider>
  );
}
