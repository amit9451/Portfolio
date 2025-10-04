import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Interested in collaborating? Fill the form below or email me directly.
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 rounded-md border"
          />
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-3 py-2 rounded-md border"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-3 py-2 rounded-md border"
          ></textarea>
          <button
            type="button"
            className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
          📧 amit@example.com | 📞 +91 94510631419 | 📍 India
        </div>
      </div>
    </section>
  );
}
