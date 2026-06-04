import "../App.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Sidebar() {

  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", link: "#", id: "home" },
    { name: "About", link: "#about", id: "about" },
    { name: "Experience", link: "#resume", id: "resume" },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Contact", link: "#contact", id: "contact" },
  ];

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "about",
        "resume",
        "projects",
        "contact",
      ];

      let current = "home";

      sections.forEach((section) => {

        const element = document.getElementById(section);

        if (element) {

          const rect = element.getBoundingClientRect();

          if (rect.top <= 200) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="sidebar"
    >

      {/* LOGO */}

      <div className="sidebar-logo">
        Revanth
        <br />
        Palaparthi
      </div>

      {/* NAVIGATION */}

      <div className="sidebar-nav">

        {navItems.map((item) => (

          <a
            href={item.link}
            key={item.id}
            className={`sidebar-link ${
              activeSection === item.id
                ? "active-link"
                : ""
            }`}
          >
            <span className="link-dot"></span>
            {item.name}
          </a>

        ))}

      </div>

      {/* SOCIALS */}

      <div className="sidebar-socials">

        <a
          href="https://github.com/revi1106"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="www.linkedin.com/in/palaparthi-revanth-0b05612a4"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>

      </div>
    </motion.div>
  );
}
