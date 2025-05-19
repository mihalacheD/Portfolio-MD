import Navbar from "../components/Navbar";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Daniela Mihalache</h1>
      <h2 className="text-2xl md:text-4xl text-accent mb-6">Frontend Developer</h2>
      <p className="text-lg md:text-xl max-w-xl mb-8">
        I build modern, fast, and visually engaging web interfaces with React and Tailwind.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="#projects" className="px-6 py-3 border border-accent rounded-xl hover:bg-accent hover:text-black transition">
          View Projects
        </a>
        <a href="/CV_IulianMihalache.pdf" download className="px-6 py-3 border border-accent rounded-xl hover:bg-accent hover:text-black transition">
          Download CV
        </a>
        <a href="#contact" className="px-6 py-3 border border-accent rounded-xl hover:bg-accent hover:text-black transition">
          Contact Me
        </a>
      </div>
    </section>
  );
}
