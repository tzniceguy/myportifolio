import React from "react";
import Project from "./Project";

export default function Showcase() {
  return (
    <div className="space-y-4 border-b-2 m-2">
      <h2 className="text-xl font-semibold">My Works</h2>
      <h2>Here is the list projects with my footprints</h2>
      <div>
        <Project />
      </div>
    </div>
  );
}
