import React, { useState } from 'react';
import { 
  FileText, 
  Code, 
  Package, 
  CheckCircle, 
  Rocket, 
  Activity, 
  Check, 
  Terminal as TerminalIcon 
} from 'lucide-react';

interface LifecyclePhase {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  deliverables: string[];
  tools: string[];
  securityGate: string;
  terminalSnippet: string;
}

const PHASES: LifecyclePhase[] = [
  {
    id: 'plan',
    step: '01',
    title: 'PLAN',
    subtitle: 'System Boundaries & Architecture',
    icon: <FileText size={20} />,
    deliverables: [
      'Relational Schema & Entity-Relationship Model',
      'OpenAPI 3.0 Contract Specification',
      'Infrastructure Topology & Cloud Budget Plan',
      'Security Threat Model & Access Control Matrix'
    ],
    tools: ['Figma', 'dbdiagram.io', 'OpenAPI', 'Markdown'],
    securityGate: 'Authentication architecture verified; least privilege scoping defined.',
    terminalSnippet: '# Specifying domain contracts\n$ spec-gen --contract api-v1.yaml --strict\n✓ Schema validated: 14 models, 32 endpoints'
  },
  {
    id: 'code',
    step: '02',
    title: 'CODE',
    subtitle: 'Modular Implementation & Typing',
    icon: <Code size={20} />,
    deliverables: [
      'Strongly Typed Frontend & Backend Modules',
      'Database Migration Scripts & Seeds',
      'Pre-commit Gitleaks Secret Scanning Hooks',
      'Unit Test Suites with Edge Case Fixtures'
    ],
    tools: ['TypeScript', 'Node.js', 'Spring Boot', 'Python', 'Git'],
    securityGate: 'Pre-commit hook blocks credentials, keys, or .env file additions.',
    terminalSnippet: '$ git add .\n$ pre-commit run --all-files\n✓ Gitleaks: No secrets detected\n✓ ESLint & Prettier: Clean code style'
  },
  {
    id: 'build',
    step: '03',
    title: 'BUILD',
    subtitle: 'Multi-Stage Containerization',
    icon: <Package size={20} />,
    deliverables: [
      'Minimal Production Multi-Stage Dockerfiles',
      'Vite & Webpack Tree-Shaken Asset Bundles',
      'Optimized Base Images (Alpine/Debian Slim)',
      'Deterministic Lockfile Dependency Resolution'
    ],
    tools: ['Docker', 'Vite', 'npm / corepack', 'Docker Compose'],
    securityGate: 'Trivy scan validates zero critical CVEs in base images.',
    terminalSnippet: '$ docker build --target runner -t nexorel/app:v1 .\n✓ Multi-stage build complete\n✓ Image footprint: 48.2 MB (Non-root user: 10001)'
  },
  {
    id: 'test',
    step: '04',
    title: 'TEST',
    subtitle: 'Automated CI Verification Gates',
    icon: <CheckCircle size={20} />,
    deliverables: [
      'Automated GitHub Actions Matrix Workflow',
      'API Integration & Database Transaction Tests',
      'Software Composition Analysis (SCA)',
      'Lighthouse & Accessibility (WCAG) Check'
    ],
    tools: ['GitHub Actions', 'Vitest / Jest', 'Trivy', 'Playwright'],
    securityGate: 'CI builds fail if high-severity CVEs or broken tests exist.',
    terminalSnippet: '$ npm run test && npm run typecheck\n✓ Test Suites: 18 passed, 18 total\n✓ TypeScript: 0 errors found\n✓ CI Workflow: All matrix jobs passed'
  },
  {
    id: 'deploy',
    step: '05',
    title: 'DEPLOY',
    subtitle: 'Zero-Downtime Rollout & SSL',
    icon: <Rocket size={20} />,
    deliverables: [
      'Git-Driven Automated Release Deployments',
      'Automated Let’s Encrypt TLS/SSL Renewal',
      'Reverse Proxy Routing (Nginx / Caddy)',
      'Instant Rollback Tags on Regressions'
    ],
    tools: ['GitHub Pages', 'Cloudflare', 'VPS / Hetzner', 'Caddy'],
    securityGate: 'A+ SSL configuration with HSTS, CSP, and X-Frame-Options headers.',
    terminalSnippet: '$ deploy-pipeline --env production\n✓ Image pulled from private registry\n✓ Health check endpoint 200 OK\n✓ Zero-downtime traffic swap complete'
  },
  {
    id: 'monitor',
    step: '06',
    title: 'MONITOR',
    subtitle: 'Observability & Self-Healing',
    icon: <Activity size={20} />,
    deliverables: [
      'Real-Time Uptime Monitoring & Heartbeats',
      'Structured JSON Application Logging',
      'Automated Crash Recovery (Systemd / Docker)',
      'Operational Runbooks & Incident Protocols'
    ],
    tools: ['Uptime Kuma', 'Docker Healthchecks', 'Systemd', 'Slack/Email Webhooks'],
    securityGate: 'Automated alerts trigger immediately on abnormal 5xx spikes.',
    terminalSnippet: '$ systemctl status nexorel-service\n● Active: active (running) since 48d ago\n✓ Memory: 142MB / 1024MB | Uptime: 99.98%\n✓ 0 unhandled exceptions logged'
  }
];

