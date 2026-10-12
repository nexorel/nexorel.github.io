import { ServiceData } from '../types';

export const servicesData: ServiceData[] = [
  {
    id: 'software-engineering',
    slug: 'software-engineering',
    title: 'Software Engineering',
    shortDesc: 'Full-stack web applications, scalable backends, clean APIs, and maintainable data architectures.',
    heroTagline: 'Architecting resilient digital products from database schema to responsive frontend.',
    pillar: 'software',
    problem: [
      'Fragile codebases that become difficult and expensive to modify after initial launch',
      'Disconnected databases and slow APIs that degrade end-user experience',
      'Lack of clear architecture patterns resulting in technical debt and downtime',
      'Prototypes rushed to market without automated tests or maintainable modular structures'
    ],
    targetAudience: [
      'Founders building web applications and business portals',
      'Small to mid-sized businesses modernizing legacy internal spreadsheets and tools',
      'Product teams needing dependable backend APIs and clean web interfaces'
    ],
    solution: 'We engineer end-to-end web applications with clean domain boundaries, strongly typed APIs, reliable relational and document databases, and performant frontend architectures built for longevity.',
    deliverables: [
      'Production-ready web application codebases (React, TypeScript, Node.js, Spring Boot, or Python)',
      'Documented RESTful and GraphQL APIs with OpenAPI / Swagger specifications',
      'Relational database migrations, indexing, and schema design (PostgreSQL, MySQL)',
      'Modular component libraries and state management architectures',
      'Automated unit, integration, and linting test suites'
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'Redis', 'Python'],
    process: [
      { step: '01', title: 'Architecture & Schema Specification', desc: 'Define entity boundaries, API contracts, data models, and non-functional requirements.' },
      { step: '02', title: 'API & Core Logic Implementation', desc: 'Develop backend business logic, validation layers, database transactions, and test fixtures.' },
      { step: '03', title: 'Frontend Integration & State Flow', desc: 'Build responsive, accessible user interfaces wired to strongly typed API clients.' },
      { step: '04', title: 'Verification & Code Delivery', desc: 'Perform integration testing, database index checks, code reviews, and containerization.' }
    ],
    securityConsiderations: [
      'Strict input validation and sanitization against SQL injection and XSS',
      'Stateless JWT or secure session-based authentication with role-based access control (RBAC)',
      'Zero hardcoded secrets, using environment variables and secret stores',
      'Rate-limiting and CORS policies tailored to authorized clients'
    ],
    businessBenefits: [
      'Lower maintenance costs through modular, well-tested code',
      'Reliable application uptime under normal and peak traffic loads',
      'Faster onboarding of future internal developers due to standard patterns',
      'Predictable release cadence enabled by clean git workflows'
    ],
    faqs: [
      {
        question: 'What stack do you usually recommend for new projects?',
        answer: 'We evaluate based on business goals: React/TypeScript for frontend combined with Node.js/Express, Spring Boot, or Python/FastAPI for backends, backed by PostgreSQL. We pick established, well-supported technologies over short-lived trends.'
      },
      {
        question: 'Do we own all the source code upon delivery?',
        answer: 'Yes. 100% of the repository, source files, documentation, and configuration belong to you from day one.'
      },
      {
        question: 'How do you handle changes during the engineering process?',
        answer: 'We work in transparent milestones with regular git commits, pull requests, and staging previews so you see genuine progress and can provide feedback at every milestone.'
      }
    ]
  },
  {
    id: 'automation-integrations',
    slug: 'automation-integrations',
    title: 'Automation & AI-Assisted Workflows',
    shortDesc: 'Eliminate repetitive manual tasks, connect fragmented software tools, and deploy supervised AI pipelines.',
    heroTagline: 'Orchestrating reliable business workflows and supervised AI pipelines with n8n and modern APIs.',
    pillar: 'automation',
    problem: [
      'Teams wasting hours copying data between CRM, accounting, email, and internal tools',
      'Manual, error-prone document parsing, reporting, and customer intake processes',
      'Disconnected SaaS platforms creating data silos and delays in business operations',
      'Uncontrolled, hallucination-prone AI prototypes lacking validation, guardrails, and error handling'
    ],
    targetAudience: [
      'Businesses wanting to automate operational bottlenecks without bloated SaaS subscriptions',
      'Operations managers needing unified data sync between third-party systems',
      'Companies exploring AI agents for document analysis, summarization, and triaging'
    ],
    solution: 'We design and deploy robust workflow automations using self-hosted or cloud n8n, secure webhook architectures, and carefully bounded LLM pipelines featuring human-in-the-loop review, retry policies, and structured validation.',
    deliverables: [
      'Production-tested n8n workflow JSON blueprints and execution environments',
      'Custom webhook handlers and API connectors between business applications',
      'Document parsing, OCR, and AI summarization pipelines with validation schemas',
      'Comprehensive error handling, failure alerts (Slack/Email), and audit trails',
      'Self-hosted Docker orchestration for secure data privacy'
    ],
    technologies: ['n8n', 'Python', 'Webhooks', 'REST APIs', 'LangChain / LLM APIs', 'Docker', 'PostgreSQL'],
    process: [
      { step: '01', title: 'Process Mapping & Data Audit', desc: 'Identify manual touchpoints, input variations, failure modes, and required API permissions.' },
      { step: '02', title: 'Workflow Blueprinting in n8n', desc: 'Implement logical nodes, transform logic, rate limits, schema validation, and fallback handlers.' },
      { step: '03', title: 'Supervised AI Integration', desc: 'Implement bounded prompts, JSON schema enforcement, and human review checkpoints where needed.' },
      { step: '04', title: 'Hardening & Deployment', desc: 'Deploy with automated retries, error logging, and monitoring in a secure environment.' }
    ],
    securityConsiderations: [
      'Sensitive business data stays encrypted in transit and at rest',
      'Self-hosted deployment options guarantee data never leaves your infrastructure',
      'AI prompts are sandboxed and validated against prompt injection and data leaks',
      'Strict API token scoping with least-privilege principles'
    ],
    businessBenefits: [
      'Elimination of recurring manual data entry and transcription errors',
      'Real-time synchronization across sales, invoicing, and fulfillment tools',
      'Reduced software overhead by replacing expensive point-to-point automation subscriptions',
      'Guaranteed human oversight on high-stakes business decisions'
    ],
    faqs: [
      {
        question: 'Why n8n over Zapier or Make?',
        answer: 'n8n is open, modular, can be self-hosted on a modest VPS (saving thousands in subscription and task costs), and allows complete privacy for sensitive company and customer data.'
      },
      {
        question: 'How do you prevent AI models from making mistakes in automated workflows?',
        answer: 'We design workflows with strict JSON schema outputs, fallback thresholds, and human-in-the-loop approval triggers. If an AI confidence score is below threshold or validation fails, it routes to a human operator.'
      }
    ]
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    title: 'Cloud & DevOps Engineering',
    shortDesc: 'Automated CI/CD pipelines, Docker containerization, reliable Linux environments, and zero-downtime releases.',
    heroTagline: 'Bridging code and infrastructure to deliver software reliably with automated pipelines.',
    pillar: 'infrastructure',
    problem: [
      'Manual, anxiety-inducing deployments using FTP or manual server SSH logins',
      '“It works on my machine” discrepancies between local development and staging servers',
      'Unmonitored servers where outages are discovered only when clients complain',
      'No staging environments or rollback plans when a release introduces a regression'
    ],
    targetAudience: [
      'Growing software teams needing structured, repeatable release pipelines',
      'Companies deploying containerized services on VPS, cloud providers, or dedicated hardware',
      'Startups migrating from manual deployments to automated git-driven operations'
    ],
    solution: 'We build reproducible container architectures with Docker, automated CI/CD pipelines via GitHub Actions, structured Linux server hardening, and lightweight observability to ensure every git push reaches production predictably.',
    deliverables: [
      'Production Dockerfiles with multi-stage builds and minimal image attack surfaces',
      'Automated GitHub Actions workflows for linting, testing, building, and deployment',
      'Linux server provisioning scripts, systemd service management, and reverse proxy configs (Nginx/Caddy)',
      'Zero-downtime deployment workflows and rapid rollback procedures',
      'Uptime monitoring, centralized log rotation, and alert notifications'
    ],
    technologies: ['Docker', 'Docker Compose', 'GitHub Actions', 'Linux (Ubuntu/Debian)', 'Nginx', 'Caddy', 'Bash', 'AWS / Hetzner / DigitalOcean'],
    process: [
      { step: '01', title: 'Infrastructure & Runtime Assessment', desc: 'Audit compute requirements, network topology, environment variables, and dependencies.' },
      { step: '02', title: 'Containerization & Build Optimization', desc: 'Craft multi-stage Dockerfiles and compose setups for development and production parity.' },
      { step: '03', title: 'CI/CD Pipeline Construction', desc: 'Implement automated verification and deploy stages in GitHub Actions with secret management.' },
      { step: '04', title: 'Observability & Runbook Handover', desc: 'Configure health checks, SSL certificates, log rotation, and operational runbooks.' }
    ],
    securityConsiderations: [
      'Containers executed under non-root system users',
      'Automated vulnerability scanning of base images and package dependencies',
      'Automated SSL/TLS certificate issuance and renewal via Let’s Encrypt',
      'Firewall configuration (UFW/iptables) restricting external port exposure'
    ],
    businessBenefits: [
      'Confidence to deploy multiple times a day without fear of regressions',
      'Instant rollback capability in the event of an unexpected edge case',
      'Zero server configuration drift across team environments',
      'Transparent deployment logs and verifiable release histories'
    ],
    faqs: [
      {
        question: 'Do we need Kubernetes to have professional DevOps?',
        answer: 'Usually no. For early-stage and growing businesses, Kubernetes introduces high cost and cognitive overhead. Docker Compose, systemd, and well-designed GitHub Actions provide superior reliability, lower cost, and simpler operations.'
      },
      {
        question: 'Can you work with low-cost VPS providers like Hetzner or DigitalOcean?',
        answer: 'Yes. We specialize in engineering high-reliability setups on cost-efficient infrastructure, maximizing performance while avoiding unnecessary cloud markups.'
      }
    ]
  },
  {
    id: 'security-devsecops',
    slug: 'security-devsecops',
    title: 'Security & DevSecOps',
    shortDesc: 'Automated vulnerability checks, secret management, server hardening, and security-conscious delivery.',
    heroTagline: 'Embedding practical security safeguards into development workflows from the first commit.',
    pillar: 'infrastructure',
    problem: [
      'API keys, database passwords, and secrets accidentally committed into git repositories',
      'Outdated third-party packages harboring known, exploitable CVE vulnerabilities',
      'Default server configurations with exposed administrative ports and open permissions',
      'Security treated as an afterthought right before launch, resulting in delayed deadlines'
    ],
    targetAudience: [
      'Businesses handling customer data, payments, or proprietary intellectual property',
      'Development teams needing security controls integrated into their existing git pipelines',
      'Companies preparing for client audits or vendor security questionnaires'
    ],
    solution: 'We integrate practical, automated security checks directly into your development lifecycle: secret detection, static code analysis (SAST), software composition analysis (SCA), and Linux server hardening without slowing down feature development.',
    deliverables: [
      'Automated secret detection pre-commit hooks and GitHub Actions scanner gates',
      'Automated dependency audit workflows (npm audit, pip-audit, Trivy)',
      'Linux Server Hardening scripts (SSH key-only auth, fail2ban, UFW, non-root users)',
      'Security policy blueprints, environment segregation guidelines, and incident response runbooks',
      'Report on identified architectural risks and prioritized mitigation plans'
    ],
    technologies: ['Trivy', 'GitGuardian / Gitleaks', 'Fail2ban', 'UFW', 'GitHub Secret Scanning', 'OWASP ZAP', 'OpenSSL'],
    process: [
      { step: '01', title: 'Baseline Risk & Asset Audit', desc: 'Inspect repos, cloud resources, server configurations, and exposed endpoints.' },
      { step: '02', title: 'Secret & Dependency Remediation', desc: 'Sanitize configurations, rotate exposed credentials, and update vulnerable libraries.' },
      { step: '03', title: 'Pipeline Security Gates', desc: 'Add automated scanning to CI workflows to prevent regressions from merging.' },
      { step: '04', title: 'System Hardening & Monitoring', desc: 'Lock down OS ports, establish logging, and document access control procedures.' }
    ],
    securityConsiderations: [
      'We practice defense in depth: no single control is trusted exclusively',
      'No security system is 100% impenetrable; our focus is raising attacker difficulty and rapid containment',
      'Strict adherence to the principle of least privilege across all credentials',
      'Secure, verified cryptographic primitives and TLS 1.3 standards'
    ],
    businessBenefits: [
      'Protection against preventable data breaches and credential exposure incidents',
      'Clear compliance paper trail for business partners and enterprise clients',
      'Peace of mind knowing security scanning runs automatically on every pull request',
      'Reduced emergency incident response costs through proactive defense'
    ],
    faqs: [
      {
        question: 'Do you guarantee 100% security against all attacks?',
        answer: 'No honest engineering team can make that promise. We focus on defense-in-depth, eliminating common attack vectors (OWASP Top 10), securing credentials, hardening servers, and setting up rapid containment.'
      },
      {
        question: 'Will adding security checks slow down our release cycle?',
        answer: 'No. We configure lightweight, parallelized scanners in GitHub Actions that complete in seconds, catching problems before code is merged without obstructing developers.'
      }
    ]
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux',
    title: 'UI/UX & Digital Experiences',
    shortDesc: 'Purposeful user journeys, accessible interfaces, design systems, and responsive frontend implementations.',
    heroTagline: 'Designing and engineering intuitive digital interfaces where form follows technical precision.',
    pillar: 'software',
    problem: [
      'Cluttered interfaces that confuse users and cause drop-offs during onboarding',
      'Inconsistent visual styling and components across different parts of the application',
      'Poor mobile responsiveness and slow layout rendering on real customer devices',
      'Designs created in design tools that prove impractical or inefficient to implement in code'
    ],
    targetAudience: [
      'Founders seeking a polished, credible aesthetic for their digital product',
      'Web applications requiring clear dashboards, analytics, or complex data entry workflows',
      'Teams wanting design systems that seamlessly translate into production frontend code'
    ],
    solution: 'We approach UI/UX from an engineering perspective: user journey mapping, design systems with reusable tokens, responsive layouts, accessible contrast, and clean code implementation that looks great and loads fast.',
    deliverables: [
      'User journey architectures, wireframes, and high-fidelity interface layouts',
      'Design token specifications (colors, typography, spacing, shadows, radius)',
      'Production-ready React/HTML/CSS component code implementations',
      'Mobile-first responsive adaptations tested across screen breakpoints',
      'Accessibility review verifying keyboard navigation and contrast ratios'
    ],
    technologies: ['Figma', 'Vanilla CSS', 'React', 'Design Tokens', 'WCAG AA Guidelines', 'Responsive Web Design'],
    process: [
      { step: '01', title: 'User Journey & Task Mapping', desc: 'Identify primary user goals, information hierarchy, and essential interaction paths.' },
      { step: '02', title: 'Design System Definition', desc: 'Establish typography scales, color palettes, interactive states, and component tokens.' },
      { step: '03', title: 'Interface Prototyping', desc: 'Design clean, content-focused screens with clear visual hierarchy and intuitive ergonomics.' },
      { step: '04', title: 'Frontend Code Implementation', desc: 'Translate designs directly into performant, accessible HTML, CSS, and React components.' }
    ],
    securityConsiderations: [
      'Form inputs designed with accessible error feedback and secure credential handling',
      'Zero invasive tracking scripts or unvetted third-party analytics libraries',
      'Clean asset loading without cross-site scripting vulnerabilities'
    ],
    businessBenefits: [
      'Higher user retention and completion rates on key business workflows',
      'Professional brand credibility that wins trust with prospective customers',
      'Consistent product look and feel across all views and screen sizes',
      'Faster frontend engineering due to modular component reuse'
    ],
    faqs: [
      {
        question: 'Do you only design mockups, or do you code the frontend as well?',
        answer: 'We believe design and code belong together. We both design the user experience and engineer the actual production-ready frontend components, eliminating handover friction.'
      },
      {
        question: 'How do you ensure accessibility?',
        answer: 'We test contrast ratios against WCAG 2.1 AA standards, implement semantic HTML elements, support visible keyboard focus indicators, and respect prefers-reduced-motion preferences.'
      }
    ]
  }
];
