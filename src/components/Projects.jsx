import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, Code } from "lucide-react";

const projects = [
  // Curo24 Company Projects
  {
    id: 1,
    title: "Curo24 New Web",
    description: "Professional healthcare web application for Curo24, live project for patient management and services.",
    tech: ["React", "Tailwind", "APIs"],
    live: "#",
    github: "https://github.com/RamCuro24/Curo24-NewWeb",
    resume: "/resume.pdf",
    bg: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Curo24 Admin Web",
    description: "Admin dashboard for Curo24 healthcare platform to manage users, appointments, and reports.",
    tech: ["React", "Tailwind", "APIs"],
    live: "#",
    github: "https://github.com/RamCuro24/Curo24-AdminWeb",
    resume: "/resume.pdf",
    bg: "from-purple-500 to-pink-500"
  },
  // Personal Projects
  {
    id: 3,
    title: "Login with Google",
    description: "Authentication system using Google OAuth in React with Firebase integration.",
    tech: ["React", "Tailwind", "Firebase"],
    live: "#",
    github: "https://github.com/amit9451/Login-with-google",
    resume: "/resume.pdf",
    bg: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "Text Utils",
    description: "Text manipulation web app for counting words, converting case, and deep text analysis.",
    tech: ["React", "Tailwind", "Utils"],
    live: "#",
    github: "https://github.com/amit9451/Text-utils",
    resume: "/resume.pdf",
    bg: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "CRM Admin Dashboard",
    description: "Full-stack CRM Admin dashboard to manage clients, employees, and analytics efficiently.",
    tech: ["React", "Node.js", "APIs"],
    live: "#",
    github: "https://github.com/amit9451/CRMAdminDashboard",
    resume: "/resume.pdf",
    bg: "from-indigo-500 to-blue-500"
  },
  {
    id: 6,
    title: "Notepad App",
    description: "Simple yet powerful notepad web app to save and manage notes online with local storage.",
    tech: ["React", "Tailwind"],
    live: "#",
    github: "https://github.com/amit9451/notepad",
    resume: "/resume.pdf",
    bg: "from-yellow-400 to-orange-500"
  },
  {
    id: 7,
    title: "MY-SHOP",
    description: "E-commerce frontend with product listing, interactive cart, and smooth checkout UI.",
    tech: ["React", "Redux", "APIs"],
    live: "#",
    github: "https://github.com/amit9451/MY-SHOP",
    resume: "/resume.pdf",
    bg: "from-pink-500 to-rose-500"
  },
  {
    id: 8,
    title: "CRUD Project",
    description: "Complete CRUD operations web application demonstrating state management patterns.",
    tech: ["React", "Tailwind", "API"],
    live: "#",
    github: "https://github.com/amit9451/Curd-project",
    resume: "/resume.pdf",
    bg: "from-teal-400 to-cyan-500"
  },
  {
    id: 9,
    title: "BHU-REPO",
    description: "Centralized repository for university projects and academic resources.",
    tech: ["React", "Docs"],
    live: "#",
    github: "https://github.com/amit9451/BHU-REPO",
    resume: "/resume.pdf",
    bg: "from-slate-500 to-slate-700"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            A collection of projects showcasing my journey in full-stack development.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((p) => (
            <motion.div key={p.id} variants={item}>
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.1}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-shadow duration-300 flex flex-col group">
                  <div className={`h-2 bg-gradient-to-r ${p.bg || 'from-blue-500 to-purple-500'}`} />

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                        <Code className="text-blue-600 dark:text-blue-400" size={20} />
                      </div>
                      <div className="flex gap-2">
                        {p.tech.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md font-medium text-slate-600 dark:text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                      {p.description}
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      >
                        <Github size={16} /> Source
                      </a>
                      <a
                        href={p.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-auto flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-blue-600 transition"
                      >
                        <FileText size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
