import { PRINCIPLES } from "../../data/portfolio";
import "./Principles.css";

export default function Principles() {
  return (
    <section id="principles" className="section-dark">
      <div className="section-container section-block">
        <p className="section-eyebrow" style={{ color: "#78a9ff" }}>How I engineer</p>
        <h2 className="section-title">Engineering Principles</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          These are not aspirational values. They are patterns I have applied and validated
          through the projects described in this portfolio.
        </p>

        <div className="principles-list">
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="principle-item">
              <div className="principle-number">{String(i + 1).padStart(2, "0")}</div>
              <div className="principle-content">
                <h3 className="principle-title">"{p.title}"</h3>
                <p className="principle-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
