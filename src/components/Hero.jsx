import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const user = {
  name: "Amit Kumar",
  role: "Full Stack Developer",
  bio: "I build modern, fast, and scalable web applications using React, Node.js, and Cloud technologies.",
  resume: "AMIT WEB.JS.pdf",
  profilePic: "https://ui-avatars.com/api/?name=Amit+Kumar&background=0284c7&color=fff&size=200",
  socials: {
    github: "https://github.com/amit9451",
    linkedin: "https://linkedin.com/in/amit9451",
    email: "mailto:amit@example.com",
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold mb-6"
          >
            👋 Welcome to my portfolio
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-blue-600 dark:text-blue-400">{user.name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium mb-6">
            <span className="text-blue-500">{`<`}</span>
            {user.role}
            <span className="text-blue-500">{`/>`}</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {user.bio}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={user.resume}
              download
              className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition flex items-center gap-2"
            >
              Download CV <Download size={20} />
            </motion.a>
          </div>

          <div className="mt-12 flex gap-6 justify-center md:justify-start text-slate-500 dark:text-slate-400">
            <a href={user.socials.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href={user.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href={user.socials.email} className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={user.profilePic}
              alt={user.name}
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl z-10"
            />

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 top-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-semibold text-sm">Open to work</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl z-20"
            >
              <span className="font-bold text-2xl text-blue-600">5+</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">Years Exp.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
