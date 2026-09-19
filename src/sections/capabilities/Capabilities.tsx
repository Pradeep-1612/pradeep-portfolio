import { CAPABILITIES } from "../../data/portfolio";
import "./Capabilities.css";

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-white">
      <div className="section-container section-block">
        <p className="section-eyebrow">Engineering capabilities</p>
        <h2 className="section-title">What I Do</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          I work across the full software lifecycle — from system design and backend engineering
          through frontend delivery, developer tooling, and production performance. Below are
          the six areas where I have the deepest hands-on experience.
        </p>

        <div className="cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <div key={cap.id} className="cap-card fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="cap-number">0{i + 1}</div>
              <h3 className="cap-title">{cap.title}</h3>
              <p className="cap-description">{cap.description}</p>
              <div className="cap-tags">
                {cap.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
