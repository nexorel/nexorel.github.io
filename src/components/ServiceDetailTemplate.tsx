import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  TrendingUp, 
  HelpCircle, 
  ChevronDown, 
  Check 
} from 'lucide-react';
import { ServiceData } from '../types';
import { SEOHead } from './SEOHead';

interface Props {
  service: ServiceData;
}

export const ServiceDetailTemplate: React.FC<Props> = ({ service }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <SEOHead 
        title={service.title}
        description={service.shortDesc}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '72px', background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>{service.title}</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag mb-4">Engineering Service</span>
            <h1 style={{ marginBottom: '20px' }}>{service.title}</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '32px' }}>
              {service.heroTagline}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Discuss a {service.title} Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">
                <span>View Related Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Problem vs Solution */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'stretch' }}>
            {/* The Problem */}
            <div className="card" style={{ borderColor: 'rgba(239, 68, 68, 0.25)', background: 'rgba(15, 23, 42, 0.7)' }}>
              <div className="flex items-center gap-2 mb-4" style={{ color: '#f87171' }}>
                <AlertTriangle size={20} />
                <h3 style={{ fontSize: '1.3rem', color: '#fca5a5' }}>The Problem Being Solved</h3>
              </div>
              <p style={{ fontSize: '0.95rem', marginBottom: '20px', color: '#94a3b8' }}>
                Common operational and technical pitfalls businesses encounter in this domain:
              </p>
              <ul className="feature-list">
                {service.problem.map((prob, idx) => (
                  <li key={idx} className="feature-item" style={{ alignItems: 'flex-start' }}>
                    <span style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }}>✕</span>
                    <span style={{ color: '#e2e8f0', fontSize: '0.925rem' }}>{prob}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <span className="text-muted" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Who this service is engineered for:
                </span>
                <ul className="mt-3" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {service.targetAudience.map((target, idx) => (
                    <li key={idx} style={{ fontSize: '0.875rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: 'var(--brand-cyan)' }}>→</span>
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Solution */}
            <div className="card card-gradient-top" style={{ borderColor: 'rgba(51, 189, 254, 0.3)' }}>
              <div className="flex items-center gap-2 mb-4 text-cyan">
                <CheckCircle2 size={20} />
                <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>The Proposed Engineering Solution</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px', color: '#cbd5e1' }}>
                {service.solution}
              </p>

              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Concrete Deliverables:
              </h4>
              <ul className="feature-list mb-6">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-icon-wrapper"><Check size={16} /></span>
                    <span style={{ fontSize: '0.925rem' }}>{deliv}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <span className="text-muted" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Verified Technologies:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="badge badge-cyan">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Implementation Process */}
      <section className="section" style={{ background: 'rgba(8, 21, 46, 0.5)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Methodology</span>
            <h2 className="section-title">The Engineering & Delivery Process</h2>
            <p className="section-desc">
              How we execute this service from initial specification to production deployment.
            </p>
          </div>

          <div className="grid-4">
            {service.process.map((step, idx) => (
              <div key={idx} className="card card-interactive">
                <span className="font-mono text-cyan" style={{ fontSize: '1.25rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                  {step.step}
                </span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Security & Business Benefits */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px' }}>
            {/* Security & Reliability Considerations */}
            <div className="card">
              <div className="flex items-center gap-2 mb-4 text-emerald">
                <ShieldAlert size={20} />
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Security & Reliability Considerations</h3>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
                We engineer with safety by default. No false promises of 100% invulnerability—just defensive controls:
              </p>
              <ul className="feature-list">
                {service.securityConsiderations.map((item, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-icon-wrapper" style={{ color: 'var(--brand-emerald)' }}>
                      <Check size={16} />
                    </span>
                    <span style={{ fontSize: '0.9rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Business Benefits */}
            <div className="card">
              <div className="flex items-center gap-2 mb-4 text-cyan">
                <TrendingUp size={20} />
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Measurable Business Outcomes</h3>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
                Realistic outcomes without inflated or fabricated numerical promises:
              </p>
              <ul className="feature-list">
                {service.businessBenefits.map((item, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-icon-wrapper">
                      <Check size={16} />
                    </span>
                    <span style={{ fontSize: '0.9rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Frequently Asked Questions */}
      <section className="section" style={{ background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <span className="section-tag">
              <HelpCircle size={14} />
              <span>Questions & Clarifications</span>
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Direct technical answers to common questions regarding this capability.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {service.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="card"
                style={{ 
                  padding: '20px 24px', 
                  cursor: 'pointer',
                  borderColor: openFaq === idx ? 'var(--border-cyan)' : 'var(--border-subtle)' 
                }}
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between">
                  <h4 style={{ fontSize: '1.05rem', margin: 0, color: openFaq === idx ? 'var(--brand-cyan)' : '#fff' }}>
                    {faq.question}
                  </h4>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      transform: openFaq === idx ? 'rotate(180deg)' : 'none', 
                      transition: 'transform 0.2s',
                      color: 'var(--text-muted)'
                    }} 
                  />
                </div>
                {openFaq === idx && (
                  <p style={{ marginTop: '16px', fontSize: '0.925rem', lineHeight: 1.7, color: '#cbd5e1' }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="card card-gradient-top text-center mt-12" style={{ padding: '48px 32px' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Ready to engineer your {service.title} solution?</h3>
            <p style={{ maxWidth: '540px', margin: '0 auto 28px auto', fontSize: '0.95rem' }}>
              Send us your technical specification or schedule a discovery call with our engineering team in Tunis.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start Project Inquiry</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                <span>Explore Other Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
