import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  ArrowRight, 
  Package, 
  ShieldCheck, 
  Cpu, 
  Activity 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EngineeringLifecycle } from '../components/EngineeringLifecycle';

export const Approach: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Engineering Approach & Delivery Lifecycle"
        description="Our systematic engineering methodology: PLAN, CODE, BUILD, TEST, DEPLOY, MONITOR. Learn how NEXOREL eliminates deployment surprises and builds maintainable software."
        canonicalPath="/approach"
      />

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '72px', background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Engineering Approach</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag mb-4">
              <Terminal size={14} />
              <span>Disciplined Delivery</span>
            </span>
            <h1 style={{ marginBottom: '20px' }}>The NEXOREL Delivery Methodology</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '32px' }}>
              We do not treat deployment as an afterthought. We build software backwards from production: designing container parity, automated tests, and operational observability into the very first commit.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Discuss a Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">
                <span>Explore Demonstrated Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Lifecycle Component */}
      <section className="section">
        <div className="container">
          <EngineeringLifecycle />
        </div>
      </section>

      {/* Core Engineering Philosophies */}
      <section className="section" style={{ background: 'rgba(8, 21, 46, 0.5)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Tenets</span>
            <h2 className="section-title">Four Pillars of Reliable Delivery</h2>
            <p className="section-desc">
              The foundational engineering choices that protect our clients from downtime, bugs, and escalating maintenance debt.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '32px' }}>
            <div className="card">
              <div className="flex items-center gap-3 mb-4 text-cyan">
                <Package size={24} />
                <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>1. Development & Production Parity</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                The notorious phrase “it worked on my laptop” is unacceptable. Every project uses Docker Compose locally with matching versions of PostgreSQL, Node.js, and Redis. If it boots in local development, it boots cleanly on staging and production.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4 text-emerald">
                <ShieldCheck size={24} />
                <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>2. Security Shifted Left</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Security is not a checkbox done the day before launch. Automated secret scanners block API keys before they can ever be committed to git. Automated dependency scanners alert on vulnerable packages before pull requests merge.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4 text-purple">
                <Cpu size={24} />
                <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>3. Supervised, Guardrailed Automations</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                AI models should never be allowed to trigger destructive database writes or critical customer actions unsupervised. We build schemas with strict JSON validation, confidence thresholds, and human-in-the-loop review nodes.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4 text-amber">
                <Activity size={24} />
                <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>4. Observability and Runbooks</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Delivering software means handing over operational peace of mind. Every deployment comes with structured application logging, health-check endpoints, automated systemd/docker restart policies, and clear runbook documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Workflow */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <span className="section-tag">Client Collaboration</span>
            <h2 className="section-title">The Engagement Journey</h2>
            <p className="section-desc">
              From our first conversation to final handover, you have complete transparency into our work.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-cyan" style={{ fontWeight: 700 }}>STAGE 01</span>
                <span className="badge badge-cyan">DISCOVERY</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Technical Discovery & Scope Agreement</h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.7, margin: 0 }}>
                We review your requirements, inspect existing codebases (if any), define database entities, draft API specifications, and produce a fixed-scope milestone roadmap.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-cyan" style={{ fontWeight: 700 }}>STAGE 02</span>
                <span className="badge badge-cyan">ITERATIVE BUILDS</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Milestone Sprints & Staging Previews</h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.7, margin: 0 }}>
                Work proceeds in transparent milestones. You have access to the git repository and a private staging URL where you can test live progress after each sprint.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-cyan" style={{ fontWeight: 700 }}>STAGE 03</span>
                <span className="badge badge-cyan">PRODUCTION</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Production Rollout & Knowledge Handover</h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.7, margin: 0 }}>
                We deploy your system to production servers, configure automated SSL, configure uptime monitoring, and conduct a full walkthrough with documentation and runbooks.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Start Stage 01 Discovery</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
