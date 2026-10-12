import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const Privacy: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy"
        description="NEXOREL Privacy Policy. Information on how we collect, store, and process client and inquiry data in accordance with privacy principles in Tunis, Tunisia."
        canonicalPath="/privacy"
      />

      <section className="section" style={{ paddingTop: '80px', paddingBottom: '96px' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Privacy Policy</span>
          </div>

          <span className="section-tag mb-4">
            <ShieldCheck size={14} />
            <span>Data Protection & Privacy</span>
          </span>
          <h1 style={{ marginBottom: '16px' }}>Privacy Policy</h1>
          <p className="text-muted mb-8" style={{ fontSize: '0.9rem' }}>
            Effective Date: October 12, 2026 · Jurisdiction: Tunis, Republic of Tunisia
          </p>

          <div className="card" style={{ padding: '40px', fontSize: '1rem', lineHeight: 1.8, color: '#e2e8f0' }}>
            <div style={{ background: 'rgba(51, 189, 254, 0.08)', padding: '16px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(51, 189, 254, 0.2)', marginBottom: '28px' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#f0f6fc' }}>
                <strong>Legal Notice:</strong> This policy outlines the standard privacy commitments of NEXOREL, an early-stage engineering studio based in Tunis, Tunisia. This document does not substitute for formal legal counsel tailored to specific cross-border data transfer agreements.
              </p>
            </div>

            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '24px', marginBottom: '12px' }}>
              1. Information We Collect
            </h3>
            <p>
              We prioritize data minimization. We only collect information that you voluntarily submit through our contact form or direct email correspondence:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Full name and email address</li>
              <li>Company name or organization (optional)</li>
              <li>Project description, technical scope, and budget preferences</li>
            </ul>
            <p>
              We do <strong>not</strong> use invasive third-party cross-site trackers, advertising pixels (e.g. Meta Pixel, Google Remarketing), or behavior monitoring tools on this website.
            </p>

            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '28px', marginBottom: '12px' }}>
              2. How We Use Collected Information
            </h3>
            <p>
              Your information is exclusively used for:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Evaluating and responding to your project brief or technical inquiry</li>
              <li>Drafting milestone agreements and technical statements of work</li>
              <li>Direct engineering communication regarding active project collaborations</li>
            </ul>
            <p>
              We never sell, rent, monetize, or distribute your contact details or project specifications to third-party marketing brokers or advertisers.
            </p>

            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '28px', marginBottom: '12px' }}>
              3. Client Code & Confidentiality
            </h3>
            <p>
              During engineering engagements, all proprietary client repositories, API credentials, architecture documents, and database schemas are handled under strict non-disclosure practices. We advise all clients to use temporary, least-privilege tokens and will guide the rotation of secrets immediately upon project delivery.
            </p>

            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '28px', marginBottom: '12px' }}>
              4. Data Retention & Erasure
            </h3>
            <p>
              You have the right to request the inspection, modification, or complete deletion of any personal inquiry information stored in our systems. To request data deletion, contact us at <a href="mailto:ghaithsoltani36@email.com" className="text-cyan">ghaithsoltani36@email.com</a>.
            </p>

            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '28px', marginBottom: '12px' }}>
              5. Contact Us
            </h3>
            <p>
              For any questions regarding our data practices or privacy policies:
            </p>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: 'var(--radius-sm)', marginTop: '12px' }}>
              <strong>NEXOREL Engineering Studio</strong><br />
              Email: <a href="mailto:ghaithsoltani36@email.com" className="text-cyan">ghaithsoltani36@email.com</a><br />
              Location: Tunis, Tunisia
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
