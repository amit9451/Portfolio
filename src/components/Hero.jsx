import React from "react";

const projects = [
  {
    id: 1,
    title: "Signature Twin Tower DXP",
    description: "Landing page for real estate with brochure download and contact CTA.",
    tech: ["React", "Tailwind", "Vercel"],
    live: "#", // replace with actual live link
    github: "#", // replace with GitHub if available
  },
  {
    id: 2,
    title: "Curo24 New Web",
    description: "Professional web application for Curo24 live project.",
    tech: ["React", "Tailwind", "APIs"],
    live: "#", // replace with actual live link
    github: "https://github.com/amit9451",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Some of my live projects.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-md border text-slate-600 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition"
                >
                  Live
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
