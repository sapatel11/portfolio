import React, { useState } from "react";
import CircuitBackground from '../components/Background';

const profilePic = "/profile.jpg"; // Replace with your own photo URL

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", type: "resume" },
];

export default function Home() {

  return (
  <section className="max-container"> {/* You can skip this if you're not using Tailwind's dark mode */}

    <main className="relative flex items-center justify-center min-h-screen pb-10">

      {/* --- Fixed Background --- */}
      
        <CircuitBackground />
      
      {/* --- Centered Card --- */}
      <div
        id="homecard"
        className="relative z-10 max-w-10/12 lg:max-w-4xl rounded-3xl bg-[#132026]/75 shadow-2xl backdrop-blur-xs px-5 sm:px-6 md:px-20 py-6 md:py-8 flex flex-col items-center"
      >

        {/* Main Content */}

        <div className="flex flex-col items-center justify-center w-full gap-10">

          {/* Profile Image */}
          <h1 className="text-[#49e6fb] text-lg sm:text-4xl md:text-6xl font-extrabold leading-none">
              Shail Patel
          </h1>
          <div className="flex-shrink-0">
            <img
              src={profilePic}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-[#374785] shadow-lg object-cover"
            />
          </div>

          {/* Info */}

          <div className="text-center">

            <div className="text-[#00c2dc] text-xl md:text-2xl font-semibold mb-3">
              Aspiring Software Engineer & ML Researcher
            </div>

            <div className="mb-4 text-lg font-normal leading-relaxed text-gray-300 md:text-xl">
              <p>
                Master of Computer Science student<br />
                NC State University (2024–2026)
              </p>

              <p className="mt-2">
                Experienced in full-stack development, machine learning, and building scalable, user-centric applications. 
              </p>
            </div>

            <a
              href="/projects"
              id="button-ref"
              className="inline-block py-3 font-semibold text-white transition bg-indigo-500 shadow-lg hover:bg-indigo-600 px-7 rounded-xl"
            >
              View My Work
            </a>

          </div>
        </div>
      </div>
    </main>
  </section>
);
}
