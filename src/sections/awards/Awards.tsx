import { AWARDS } from "../../data/portfolio";
import "./Awards.css";

const AWARD_ICONS: Record<string, string> = {
  IBM: "🏆",
  "Tata Consultancy Services": "⭐",
  GMOCS: "🥇",
};

export default function Awards() {
  return (
    <section id="awards" className="section-white">
      <div className="section-container section-block">
        <p className="section-eyebrow">Recognition</p>
        <h2 className="section-title">Awards</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Three awards across IBM and TCS, recognising engineering impact, team contribution,
          and competitive problem-solving.
        </p>

        <div className="awards-row">
          {AWARDS.map((award) => (
            <div key={award.title} className="award-card">
              <div className="award-icon" aria-hidden="true">
                {AWARD_ICONS[award.org] ?? "🏅"}
              </div>
              <div className="award-content">
                <div className="award-header">
                  <h3 className="award-title">{award.title}</h3>
                  <span className="award-year">{award.year}</span>
                </div>
                <span className="award-org">{award.org}</span>
                <p className="award-context">{award.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
