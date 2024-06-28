import React from "react";

export default function Page() {
  return (
    <div className="space-y-6">
      <p className="">The Summary of my career in Tech</p>
      <div className="space-y-3">
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
