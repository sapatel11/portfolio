// src/pages/Projects.jsx

import React from "react";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiReact,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiJavascript,
  SiNodedotjs,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiGooglecolab,
  SiFastapi,
  SiBootstrap,
  SiScikitlearn
} from "react-icons/si";

import CircuitBackground from "../components/Background";

const projects = [
  {
    title: "Fake Image Detection",
    label: "CNNs | ResNet | GRAD-CAM",
    icons: [
      <SiPython key="py" />,
      <SiPytorch key="pt" />,
      <SiScikitlearn key="sk" />,
      <SiGithub key="gh" />,
    ],
    description: "Developed a CNN-based model to detect fake images using ResNet50 and GRAD-CAM for explainability with the help of CIFAKE dataset. Achieved 95% accuracy on the Fake Image Dataset, with visual explanations of predictions.",
    link: "https://github.com/sapatel11/Fake-Image-Detection",
  },
  {
    title: "AI Image Captioning using Flickr30k",
    label: "ResNet | InceptionV3 | Transformer | LSTM",
    icons: [
      <SiPython key="py" />,
      <SiPytorch key="pt" />,
      <SiTensorflow key="tf" />,
      <SiGithub key="gh" />,
    ],
    description: "Developed an AI-powered image caption generator using the Flickr30k dataset with ResNet50+Transformer and InceptionV3+LSTM. Achieved competitive BLEU and CIDEr scores using PyTorch, TensorFlow, and Hugging Face.",
    link: "https://github.com/sapatel11/Image_Captioning",
  },
  {
    title: "Smart Text Prediction - Gujarati Sentence Completion",
    label: "NLP",
    icons: [
      <SiPython key="py" />,
      <SiTensorflow key="tf" />,
      <SiNumpy key="np" />,
      <SiPandas key="pd" />,
      <SiGithub key="gh" />,
    ],
    description: "Created a language model for Gujarati sentence completion using Hidden Semi Markov Models and neural networks. Collected and preprocessed custom datasets to improve word prediction accuracy.",
    link: "https://github.com/KaranPatwa2411/Sentence_Generation_in_Gujarati",
  },
  {
    title: "IC Chip Detection for Automated Inspection",
    label: "Computer Vision | YOLOv5",
    icons: [
      <SiPython key="py" />,
      <SiPytorch key="pt" />,
      <SiGithub key="gh" />,
    ],
    description: "Designed an IC chip detection system using YOLOv5 with 90% accuracy. Leveraged image masking and custom datasets to optimize detection and classification.",
    link: "",
  },
  {
    title: "Movie Recommendation System",
    label: "Full Stack",
    icons: [
      <SiReact key="react" />,
      <SiFlask key="flask" />,
      <SiMysql key="mysql" />,
      <SiPython key="py" />,
      <SiJavascript key="js" />,
      <SiGithub key="gh" />,
    ],
    description: "Revamped a personalized movie recommendation site using Flask, React, and MySQL. Integrated advanced algorithms, improved UI/UX, and boosted performance with optimized queries and caching.",
    link: "https://github.com/svd-ncsu/BingeSuggest",
  },
  {
    title: "On-Campus Job Portal",
    label: "MERN Stack",
    icons: [
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiMongodb key="mongodb" />,
      <SiJavascript key="js" />,
      <SiGithub key="gh" />,
    ],
    description: "Developed a real-time job portal for students and recruiters with MERN stack. Features include real-time chat, dark mode, and seamless recruiter-student interaction.",
    link: "https://github.com/svd-ncsu/wolfjobs_fall_24",
  },
  {
    title: "SimplyClip - Cross-Browser Clipboard Extension",
    label: "Browser Extension",
    icons: [
      <SiJavascript key="js" />,
      <SiNodedotjs key="node" />,
      <SiPython key="py" />,
      <SiHtml5 key="html" />,
      <SiCss3 key="css" />,
      <SiGithub key="gh" />,
    ],
    description: "Built a cross-browser extension enabling a shared clipboard, with features like multi-text selection, summarization, sorting, and export for researchers and professionals.",
    link: "",
  },
];

export default function Projects() {
  return (
    <section className="max-container">
      <main className="relative min-h-screen pb-8">
          <CircuitBackground />
        <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-4 pt-6 mx-auto ">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#49e6fb] mb-12">Projects</h1>
          {/* Project Cards */}
          <div className="flex flex-col gap-8 ">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:no-underline"
              >
              <div
                key={idx}
                className="flex flex-col rounded-2xl shadow-xl bg-[#132026]/90 p-8 mb-2 hover:scale-[1.05]"
              >
                <div className="flex flex-row flex-wrap items-center gap-4">
                  <h2 className="text-2xl font-bold text-[#00c2dc] mb-1">{project.title}</h2>
                </div>
                <div>
                  {project.label && (
                    <div className="mb-2 text-base font-semibold text-gray-200">{project.label}</div>
                  )}
                </div>
                <div className="mt-2 text-base text-gray-300">{project.description}</div>
                {/* Icons at bottom */}
                <div className="flex flex-wrap gap-4 items-center mt-6 text-2xl text-[#ffd7a2]">
                  {project.icons}
                </div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
