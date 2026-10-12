import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Contact NEXOREL — Discuss a Project"
        description="Get in touch with the NEXOREL engineering team in Tunis, Tunisia. Schedule a technical discovery call or submit a project brief."
        canonicalPath="/contact"
      />

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '72px', background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Contact</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag mb-4">
              <Mail size={14} />
              <span>Project Inquiries & Discovery</span>
            </span>
            <h1 style={{ marginBottom: '20px' }}>Initiate an Engineering Dialogue.</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, color: '#cbd5e1' }}>
              We evaluate every project technically before making commitments. Submit your brief below, or email us directly for an architecture review.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section">
        <div className="container">
          <ContactForm />
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="section" style={{ background: 'rgba(8, 21, 46, 0.5)', paddingBottom: '96px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <span className="section-tag">Next Steps</span>
            <h2 className="section-title">What Happens After You Reach Out?</h2>
            <p className="section-desc">
              We respect your time and believe in immediate technical clarity without sales pitches.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <span className="font-mono text-cyan" style={{ fontSize: '1.25rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                01
              </span>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>Technical Review</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                An engineer reviews your brief within 24–48 business hours to assess feasibility, stack requirements, and timeline.
              </p>
            </div>

            <div className="card">
              <span className="font-mono text-cyan" style={{ fontSize: '1.25rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                02
              </span>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>30-Min Discovery</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                We hop on a Google Meet to discuss entity boundaries, integration requirements, and trade-offs.
              </p>
            </div>

            <div className="card">
              <span className="font-mono text-cyan" style={{ fontSize: '1.25rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                03
              </span>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>Milestone Proposal</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                We provide a clear milestone roadmap with exact deliverables, verified tech stack, and transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
