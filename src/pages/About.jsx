import React, { useRef, useState, useEffect } from "react";
import {
  SiPython,
  SiJavascript,
  SiDjango,
  SiFlask,
  SiReact,
  SiPytorch,
  SiTensorflow,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiPlotly
} from "react-icons/si";

import CircuitBackground from '../components/Background';
import Footer from "../components/Footer";

export default function About() {

  return (
    <section className="max-container"> 
    <main className="relative min-h-screen">
        <CircuitBackground />
      {/* Main content (left-aligned on desktop) */}
      <div className="relative py-15 z-10 w-full flex flex-col items-center">
        {/* Left: Intro Section */}
        <div className="flex-1 mb-12 md:mb-0 md:pr-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#49e6fb] mb-3 text-center">Hello, I’m<br />Shail Patel</h1>
          <div className="text-2xl font-semibold text-gray-100 mb-2 text-center"><br />Software & ML Engineer</div>
          <div className="text-lg text-gray-300 max-w-5xl text-center mb-6">
            Master of Computer Science candidate at NC State University (2024–2026), passionate about bridging full-stack software engineering and machine learning.
          </div>
          <div className="text-base text-gray-200 max-w-5xl text-center mb-2">
            Driven developer and AI enthusiast, experienced in creating scalable, user-centric software and machine learning solutions. I thrive on building end-to-end applications, innovative AI models, and collaborating across disciplines.
          </div>
        </div>

      {/* Skills Icons */}
        <div
          className="relative z-10 flex flex-wrap justify-center gap-8 my-8 py-6 max-w-5xl text-6xl"
        >
          <span title="Python"><SiPython /></span>
          <span title="JavaScript"><SiJavascript /></span>
          <span title="C++"><SiCplusplus /></span>
          <span title="Django"><SiDjango /></span>
          <span title="Flask"><SiFlask /></span>
          <span title="React"><SiReact /></span>
          <span title="PyTorch"><SiPytorch /></span>
          <span title="TensorFlow"><SiTensorflow /></span>
          <span title="Scikit-learn"><SiScikitlearn /></span>
          <span title="MongoDB"><SiMongodb /></span>
          <span title="MySQL"><SiMysql /></span>
          <span title="Git"><SiGit /></span>
          <span title="Github"><SiGithub /></span>
          <span title="HTML5"><SiHtml5 /></span>
          <span title="CSS3"><SiCss3 /></span>
          <span title="TailwindCSS"><SiTailwindcss /></span>
          <span title="Numpy"><SiNumpy /></span>
          <span title="Pandas"><SiPandas /></span>
          <span title="Plotly"><SiPlotly /></span>
        </div>

      {/* Info Tiles */}
        {/* Education Tile */}
        <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-40 px-6 pb-24">
          <div className="rounded-2xl bg-[#0f2737] bg-opacity-90 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#49e6fb] mb-3">Education</h2>
            <div className="text-gray-100 text-base mb-4 font-semibold">NC State University, Raleigh, NC</div>
            <div className="text-gray-200 text-base mb-2">
              Master of Computer Science (Aug 2024 – May 2026)
              <br />GPA: 4.0 / 4.0
            </div>
            <div className="text-gray-400 text-sm mb-4">
              <b>Coursework:</b> Automated Learning and Data Analysis, Artificial Intelligence, Foundations of Data Science, Software Engineering, Algorithms
            </div>
            <hr className="my-4 border-gray-700" />
            <div className="text-gray-100 text-base mb-1 font-semibold">Dharmsinh Desai University, Gujarat, India</div>
            <div className="text-gray-200 text-base mb-2">
              Bachelor of Information Technology (Oct 2020 – May 2024)
              <br />GPA: 9.06 / 10.0
            </div>
            <div className="text-gray-400 text-sm">
              <b>Coursework:</b> Data Structures, Design and Analysis of Algorithms, Computer and Communication Networks, Microprocessor, Database Management, Software Engineering, Advanced Java and Web Technology
            </div>
          </div>
          <div className="rounded-2xl bg-[#0f2737] bg-opacity-90 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#49e6fb] mb-3">Certifications</h2>
            <ul className="list-disc pl-5 text-gray-200 certification-list">
              <li><a href="https://www.coursera.org/account/accomplishments/verify/L9DXY5DPOXT8" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">Supervised Machine Learning: Regression and Classification (Coursera, DeepLearning.AI)</a></li>
              <li><a href="https://learn.nvidia.com/certificates?id" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">Getting Started with Deep Learning (NVIDIA)</a></li>
              <li><a href="https://www.coursera.org/account/accomplishments/records/TW2ZMBASBEJX" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">Unsupervised Learning, Recommenders, Reinforcement Learning (Coursera, DeepLearning.AI & Stanford University)</a></li>
              <li><a href="https://www.coursera.org/account/accomplishments/verify/BUZ1OPQMBIHM" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">Advanced Learning Algorithms (Coursera, DeepLearning.AI)</a></li>
              <li><a href="https://www.coursera.org/account/accomplishments/specialization/24HBB6XCGWFC" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">Machine Learning Specialization (Coursera, Stanford University)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </section>
  );
}
