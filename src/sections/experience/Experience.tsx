import { EXPERIENCE } from "../../data/portfolio";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section-light">
      <div className="section-container section-block">
        <p className="section-eyebrow">Professional history</p>
        <h2 className="section-title">Experience</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          6+ years of professional engineering experience across IBM and TCS,
          delivering enterprise platforms, developer tools, and high-performance systems
          for clients in North America, Europe, and Germany.
        </p>

        <div className="exp-timeline">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="exp-entry">
              <div className="exp-marker">
                <div className="exp-dot" />
                {i < EXPERIENCE.length - 1 && <div className="exp-line" />}
              </div>
              <div className="exp-body">
                <div className="exp-header">
                  <div className="exp-header-left">
                    <h3 className="exp-company">{job.company}</h3>
                    <span className="exp-role">{job.role}</span>
                  </div>
                  <div className="exp-header-right">
                    <span className="exp-period">{job.period}</span>
                    <span className="exp-location">{job.location}</span>
                  </div>
                </div>

                <p className="exp-summary">{job.summary}</p>

                <ul className="exp-highlights">
                  {job.highlights.map((h, idx) => (
                    <li key={idx} className="exp-highlight-item">
                      <span className="exp-highlight-bullet" aria-hidden="true">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {job.awards.length > 0 && (
                  <div className="exp-awards">
                    {job.awards.map((award) => (
                      <span key={award} className="exp-award-badge">🏆 {award}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
