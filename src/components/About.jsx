import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          I'm Amit Kumar, a Full Stack Developer specializing in React, Next.js, and modern cloud platforms. I build scalable, responsive, and beautiful web apps.
        </p>
        <ul className="mt-4 list-disc pl-5 text-slate-600 dark:text-slate-300">
          <li>Frontend: React, Next.js, Tailwind</li>
          <li>Backend: Django, Node.js, APIs</li>
          <li>Deployment: Vercel, Cloudflare, Netlify</li>
        </ul>
      </div>
    </section>
  );
}
