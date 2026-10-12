import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  MapPin, 
  Target, 
  ShieldCheck, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Cloud 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const About: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="About NEXOREL — Engineering Studio"
        description="NEXOREL is an early-stage engineering studio based in Tunis, Tunisia. We combine software engineering, workflow automation, and dependable cloud/DevOps infrastructure."
        canonicalPath="/about"
      />

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '72px', background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>About NEXOREL</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag mb-4">
              <MapPin size={14} />
              <span>Tunis, Tunisia · Engineering Studio</span>
            </span>
            <h1 style={{ marginBottom: '20px' }}>Engineering Digital Products With Integrity.</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '32px' }}>
              NEXOREL is an independent engineering studio founded to help founders and growing businesses eliminate manual friction and deliver software predictably—from idea to git push to production.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Work With Us</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/approach" className="btn btn-secondary btn-lg">
                <span>Our Engineering Approach</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Story & Identity */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="section-tag mb-3">Our Origin & Purpose</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>
                Why we founded NEXOREL
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px', color: '#cbd5e1' }}>
                Throughout software industry projects, we noticed a persistent problem: companies either hire fragmented freelancers who pass blame between frontend and server, or pay astronomical retainers to bloated agencies that deliver over-engineered systems they cannot maintain.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px', color: '#cbd5e1' }}>
                We built NEXOREL on a different model: an agile engineering studio based in Tunis, Tunisia, where senior full-stack development, automated n8n workflows, and hands-on DevOps infrastructure work together seamlessly.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#cbd5e1' }}>
                We don’t believe in buzzwords, vendor lock-in, or inflated claims. We believe in clean commits, automated tests, clear documentation, and working deployments.
              </p>
            </div>

            <div className="card card-gradient-top">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/brand/nexorel-logo-128.webp" 
                  alt="NEXOREL" 
                  width="48" 
                  height="48"
                  style={{ borderRadius: 'var(--radius-sm)' }}
                />
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.3rem' }}>NEXOREL Studio</h3>
                  <span className="text-muted" style={{ fontSize: '0.85rem' }}>Tunis, Tunisia · Est. 2026</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                  <div className="flex items-center gap-2 text-cyan mb-1" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                    <Target size={16} />
                    <span>Core Purpose</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: '#e2e8f0' }}>
                    Helping small and growing businesses build reliable digital products, connect disconnected software tools, and operate infrastructure safely.
                  </p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                  <div className="flex items-center gap-2 text-cyan mb-1" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                    <Terminal size={16} />
                    <span>Tagline</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: '#e2e8f0', fontFamily: 'var(--font-mono)' }}>
                    AUTOMATE. BUILD. DEPLOY.
                  </p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                  <div className="flex items-center gap-2 text-cyan mb-1" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                    <ShieldCheck size={16} />
                    <span>Accuracy & Ethics Policy</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: '#e2e8f0' }}>
                    Zero fabricated case studies, fake customer metrics, or artificial certifications. What you see is demonstrated engineering reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars In Harmony */}
      <section className="section" style={{ background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Integrated Discipline</span>
            <h2 className="section-title">The Three Connected Pillars</h2>
            <p className="section-desc">
              How our core capabilities work together to deliver end-to-end digital excellence.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={24} className="text-cyan" />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Software Engineering</h3>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                Full-stack web applications, typed APIs, modular frontends, and relational database schemas designed for maintainability and speed.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Cpu size={24} className="text-purple" />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Automation & AI</h3>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                n8n workflow orchestrations, webhook integrations, and supervised LLM pipelines with human-in-the-loop validation to eliminate repetitive manual toil.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Cloud size={24} className="text-emerald" />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Cloud & Reliable DevOps</h3>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                Docker multi-stage containerization, automated GitHub Actions CI/CD pipelines, and Linux server hardening for predictable releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <span className="section-tag">Principles</span>
            <h2 className="section-title">How We Work With Clients</h2>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card">
              <h4 style={{ fontSize: '1.15rem', color: 'var(--brand-cyan)', marginBottom: '8px' }}>
                1. Full Source Code & Infrastructure Ownership
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                You own 100% of the git repositories, Docker configurations, n8n workflows, and deployment scripts from day one. There is zero proprietary platform lock-in.
              </p>
            </div>

            <div className="card">
              <div className="card-title">
                <h4 style={{ fontSize: '1.15rem', color: 'var(--brand-cyan)', marginBottom: '8px' }}>
                  2. Honest Capabilities Over Marketing Exaggeration
                </h4>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                We clearly separate what is already working in production, what is a verified working prototype, and what is planned for future iterations. You will always receive transparent technical guidance.
              </p>
            </div>

            <div className="card">
              <h4 style={{ fontSize: '1.15rem', color: 'var(--brand-cyan)', marginBottom: '8px' }}>
                3. Cost-Efficient, Lean Architecture
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                We avoid unnecessary cloud infrastructure complexity. A well-architected application running on an economical VPS with Docker Compose and automated CI/CD can serve tens of thousands of users for less than $20/month.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Start A Project Conversation</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
