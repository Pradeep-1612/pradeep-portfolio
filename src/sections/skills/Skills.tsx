import {
  AiGenerate,
  Api,
  Application,
  DeploymentPattern,
  Activity,
  DataBase,
  CheckmarkOutline,
  CloudUpload,
  Code,
} from "@carbon/icons-react";
import { SKILL_GROUPS } from "../../data/portfolio";
import "./Skills.css";

import type { CarbonIconType } from "@carbon/icons-react";

const ICONS: Record<string, CarbonIconType> = {
  ai: AiGenerate,
  backend: Api,
  frontend: Application,
  architecture: DeploymentPattern,
  performance: Activity,
  databases: DataBase,
  testing: CheckmarkOutline,
  devops: CloudUpload,
  languages: Code,
};

export default function Skills() {
  return (
    <section id="skills" className="section-white">
      <div className="section-container section-block">
        <p className="section-eyebrow">Technical proficiency</p>
        <h2 className="section-title">Skills</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          6+ years of hands-on engineering experience across IBM and TCS, architecting and delivering enterprise-grade solutions end-to-end—from system design and application development to data, APIs, CI/CD, and production operations.
        </p>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.id] ?? Code;
            return (
              <div key={group.id} className="skills-card fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="skills-card-header">
                  <Icon size={20} className="skills-icon" />
                  <h3 className="skills-category">{group.title}</h3>
                </div>
                <p className="skills-description">{group.description}</p>
                <div className="skills-tags">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
