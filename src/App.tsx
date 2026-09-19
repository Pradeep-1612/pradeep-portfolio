import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/hero/Hero";
import Capabilities from "./sections/capabilities/Capabilities";
import Skills from "./sections/skills/Skills";
import Metrics from "./sections/metrics/Metrics";
import Work from "./sections/work/Work";
import Experience from "./sections/experience/Experience";
import Architecture from "./sections/architecture/Architecture";
import Principles from "./sections/principles/Principles";
import Awards from "./sections/awards/Awards";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = [
  "hero",
  "capabilities",
  "skills",
  "metrics",
  "work",
  "experience",
  "architecture",
  "principles",
  "awards",
];

function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="portfolio-root">
      <Nav activeSection={activeSection} />
      <main className="portfolio-main">
        <Hero />
        <Capabilities />
        <Skills />
        <Metrics />
        <Work />
        <Experience />
        <Architecture />
        <Principles />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
