import Link from "next/link";
import { motion } from "framer-motion-3d";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
