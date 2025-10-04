import React from "react";
import Tilt from "react-parallax-tilt";

const projects = [
  // Curo24 Company Projects
  {
    id: 1,
    title: "Curo24 New Web",
    description: "Professional healthcare web application for Curo24, live project for patient management and services.",
    tech: ["React", "Tailwind", "APIs"],
    live: "#", // add actual live link if available
    github: "https://github.com/RamCuro24/Curo24-NewWeb",
    resume: "/resume.pdf",
  },
  {
    id: 2,
    title: "Curo24 Admin Web",
    description: "Admin dashboard for Curo24 healthcare platform to manage users, appointments, and reports.",
    tech: ["React", "Tailwind", "APIs"],
    live: "#", // add actual live link
    github: "https://github.com/RamCuro24/Curo24-AdminWeb",
    resume: "/resume.pdf",
  },

  // Personal Projects
  {
    id: 3,
    title: "Login with Google",
    description: "Authentication system using Google OAuth in React with Firebase.",
    tech: ["React", "Tailwind", "Firebase Auth APIs"],
    live: "#",
    github: "https://github.com/amit9451/Login-with-google",
    resume: "/resume.pdf",
  },
  {
    id: 4,
    title: "Text Utils",
    description: "Text manipulation web app for counting words, converting case, and text analysis.",
    tech: ["React", "Tailwind", "APIs"],
    live: "#",
    github: "https://github.com/amit9451/Text-utils",
    resume: "/resume.pdf",
  },
  {
    id: 5,
    title: "CRM Admin Dashboard",
    description: "Full-stack CRM Admin dashboard to manage clients, employees, and analytics.",
    tech: ["React", "Tailwind", "Node.js", "APIs"],
    live: "#",
    github: "https://github.com/amit9451/CRMAdminDashboard",
    resume: "/resume.pdf",
  },
  {
    id: 6,
    title: "Notepad App",
    description: "Simple notepad web app to save and manage notes online.",
    tech: ["React", "Tailwind"],
    live: "#",
    github: "https://github.com/amit9451/notepad",
    resume: "/resume.pdf",
  },
  {
    id: 7,
    title: "MY-SHOP",
    description: "E-commerce frontend with product listing, cart functionality, and checkout UI.",
    tech: ["React", "Tailwind", "APIs"],
    live: "#",
    github: "https://github.com/amit9451/MY-SHOP",
    resume: "/resume.pdf",
  },
  {
    id: 8,
    title: "Curd Project",
    description: "CRUD operations web application using React and Tailwind CSS.",
    tech: ["React", "Tailwind", "APIs"],
    live: "#",
    github: "https://github.com/amit9451/Curd-project",
    resume: "/resume.pdf",
  },
  {
    id: 9,
    title: "BHU-REPO",
    description: "University project repository for various academic exercises and mini-projects.",
    tech: ["React", "Tailwind"],
    live: "#",
    github: "https://github.com/amit9451/BHU-REPO",
    resume: "/resume.pdf",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Some of my professional and personal projects, showcasing live demos and source code.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Tilt
              key={p.id}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md border text-slate-600 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-3 flex-wrap">
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
                <a
                  href={p.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                >
                  Resume PDF
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
