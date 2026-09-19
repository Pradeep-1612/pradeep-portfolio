export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="section-container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-name">Pradeep Reddy Juturu</span>
            <span className="footer-tagline">Lead Software Engineer · Full-Stack & Backend Engineering · Cloud & Scalable Architecture</span>
          </div>
          <div className="footer-links">
            <a href="mailto:juturupradeepkumarreddy@gmail.com" className="footer-link">Email</a>
            <a href="https://www.linkedin.com/in/pradeep-reddy-juturu/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://github.com/Pradeep-1612" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Pradeep Reddy Juturu. Built with curiosity. Engineered with care.</span>
        </div>
      </div>

      <style>{`
        .portfolio-footer {
          background: #161616;
          color: #c6c6c6;
          padding: 2.5rem 0 1.5rem;
          margin-top: auto;
        }
        .footer-inner {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #393939;
          margin-bottom: 1.25rem;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .footer-name {
          font-size: 1rem;
          font-weight: 600;
          color: #f4f4f4;
        }
        .footer-tagline {
          font-size: 0.8rem;
          color: #8d8d8d;
        }
        .footer-links {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        .footer-link {
          font-size: 0.85rem;
          color: #78a9ff;
          text-decoration: none;
        }
        .footer-link:hover { text-decoration: underline; }
        .footer-bottom {
          font-size: 0.75rem;
          color: #6f6f6f;
          text-align: center;
        }
      `}</style>
    </footer>
  );
}
