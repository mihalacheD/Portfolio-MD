import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Techstack", href: "#techstack" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 px-8 w-full z-50 bg-primary  bg-opacity-80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-6xl mx-auto py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold gradient-text">DM | Frontend Dev</h1>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray hover:text-secondary font-secondary text-lg font-semibold transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none text-xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>


       {/* Mobile menu with animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-primary px-4 pb-6 pt-4 flex flex-col gap-4 border-b border-gray-800 shadow-lg"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray font-secondary text-md text-semibold tracking-wide active:text-secondary transition duration-200"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
