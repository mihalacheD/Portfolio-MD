// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import image from '../assets/react.svg'

export default function Hero() {
  return (
    <section className="relative content-center min-h-screen px-8 py-16 mt-8 bg-primary text-white overflow-hidden">
      {/* Blob background */}
      <div className="absolute w-[20rem] h-[20rem] bg-secondary opacity-15 blur-3xl rounded-full animate-slowMove z-0 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10 relative max-w-6xl mx-auto">
        {/* Left content */}
        <div className="text-center md:text-left flex-1">
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight font-primary"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Daniela Mihalache
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl text-secondary mb-4 font-secondary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl max-w-xl mb-10 text-gray-300 mx-auto md:mx-0 font-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Frontend development with React.js, React Native, Next.js, TypeScript, and Tailwind
            CSS. Clean code, responsive design, and seamless user experience.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a
              href="/assets/Resume-Mihalache-Daniela-Frontend-Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Download CV
            </a>
            <a href="#contact" className="btn">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="flex gap-6 mt-15 justify-center md:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              href="https://github.com/mihalacheD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="w-6 h-6 hover:text-[var(--color-secondary)] transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniela-mihalache-543695224"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="w-6 h-6 hover:text-[var(--color-secondary)] transition" />
            </a>
          </motion.div>
        </div>

        {/* Right - Image */}
        <motion.div
          className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-lg float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={image}
            alt="Daniela Mihalache"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
