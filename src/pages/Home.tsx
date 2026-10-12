import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Terminal, 
  Code2, 
  Cpu, 
  Cloud, 
  CheckCircle2, 
  Layers, 
  GitBranch, 
  Database, 
  Zap, 
  Lock 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EngineeringLifecycle } from '../components/EngineeringLifecycle';
import { GitHubShowcase } from '../components/GitHubShowcase';
import { projectsData } from '../data/projects';

export const Home: React.FC = () => {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  return (
    <>
      <SEOHead 
        title="From Idea to Git Push to Production"
        description="Early-stage engineering studio based in Tunis, Tunisia. We build full-stack web applications, automate workflows with n8n, and deploy reliable cloud/DevOps infrastructure."
        canonicalPath="/"
      />

      {/* 1. Announcement Bar */}
      <div 
        style={{ 
          background: 'rgba(51, 189, 254, 0.08)', 
          borderBottom: '1px solid rgba(51, 189, 254, 0.2)',
          padding: '8px 16px',
          textAlign: 'center',
          fontSize: '0.825rem',
          color: 'var(--brand-cyan)'
        }}
      >
        <div className="container flex items-center justify-center gap-2">
          <span className="badge badge-cyan" style={{ fontSize: '0.65rem', padding: '1px 6px' }}>ANNOUNCEMENT</span>
          <span>NEXOREL Engineering Studio is based in Tunis, Tunisia · Accepting new engineering projects</span>
          <Link to="/contact" style={{ textDecoration: 'underline', fontWeight: 600, marginLeft: '6px' }}>
            Schedule a Discovery Call →
          </Link>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '96px', position: 'relative' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            {/* Left Hero Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="section-tag">
                  <Terminal size={14} />
                  <span>AUTOMATE · BUILD · DEPLOY</span>
                </span>
              </div>

              <h1 style={{ marginBottom: '24px', letterSpacing: '-0.03em' }}>
                From idea to <span style={{ color: 'var(--brand-cyan)' }}>git push</span> to production.
              </h1>

              <p style={{ fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '36px', color: '#cbd5e1' }}>
                We build, automate, and secure digital products so your business can move faster—with confidence. Modern web applications, n8n automated workflows, and dependable Linux/DevOps delivery.
              </p>

              <div className="flex items-center gap-4 flex-wrap mb-8">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <span>Discuss a Project</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/projects" className="btn btn-secondary btn-lg">
                  <span>Explore Our Work</span>
                </Link>
              </div>

              {/* Trust & Methodology bullets */}
              <div className="flex items-center gap-6 text-muted" style={{ fontSize: '0.85rem' }}>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Direct Engineering Access</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>100% Codebase Ownership</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Tunis (UTC+1) Studio</span>
                </span>
              </div>
            </div>

            {/* Right Hero Visual: Terminal & Banner */}
            <div>
              <div 
                className="card"
                style={{ 
                  padding: '16px', 
                  background: 'rgba(8, 21, 46, 0.85)',
                  boxShadow: '0 20px 50px -10px rgba(0,0,0,0.7), 0 0 30px rgba(51, 189, 254, 0.15)'
                }}
              >
                <img 
                  src="./brand/nexorel-hero-banner.webp" 
                  alt="NEXOREL: From Idea to Production" 
                  width="2056"
                  height="765"
                  style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-sm)', marginBottom: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                  loading="eager"
                />

                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <div className="terminal-dot dot-red"></div>
                      <div className="terminal-dot dot-yellow"></div>
                      <div className="terminal-dot dot-green"></div>
                    </div>
                    <span className="terminal-title">nexorel-deploy.sh · production</span>
                  </div>
                  <div className="terminal-body" style={{ fontSize: '0.8rem' }}>
                    <div><span className="terminal-prompt">$</span> git push origin main</div>
                    <div className="terminal-comment"># Triggering GitHub Actions CI/CD pipeline...</div>
                    <div><span className="terminal-success">✓</span> Running automated typecheck & tests (18/18 passed)</div>
                    <div><span className="terminal-success">✓</span> Docker multi-stage build completed in 24s</div>
                    <div><span className="terminal-success">✓</span> Trivy security scan: 0 critical vulnerabilities</div>
                    <div><span className="terminal-success">✓</span> Live at <span className="terminal-highlight">https://nexorel.github.io</span> (SSL: Valid)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Core Pillars Section */}
      <section className="section" style={{ background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Capabilities</span>
            <h2 className="section-title">Three Pillars of Modern Engineering</h2>
            <p className="section-desc">
              We treat software development, workflow automation, and infrastructure as interconnected disciplines, not isolated silos.
            </p>
          </div>

          <div className="grid-3">
            {/* Pillar 1: Software Engineering */}
            <div className="card card-interactive card-gradient-top flex flex-col justify-between">
              <div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: 'var(--radius-md)', 
                    background: 'rgba(51, 189, 254, 0.12)', 
                    color: 'var(--brand-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <Code2 size={24} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Software Engineering</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.6 }}>
                  Full-stack web applications, scalable backends, clean APIs, and maintainable data architectures designed for long-term reliability.
                </p>
                <ul className="feature-list mb-6" style={{ fontSize: '0.875rem' }}>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper"><CheckCircle2 size={15} /></span>
                    <span>TypeScript, React, & Modern Frontend</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper"><CheckCircle2 size={15} /></span>
                    <span>Node.js, Spring Boot, & Python APIs</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper"><CheckCircle2 size={15} /></span>
                    <span>Relational Database Design (PostgreSQL)</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/services/software-engineering" 
                className="flex items-center gap-2 text-cyan"
                style={{ fontWeight: 600, fontSize: '0.9rem' }}
              >
                <span>Learn about Software Engineering</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 2: Automation & AI Workflows */}
            <div className="card card-interactive card-gradient-top flex flex-col justify-between">
              <div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: 'var(--radius-md)', 
                    background: 'rgba(139, 92, 246, 0.12)', 
                    color: 'var(--brand-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <Cpu size={24} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Automation & AI Workflows</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.6 }}>
                  Eliminate repetitive manual tasks, connect fragmented software tools, and deploy bounded, supervised AI pipelines with n8n.
                </p>
                <ul className="feature-list mb-6" style={{ fontSize: '0.875rem' }}>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper"><CheckCircle2 size={15} /></span>
                    <span>Self-Hosted & Cloud n8n Orchestrations</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper"><CheckCircle2 size={15} /></span>
                    <span>API Integrations & Real-Time Webhooks</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper"><CheckCircle2 size={15} /></span>
                    <span>Supervised LLM Document Extraction</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/services/automation-integrations" 
                className="flex items-center gap-2 text-cyan"
                style={{ fontWeight: 600, fontSize: '0.9rem' }}
              >
                <span>Learn about Automation & n8n</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 3: Cloud, DevOps & Security */}
            <div className="card card-interactive card-gradient-top flex flex-col justify-between">
              <div>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: 'var(--radius-md)', 
                    background: 'rgba(16, 185, 129, 0.12)', 
                    color: 'var(--brand-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <Cloud size={24} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Cloud & Reliable DevOps</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.6 }}>
                  Automated CI/CD pipelines, Docker containerization, Linux server hardening, and zero-downtime releases without bloated cloud bills.
                </p>
                <ul className="feature-list mb-6" style={{ fontSize: '0.875rem' }}>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper"><CheckCircle2 size={15} /></span>
                    <span>GitHub Actions Automated Pipelines</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper"><CheckCircle2 size={15} /></span>
                    <span>Docker Multi-Stage Containerization</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper"><CheckCircle2 size={15} /></span>
                    <span>Linux Hardening & DevSecOps Scanning</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/services/cloud-devops" 
                className="flex items-center gap-2 text-cyan"
                style={{ fontWeight: 600, fontSize: '0.9rem' }}
              >
                <span>Learn about Cloud & DevOps</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Engineering Lifecycle Visualization */}
      <section className="section">
        <div className="container">
          <EngineeringLifecycle />
        </div>
      </section>

      {/* 5. Real Engineering Projects Section */}
      <section className="section" style={{ background: 'rgba(8, 21, 46, 0.3)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Demonstrated Work</span>
            <h2 className="section-title">Featured Engineering Projects</h2>
            <p className="section-desc">
              Accurate, verifiable implementations demonstrating our technical standards across software architecture, AI pipelines, and security tooling.
            </p>
          </div>

          <div className="grid-3">
            {featuredProjects.map((project) => (
              <div key={project.id} className="card card-interactive flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge badge-cyan">{project.category}</span>
                    <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                      {project.verifiedStatus}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>
                    <Link to={`/projects/${project.slug}`} style={{ color: '#fff' }}>
                      {project.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.875rem', marginBottom: '20px', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="badge" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <Link to={`/projects/${project.slug}`} className="text-cyan flex items-center gap-1" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      <span>Case Study</span>
                      <ArrowRight size={13} />
                    </Link>

                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted flex items-center gap-1"
                        style={{ fontSize: '0.8rem' }}
                      >
                        <GitBranch size={13} />
                        <span>Inspect Repo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-secondary">
              <span>View All Projects & Architecture Specs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Live GitHub Integration */}
      <GitHubShowcase />

      {/* 7. Business Problems Solved Section */}
      <section className="section" style={{ background: 'rgba(8, 21, 46, 0.5)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Value Proposition</span>
            <h2 className="section-title">Problems We Solve for Growing Businesses</h2>
            <p className="section-desc">
              We focus on eliminating operational bottlenecks and technical risks that hold back business momentum.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '28px' }}>
            <div className="card">
              <div className="flex items-start gap-4">
                <div style={{ color: 'var(--brand-amber)', marginTop: '4px' }}>
                  <Zap size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Fragmented Tools & Repetitive Data Entry</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Teams spend hours copying data between invoices, CRM records, and spreadsheets. We build reliable n8n workflow automations that sync systems seamlessly with zero recurring per-task fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div style={{ color: 'var(--brand-cyan)', marginTop: '4px' }}>
                  <Layers size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Fragile Prototypes That Cannot Scale</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Quickly thrown-together demo apps that break under real customer usage. We refactor and rebuild with strongly typed architectures, clean relational models, and automated test coverage.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div style={{ color: 'var(--brand-purple)', marginTop: '4px' }}>
                  <Database size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Uncontrolled AI Prototypes With Hallucinations</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Unsupervised LLM prompts that invent facts or expose company data. We build bounded RAG pipelines with schema validation, deterministic fallback thresholds, and human review gates.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div style={{ color: 'var(--brand-emerald)', marginTop: '4px' }}>
                  <Lock size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Manual Deployments & Unhardened Servers</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Anxiety-inducing manual releases and unmonitored VPS setups. We implement automated GitHub Actions CI/CD, Docker container parity, and automated Linux server hardening.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="section" style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div 
            className="card card-gradient-top text-center"
            style={{ 
              background: 'linear-gradient(180deg, rgba(8, 21, 46, 0.9) 0%, rgba(4, 13, 31, 0.95) 100%)',
              padding: '64px 32px'
            }}
          >
            <span className="section-tag mb-4">Start A Conversation</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
              Ready to take your product from idea to production?
            </h2>
            <p style={{ fontSize: '1.15rem', maxWidth: '640px', margin: '0 auto 36px auto', color: '#cbd5e1' }}>
              Let’s review your architecture, automate your bottlenecks, or engineer your next web application. No sales pressure—just transparent engineering advice.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Discuss a Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/approach" className="btn btn-outline btn-lg">
                <span>Review Our Engineering Approach</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
