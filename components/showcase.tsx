import React from "react";
import Project from "./project";

export default function Showcase() {
  return (
    <div className="space-y-3 pb-6">
      <h2 className="text-xl font-semibold">my work</h2>
      <p>here is the list with projects with my footprints</p>
      <div className="">
        <Project />
      </div>
    </div>
  );
}
