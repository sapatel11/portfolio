import { AiFillLinkedin, AiFillGithub, AiOutlinePhone, AiFillMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#121c28]/90 py-5 visible">
      <div id="footer" className="flex items-center justify-between max-w-6xl gap-2 px-4 mx-auto sm:gap-4">
        <div className="text-sm text-center sm:text-base md:text-left">
          © {new Date().getFullYear()} Shail Patel. All rights reserved.
        </div>
        <div className="flex gap-2 text-2xl sm:gap-6 footer-icons">
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
            className="transition "
          >
            <AiFillGithub />
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
  );
}
