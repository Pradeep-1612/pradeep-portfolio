import { Email, LogoLinkedin, LogoGithub, Download, ArrowDown } from "@carbon/icons-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="section-container">
        <div className="hero-content fade-in-up">
          <div className="hero-eyebrow">Available for senior / lead engineering roles</div>
          <h1 className="hero-name">Pradeep Reddy Juturu</h1>
          <h2 className="hero-title">
            Lead Software Engineer
            <span className="hero-title-sep"> · </span>
            Full-Stack &amp; Backend Engineering
            <span className="hero-title-sep"> · </span>
            Cloud &amp; Scalable Architecture
          </h2>
          <div className="hero-contact-line">
            <a href="mailto:juturupradeepkumarreddy@gmail.com" className="hero-contact-email">
              <Email size={14} aria-hidden="true" />
              juturupradeepkumarreddy@gmail.com
            </a>
          </div>

          <p className="hero-statement">
            I architect and build scalable enterprise systems, developer platforms, APIs, and high-performance applications.
            I lead engineering initiatives across system architecture, backend and frontend development, data and API design, CI/CD, and production optimization—turning complex technical challenges into reliable, maintainable solutions that deliver measurable business and engineering impact.
          </p>

          <div className="hero-tech-row">
            {[
              "Java · Spring Boot",
              "React · Angular",
              "TypeScript",
              "Python",
              "REST APIs",
              "Microservices",
              "SQL",
              "Object-Oriented Design",
              "Data Structures & Algorithms",
              "Docker · Kubernetes",
              "CI/CD"
            ].map((t) => (
              <span key={t} className="hero-tech-tag">{t}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a
              href="mailto:juturupradeepkumarreddy@gmail.com"
              className="hero-btn hero-btn--primary"
            >
              <Email size={16} aria-hidden="true" />
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/pradeep-reddy-juturu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn--ghost"
            >
              <LogoLinkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Pradeep-1612"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn--ghost"
            >
              <LogoGithub size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="/Resume.pdf"
              download="Pradeep_Reddy_Juturu_LeadDev_Resume.pdf"
              className="hero-btn hero-btn--ghost"
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
            <a
              href="#work"
              className="hero-btn hero-btn--ghost"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-quick-stats">
            <div className="quick-stat">
              <span className="quick-stat-value">6+</span>
              <span className="quick-stat-label">Years experience</span>
            </div>
            <div className="quick-stat-divider" />
            <div className="quick-stat">
              <span className="quick-stat-value">IBM</span>
              <span className="quick-stat-label">International Business Machines</span>
            </div>
            <div className="quick-stat-divider" />
            <div className="quick-stat">
              <span className="quick-stat-value">$700K</span>
              <span className="quick-stat-label">Annual savings delivered</span>
            </div>
            <div className="quick-stat-divider" />
            <div className="quick-stat">
              <span className="quick-stat-value">2,500+</span>
              <span className="quick-stat-label">Enterprise clients served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
