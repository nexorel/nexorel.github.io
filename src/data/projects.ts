import { ProjectData } from '../types';

export const projectsData: ProjectData[] = [
  {
    id: 'secure-rest-api-platform',
    slug: 'secure-rest-api-platform',
    title: 'Secure REST API Platform',
    category: 'Software Engineering',
    description: 'Production-ready RESTful API architecture implementing layered authentication, rate limiting, and role-based access control.',
    fullCaseStudy: {
      overview: 'An engineering blueprint for modern business backends requiring hardened security, relational persistence, and clean separation of concerns.',
      challenge: 'Many early web applications suffer from fragmented authentication logic, weak authorization gates, and lack of systematic API input sanitization, leading to vulnerabilities and maintenance headaches.',
      architectureSolution: 'Engineered a modular backend platform with centralized JWT authentication, structured validation middlewares, PostgreSQL relational schema with migrations, and containerized deployment.',
      results: [
        'Complete OpenAPI documentation for frontend client integration',
        'Stateless JWT session handling with refresh token rotation',
        'Standardized error response formats across all HTTP endpoints'
      ],
      securityHighlights: [
        'Strict schema validation on all incoming request payloads',
        'CORS and rate-limiting middleware configured to prevent brute force abuse',
        'Passwords hashed using industry standard bcrypt with salt rounds'
      ]
    },
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/ghaithsoltani/Secure-REST-API-Platform',
    verifiedStatus: 'Demonstrated Engineering',
    featured: true
  },
  {
    id: 'spring-boot-rag-pipeline',
    slug: 'spring-boot-rag-pipeline',
    title: 'Spring Boot RAG & LLM Pipeline',
    category: 'Automation & AI',
    description: 'Enterprise Retrieval-Augmented Generation (RAG) backend connecting relational databases with vector embeddings for context-grounded AI responses.',
    fullCaseStudy: {
      overview: 'Demonstration of enterprise-grade AI integration where large language models query private knowledge bases without hallucinating or leaking sensitive context.',
      challenge: 'Standard LLM calls lack domain knowledge and frequently hallucinate answers. Business systems require deterministic, cited answers retrieved strictly from verified enterprise documents.',
      architectureSolution: 'Implemented a Spring Boot service that chunks, embeds, and stores domain text into a vector store, performing cosine-similarity search to inject verified context into prompt templates before model inference.',
      results: [
        'High contextual accuracy grounded directly in reference documents',
        'Modular retrieval layer supporting multiple embedding providers',
        'Asynchronous document ingestion pipeline'
      ],
      securityHighlights: [
        'Zero transmission of raw enterprise keys to unauthorized third parties',
        'Document access control checks enforced before retrieval injection',
        'Strict validation of LLM JSON outputs prior to downstream system actions'
      ]
    },
    technologies: ['Spring Boot', 'Java', 'Vector Database', 'LLM API', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/ghaithsoltani/spring-boot-rag-pipeline',
    verifiedStatus: 'Demonstrated Engineering',
    featured: true
  },
  {
    id: 'linux-server-audit-hardening-tool',
    slug: 'linux-server-audit-hardening-tool',
    title: 'Linux Server Audit & Hardening Tool',
    category: 'DevSecOps',
    description: 'Automated bash and python security auditing suite that benchmarks Linux servers against CIS security guidelines and locks down unauthorized access.',
    fullCaseStudy: {
      overview: 'A practical system administration and DevSecOps utility for automated inspection, compliance verification, and rapid baseline hardening of Linux environments.',
      challenge: 'Manual server configuration often leaves default ports open, permits password-based SSH logins, and fails to enable firewall policies or intrusion detection.',
      architectureSolution: 'Developed an automated audit engine that scans open network sockets, verifies file permissions, validates SSH daemon security configurations, checks firewall (UFW) rules, and generates an actionable remediation report.',
      results: [
        'Rapid execution under 60 seconds with zero external dependencies',
        'Comprehensive audit log detailing pass/fail status per security control',
        'Automated remediation script for safe baseline lockdown'
      ],
      securityHighlights: [
        'Enforcement of Ed25519 SSH key-only authentication and disabling root login',
        'Automatic configuration of Fail2ban for brute-force SSH prevention',
        'Kernel parameter hardening (disabling ICMP redirects, source routing)'
      ]
    },
    technologies: ['Linux (Ubuntu/Debian)', 'Bash', 'Python', 'UFW', 'Fail2ban', 'Systemd'],
    githubUrl: 'https://github.com/ghaithsoltani/Linux-Server-Audit-Hardening-Tool',
    verifiedStatus: 'Demonstrated Engineering',
    featured: true
  },
  {
    id: 'resume-screener-with-llm',
    slug: 'resume-screener-with-llm',
    title: 'Resume Screener with LLM & AI Agents',
    category: 'Automation & AI',
    description: 'Document processing and candidate evaluation pipeline utilizing structured schema extraction, skill matching, and objective scoring.',
    fullCaseStudy: {
      overview: 'Operational automation project demonstrating document extraction, structured schema generation, and transparent scoring without human fatigue.',
      challenge: 'Recruiting teams sift through hundreds of PDFs manually, leading to subjective evaluation and significant time loss on unqualified submissions.',
      architectureSolution: 'Built a multi-step parsing pipeline that extracts clean text from varied PDF layouts, matches qualifications against strict job requirement matrices, and outputs structured JSON scorecards.',
      results: [
        'Extraction of structured skill sets and experience durations',
        'Standardized evaluation criteria applied consistently across all candidates',
        'Exportable summary reports for hiring managers'
      ],
      securityHighlights: [
        'Candidate PII isolation with anonymized processing option',
        'Local file processing without permanent cloud file storage',
        'Human-in-the-loop validation for candidate shortlisting'
      ]
    },
    technologies: ['Python', 'PDF Plumber', 'OpenAI API', 'JSON Schema', 'Streamlit'],
    githubUrl: 'https://github.com/ghaithsoltani/Resume_Screener_with_LLM',
    verifiedStatus: 'Demonstrated Engineering',
    featured: false
  },
  {
    id: 'k8s-microservices-task-app',
    slug: 'k8s-microservices-task-app',
    title: 'Kubernetes Microservices Task Platform',
    category: 'Cloud & DevOps',
    description: 'Containerized microservices topology deployed to Kubernetes with ingress controllers, config maps, persistent volumes, and health probes.',
    fullCaseStudy: {
      overview: 'A laboratory implementation illustrating service discovery, self-healing pod management, and horizontal scalability for distributed applications.',
      challenge: 'Moving monolithic applications to microservices requires reliable inter-service networking, resilient failure recovery, and declarative environment management.',
      architectureSolution: 'Created complete Kubernetes manifests including Deployments, Services, ConfigMaps, Ingress, and PersistentVolumeClaims with liveness and readiness probes.',
      results: [
        'Zero-downtime rolling updates verified through Kubernetes rollout status',
        'Automated pod restart on application container crashes',
        'Isolated staging and production namespaces'
      ],
      securityHighlights: [
        'Containers executed with read-only root filesystems and non-root users',
        'Kubernetes Secrets used for database credentials rather than plain env vars',
        'Network policies restricting cross-namespace communication'
      ]
    },
    technologies: ['Kubernetes', 'Docker', 'Nginx Ingress', 'Helm', 'Linux'],
    githubUrl: 'https://github.com/ghaithsoltani/k8s-microservices-task-app',
    verifiedStatus: 'Demonstrated Engineering',
    featured: false
  },
  {
    id: 'github-action-ci-cd',
    slug: 'github-action-ci-cd',
    title: 'Continuous Integration & Delivery Suite',
    category: 'Cloud & DevOps',
    description: 'Collection of modular, reusable GitHub Actions workflows for multi-branch validation, automated testing, docker image builds, and deployment gates.',
    fullCaseStudy: {
      overview: 'A standardized CI/CD workflow repository serving as the foundation for rapid and safe application deployments across projects.',
      challenge: 'Manual testing and deployment introduce high risk of human error, inconsistent dependency caches, and delayed feedback to developers.',
      architectureSolution: 'Crafted parameterized workflow templates with cache-optimized build steps, matrix testing, security vulnerability scanning, and environment protection rules.',
      results: [
        'Build and test cycle completed under 3 minutes with layer caching',
        'Strict pull request check requirements preventing broken builds from merging',
        'Automated GitHub Releases with semantic versioning tags'
      ],
      securityHighlights: [
        'Secrets strictly injected via GitHub Encrypted Secrets with zero log echoing',
        'Dependency vulnerability auditing before compilation',
        'Least-privilege GITHUB_TOKEN permissions defined per job'
      ]
    },
    technologies: ['GitHub Actions', 'YAML', 'Docker', 'Node.js', 'Bash'],
    githubUrl: 'https://github.com/ghaithsoltani/Github_action_CI-CD',
    verifiedStatus: 'Demonstrated Engineering',
    featured: false
  }
];
