import "../../App.css";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaRobot,
  FaFileAlt,
  FaBrain,
  FaCode,
} from "react-icons/fa";

const projects = [
  {
    title: "Smart Email Knowledge Assistant",

    icon: <FaFileAlt />,

    description:
      "An AI-powered email assistant that integrates Gmail, PostgreSQL, and ChromaDB to provide contextual search, question answering, continuous synchronization, and event detection across inbox conversations.",

    tags: ["LangChain", "PostgreSQL", "ChromaDB", "GPT"],

    github: "https://github.com/yourgithub/email-assistant",

    live: "#",
  },

  {
    title: "DocMind AI: Multi-Document Knowledge Assistant",

    icon: <FaBrain />,

    description:
      "A GenAI-driven multi-document RAG system enabling semantic search and question answering across 50+ PDFs with citation-aware retrieval, comparative analysis, study-note generation, and quiz creation.",

    tags: ["Python", "FAISS", "LangChain", "RAG"],

    github: "https://github.com/yourgithub/docmind-ai",

    live: "#",
  },

  {
    title: "Algorithmic Trading System",

    icon: <FaRobot />,

    description:
      "An automated trading platform integrating Zerodha Kite API with AI-driven strategies, real-time execution, backtesting in Python/Pandas, and secure OAuth2 multi-user authentication.",

    tags: ["Python", "Zerodha API", "Pandas", "AI Trading"],

    github: "https://github.com/yourgithub/trading-system",

    live: "#",
  },

  {
    title: "Dynamic Social Interaction Platform",

    icon: <FaCode />,

    description:
      "A modular social media application featuring authentication, posting, commenting, liking, friending, and SQL-backed server logic to enhance usability and engagement.",

    tags: ["Python", "SQL", "Authentication", "Social Media"],

    github: "https://github.com/yourgithub/social-platform",

    live: "#",
  },
];


export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-grid"></div>

      <div className="projects-glow-one"></div>
      <div className="projects-glow-two"></div>

      <h1 className="projects-heading">Projects</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-top">
              <div className="project-icon">{project.icon}</div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-github"
              >
                <FaGithub />
              </a>
            </div>

            <h2 className="project-title">{project.title}</h2>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Project
              <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}