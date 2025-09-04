import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  site,
  youTube,
  techStack = [],
}) {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(192,132,252,0.3)]">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-6 flex flex-col justify-between min-h-[260px]">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{description}</p>

        {/* Badge-uri */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="border border-gray-600 text-gray text-xs px-3 py-1 rounded-full font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Butoane */}
        <div className="flex flex-wrap gap-4 mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-md transition"
            >
              <FaGithub className="inline mr-2" /> GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-4 py-2 rounded-md transition"
            >
              <FaExternalLinkAlt className="inline mr-2" />
              Live Demo
            </a>
          )}
          {site && (
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white text-sm px-4 py-2 rounded-md transition"
            >
              <FaExternalLinkAlt className="inline mr-2" />
              Live Site
            </a>
          )}
          {youTube && (
            <a
              href={youTube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-500 text-white text-sm px-4 py-2 rounded-md transition"
            >
              <FaYoutube className="inline mr-2" /> YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
