import React from "react";
import { projects } from "@/lib/data";
import Card from "./project-card";
import { title } from "process";

export default function Project() {
  return (
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
  );
}
