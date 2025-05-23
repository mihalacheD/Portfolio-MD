import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills & Tools", href: "#techstack" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleClick = (href) => {
    setActiveLink(href);
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // verificăm pentru fiecare secțiune dacă e vizibilă
      let current = "#home"; // default

      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          // dacă topul secțiunii e mai sus decât 150px de sus, o considerăm vizibilă
          if (top <= 150) {
            current = link.href;
          }
        }
      }
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inițial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 px-8 w-full z-50 bg-primary  bg-opacity-80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-6xl mx-auto py-4 flex items-center justify-between">
        <h1>
          <a href="/" className="text-xl font-bold gradient-text">
            DM | Frontend Dev
          </a>
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`font-secondary text-lg font-semibold transition ${
                activeLink === link.href
                  ? "text-purple-500" // culoarea mov când e activ
                  : "text-gray hover:text-secondary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none text-2xl"
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
                onClick={() => handleClick(link.href)}
                className={`font-secondary text-md font-semibold tracking-wide transition duration-200 ${
                  activeLink === link.href
                    ? "text-purple-500"
                    : "text-gray hover:text-secondary"
                }`}
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
