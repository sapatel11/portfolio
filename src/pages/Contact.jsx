import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import CircuitBackground from "../components/Background"; // Or use your circuit SVG inline
import Footer from "../components/Footer"; // Import your footer component

const contacts = [
  {
    color: "bg-[#21394d]/90",
    icon: <FiMail size={50} />,
    title: "Email",
    detail: <a href="mailto:sapatel122002@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">sapatel122002@gmail.com</a>,
  },
  {
    color: "bg-[#1b4038]/90",
    icon: <FiPhone size={50} />,
    title: "Phone",
    detail: <a href="tel:+19195205547" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">+1 (919) 520-5547</a>,
  },
  {
    color: "bg-[#593c18]/90",
    icon: <AiFillLinkedin size={54} />,
    title: "LinkedIn",
    detail: <a href="https://www.linkedin.com/in/shail-p11" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">shail-p11</a>,
  },
  {
    color: "bg-[#523230]/90",
    icon: <AiFillGithub size={54} />,
    title: "GitHub",
    detail: (
      <a href="https://github.com/sapatel11" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">
        sapatel11
      </a>
    ),
  },
];

export default function Contact() {
  return (
    <div className="contact-page">
    <main className="relative min-h-screen">
      {/* Fixed background gradient + SVG */}
      
          <CircuitBackground />
      {/* Page content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center px-4 pt-12 pb-20">
        {/* Heading */}
        <h1 className="text-3xl md:text-3xl font-extrabold text-gray-100 mb-12">Contact</h1>
        {/* Grid of contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full ">
          {contacts.map((item, i) => (
            <div id="contactcard"
              key={i}
              className={`rounded-2xl shadow-xl ${item.color} flex flex-col items-center justify-center py-8 px-4 min-h-[180px] transition hover:scale-[1.05]`}
            >
              <div className="mb-5">{item.icon}</div>
              <div className="text-2xl font-bold text-gray-100 mb-1 text-center">{item.title}</div>
              <div className="text-lg text-gray-200 text-center">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer/>
    </div>
  );
}
