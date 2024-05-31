import Image from "next/image";
import Chat from "./components/Chat";
import { FaDev, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-screen grid grid-flow-row grid-rows-[100px_1fr]">
      <header className="flex flex-wrap justify-center sm:justify-between items-center w-full max-w-screen-lg mx-auto p-4 gap-4">
        <div className="flex items-center text-xl font-bold">
          <Image
            width={70}
            height={70}
            src="/no-bg_face.png"
            alt="Smiling Cartoon Face"
          />
          <div className="flex flex-col items-center">
            <span className="text-2xl">
              [ V.C.<span className="-ml-1">&apos;</span>A.I ]
            </span>
            <span className="text-sm">Vinicius Colares</span>
            <span className="text-xs">Artificial Intelligence</span>
          </div>
        </div>
        <div className="flex gap-4 ml-3">
          <a
            href="https://www.linkedin.com/in/viniciuscolares/"
            target="_blank"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="https://pt.stackoverflow.com/users/7922/vinicius-colares"
            target="_blank"
          >
            <FaStackOverflow size={26} />
          </a>
          <a href="https://github.com/ViniciusColares" target="_blank">
            <FaGithub size={26} />
          </a>
          <a href="https://dev.to/viniciuscolares" target="_blank">
            <FaDev size={26} />
          </a>
        </div>
      </header>

      <Chat />
    </div>
  );
}
