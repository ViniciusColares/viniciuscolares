"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { z } from "zod";
import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { FormEvent, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Wave02 from "@/app/assets/waves/wave02";
import BlackHole from "../BlackHole";
import "./style.css";

export default function Header() {
  // LOCAL STATE
  const [email, setEmail] = useState("");
  const inputControl = useAnimation();

  // REF
  const audioRef = useRef<HTMLAudioElement>(null);
  const blackHoleRef = useRef<HTMLCanvasElement>(null);
  const emailFieldRef = useRef<HTMLInputElement>(null);

  // FORM SCHEMA
  const newsletterFormSchema = z.string().email({ message: "Email inválido" });

  // DERIVED STATE
  const isValidEmail = newsletterFormSchema.safeParse(email).success;
  const initialStateControl = { width: "100%" };

  // METHODS
  const startAnimation = async () => {
    await inputControl.start({
      width: 12,
      transition: {
        type: "spring",
        clamp: true,
        delay: 0.2,
      },
    });

    setEmail("");
    await inputControl.start({ width: 0, y: 150 });
    await inputControl.start({ y: 0 });
    inputControl.start(initialStateControl);
  };

  async function handleSubmitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newsletterFormSchema.safeParse(email).success) return;

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
        startAnimation();
      }
    } else {
      setEmail("");
      inputControl.start({
        x: [0, -10, 10, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 },
      });
    }
  }

  return (
    <header className="flex flex-col bg-startdust h-screen bg-opacity-50 animate-space overflow-hidden">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex flex-wrap justify-between items-center w-full max-w-screen-xl mx-auto p-4 gap-4"
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
                <span className="text-2xl text-purple-50">Vinicius</span>
                <span className="text-2xl text-purple-50">Colares</span>
              </div>
            </div>
          </a>
        </div>
        <div
          aria-disabled="true"
          className="gap-6 justify-evenly hidden md:flex opacity-30"
        >
          <a
            href="#!"
            className="text-center cursor-not-allowed text-purple-200"
          >
            <span className="block font-bold text-xs bg-yellow-default text-purple-950 rounded-full">
              EM BREVE
            </span>{" "}
            Meus GPTs
          </a>
          <a
            href="#!"
            className="text-center cursor-not-allowed text-purple-200"
          >
            <span className="block font-bold text-xs bg-yellow-default text-purple-950 rounded-full">
              EM BREVE
            </span>{" "}
            Buy me a coffee
          </a>
        </div>
        <div className="flex gap-4 ml-3">
          <a
            href="https://www.instagram.com/viniciuscolares.dev/"
            target="_blank"
            aria-label="Go to viniciuscolares.dev instagram page"
          >
            <FaInstagram
              className="stroke-purple-50 text-purple-50"
              size={21}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/viniciuscolares/"
            target="_blank"
            aria-label="Go to viniciuscolares linkedin page"
          >
            <FaLinkedin className="stroke-purple-50 text-purple-50" size={21} />
          </a>
          <a
            href="https://pt.stackoverflow.com/users/7922/vinicius-colares"
            target="_blank"
            aria-label="Go to vinicius-colares stack overflow page"
          >
            <FaStackOverflow
              className="stroke-purple-50 text-purple-50"
              size={21}
            />
          </a>
          <a
            href="https://github.com/ViniciusColares"
            target="_blank"
            aria-label="Go to viniciuscolares github page"
          >
            <FaGithub className="stroke-purple-50 text-purple-50" size={21} />
          </a>
          <a
            href="https://dev.to/viniciuscolares"
            target="_blank"
            aria-label="Go to viniciuscolares dev.to page"
          >
            <FaDev className="stroke-purple-50 text-purple-50" size={21} />
          </a>
        </div>
      </motion.nav>

      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="hero-section max-w-4xl py-5"
      >
        <h1 className="hero-text">
          Me <span className="text-purple-500">permita</span> te mostrar{" "}
          <span className="text-purple-600">um novo universo</span> de{" "}
          <span className="text-purple-700">possibilidades</span> de se
          descobrir capaz.
        </h1>

        <form
          onSubmit={handleSubmitNewsletter}
          className="flex flex-col mt-6 px-4 w-full justify-center items-center max-w-[450px]"
        >
          <p className="mb-2 text-sm text-purple-300">
            Inscreva-se na minha lista de transmissão
          </p>
          <div className="flex w-full justify-center items-center gap-3">
            <motion.div
              animate={inputControl}
              initial={initialStateControl}
              className="flex relative w-full h-12 justify-center overflow-hidden rounded-full focus:border-[2px solid purple-300]"
            >
              <input
                required
                type="email"
                name="email"
                value={email}
                ref={emailFieldRef}
                autoComplete="false"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="seu.melhor@email.com"
                className="absolute p-3 rounded-full text-purple-50 text-center bg-purple-dark w-full"
              />
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: isValidEmail ? 1 : 0 }}
                transition={{ type: "spring" }}
                type="submit"
                className="absolute right-3 top-2"
                aria-label="register to vinicius colares newsletter"
              >
                <PaperAirplaneIcon
                  width={32}
                  type="submit"
                  className="animate-pulse stroke-purple-50 text-purple-50"
                />
              </motion.button>
            </motion.div>
          </div>
          <p className="mt-2 text-sm text-purple-300">
            Zero spam, só conteúdo sinistro e ideia mil grau.
          </p>
          <audio ref={audioRef} src="/galatic_sweep.wav" />
        </form>
      </motion.section>

      <motion.div className="w-full h-[50dvh] absolute bottom-0">
        <BlackHole ref={blackHoleRef} />

        <motion.div
          initial={{ transform: "translate(-50%, 320px)" }}
          animate={{ transform: "translate(-50%, 0px)" }}
          transition={{ duration: 2.25, delay: 1, ease: "easeOut" }}
          className="section--wave-transition"
        >
          <Wave02 />
        </motion.div>
      </motion.div>
    </header>
  );
}
