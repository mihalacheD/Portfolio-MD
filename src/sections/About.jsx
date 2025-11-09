import certificates from "../data/certificates";
import { AiFillStar } from "react-icons/ai";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white py-14"
      aria-label="About me section"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Titluri */}
        <h2 className="text-4xl flex-center font-bold mb-2 mt-8 text-secondary">
          Get to know more
        </h2>
        <h3 className="text-2xl flex-center font-semibold mb-8 text-gray-300">
          About Me
        </h3>
        <div className="w-40 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 mx-auto"></div>

        {/* Container coloane */}
        <div className="flex flex-col md:flex-row gap-12 mt-14">
          {/* Descriere */}
          <article className="md:w-1/2 space-y-6 hover:bg-gray-800 transition rounded-lg p-4">
            <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
              I’m a <strong>frontend developer</strong> who loves turning ideas into clean,
              responsive, and meaningful digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
              My main tools are <strong>React, Next.js, TypeScript, and Tailwind CSS</strong>,
              but what truly drives me is crafting interfaces that feel
              intuitive and alive.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
              Over time, I’ve expanded my skills beyond the frontend — exploring
              <strong>AI-powered fullstack apps, prompt engineering, and mobile
              development with React Native.</strong> This blend of creativity and
              technology helps me build solutions that not only look good but
              also solve real problems efficiently.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
              To strengthen my foundation, I’ve completed certifications from
              top institutions like <strong>Meta, Harvard (CS50), FrontendMasters,
              Codecademy, and Udemy,</strong> covering everything from databases and Git
              to advanced React and TypeScript.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
              I’m constantly learning, experimenting, and refining my craft —
              because for me, every project is a chance to grow and create
              something smarter, faster, and better.
            </p>
          </article>

          {/* Educație */}
          <section
            className="md:w-1/2 bg-gradient-to-tr from-purple-700 via-purple-900 to-indigo-900 rounded-xl p-8 shadow-lg "
            aria-label="Education and certificates"
          >
            <h4 className="text-xl font-semibold mb-4 text-white">
              Education & Certificate
            </h4>
            <ul className="space-y-4">
              {certificates.map(({ name, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-opacity-30 hover:bg-opacity-50 border border-purple-800 hover:border-purple-500 transition-all rounded-lg p-4 text-sm hover:scale-105 transform duration-300 flex gap-3"
                  >
                    <span className="flex-shrink-0 w-4 text-purple-300 text-xl flex items-center justify-center">
                      <AiFillStar />
                    </span>
                    <span className="flex-grow">{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
