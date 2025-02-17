import { projects } from "@/lib/data";
import Card from "./project-card";

export default function Showcase() {
  return (
    <section className="py-8" id="work">
      <div className="my-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">My Work</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here are some of the projects I have worked on that showcase my
            skills and experience.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.title}
            url={project.link}
            title={project.title}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  );
}
