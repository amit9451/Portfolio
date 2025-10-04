import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
      © {new Date().getFullYear()} Amit Kumar   
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://github.com/amit9451" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/amit-kumar-87252a186" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