export const EngineeringLifecycle: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = PHASES[activePhaseIndex];

  return (
    <div className="lifecycle-wrapper">
      <div className="text-center mb-8">
        <span className="section-tag">Continuous Delivery</span>
        <h3 className="section-title">The NEXOREL Delivery Lifecycle</h3>
        <p className="section-desc" style={{ maxWidth: '640px', margin: '0 auto' }}>
          Every digital product, workflow automation, and infrastructure deployment follows a disciplined, reproducible engineering pipeline.
        </p>
      </div>

      {/* 6 Step Cards */}
      <div className="lifecycle-steps" role="tablist" aria-label="Lifecycle Phases">
        {PHASES.map((phase, idx) => (
          <button
            key={phase.id}
            role="tab"
            aria-selected={activePhaseIndex === idx}
            aria-controls={`phase-panel-${phase.id}`}
            id={`phase-tab-${phase.id}`}
            className={`lifecycle-step-card ${activePhaseIndex === idx ? 'active' : ''}`}
            onClick={() => setActivePhaseIndex(idx)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <span className="lifecycle-step-number">{phase.step}</span>
            <div style={{ color: activePhaseIndex === idx ? 'var(--brand-cyan)' : 'var(--text-muted)', marginBottom: '8px' }}>
              {phase.icon}
            </div>
            <span className="lifecycle-step-name">{phase.title}</span>
          </button>
        ))}
      </div>

      {/* Active Phase Details */}
      <div 
        id={`phase-panel-${activePhase.id}`}
        role="tabpanel" 
        aria-labelledby={`phase-tab-${activePhase.id}`}
        className="lifecycle-detail-box"
      >
        {/* Left Column: Deliverables and Security */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="badge badge-cyan">{activePhase.step} · {activePhase.title}</span>
            <span className="text-muted" style={{ fontSize: '0.85rem' }}>{activePhase.subtitle}</span>
          </div>

          <h4 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#fff' }}>
            Tangible Deliverables
          </h4>

          <ul className="feature-list mb-6">
            {activePhase.deliverables.map((item, i) => (
              <li key={i} className="feature-item">
                <span className="feature-icon-wrapper">
                  <Check size={16} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div style={{ background: 'rgba(51, 189, 254, 0.06)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(51, 189, 254, 0.2)' }}>
            <div className="flex items-center gap-2 mb-1" style={{ color: 'var(--brand-cyan)', fontSize: '0.8rem', fontWeight: 600 }}>
              <span>Security Gate Enforcement:</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#e2e8f0', margin: 0 }}>
              {activePhase.securityGate}
            </p>
          </div>
        </div>

        {/* Right Column: Code snippet & Tools */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2 text-muted" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                <TerminalIcon size={14} className="text-cyan" />
                <span>TERMINAL EXECUTION PROOF</span>
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>PASSED</span>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot dot-red"></div>
                  <div className="terminal-dot dot-yellow"></div>
                  <div className="terminal-dot dot-green"></div>
                </div>
                <span className="terminal-title">pipeline/{activePhase.id}.sh</span>
              </div>
              <div className="terminal-body">
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                  {activePhase.terminalSnippet}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <span className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Verified Tooling:
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {activePhase.tools.map((tool, idx) => (
                <span key={idx} className="badge" style={{ background: 'rgba(255, 255, 255, 0.06)', color: '#cbd5e1' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
