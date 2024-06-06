"use client";
import { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { FaDev, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import "./style.css";
import Wave01 from "@/app/assets/waves/wave01";
import Wave02 from "@/app/assets/waves/wave02";

const BlackHole = dynamic(() => import("../BlackHole"), {
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
			<header className="relative flex flex-col bg-startdust h-screen bg-opacity-50 animate-space overflow-hidden">
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
									<span className="text-2xl">Vinicius</span>
									<span className="text-2xl">Colares</span>
								</div>
							</div>
						</a>
					</div>
					<div className="gap-6 justify-evenly hidden md:flex">
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
					className="hero-section relative flex flex-col mx-auto max-w-4xl py-5 items-center z-10"
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
						<div className="flex w-full justify-center items-center gap-3">
							<input
								type="text"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								placeholder="seu.melhor@email.com"
								className="rounded-full p-3 text-center bg-purple-dark text-white w-full"
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
						</div>
						<p className="mt-2 text-sm text-purple-300">
							Zero spam, só conteúdo sinistro e ideia mil grau.
						</p>
						<audio ref={audioRef} src="/galatic_sweep.wav" />
					</form>
				</motion.section>

				<motion.div className="w-full h-[50dvh] absolute bottom-0">
					<BlackHole />

					<motion.div
						initial={{ y: 320, transform: "translateX(-50%)" }}
						animate={{ y: 0 }}
						transition={{ duration: 2.25, delay: 1, ease: "easeOut" }}
						className="section--wave-transition"
					>
						<Wave02 />
					</motion.div>
				</motion.div>
			</header>
		</ParallaxProvider>
	);
}
