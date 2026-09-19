import { useState } from "react";
import { PROJECTS } from "../../data/portfolio";
import "./Work.css";

export default function Work() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="work" className="section-white">
      <div className="section-container section-block">
        <p className="section-eyebrow">Case studies</p>
        <h2 className="section-title">Featured Work</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Each covers the engineering problem, the solution approach, architectural decisions, and verified outcomes.
        </p>

        <div className="work-list">
          {PROJECTS.map((project, i) => {
            const isOpen = expandedId === project.id;
            return (
              <div key={project.id} className={`work-item ${isOpen ? "work-item--open" : ""}`}>
                {/* Summary row */}
                <button
                  className="work-summary-row"
                  onClick={() => setExpandedId(isOpen ? null : project.id)}
                  aria-expanded={isOpen}
                >
                  <div className="work-summary-left">
                    <span className="work-index">0{i + 1}</span>
                    <div className="work-summary-info">
                      <div className="work-header-top">
                        <h3 className="work-title">{project.title}</h3>
                        <span className="work-company-badge">{project.company}</span>
                      </div>
                      <span className="work-subtitle">{project.subtitle}</span>
                      <span className="work-impact">{project.impact}</span>
                    </div>
                  </div>
                  <span className="work-toggle" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded case study */}
                {isOpen && (
                  <div className="work-detail fade-in-up">
                    <p className="work-detail-summary">{project.summary}</p>

                    <div className="work-detail-grid">
                      <div className="work-detail-block">
                        <h4 className="work-detail-heading">Problem</h4>
                        <p className="work-detail-text">{project.problem}</p>
                      </div>
                      <div className="work-detail-block">
                        <h4 className="work-detail-heading">Solution</h4>
                        <p className="work-detail-text">{project.solution}</p>
                      </div>
                    </div>

                    <div className="work-detail-block">
                      <h4 className="work-detail-heading">Architecture & Technical Decisions</h4>
                      <ul className="work-arch-list">
                        {project.architecture.map((item, idx) => (
                          <li key={idx} className="work-arch-item">
                            <span className="work-arch-bullet" aria-hidden="true">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="work-detail-block">
                      <h4 className="work-detail-heading">Outcomes</h4>
                      <div className="work-outcomes-grid">
                        {project.outcomes.map((outcome, idx) => (
                          <div key={idx} className="work-outcome-item">
                            <span className="work-outcome-check">✓</span>
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="work-tech-row">
                      <span className="work-tech-label">Tech stack:</span>
                      {project.tech.map((t) => (
                        <span key={t} className="tag-pill tag-pill--dark">{t}</span>
                      ))}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-github-link"
                        >
                          View on GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
