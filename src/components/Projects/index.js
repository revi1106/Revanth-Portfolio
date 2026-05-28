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
    title: "AI Resume Analyzer",

    icon: <FaFileAlt />,

    description:
      "Built an AI-powered platform that analyzes resumes against job descriptions, detects skill gaps, generates interview questions, and recommends personalized learning paths using RAG pipelines and LLMs.",

    tags: ["React", "LangChain", "RAG", "LLMs"],

    github: "https://github.com/revi1106",

    live: "https://github.com/revi1106",
  },

  {
    title: "Multi PDF Research Assistant",

    icon: <FaBrain />,

    description:
      "Developed an intelligent research assistant capable of understanding and answering questions from multiple PDFs simultaneously using vector databases, embeddings, and conversational memory.",

    tags: ["Python", "FAISS", "OpenAI", "Streamlit"],

    github: "https://github.com/revi1106",

    live: "https://github.com/revi1106",
  },

  {
    title: "Agentic AI Workflow System",

    icon: <FaRobot />,

    description:
      "Designed an autonomous multi-agent AI system capable of planning tasks, retrieving context, reasoning across workflows, and dynamically executing actions using tool-calling agents.",

    tags: ["CrewAI", "LangGraph", "Agents", "Automation"],

    github: "https://github.com/revi1106",

    live: "https://github.com/revi1106",
  },

  {
    title: "Full Stack Collaboration Platform",

    icon: <FaCode />,

    description:
      "Engineered a scalable full stack collaboration platform featuring authentication, real-time messaging, workspace management, and AI-assisted productivity tools.",

    tags: ["Node.js", "MongoDB", "React", "Socket.io"],

    github: "https://github.com/revi1106",

    live: "https://github.com/revi1106",
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