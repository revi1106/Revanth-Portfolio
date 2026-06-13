import { useEffect, useState } from "react";

import ScienceIcon from "@mui/icons-material/Science";
import MemoryIcon from "@mui/icons-material/Memory";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Resume() {

  const projects = [

    {
      icon: <ScienceIcon />,
      title: "CERVICAL CELL SEGMENTATION RESEARCH",

      badge: "IEEE INCIT 2025",

      description:
        "Conducted a comparative evaluation of eight deep learning architectures including U-Net, U-Net++, Attention U-Net, DeepLabV3+, PAN, SegFormer, YOLOv8 and YOLOv11 for cervical cell segmentation on the SIPaKMeD medical imaging dataset, achieving high Dice and IoU scores while analyzing the trade-off between segmentation accuracy and real-time inference performance.",
      tags: [
        "Deep Learning",
        "PyTorch",
        "Computer Vision",
        "Medical AI",
      ],

      link:
        "https://ieeexplore.ieee.org/document/11276101",
    },

    {
      icon: <MemoryIcon />,
      title: "DRDL SUMMER INTERNSHIP",

      badge: "DRDO • Distributed Systems",

     description:
  "Designed scalable and fault-tolerant distributed networking applications using TCP socket communication, packet retransmission strategies and Ring Token Protocol mechanisms to optimize decentralized communication reliability, throughput and low-latency coordination across distributed systems.",
      tags: [
        "Distributed Systems",
        "Networking",
        "TCP Sockets",
        "System Design",
      ],
    },
  ];

  const skills = [

    "Python",
    "Generative AI",
    "Machine Learning",
    "Deep Learning",
    "RAG",
    "LangChain",
    "React",
    "JavaScript",
    "SQL",
    "Linux",
    "PyTorch",
    "Computer Vision",
    "System Design",
    "Distributed Systems",
    "Node.js",
    "HTML/CSS",
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {

    setIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {

    setIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );

    }, 7000);

    return () => clearInterval(interval);

  }, [projects.length]);

  return (

    <section
      id="resume"
      className="exp-section"
    >

      <div className="exp-grid"></div>

      <div className="exp-glow glow-one"></div>
      <div className="exp-glow glow-two"></div>

      <div
        className="exp-heading"
        data-aos="fade-down"
      >

        Experience

      </div>

      <div className="exp-main">

        {/* LEFT */}

        <div
          className="exp-left"
          data-aos="fade-right"
        >

          <button
            className="exp-arrow left"
            onClick={prevSlide}
          >

            <ArrowBackIosNewIcon />

          </button>

          <button
            className="exp-arrow right"
            onClick={nextSlide}
          >

            <ArrowForwardIosIcon />

          </button>

          <div className="exp-card">

            <div className="exp-top-row">

              <div className="exp-icon">

                {projects[index].icon}

              </div>

              <div className="exp-badge">

                {projects[index].badge}

              </div>

            </div>

            <div className="exp-title">

              {projects[index].title}

            </div>

            <div className="exp-description">

              {projects[index].description}

            </div>

            <div className="exp-tags">

              {
                projects[index].tags.map((tag) => (

                  <span key={tag}>

                    {tag}

                  </span>
                ))
              }

            </div>

            {
              projects[index].link && (

                <a
                  href={projects[index].link}
                  target="_blank"
                  rel="noreferrer"
                  className="exp-btn"
                >

                  View Research Paper

                  <ArrowOutwardIcon />

                </a>
              )
            }

          </div>

        </div>

        {/* RIGHT */}

        <div
          className="skills-panel"
          data-aos="fade-left"
        >

          <div className="skills-title">

            TECHNICAL ARSENAL

          </div>

          <div className="skills-subtitle">

            Technologies and frameworks I specialize in

          </div>

          <div className="skills-marquee">

            <div className="skills-track">

              {
                [...skills, ...skills].map((skill, i) => (

                  <div
                    key={i}
                    className="skill-pill"
                  >

                    {skill}

                  </div>
                ))
              }

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
