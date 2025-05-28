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

export default function About() {

  return (
    <section className="max-container"> 
    <main className="relative flex items-center justify-center min-h-screen">
        <CircuitBackground />
      {/* Main content (left-aligned on desktop) */}
      <div className="relative z-10 flex flex-col items-center py-15">
        {/* Left: Intro Section */}
        <div className="flex-1 max-w-10/12 sm:max-w-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#49e6fb] mb-3 text-center">Hello, I’m<br />Shail Patel</h1>
          <div className="mb-2 text-2xl font-semibold text-center text-gray-100"><br />Software & ML Engineer</div>
          <div className="max-w-5xl mb-6 text-lg text-center text-gray-300">
            Master of Computer Science candidate at NC State University (2024–2026), passionate about bridging full-stack software engineering and machine learning.
          </div>
          <div className="max-w-5xl mb-2 text-base text-center text-gray-200">
            Driven developer and AI enthusiast, experienced in creating scalable, user-centric software and machine learning solutions. I thrive on building end-to-end applications, innovative AI models, and collaborating across disciplines.
          </div>
        </div>

      {/* Skills Icons */}
        <div
          className="relative z-10 flex flex-wrap justify-center max-w-5xl gap-8 py-3 my-8 text-6xl sm:py-6"
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
        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 px-6 pb-10 gap-15 md:gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-[#0f2737] bg-opacity-90 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#49e6fb] mb-3">Education</h2>
            <div className="mb-4 text-base font-semibold text-gray-100">NC State University, Raleigh, NC</div>
            <div className="mb-2 text-base text-gray-200">
              Master of Computer Science (Aug 2024 – May 2026)
              <br />GPA: 4.0 / 4.0
            </div>
            <div className="mb-4 text-sm text-gray-400">
              <b>Coursework:</b> Automated Learning and Data Analysis, Artificial Intelligence, Foundations of Data Science, Software Engineering, Algorithms
            </div>
            <hr className="my-4 border-gray-700" />
            <div className="mb-1 text-base font-semibold text-gray-100">Dharmsinh Desai University, Gujarat, India</div>
            <div className="mb-2 text-base text-gray-200">
              Bachelor of Information Technology (Oct 2020 – May 2024)
              <br />GPA: 9.06 / 10.0
            </div>
            <div className="text-sm text-gray-400">
              <b>Coursework:</b> Data Structures, Design and Analysis of Algorithms, Computer and Communication Networks, Microprocessor, Database Management, Software Engineering, Advanced Java and Web Technology
            </div>
          </div>
          <div className="rounded-2xl bg-[#0f2737] bg-opacity-90 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#49e6fb] mb-3">Certifications</h2>
            <ul className="pl-5 text-gray-200 list-disc certification-list">
              <li className="underline"><a href="https://www.coursera.org/account/accomplishments/verify/L9DXY5DPOXT8" target="_blank" rel="noopener noreferrer" className="break-all">Supervised Machine Learning: Regression and Classification (Coursera, DeepLearning.AI)</a></li>
              <li className="underline"><a href="https://learn.nvidia.com/certificates?id" target="_blank" rel="noopener noreferrer" className="break-all">Getting Started with Deep Learning (NVIDIA)</a></li>
              <li className="underline"><a href="https://www.coursera.org/account/accomplishments/records/TW2ZMBASBEJX" target="_blank" rel="noopener noreferrer" className="break-all">Unsupervised Learning, Recommenders, Reinforcement Learning (Coursera, DeepLearning.AI & Stanford University)</a></li>
              <li className="underline"><a href="https://www.coursera.org/account/accomplishments/verify/BUZ1OPQMBIHM" target="_blank" rel="noopener noreferrer" className="break-all">Advanced Learning Algorithms (Coursera, DeepLearning.AI)</a></li>
              <li className="underline"><a href="https://www.coursera.org/account/accomplishments/specialization/24HBB6XCGWFC" target="_blank" rel="noopener noreferrer" className="break-all">Machine Learning Specialization (Coursera, Stanford University)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    </section>
  );
}
