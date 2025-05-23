import React, { useState } from "react";
import CircuitBackground from '../components/Background';
import Footer from "../components/Footer";

const profilePic = "/pic.jpeg"; // Replace with your own photo URL

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", type: "resume" },
];

export default function Home() {
  // Simple dark mode (feel free to replace with context/provider)
  const [dark, setDark] = useState(true);
  const [showResumePrompt, setShowResumePrompt] = useState(false);

  return (
  <section className="max-container"> {/* You can skip this if you're not using Tailwind's dark mode */}

    <main className="relative min-h-screen flex items-center justify-center">

      {/* --- Fixed Background --- */}
      
        <CircuitBackground />
      
      {/* --- Centered Card --- */}
      <div
        id="homecard"
        className="relative z-10 w-full max-w-3xl rounded-3xl bg-[#132026]/90 shadow-2xl backdrop-blur-lg px-8 py-8 flex flex-col items-center"
      >
        {/* Nav Bar */}
        <nav className="flex justify-end w-full gap-2 mb-8 items-center bottom-2">
          <ul className="flex gap-[30px] text-gray-200 text-lg font-medium">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                {link.type === "resume" ? (
                  <span
                    className="hover:text-indigo-400 text-[#646cff] cursor-pointer"
                    onClick={() => setShowResumePrompt(true)}
                  >
                    {link.label}
                  </span>
                ) : (
                  <a
                    href={link.href}
                    className="hover:text-indigo-400 transition"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full">

          {/* Profile Image */}
          <div className="flex-shrink-0 mt-12 md:mt-0">
            <img
              src={profilePic}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-[#374785] shadow-lg object-cover"
            />
          </div>

          {/* Info */}

          <div className="text-center md:text-left">
            <h1 className="text-[#49e6fb] text-4xl md:text-6xl font-extrabold leading-none mb-6">
              Shail Patel
            </h1>

            <div className="text-[#00c2dc] text-xl md:text-2xl font-semibold mb-3">
              Aspiring Software Engineer & ML Researcher
            </div>

            <div className="text-gray-300 text-lg md:text-xl mb-4 font-normal leading-relaxed">
              <p>
                Master of Computer Science student<br />
                NC State University (2024–2026)
              </p>

              <p className="mt-2">
                Experienced in full-stack development, machine learning, and building scalable, user-centric applications. 
              </p>

              <p className="mt-2">
                Tech Stack: Python, Java, React, Flask, Django, PyTorch, TensorFlow, MySQL, Tailwind, AWS Cloud, and more.
              </p>
            </div>

            <a
              href="/projects"
              id="button-ref"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-7 py-3 rounded-xl shadow-lg transition"
            >
              View My Work
            </a>

          </div>
        </div>
      </div>
    </main>
    {showResumePrompt && (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-[#16233a] p-8 rounded-2xl shadow-xl flex flex-col gap-5 items-center min-w-[300px]">
          <h2 className="text-lg font-semibold text-[#49e6fb] mb-2">Select Resume to View</h2>
          <button
            className="w-full px-6 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition mb-2"
            onClick={() => {
              window.open("/Resume_SDE.pdf", "_blank");
              setShowResumePrompt(false);
            }}
          >
            Software Engineer Resume
          </button>
          <button
            className="w-full px-6 py-2 rounded-lg bg-[#00c2dc] hover:bg-[#1dd0ee] text-white font-semibold transition mb-2"
            onClick={() => {
              window.open("/Resume_ML.pdf", "_blank");
              setShowResumePrompt(false);
            }}
          >
            Machine Learning Engineer Resume
          </button>
          <button
            className="w-full px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 text-gray-200 transition"
            onClick={() => setShowResumePrompt(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    )}
    <Footer />
  </section>
);
}
