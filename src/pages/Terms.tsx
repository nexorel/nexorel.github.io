import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const Terms: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service"
        description="NEXOREL Terms of Service. Clear terms governing engineering consultations, milestone deliverables, intellectual property, and service agreements."
        canonicalPath="/terms"
      />

      <section className="section" style={{ paddingTop: '80px', paddingBottom: '96px' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Terms of Service</span>
          </div>

          <span className="section-tag mb-4">
            <FileText size={14} />
            <span>Service Terms & Engagement</span>
          </span>
          <h1 style={{ marginBottom: '16px' }}>Terms of Service</h1>
          <p className="text-muted mb-8" style={{ fontSize: '0.9rem' }}>
            Effective Date: October 12, 2026 · Location: Tunis, Republic of Tunisia
          </p>

          <div className="card" style={{ padding: '40px', fontSize: '1rem', lineHeight: 1.8, color: '#e2e8f0' }}>
            <div style={{ background: 'rgba(51, 189, 254, 0.08)', padding: '16px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(51, 189, 254, 0.2)', marginBottom: '28px' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#f0f6fc' }}>
                <strong>Transparent Engagement Policy:</strong> These terms govern general inquiries and website usage. Specific engineering services are executed under dedicated Statement of Work (SOW) milestone agreements detailing exact deliverables, acceptance criteria, and timelines.
              </p>
            </div>

            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '24px', marginBottom: '12px' }}>
              1. Engineering Studio Scope
            </h3>
            <p>
              NEXOREL is an independent early-stage engineering studio operating from Tunis, Tunisia. We provide custom software engineering, automation pipeline development, cloud infrastructure setup, and DevSecOps tooling for business clients.
            </p>

            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '28px', marginBottom: '12px' }}>
              2. Intellectual Property & Codebase Ownership
            </h3>
            <p>
              Upon receipt of agreed milestone payments under a written engagement agreement:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>The client owns 100% of all custom-written source code, configuration files, and documentation produced for their project.</li>
              <li>Open-source third-party dependencies (such as React, Docker, Linux, or n8n) remain governed by their respective open-source licenses (MIT, Apache 2.0, Sustainable Use License).</li>
              <li>NEXOREL retains ownership of general-purpose utility libraries or internal frameworks developed prior to or independently of the client engagement.</li>
            </ul>

            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '28px', marginBottom: '12px' }}>
              3. Security & Reliability Realism
            </h3>
            <p>
              While NEXOREL implements defense-in-depth engineering practices, automated testing, container isolation, and server hardening, no software system is inherently impervious to all vulnerabilities or outages. We provide reasonable commercial diligence and adhere to industry standards, but cannot offer guarantees against third-party upstream cloud outages or zero-day exploits.
            </p>

            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '28px', marginBottom: '12px' }}>
              4. Governing Law
            </h3>
            <p>
              These general website terms are governed by and construed in accordance with the laws of the Republic of Tunisia. Engagement agreements with international clients may designate agreed arbitration frameworks upon mutual signature.
            </p>

            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '28px', marginBottom: '12px' }}>
              5. Inquiries & Legal Notices
            </h3>
            <p>
              For legal inquiries or agreement requests:
            </p>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: 'var(--radius-sm)', marginTop: '12px' }}>
              <strong>NEXOREL Studio</strong><br />
              Email: <a href="mailto:ghaithsoltani36@email.com" className="text-cyan">ghaithsoltani36@email.com</a><br />
              Location: Tunis, Tunisia
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
