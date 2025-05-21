// sections/Projects.jsx
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl flex-center font-bold mb-2 mt-8 text-secondary">My Projects</h2>
        <h3 className="text-2xl flex-center font-semibold mb-8 text-gray-300">Selected Work</h3>
        <div className="w-40 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 mx-auto"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
