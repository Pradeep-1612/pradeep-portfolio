import { METRICS } from "../../data/portfolio";
import "./Metrics.css";

export default function Metrics() {
  return (
    <section id="metrics" className="section-dark">
      <div className="section-container section-block">
        <p className="section-eyebrow" style={{ color: "#78a9ff" }}>Verified outcomes</p>
        <h2 className="section-title">Impact by the Numbers</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          These figures are drawn directly from delivered projects at IBM and TCS/Rolls-Royce.
          They represent the measurable engineering and business outcomes of the platforms,
          performance initiatives, and automation systems I designed and built.
        </p>
        <div className="metrics-grid">
          {METRICS.map((m) => (
            <div key={m.value} className="metric-card">
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
