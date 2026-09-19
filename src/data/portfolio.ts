export const NAV_LINKS = [
  { label: "What I Do", href: "#capabilities" },
  { label: "Skills", href: "#skills" },
  { label: "Impact", href: "#metrics" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Architecture", href: "#architecture" },
  { label: "Principles", href: "#principles" },
  { label: "Awards", href: "#awards" },
];

export const CAPABILITIES = [
  {
    id: "backend",
    title: "Backend Engineering",
    description:
      "Java, Spring Boot, Python, REST APIs, microservices, and service-oriented architecture. Designing reliable, scalable server-side systems with clear API contracts and resilient service boundaries.",
    tags: ["Java", "Spring Boot", "Python", "REST APIs", "Microservices", "SOA"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Angular, React, TypeScript, reusable component architecture, and design systems. Building responsive, accessible, performant web applications with maintainable UI layers.",
    tags: ["React", "Angular", "TypeScript", "Design Systems", "Accessibility"],
  },
  {
    id: "architecture",
    title: "System & Application Architecture",
    description:
      "Scalable application design, API architecture, reusable frameworks, design patterns, and feature-flag infrastructure. Owning technical decisions from initial design through delivery.",
    tags: ["API Design", "Feature Flags", "Design Patterns", "Reusable Frameworks"],
  },
  {
    id: "performance",
    title: "Performance Engineering",
    description:
      "Frontend optimization, lazy loading, on-demand module loading, client-side caching, query optimization, and API retrieval improvements that produce measurable outcomes.",
    tags: ["Lazy Loading", "Caching", "Query Optimization", "Bundle Splitting"],
  },
  {
    id: "platforms",
    title: "Developer Platforms & Enterprise Tools",
    description:
      "Internal platforms that simplify complex technical workflows and improve developer productivity. Replacing manual, error-prone processes with self-service, automated tooling.",
    tags: ["Self-Service", "Developer Experience", "Automation", "Internal Tooling"],
  },
  {
    id: "devops",
    title: "DevOps & Engineering Excellence",
    description:
      "Docker, Kubernetes, Jenkins, Azure DevOps, CI/CD pipelines, automated testing, and release engineering. Ensuring code reaches production reliably and safely.",
    tags: ["Docker", "Kubernetes", "Jenkins", "Azure DevOps", "CI/CD"],
  },
];

export const METRICS = [
  { value: "1,000+", label: "Enterprise trading partners served" },
  { value: "1,500+", label: "Companies using self-service configuration" },
  { value: "$700K", label: "Annual cost savings delivered" },
  { value: "70–90%", label: "Reduction in developer effort" },
  { value: "5×", label: "Faster data retrieval" },
  { value: "80–120 hrs", label: "Engineering hours saved per month" },
  { value: "75%", label: "Page-load time reduction" },
  { value: "81%", label: "Reduction in duplicate code" },
  { value: "95%", label: "Less effort per feature flag" },
  { value: "60%", label: "Reduction in support intervention" },
  { value: "25%", label: "Reduction in configuration time" },
  { value: "6+ yrs", label: "Professional engineering experience" },
];

export const PROJECTS = [
  {
    id: "datastax",
    title: "Unified DataStax Dashboard",
    subtitle: "Developer Productivity Platform",
    company: "Personal / Open Source",
    impact: "70–90% developer effort reduction · 5× faster retrieval · 80–120 hrs/month saved",
    summary:
      "A full-stack developer productivity platform built around DataStax Data APIs. Consolidated secure connections, document discovery, filtering, pagination, and CRUD operations into a unified developer experience — replacing fragmented manual workflows with a single, intuitive interface.",
    problem:
      "Developers working with DataStax Data APIs had no unified interface. Every workflow — connecting to a keyspace, discovering documents, filtering, paginating, editing — required raw API calls, manual credential handling, and context-switching between tools. The result was slow, error-prone, and inaccessible to non-expert users.",
    solution:
      "Designed and built a full-stack platform (React + TypeScript + Express.js) with a clear separation between the BFF (Backend-for-Frontend) layer and the SPA. The BFF proxies and normalises DataStax API calls, handles credential injection server-side, and provides a clean REST contract to the frontend. The SPA delivers document management, query editing (Monaco), index management, query filters, and a shared-link feature for collaboration.",
    architecture: [
      "React 19 + TypeScript SPA with Redux Toolkit for state management",
      "Express.js BFF layer: credential injection, API proxying, normalisation",
      "React Router v7 for client-side routing with shared-link state encoding",
      "Monaco Editor for query input with custom theme",
      "Carbon Design System for consistent, accessible UI components",
      "Session-storage credential isolation (credentials never leave the client session)",
      "Encrypted shared-link feature using AES for safe collaboration",
    ],
    outcomes: [
      "70–90% reduction in developer effort for DataStax workflows",
      "Approximately 5× faster data retrieval and interaction",
      "80–120 engineering hours saved per month across users",
      "Eliminated need for raw API calls and manual credential management",
    ],
    tech: ["React", "TypeScript", "Express.js", "Redux Toolkit", "Carbon Design System", "DataStax APIs", "Monaco Editor"],
    github: "https://github.com/Pradeep-1612",
  },
  {
    id: "certificates",
    title: "Partner Certificate Management Platform",
    subtitle: "Enterprise Security & Automation Platform",
    company: "IBM",
    impact: "$700K annual savings · 1,000+ enterprise partners · Automated certificate lifecycle",
    summary:
      "Led design and development of a secure, invite-only platform serving 1,000+ enterprise trading partners. Automated SSL/TLS certificate lifecycle management — from partner onboarding and self-service certificate submission, through automated validation, to operational deployment — reducing IBM's manual operational burden by approximately $700K annually.",
    problem:
      "Certificate management for 1,000+ trading partners was entirely manual. IBM operations teams handled every certificate renewal, submission, and validation individually. This created a bottleneck, significant operational cost, and a poor partner experience.",
    solution:
      "Designed an invite-only, role-gated partner portal with automated certificate lifecycle workflows. Partners receive secure invite tokens, self-register, and can submit, renew, and track certificates independently. Backend automation validates certificates, notifies stakeholders at expiry thresholds, and integrates with IBM Sterling B2B infrastructure.",
    architecture: [
      "Java Spring Boot REST API backend with role-based access control",
      "Angular SPA with invite-token registration flow",
      "Automated certificate expiry tracking and notification workflows",
      "Secure invite-only onboarding — no public self-registration",
      "Integration with IBM Sterling B2B Integrator infrastructure",
      "SQL database for partner, certificate, and audit data",
      "Jenkins CI/CD pipeline with automated integration tests",
    ],
    outcomes: [
      "$700K annual reduction in operational costs",
      "1,000+ enterprise trading partners onboarded",
      "Eliminated manual certificate handling for operations teams",
      "Partners able to self-manage certificate lifecycle independently",
    ],
    tech: ["Java", "Spring Boot", "Angular", "SQL", "Jenkins", "IBM Sterling B2B"],
    github: null,
  },
  {
    id: "b2b-config",
    title: "IBM Sterling B2B Integration SaaS Configuration Hub",
    subtitle: "Enterprise Self-Service Configuration Platform",
    company: "IBM",
    impact: "1,500+ companies · 60% reduction in support · 25% faster configuration",
    summary:
      "Built a self-service configuration platform enabling 1,500+ companies to independently manage deployment settings for IBM Sterling B2B Integration SaaS — covering Maps, Code Lists, Connections, PGP Keys, and SSL Certificates — without requiring IBM support intervention.",
    problem:
      "Every configuration change in IBM Sterling B2B Integration SaaS required raising a support ticket and waiting for IBM operations to action it manually. With 1,500+ enterprise customers, this created an enormous support queue, slow turnaround times, and poor customer experience.",
    solution:
      "Designed a self-service configuration hub using Java Spring Boot APIs and an Angular frontend. Customers authenticate through IBM's IAM layer and can independently manage all configuration categories through a structured, validated UI. Validation rules are enforced at the API layer to prevent invalid configurations reaching production.",
    architecture: [
      "Java Spring Boot REST APIs with per-category validation logic",
      "Angular SPA with feature-module architecture per configuration area",
      "IBM IAM integration for authentication and role-based access",
      "Configuration validation pipeline before persistence",
      "SQL database with audit trail for all configuration changes",
      "Deployed on IBM Cloud with Kubernetes orchestration",
    ],
    outcomes: [
      "1,500+ companies independently managing their configurations",
      "60% reduction in support intervention for configuration tasks",
      "25% reduction in average configuration completion time",
      "Near-elimination of manual operations work for standard config changes",
    ],
    tech: ["Java", "Spring Boot", "Angular", "SQL", "IBM Cloud", "Kubernetes", "IBM IAM"],
    github: null,
  },
  {
    id: "performance",
    title: "Frontend Performance & Architecture Modernization",
    subtitle: "Engineering-Led Performance Initiative",
    company: "IBM",
    impact: "75% faster page loads · 81% less duplicate code · 70% developer productivity gain",
    summary:
      "Led an engineering initiative to diagnose, re-architect, and optimize a large Angular enterprise application. Implemented lazy loading, on-demand module loading, client-side caching, and reusable component/service architecture — achieving a 75% reduction in page load time and an 81% reduction in duplicate code.",
    problem:
      "An enterprise Angular application was loading all modules eagerly at startup, resulting in slow initial load times and poor user experience. Duplicate component and service code was spread across feature modules, making maintenance expensive and error-prone.",
    solution:
      "Profiled the application's bundle and load performance to identify bottlenecks. Implemented route-level lazy loading so modules are fetched on demand. Introduced a shared component library and service abstraction layer eliminating duplication. Added client-side caching for frequently accessed, stable data sets.",
    architecture: [
      "Angular route-level lazy loading — modules split and loaded on demand",
      "Shared component library eliminating per-module UI duplication",
      "Service abstraction layer with client-side caching (HTTP interceptor pattern)",
      "Bundle analysis tooling integrated into the CI build pipeline",
      "Incremental rollout — lazy loading applied module-by-module without regression",
    ],
    outcomes: [
      "75% reduction in initial page load time",
      "81% reduction in duplicate code across the application",
      "70% improvement in developer productivity for UI work",
      "Sustainable architecture that continued scaling as features were added",
    ],
    tech: ["Angular", "TypeScript", "RxJS", "NgModules", "HTTP Interceptors", "Webpack Bundle Analyzer"],
    github: null,
  },
  {
    id: "feature-flags",
    title: "Feature Flag Framework",
    subtitle: "Platform-Level Engineering",
    company: "IBM",
    impact: "95% reduction in per-feature implementation effort · Standardised rollout across the platform",
    summary:
      "Designed and built a reusable feature-flag framework that standardized controlled feature rollout across a large enterprise Angular application. Reduced the engineering effort to implement each new feature flag by approximately 95%, improving release flexibility and maintainability.",
    problem:
      "Feature flags were being implemented ad hoc for each feature — each developer wrote their own conditional logic, environment checks, and configuration lookups. This produced inconsistent behaviour, difficult-to-maintain code, and fragile rollouts.",
    solution:
      "Designed a centralized feature-flag service with a clear configuration model. Feature states are declared in a single configuration file, consumed via an Angular service, and applied in templates through a reusable structural directive. Developers declare flags in config and apply the directive — no custom conditional logic required.",
    architecture: [
      "Centralized configuration model — all flags declared in one place",
      "Angular service encapsulating flag resolution logic",
      "Reusable structural directive for template-level flag application",
      "Environment-aware flag resolution (dev/staging/prod)",
      "No per-feature conditional code required in components",
    ],
    outcomes: [
      "95% reduction in engineering effort per feature flag",
      "Standardised, consistent rollout behaviour across the application",
      "Flags can be toggled without code changes or redeployment",
      "Framework adopted across all active feature teams",
    ],
    tech: ["Angular", "TypeScript", "Structural Directives", "Dependency Injection"],
    github: null,
  },
  {
    id: "design-system",
    title: "Dual Design System Migration",
    subtitle: "Large-Scale UI Architecture & Modernization",
    company: "IBM",
    impact: "Phased migration · Zero feature delivery interruption · Neutrino → Carbon",
    summary:
      "Engineered a dual-design-system architecture that allowed a large IBM enterprise application to incrementally migrate from the Neutrino Design System to the IBM Carbon Design System, while continuing to ship features throughout the migration — avoiding a disruptive, high-risk full rewrite.",
    problem:
      "The application needed to migrate from Neutrino to Carbon Design System — different component APIs, different token systems, different visual language. A full rewrite would have halted feature delivery for months and introduced significant regression risk.",
    solution:
      "Designed an abstraction layer — a shared component library — that exposed a stable API surface to feature code regardless of which underlying design system a component came from. Neutrino and Carbon components coexisted behind this abstraction, allowing each module to be migrated independently, tested, and released, while the application as a whole continued normal delivery.",
    architecture: [
      "Component abstraction layer with stable API surface independent of underlying system",
      "Adapter components bridging Neutrino and Carbon APIs",
      "Module-by-module migration strategy — no big-bang rewrite",
      "Automated visual regression tests to catch unintended UI changes",
      "Migration tracker documenting completion status per component/module",
    ],
    outcomes: [
      "Full migration completed without interrupting feature delivery",
      "Zero major regression incidents during migration",
      "Established a reusable pattern for future design system upgrades",
      "Served as a reference architecture for other teams at IBM",
    ],
    tech: ["Angular", "TypeScript", "IBM Carbon Design System", "Neutrino Design System", "Component Architecture"],
    github: null,
  },
];

export const EXPERIENCE = [
  {
    company: "International Business Machines (IBM)",
    role: "Lead Software Engineer",
    period: "2022 – Present",
    location: "India · Clients: North America, Europe, Germany",
    summary:
      "Full-stack engineering and technical ownership across multiple IBM enterprise products. Designed reusable architectures, led performance initiatives, built automation platforms, and produced measurable business outcomes.",
    highlights: [
      "Designed and delivered Partner Certificate Management Platform serving 1,000+ enterprise partners — $700K annual savings",
      "Built IBM Sterling B2B Integration SaaS Configuration Hub for 1,500+ enterprise companies — 60% reduction in support load",
      "Led frontend performance engineering initiative — 75% page load reduction, 81% duplicate code elimination",
      "Designed reusable Feature Flag Framework — 95% reduction in per-flag implementation effort",
      "Engineered dual design system migration (Neutrino → Carbon) with zero feature delivery interruption",
      "Full-stack development across Java Spring Boot, Angular, REST APIs, SQL, Docker, Kubernetes, CI/CD",
    ],
    awards: ["IBM Outstanding Technical Achievement Award — 2023"],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Software Engineer",
    period: "2020 – 2022",
    location: "India · Client: Rolls-Royce (Aviation Domain)",
    summary:
      "Frontend and data engineering on aviation platforms for Rolls-Royce. Built real-time project monitoring, flight analytics, and engine data dashboards serving internal engineering and operations teams.",
    highlights: [
      "Developed real-time project monitoring platform — 35% improvement in reporting turnaround",
      "Built flight analytics platform — 15% route-planning efficiency improvement",
      "Engineered aircraft and engine data analytics dashboard — 32% faster insight generation, 20% data accuracy improvement",
      "Stack: Angular, Python Flask, SQL, data visualization libraries",
      "Worked directly with aviation engineering domain stakeholders and complex operational datasets",
    ],
    awards: ["TCS Star Team Award — 2022"],
  },
];

export const ARCHITECTURE_CONCEPTS = [
  {
    id: "rest-api",
    title: "RESTful API Design",
    description:
      "Designed REST APIs across Spring Boot and Express.js. Consistent resource naming, HTTP semantics, versioning, error contracts, and validation at the API boundary.",
    project: "Partner Certificate Platform, B2B Config Hub, DataStax Dashboard BFF",
  },
  {
    id: "microservices",
    title: "Microservices & SOA",
    description:
      "Built and integrated services within IBM Sterling's service-oriented architecture. Clear service boundaries, independent deployability, and contract-first API design.",
    project: "IBM Sterling B2B Integration",
  },
  {
    id: "feature-flags",
    title: "Feature Flag Architecture",
    description:
      "Centralized configuration model, environment-aware flag resolution, structural directive for template application, and developer-facing API requiring zero conditional code.",
    project: "IBM Feature Flag Framework",
  },
  {
    id: "reusable-components",
    title: "Reusable Component Architecture",
    description:
      "Shared component libraries that expose stable API surfaces independent of underlying design system or framework version. Used to eliminate duplication and enable safe migrations.",
    project: "Design System Migration, Frontend Modernization",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Route-level lazy loading, on-demand module loading, HTTP interceptor caching, bundle analysis, and measured baseline-to-outcome comparisons before and after changes.",
    project: "Angular Performance Initiative",
  },
  {
    id: "cicd",
    title: "CI/CD & Release Engineering",
    description:
      "Jenkins and Azure DevOps pipelines with automated build, test, lint, and container image stages. Kubernetes deployment with rolling updates and environment promotion.",
    project: "IBM Sterling SaaS Platform",
  },
];

export const PRINCIPLES = [
  {
    title: "Build for reuse, not repetition.",
    body: "The Feature Flag Framework eliminated 95% of per-flag implementation effort by extracting the pattern once and making it reusable. The shared component library removed 81% of duplicate UI code. Building for reuse up front is always cheaper than refactoring later.",
  },
  {
    title: "Measure performance before optimizing.",
    body: "The 75% page load improvement came from profiling the bundle and identifying the actual bottlenecks — not from guessing. Optimizing without measurement wastes engineering time and can make things worse.",
  },
  {
    title: "Automate repetitive operational work.",
    body: "The Partner Certificate Platform and B2B Configuration Hub both exist because manual operational work was costing too much. Automating those workflows produced $700K in savings and freed operations teams for higher-value work.",
  },
  {
    title: "Design for maintainability, not just delivery.",
    body: "The dual design system migration was designed so each module could be migrated independently, tested, and released. An approach designed only for speed would have required a risky full rewrite. Maintainability considerations made incremental delivery possible.",
  },
  {
    title: "Prefer incremental modernization over risky rewrites.",
    body: "Both the design system migration and the performance modernization were executed incrementally — module by module, without stopping feature delivery. Incremental change is safer, more testable, and easier to justify to stakeholders.",
  },
  {
    title: "Make complex developer workflows simple.",
    body: "The DataStax Dashboard replaced a fragmented raw-API workflow with a unified interface, saving 70–90% of developer effort. Making the hard thing easy is one of the most impactful engineering contributions you can make.",
  },
  {
    title: "Use measurable outcomes to validate engineering decisions.",
    body: "Every major initiative — performance, architecture, automation — was measured: load time, duplicate code percentage, engineering hours, support tickets. Measurable outcomes make the case for investment and validate whether the approach actually worked.",
  },
];

export const ARTICLES = [
  {
    id: "reusable-frontend-architecture",
    title: "Designing Reusable Frontend Architecture for Enterprise Applications",
    summary:
      "How to structure Angular/React applications so that component logic, services, and state are reused rather than duplicated — with patterns drawn from reducing duplicate code by 81% in a real enterprise platform.",
    tags: ["Architecture", "Angular", "React", "Design Patterns"],
    readTime: "12 min",
  },
  {
    id: "lazy-loading-caching",
    title: "Reducing Web Application Load Time Through Lazy Loading and Client-Side Caching",
    summary:
      "A practical engineering walkthrough of diagnosing load performance problems, applying route-level lazy loading, and implementing HTTP interceptor caching — with measured before/after outcomes.",
    tags: ["Performance", "Angular", "Optimization", "Caching"],
    readTime: "10 min",
  },
  {
    id: "developer-productivity-platforms",
    title: "Building Developer Productivity Platforms for Complex APIs",
    summary:
      "Lessons from building the DataStax Dashboard: when to build an internal tool, how to design a BFF layer, state management decisions, and what makes a developer platform genuinely useful versus just another wrapper.",
    tags: ["Developer Experience", "Platform Engineering", "Architecture"],
    readTime: "14 min",
  },
  {
    id: "feature-flag-frameworks",
    title: "Designing Feature Flag Frameworks for Enterprise Applications",
    summary:
      "Why ad-hoc feature flags create long-term technical debt, how to design a centralized configuration model, and the structural directive pattern that reduces per-flag implementation effort by 95%.",
    tags: ["Feature Flags", "Angular", "Architecture", "Release Engineering"],
    readTime: "9 min",
  },
  {
    id: "design-system-migration",
    title: "Incremental Migration Between Design Systems",
    summary:
      "How to migrate a large enterprise application from one design system to another without halting feature delivery — the abstraction layer approach, component adapter patterns, and migration sequencing strategy.",
    tags: ["Design Systems", "Migration", "Architecture", "Angular"],
    readTime: "11 min",
  },
  {
    id: "self-service-configuration",
    title: "Building Self-Service Configuration Platforms for Enterprise Software",
    summary:
      "From 1,500+ support tickets to self-service: designing validation pipelines, role-gated access, audit trails, and UI patterns that let enterprise customers manage complex configuration safely without expert help.",
    tags: ["Enterprise", "Self-Service", "Spring Boot", "Angular"],
    readTime: "13 min",
  },
];

export const AWARDS = [
  {
    title: "IBM Outstanding Technical Achievement Award",
    year: "2023",
    org: "IBM",
    context:
      "Recognised for engineering impact across the IBM Sterling B2B Integration platform — architectural contributions, performance improvements, and delivery of the Partner Certificate Management Platform.",
  },
  {
    title: "TCS Star Team Award",
    year: "2022",
    org: "Tata Consultancy Services",
    context:
      "Awarded for team contribution on the Rolls-Royce aviation analytics platform — delivering measurable improvements in insight generation, reporting, and route-planning efficiency.",
  },
  {
    title: "1st Place — GMOCS Hackathon",
    year: "2019",
    org: "GMOCS",
    context:
      "First place in a competitive engineering hackathon. Demonstrated strong problem-solving, rapid prototyping, and collaborative engineering under time constraints.",
  },
];

export const GITHUB_REPOS = [
  {
    name: "datastax-dashboard",
    description:
      "Full-stack developer productivity platform for DataStax Data APIs. React + TypeScript SPA, Express.js BFF, Redux Toolkit, Carbon Design System, Monaco Editor, and encrypted shared-link collaboration.",
    topics: ["React", "TypeScript", "Express.js", "Redux", "Carbon"],
    url: "https://github.com/Pradeep-1612",
    highlight: true,
  },
  {
    name: "event-management-app",
    description:
      "Event management application built with React, TanStack React Query for server-state management, and a custom Express backend. Demonstrates data-fetching patterns, caching, and optimistic updates.",
    topics: ["React", "TanStack Query", "TypeScript", "REST API"],
    url: "https://github.com/Pradeep-1612",
    highlight: true,
  },
  {
    name: "food-order-app",
    description:
      "Full-stack food ordering application with React frontend, Express.js backend, cart state management, and HTTP request patterns including loading and error states.",
    topics: ["React", "Express.js", "Context API", "REST"],
    url: "https://github.com/Pradeep-1612",
    highlight: false,
  },
  {
    name: "redux-online-cart",
    description:
      "E-commerce cart application demonstrating Redux Toolkit architecture: slices, async thunks, side effects, and clean separation of UI from state management.",
    topics: ["React", "Redux Toolkit", "TypeScript"],
    url: "https://github.com/Pradeep-1612",
    highlight: false,
  },
  {
    name: "advanced-routing-management",
    description:
      "React Router v6+ application demonstrating nested routes, protected routes, loader functions, action handlers, and route-level error boundaries.",
    topics: ["React", "React Router v6", "TypeScript"],
    url: "https://github.com/Pradeep-1612",
    highlight: false,
  },
  {
    name: "react-optimization-techniques",
    description:
      "Reference project demonstrating React performance optimization: memo, useMemo, useCallback, virtualization, profiling, and code splitting.",
    topics: ["React", "Performance", "TypeScript"],
    url: "https://github.com/Pradeep-1612",
    highlight: false,
  },
];
