import React from "react";
import NavBar from "../components/NavBar";

export default function Work() {
  return (
    <div className="space-y-4 min-h-screen">
      <div>
        <h1 className="font-semibold text-2xl">work</h1>
      </div>
      <NavBar />
      <div className="border-b-2 m-2">The Summary of my career in Tech</div>
      <div className="border-b-2 m-2 space-y-3">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="space-y-2">
          <p>
            <strong>FrontEnd</strong>:HTML, CSS, TailwindCSS, JavaScript,
            Bootstrap, NextJS, ReactJS
          </p>
          <p>
            <strong>Back-End</strong>:Django, Flask, Laravel, php, MySQL
            (Relational Databases)
          </p>
          <p>
            <strong>DevOps</strong>:Docker, Linux, Git
          </p>
        </div>
      </div>
    </div>
  );
}
