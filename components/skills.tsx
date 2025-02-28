import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        "HTML",
        "CSS",
        "TailwindCSS",
        "JavaScript",
        "Bootstrap",
        "NextJS",
        "ReactJS",
      ],
      icon: () => (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      ),
    },
    {
      title: "Back-End",
      skills: [
        "Django",
        "Flask",
        "FastAPI",
        "Laravel",
        "PHP",
        "MySQL",
        "PostgreSQL",
      ],
      icon: () => (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
    {
      title: "DevOps",
      skills: ["Docker", "Linux", "Git"],
      icon: () => (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8" id="skills">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className="p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              {category.icon()}
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-marshland-800 text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
