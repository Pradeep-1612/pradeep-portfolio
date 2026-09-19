import { GITHUB_REPOS } from "../../data/portfolio";
import "./GitHub.css";

export default function GitHub() {
  const featured = GITHUB_REPOS.filter((r) => r.highlight);
  const others = GITHUB_REPOS.filter((r) => !r.highlight);

  return (
    <section id="github" className="section-light">
      <div className="section-container section-block">
        <p className="section-eyebrow">Open source</p>
        <h2 className="section-title">GitHub</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Selected repositories demonstrating full-stack engineering, state management patterns,
          API integration, and routing architecture. Prioritised for technical depth rather than volume.
        </p>

        <div className="github-profile-link">
          <a
            href="https://github.com/Pradeep-1612"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            github.com/Pradeep-1612 ↗
          </a>
        </div>

        <h3 className="github-section-label">Featured</h3>
        <div className="github-featured-grid">
          {featured.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-repo-card github-repo-card--featured"
            >
              <div className="repo-card-header">
                <span className="repo-icon" aria-hidden="true">⌥</span>
                <span className="repo-name">{repo.name}</span>
                <span className="repo-star" aria-label="Featured">★</span>
              </div>
              <p className="repo-description">{repo.description}</p>
              <div className="repo-topics">
                {repo.topics.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <h3 className="github-section-label" style={{ marginTop: "2.5rem" }}>Also available</h3>
        <div className="github-other-grid">
          {others.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-repo-card"
            >
              <div className="repo-card-header">
                <span className="repo-icon" aria-hidden="true">⌥</span>
                <span className="repo-name">{repo.name}</span>
              </div>
              <p className="repo-description">{repo.description}</p>
              <div className="repo-topics">
                {repo.topics.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
