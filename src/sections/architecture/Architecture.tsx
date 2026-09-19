import { ARCHITECTURE_CONCEPTS } from "../../data/portfolio";
import "./Architecture.css";

const DIAGRAMS: Record<string, React.ReactNode> = {
  "rest-api": (
    <svg viewBox="0 0 320 140" className="arch-diagram" aria-label="REST API flow diagram">
      {/* Client */}
      <rect x="10" y="50" width="72" height="40" rx="2" fill="#dde1e7" stroke="#8d8d8d" strokeWidth="1"/>
      <text x="46" y="72" textAnchor="middle" fontSize="11" fill="#161616">Client</text>
      {/* Spring Boot API */}
      <rect x="124" y="50" width="72" height="40" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1.5"/>
      <text x="160" y="68" textAnchor="middle" fontSize="10" fill="#0043ce">Spring Boot</text>
      <text x="160" y="82" textAnchor="middle" fontSize="10" fill="#0043ce">API</text>
      {/* Database */}
      <rect x="238" y="50" width="72" height="40" rx="2" fill="#dde1e7" stroke="#8d8d8d" strokeWidth="1"/>
      <text x="274" y="72" textAnchor="middle" fontSize="11" fill="#161616">Database</text>
      {/* Arrows */}
      <line x1="82" y1="70" x2="120" y2="70" stroke="#525252" strokeWidth="1.5" markerEnd="url(#arrow-rest)"/>
      <line x1="196" y1="70" x2="234" y2="70" stroke="#525252" strokeWidth="1.5" markerEnd="url(#arrow-rest)"/>
      {/* Labels above arrows */}
      <text x="101" y="62" textAnchor="middle" fontSize="9" fill="#525252">HTTP</text>
      <text x="215" y="62" textAnchor="middle" fontSize="9" fill="#525252">SQL</text>
      <text x="160" y="118" textAnchor="middle" fontSize="9" fill="#8d8d8d">Validation · Auth · Error contracts</text>
      <defs>
        <marker id="arrow-rest" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#525252"/>
        </marker>
      </defs>
    </svg>
  ),
  "microservices": (
    <svg viewBox="0 0 280 140" className="arch-diagram" aria-label="Microservices architecture diagram">
      <rect x="10" y="10" width="60" height="30" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1"/>
      <text x="40" y="29" textAnchor="middle" fontSize="9" fill="#0043ce">Config Svc</text>
      <rect x="10" y="55" width="60" height="30" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1"/>
      <text x="40" y="74" textAnchor="middle" fontSize="9" fill="#0043ce">Cert Svc</text>
      <rect x="10" y="100" width="60" height="30" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1"/>
      <text x="40" y="119" textAnchor="middle" fontSize="9" fill="#0043ce">Partner Svc</text>
      <rect x="110" y="50" width="60" height="40" rx="2" fill="#e8daff" stroke="#6929c4" strokeWidth="1.5"/>
      <text x="140" y="68" textAnchor="middle" fontSize="9" fill="#491d8b">API</text>
      <text x="140" y="82" textAnchor="middle" fontSize="9" fill="#491d8b">Gateway</text>
      <rect x="210" y="50" width="60" height="40" rx="2" fill="#dde1e7" stroke="#8d8d8d" strokeWidth="1"/>
      <text x="240" y="72" textAnchor="middle" fontSize="11" fill="#161616">Client</text>
      <line x1="70" y1="25" x2="110" y2="62" stroke="#8d8d8d" strokeWidth="1"/>
      <line x1="70" y1="70" x2="110" y2="70" stroke="#8d8d8d" strokeWidth="1"/>
      <line x1="70" y1="115" x2="110" y2="78" stroke="#8d8d8d" strokeWidth="1"/>
      <line x1="170" y1="70" x2="210" y2="70" stroke="#525252" strokeWidth="1.5"/>
    </svg>
  ),
  "feature-flags": (
    <svg viewBox="0 0 280 140" className="arch-diagram" aria-label="Feature flag architecture">
      <rect x="10" y="50" width="70" height="40" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1.5"/>
      <text x="45" y="68" textAnchor="middle" fontSize="9" fill="#0043ce">Feature Flag</text>
      <text x="45" y="82" textAnchor="middle" fontSize="9" fill="#0043ce">Config</text>
      <rect x="105" y="50" width="70" height="40" rx="2" fill="#d0f4e6" stroke="#198038" strokeWidth="1.5"/>
      <text x="140" y="68" textAnchor="middle" fontSize="9" fill="#198038">Flag</text>
      <text x="140" y="82" textAnchor="middle" fontSize="9" fill="#198038">Service</text>
      <rect x="200" y="15" width="70" height="30" rx="2" fill="#dde1e7" stroke="#8d8d8d" strokeWidth="1"/>
      <text x="235" y="34" textAnchor="middle" fontSize="9" fill="#525252">Feature A</text>
      <rect x="200" y="55" width="70" height="30" rx="2" fill="#dde1e7" stroke="#8d8d8d" strokeWidth="1"/>
      <text x="235" y="74" textAnchor="middle" fontSize="9" fill="#525252">Feature B</text>
      <rect x="200" y="95" width="70" height="30" rx="2" fill="#dde1e7" stroke="#8d8d8d" strokeWidth="1"/>
      <text x="235" y="114" textAnchor="middle" fontSize="9" fill="#525252">Feature C</text>
      <line x1="80" y1="70" x2="105" y2="70" stroke="#525252" strokeWidth="1.5"/>
      <line x1="175" y1="60" x2="200" y2="30" stroke="#8d8d8d" strokeWidth="1"/>
      <line x1="175" y1="70" x2="200" y2="70" stroke="#8d8d8d" strokeWidth="1"/>
      <line x1="175" y1="80" x2="200" y2="110" stroke="#8d8d8d" strokeWidth="1"/>
      <text x="140" y="120" textAnchor="middle" fontSize="8" fill="#8d8d8d">95% less implementation effort</text>
    </svg>
  ),
  "reusable-components": (
    <svg viewBox="0 0 280 140" className="arch-diagram" aria-label="Reusable component architecture">
      <rect x="65" y="10" width="150" height="30" rx="2" fill="#e8daff" stroke="#6929c4" strokeWidth="1.5"/>
      <text x="140" y="29" textAnchor="middle" fontSize="9" fill="#491d8b">Shared Component Library</text>
      <rect x="10" y="70" width="80" height="30" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1"/>
      <text x="50" y="89" textAnchor="middle" fontSize="9" fill="#0043ce">Module A</text>
      <rect x="100" y="70" width="80" height="30" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1"/>
      <text x="140" y="89" textAnchor="middle" fontSize="9" fill="#0043ce">Module B</text>
      <rect x="190" y="70" width="80" height="30" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1"/>
      <text x="230" y="89" textAnchor="middle" fontSize="9" fill="#0043ce">Module C</text>
      <line x1="50" y1="70" x2="110" y2="40" stroke="#8d8d8d" strokeWidth="1"/>
      <line x1="140" y1="70" x2="140" y2="40" stroke="#8d8d8d" strokeWidth="1"/>
      <line x1="230" y1="70" x2="170" y2="40" stroke="#8d8d8d" strokeWidth="1"/>
      <text x="140" y="125" textAnchor="middle" fontSize="8" fill="#8d8d8d">81% duplicate code eliminated</text>
    </svg>
  ),
  "performance": (
    <svg viewBox="0 0 280 140" className="arch-diagram" aria-label="Performance optimization diagram">
      <text x="10" y="22" fontSize="9" fill="#525252">Before — eager load</text>
      <rect x="10" y="28" width="200" height="26" rx="2" fill="#ffb3b8" stroke="#da1e28" strokeWidth="1"/>
      <text x="115" y="45" textAnchor="middle" fontSize="9" fill="#a2191f">All modules loaded upfront</text>
      <text x="10" y="72" fontSize="9" fill="#525252">After — lazy load</text>
      <rect x="10" y="78" width="50" height="26" rx="2" fill="#d0f4e6" stroke="#198038" strokeWidth="1"/>
      <text x="35" y="95" textAnchor="middle" fontSize="9" fill="#198038">Core</text>
      <rect x="66" y="78" width="56" height="26" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1"/>
      <text x="94" y="95" textAnchor="middle" fontSize="8" fill="#0043ce">On demand</text>
      <rect x="128" y="78" width="56" height="26" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1"/>
      <text x="156" y="95" textAnchor="middle" fontSize="8" fill="#0043ce">On demand</text>
      <text x="140" y="122" textAnchor="middle" fontSize="9" fill="#8d8d8d">75% faster page load · 81% less code</text>
    </svg>
  ),
  "cicd": (
    <svg viewBox="0 0 280 140" className="arch-diagram" aria-label="CI/CD pipeline diagram">
      {["Code", "Lint/Test", "Build", "Image", "Deploy"].map((stage, i) => (
        <g key={stage}>
          <rect x={10 + i * 52} y="50" width="44" height="36" rx="2" fill="#d0e2ff" stroke="#0f62fe" strokeWidth="1"/>
          <text x={32 + i * 52} y="70" textAnchor="middle" fontSize="9" fill="#0043ce">{stage}</text>
          {i < 4 && <line x1={54 + i * 52} y1="68" x2={62 + i * 52} y2="68" stroke="#525252" strokeWidth="1.5"/>}
        </g>
      ))}
      <text x="140" y="110" textAnchor="middle" fontSize="8" fill="#8d8d8d">Jenkins · Azure DevOps · Kubernetes rollout</text>
    </svg>
  ),
};

export default function Architecture() {
  return (
    <section id="architecture" className="section-white">
      <div className="section-container section-block">
        <p className="section-eyebrow">Engineering depth</p>
        <h2 className="section-title">Architecture &amp; Engineering</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Patterns and concepts I have applied hands-on across production projects —
          each backed by a real implementation and a measured outcome.
        </p>

        <div className="arch-grid">
          {ARCHITECTURE_CONCEPTS.map((concept) => (
            <div key={concept.id} className="arch-card">
              <div className="arch-diagram-wrapper">
                {DIAGRAMS[concept.id] ?? null}
              </div>
              <div className="arch-card-body">
                <h3 className="arch-card-title">{concept.title}</h3>
                <p className="arch-card-desc">{concept.description}</p>
                <span className="arch-card-project">Applied in: {concept.project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
