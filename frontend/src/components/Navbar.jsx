import { useState } from "react";
import logo from "../assets/images/logo-rsd.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between text-white">
      <img src={logo} alt="RSD" className="h-8" />

      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul
        className={`
          md:flex gap-6
          ${open ? "block" : "hidden"}
          absolute md:static top-16 left-0 w-full md:w-auto
          bg-gray-900 md:bg-transparent
          p-4 md:p-0
        `}
      >
        <li>
          <a href="https://www.adpweb.com.br" target="_blank">
            Acesso ADP
          </a>
        </li>
        <li>
          <a href="#contact-form">Canal Confidencial</a>
        </li>
      </ul>
    </nav>
  );
}
