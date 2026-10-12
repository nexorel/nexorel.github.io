import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Palette, 
  Check, 
  Terminal 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { servicesData } from '../data/services';

const ICONS = {
  'software-engineering': <Code2 size={28} className="text-cyan" />,
  'automation-integrations': <Cpu size={28} className="text-purple" />,
  'cloud-devops': <Cloud size={28} className="text-emerald" />,
  'security-devsecops': <ShieldCheck size={28} className="text-cyan" />,
  'ui-ux': <Palette size={28} className="text-amber" />
};

export const Services: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Engineering Services & Capabilities"
        description="Comprehensive engineering services from NEXOREL: Full-Stack Web Development, n8n Workflow Automation, Cloud & DevOps, DevSecOps Security, and Digital Product UI/UX."
        canonicalPath="/services"
      />

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '72px', background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Services</span>
          </div>

          <div style={{ maxWidth: '780px' }}>
            <span className="section-tag mb-4">
              <Terminal size={14} />
              <span>Full-Spectrum Engineering</span>
            </span>
            <h1 style={{ marginBottom: '20px' }}>Engineered for Reliability.</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '32px' }}>
              We provide five interconnected capabilities to help small and growing businesses build, automate, and operate digital products without bloated agency retainers.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Discuss a Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/approach" className="btn btn-secondary btn-lg">
                <span>Our Engineering Lifecycle</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-12">
            {servicesData.map((service, idx) => {
              return (
                <div 
                  key={service.id} 
                  id={service.slug}
                  className="card card-interactive"
                  style={{ padding: '40px' }}
                >
                  <div className="grid-2" style={{ gap: '40px', alignItems: 'center' }}>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div 
                          style={{ 
                            width: '52px', 
                            height: '52px', 
                            borderRadius: 'var(--radius-md)', 
                            background: 'rgba(255, 255, 255, 0.05)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center' 
                          }}
                        >
                          {ICONS[service.id as keyof typeof ICONS]}
                        </div>
                        <div>
                          <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                            PILLAR {idx + 1}
                          </span>
                          <h2 style={{ fontSize: '1.75rem', margin: '4px 0 0 0' }}>
                            <Link to={`/services/${service.slug}`} style={{ color: '#fff' }}>
                              {service.title}
                            </Link>
                          </h2>
                        </div>
                      </div>

                      <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '24px' }}>
                        {service.shortDesc}
                      </p>

                      <div className="mb-6">
                        <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
                          Key Concrete Deliverables:
                        </h4>
                        <ul className="feature-list">
                          {service.deliverables.slice(0, 3).map((d, dIdx) => (
                            <li key={dIdx} className="feature-item">
                              <span className="feature-icon-wrapper"><Check size={16} /></span>
                              <span style={{ fontSize: '0.9rem' }}>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-4 flex-wrap">
                        <Link to={`/services/${service.slug}`} className="btn btn-primary btn-sm">
                          <span>Full Service Specification</span>
                          <ArrowRight size={14} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline btn-sm">
                          <span>Inquire About This Service</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right Info Box */}
                    <div 
                      style={{ 
                        background: 'rgba(4, 13, 31, 0.8)', 
                        padding: '28px', 
                        borderRadius: 'var(--radius-md)', 
                        border: '1px solid var(--border-subtle)' 
                      }}
                    >
                      <h4 style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                        Verified Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.technologies.map((t, tIdx) => (
                          <span key={tIdx} className="badge badge-cyan">
                            {t}
                          </span>
                        ))}
                      </div>

                      <h4 style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                        Ideal For:
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {service.targetAudience.map((aud, aIdx) => (
                          <li key={aIdx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: 'var(--brand-cyan)' }}>•</span>
                            <span>{aud}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'rgba(8, 21, 46, 0.4)', paddingBottom: '100px' }}>
        <div className="container text-center" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '16px' }}>Unsure which capability fits your current need?</h2>
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', marginBottom: '32px' }}>
            We often combine multiple capabilities (e.g. Full-Stack + n8n automation + Docker CI/CD). Let’s schedule a technical discovery call to define the right scope.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            <span>Schedule Technical Discovery</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};
