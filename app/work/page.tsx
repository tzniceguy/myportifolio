import React from "react";

export default function Page() {
  return (
    <div className="space-y-6">
      <p className="">The Summary of my career in Tech</p>
      <div className="space-y-3">
        <h2 className="text-xl md:text-3xl font-semibold">Skills</h2>
        <div className="space-y-4">
          <p>
            <strong>Front-End</strong>: HTML, CSS, TailwindCSS, JavaScript,
            Bootstrap, NextJS, ReactJS
          </p>
          <p>
            <strong>Back-End</strong>: Django, Flask, Laravel, php, Relational
            Databases (MySQL, Postgres)
          </p>
          <p>
            <strong>DevOps</strong>:Docker, Linux, Git
          </p>
        </div>
      </div>
    </div>
  );
}
