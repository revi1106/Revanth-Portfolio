import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description"; // Resume icon

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* BACKGROUND */}
      <div className="about-glow about-glow-1"></div>
      <div className="about-glow about-glow-2"></div>
      <div className="about-grid"></div>

      {/* HEADING */}
      <div className="about-heading" data-aos="fade-down">
        About Me
      </div>

      {/* MAIN */}
      <div className="about-container">
        {/* LEFT */}
        <div className="about-left">
          <div className="about-card about-card-primary" data-aos="fade-left">
            <p className="about-para">
              My name is Revanth Palaparthi, and I am currently pursuing a
              B.Tech in Computer Science and Engineering at IIT Dharwad. I am a
              passionate software developer and AI enthusiast with a strong
              interest in Generative AI, Machine Learning, Full Stack
              Development, and intelligent software systems. I enjoy building
              innovative applications using technologies like Python, React,
              LangChain, Large Language Models (LLMs), Retrieval-Augmented
              Generation (RAG), and modern web frameworks. Over time, I have
              worked on projects involving AI-powered applications, resume
              analysis systems, chatbot solutions, and web development projects
              that strengthened my problem-solving and development skills.
            </p>
          </div>

          <div className="about-card about-card-secondary" data-aos="fade-right">
            <p className="about-para">
              My passion for technology motivates me to constantly explore new
              ideas and stay updated with the latest advancements in software
              development and artificial intelligence. I enjoy transforming
              ideas into real-world applications and working on projects that
              challenge my creativity and technical skills. I am highly
              interested in building scalable AI-driven solutions, improving
              user experiences, and solving practical problems through
              innovation and technology. With a strong focus on learning and
              continuous improvement, I strive to grow as a developer while
              contributing to impactful and meaningful projects.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right" data-aos="fade-left">
          <div className="about-lottie-card">
            <div className="about-card-glow"></div>

            {/* Big Resume Icon above button */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <DescriptionIcon style={{ fontSize: "100px", color: "#1976d2" }} />
            </div>

            <a
              href="/RevanthPalaparthi_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="download-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                position: "relative",
                zIndex: 9999,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              View Resume
              <DownloadIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
