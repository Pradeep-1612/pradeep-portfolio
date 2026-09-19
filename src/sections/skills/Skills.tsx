import {
  Code,
  Application,
  Api,
  DeploymentPattern,
  DataBase,
  CheckmarkOutline,
  CloudUpload,
} from "@carbon/icons-react";
import "./Skills.css";

const SKILLS = [
  {
    category: "Programming Languages",
    Icon: Code,
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C"],
  },
  {
    category: "Frontend Engineering",
    Icon: Application,
    items: [
      "Angular",
      "ReactJS",
      "HTML5",
      "CSS3",
      "Component-Based Architecture",
      "Design Systems",
      "Responsive UI Development",
    ],
  },
  {
    category: "Backend & API Engineering",
    Icon: Api,
    items: [
      "Java Spring Boot",
      "Microservices",
      "Express.js",
      "REST APIs",
      "Python Flask",
      "Python Django",
      "API Design",
      "Service-Oriented Architecture",
    ],
  },
  {
    category: "Software Architecture & Engineering Practices",
    Icon: DeploymentPattern,
    items: [
      "Object-Oriented Design",
      "Data Structures & Algorithms",
      "Design Patterns",
      "System Design",
      "Reusable Component Architecture",
      "Feature Flag Architecture",
      "Performance Optimization",
      "Scalable Application Design",
    ],
  },
  {
    category: "Databases & Data Management",
    Icon: DataBase,
    items: [
      "MySQL",
      "PostgreSQL",
      "Couchbase",
      "DataStax",
      "SQL Optimization",
      "Database Design",
      "Query Performance Tuning",
    ],
  },
  {
    category: "Testing & Quality Engineering",
    Icon: CheckmarkOutline,
    items: [
      "JUnit",
      "Jasmine",
      "Jest",
      "Cypress",
      "PyTest",
      "ESLint",
      "Pylint",
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
    ],
  },
  {
    category: "DevOps & Cloud Engineering",
    Icon: CloudUpload,
    items: [
      "Git",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Azure DevOps",
      "CI/CD Pipelines",
      "Release Automation",
      "Agile Development",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-light">
      <div className="section-container section-block">
        <p className="section-eyebrow">Technical proficiency</p>
        <h2 className="section-title">Skills</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Hands-on technical skills applied across 6+ years of professional engineering
          at IBM and TCS — spanning the full stack from system design through delivery and operations.
        </p>

        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div key={group.category} className="skills-card">
              <div className="skills-card-header">
                <group.Icon size={20} className="skills-icon" aria-hidden="true" />
                <h3 className="skills-category">{group.category}</h3>
              </div>
              <div className="skills-tags">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
