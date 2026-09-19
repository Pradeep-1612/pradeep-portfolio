import { ARTICLES } from "../../data/portfolio";
import "./Writing.css";

export default function Writing() {
  return (
    <section id="writing" className="section-light">
      <div className="section-container section-block">
        <p className="section-eyebrow">Technical articles</p>
        <h2 className="section-title">Technical Writing</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Six in-depth articles based on real engineering problems I have worked through.
          Each covers problem context, constraints, options considered, implementation, trade-offs,
          and lessons learned — not tutorials, but engineering narratives.
        </p>

        <div className="writing-grid">
          {ARTICLES.map((article, i) => (
            <div key={article.id} className="writing-card">
              <div className="writing-card-top">
                <span className="writing-index">0{i + 1}</span>
                <span className="writing-read-time">{article.readTime} read</span>
              </div>
              <h3 className="writing-title">{article.title}</h3>
              <p className="writing-summary">{article.summary}</p>
              <div className="writing-tags">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
              <div className="writing-footer">
                <span className="writing-coming-soon">Article in progress</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
