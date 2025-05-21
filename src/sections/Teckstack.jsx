import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiChakraui,
} from "react-icons/si";
import {
   TbBrandReactNative
} from "react-icons/tb";

const tech = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Native", icon: <TbBrandReactNative className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Chakra UI", icon: <SiChakraui className="text-teal-400" /> },
];

const Teckstack = () => {
  return (
    <section
      id="techstack"
      className="min-h-screen py-16 bg-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl flex-center font-bold mb-2 mt-8 text-secondary">
          Skills & Tools
        </h2>
        <h3 className="text-2xl flex-center font-semibold mb-8 text-gray-300">
          Technologies I work with
        </h3>
        <div className="w-40 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 mx-auto"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10  mt-14">
          {tech.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-md rounded-xl  border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(192,132,252,0.3)]"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-sm text-gray-300">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teckstack;
