import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  
  FaArrowDown,
} from "react-icons/fa";

import "../../App.css";

export default function Home() {
  return (
    <section className="hero-section">

      {/* Background Blur Effects */}
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="animated-mesh"></div>
      <div className="animated-mesh-2"></div>
      <div className="noise-overlay"></div>
      <div className="hero-text-glow"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut"
          }}
        >
          <p className="hero-tag">
            AI ENGINEER • FULL STACK • GEN AI
          </p>

          <h1 className="hero-title">
            Building
            <span> Intelligent </span>
            Digital Experiences
          </h1>

          <div className="hero-typewriter">
            <Typewriter
              options={{
                strings: [
                  "Generative AI Engineer",
                  "Agentic AI Developer",
                  "RAG Application Builder",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>

          <p className="hero-description">
            I design and build futuristic AI-powered applications
            combining intelligent systems, scalable backend
            architectures, and immersive user experiences.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Contact Me
            </a>

        </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut"
          }}
        >

          <div className="profile-card">

            <div className="profile-glow"></div>

            <img  
              src={require("../../assets/images/rev.jpeg")}
              alt="profile"
              className="profile-image"
            />

            <div className="floating-badge badge-1">
              LangChain
            </div>

            <div className="floating-badge badge-2">
              Gen AI
            </div>

            <div className="floating-badge badge-3">
              React
            </div>

          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}
