import React, { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", type: "resume" },
];

export default function Header({ onResumeClick }) {
  return (
    <header className="relative top-0 z-40 flex flex-row items-center justify-between w-full px-5 py-2 sm:py-5 sm:px-10">
      <a href="/" aria-label="Go to homepage"
         className="flex items-center justify-center w-10 h-8 font-mono text-lg italic font-semibold tracking-wider sm:text-2xl rounded-xl hover:scale-105 root-button"
         style={{ letterSpacing: '0.1em' }}
      >
          SP
      </a>
      <nav className="flex items-center">
        <ul className="flex gap-2 sm:gap-8 text-[#646cff] text-sm sm:text-lg font-medium flex-wrap">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              {link.type === "resume" ? (
                <span
                  className="transition cursor-pointer hover:text-indigo-400"
                  onClick={onResumeClick}
                >
                  {link.label}
                </span>
              ) : (
                <a
                  href={link.href}
                  className="transition hover:text-indigo-400"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}