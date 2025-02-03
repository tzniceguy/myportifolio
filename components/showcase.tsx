import React from "react";
import Project from "./project";

export default function Showcase() {
  return (
    <div className="space-y-3 pb-6">
      <h2 className="text-xl font-semibold">my work</h2>
      <h2>here is the list with projects with my footprints</h2>
      <div className="space-y-6">
        <Project />
      </div>
    </div>
  );
}
