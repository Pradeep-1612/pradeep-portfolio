import { useState } from "react";
import { NAV_LINKS } from "../data/portfolio";
import "./Nav.css";

interface NavProps {
  activeSection: string;
}

export default function Nav({ activeSection }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="portfolio-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a
          className="nav-brand"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          PRJ
        </a>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === id ? "nav-link--active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="mailto:juturupradeepkumarreddy@gmail.com"
          className="nav-cta"
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="nav-mobile-menu" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:juturupradeepkumarreddy@gmail.com" className="nav-mobile-link nav-mobile-cta">
              Get in touch
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
