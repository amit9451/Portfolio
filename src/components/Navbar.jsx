import React, { useState } from "react";
import { Moon, Sun, Menu, X, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold text-sky-600 hover:text-sky-700 transition"
        >
          Amit<span className="text-slate-800 dark:text-slate-100">.Dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-slate-700 dark:text-slate-200 font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-sky-600 transition">
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
          >
            Resume
          </a>

          {/* GitHub & LinkedIn */}
          <a href="https://github.com/amit9451" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/amit-kumar-87252a186" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition">
            <Linkedin size={20} />
          </a>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg border border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 border rounded-lg text-slate-700 dark:text-slate-200"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <nav className="flex flex-col items-center gap-4 py-5 text-slate-700 dark:text-slate-200 font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-sky-600 transition">
                {link.name}
              </a>
            ))}
            <a href="/resume.pdf" className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition" onClick={() => setMenuOpen(false)}>
              Resume
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/amit9451" target="_blank" rel="noreferrer">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/amit-kumar-87252a186" target="_blank" rel="noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
            <button onClick={toggleDarkMode} className="flex items-center gap-2 p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 mt-2">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
