import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Globe } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      title: "Frontend Development",
      desc: "Crafting responsive and interactive UIs with React, Next.js, and Tailwind CSS."
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: "Backend Development",
      desc: "Building robust APIs and server-side logic using Node.js, Express, and Django."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Cloud & Deployment",
      desc: "Deploying and managing applications on Vercel, Netlify, and Cloudflare."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-slate-800/20 -skew-x-12 translate-x-1/2 -z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm Amit Kumar, a passionate <span className="text-blue-600 font-semibold">Full Stack Developer</span> who loves transforming ideas into reality through code.
            With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition text-center group"
            >
              <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
