// src/pages/Experiences.jsx

import React,{useState} from "react";
import CircuitBackground from '../components/Background';
import Footer from "../components/Footer";
import { AiFillLinkedin, AiFillGithub, AiOutlinePhone, AiFillMail } from "react-icons/ai";


const experiences = [
  {
    title: "Machine Learning Research Intern",
    company: "Space Applications Centre, ISRO",
    date: "Dec 2023 – Mar 2024",
    location: "Ahmedabad, India",
    color: "bg-[#1B3844]/[.88]",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
        <rect x="8" y="16" width="48" height="32" rx="4" fill="#379ebc" opacity="0.45"/>
        <rect x="8" y="16" width="48" height="32" rx="4" stroke="#379ebc" strokeWidth="3"/>
        <rect x="22" y="48" width="20" height="3" rx="1.5" fill="#379ebc" />
        <circle cx="32" cy="32" r="10" fill="#379ebc" />
        <polygon points="32,27 34,34 27,30 37,30 30,34"
          fill="#fff" opacity="0.85" />
      </svg>
    ),
    summary:
      "Developed cloud detection models using MODIS satellite data, leveraging Random Forests, Neural Networks, and LightGBM. Automated data pipelines, validated with INSAT-3D ground truth, and improved cloud masking accuracy for remote sensing imagery.",
  },
];

export default function Experiences() {
    const [dark, setDark] = useState(true);
    
  return (
    <div>
    <main className="relative min-h-screen">
      
        <CircuitBackground />
      {/* Content */}
      <div className="relative py-30 z-10 w-full max-w-2xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#49e6fb]">Experiences</h1>
          {/* Theme toggle placeholder */}
          {/* <button
              aria-label="Toggle dark mode"
              onClick={() => setDark(d => !d)}
              className={`ml-6 w-10 h-6 rounded-full bg-gray-700 relative transition`}
            >
              <span
                className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  dark ? "translate-x-4" : ""
                }`}
                style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.16)" }}
              ></span>
            </button> */}
        </div>
        {/* Experience Cards */}
        <div className="flex flex-col gap-7">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`flex items-center rounded-2xl shadow-xl ${exp.color} p-7 mb-2 transition transform hover:scale-[1.05]`}
            >
              <div className="flex-shrink-0 mr-7">
                {exp.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#00c2dc] mb-2">{exp.title}</h2>
                <div className="text-gray-200 text-lg font-medium mb-1">{exp.company}</div>
                <div className="text-gray-300 text-base">{exp.date}</div>
                <div className="text-gray-400 text-base">{exp.location}</div>
                {exp.summary && (
                  <div className="text-gray-300 text-base mt-2">{exp.summary}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <footer className="absolute w-full bg-[#121c28]/90 py-5 visible">
          <div id="footer" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
            <div className="text-center md:text-left text-base">
              © {new Date().getFullYear()} Shail Patel. All rights reserved.
            </div>
            <div className="flex gap-6 text-2xl footer-icons">
              <a
                href="https://www.linkedin.com/in/shail-p11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/sapatel11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className=" transition"
              >
                <AiFillGithub />
              </a>
              <a
                href="tel:+19195205547"
                aria-label="Phone"
                className="transition"
              >
                <AiOutlinePhone />
              </a>
              <a
                href="mailto:sapatel122002@gmail.com"
                aria-label="Email"
                className="transition"
              >
                <AiFillMail />
              </a>
            </div>
          </div>
        </footer>
    </div>
  );
}
