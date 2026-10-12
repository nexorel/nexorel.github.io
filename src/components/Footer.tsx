import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, MapPin, GitBranch, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Column 1: Brand & Purpose */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="./brand/nexorel-logo-128.webp" 
                alt="NEXOREL" 
                width="32" 
                height="32"
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
                NEXOREL
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '16px', maxWidth: '340px' }}>
              Early-stage engineering studio based in Tunis, Tunisia. We build, automate, and secure digital products from idea to git push to production.
            </p>
            <div className="status-pill mb-4">
              <span className="status-indicator"></span>
              <span style={{ fontSize: '0.8rem' }}>Studio Operational · Tunis (UTC+1)</span>
            </div>
            <div className="flex items-center gap-2 text-muted" style={{ fontSize: '0.8rem' }}>
              <MapPin size={14} className="text-cyan" />
              <span>Tunis, Tunisia · Remote & Global Delivery</span>
            </div>
          </div>

          {/* Column 2: Engineering Pillars */}
          <div>
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services/software-engineering" className="footer-link">Software Engineering</Link>
              </li>
              <li>
                <Link to="/services/automation-integrations" className="footer-link">Automation & n8n Workflows</Link>
              </li>
              <li>
                <Link to="/services/cloud-devops" className="footer-link">Cloud & DevOps Infrastructure</Link>
              </li>
              <li>
                <Link to="/services/security-devsecops" className="footer-link">Security & DevSecOps</Link>
              </li>
              <li>
                <Link to="/services/ui-ux" className="footer-link">UI/UX & Digital Products</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" style={{ color: 'var(--brand-cyan)' }}>All Services →</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Method & Projects */}
          <div>
            <h4 className="footer-col-title">Studio & Work</h4>
            <ul className="footer-links">
              <li>
                <Link to="/projects" className="footer-link">Projects & Portfolio</Link>
              </li>
              <li>
                <Link to="/approach" className="footer-link">Engineering Lifecycle</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About NEXOREL</Link>
              </li>
              <li>
                <Link to="/insights" className="footer-link">Engineering Insights</Link>
              </li>
              <li>
                <a 
                  href="https://github.com/nexorel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link flex items-center gap-1"
                >
                  <Terminal size={13} />
                  <span>GitHub Organization</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/ghaithsoltani" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link flex items-center gap-1"
                >
                  <GitBranch size={13} />
                  <span>Public Repositories</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Engagement & Legal */}
          <div>
            <h4 className="footer-col-title">Get In Touch</h4>
            <ul className="footer-links">
              <li>
                <Link to="/contact" className="footer-link">Discuss a Project</Link>
              </li>
              <li>
                <a href="mailto:ghaithsoltani36@email.com" className="footer-link">Email Direct</a>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">Terms of Service</Link>
              </li>
            </ul>
            <div className="mt-6">
              <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                AUTOMATE. BUILD. DEPLOY.
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} NEXOREL. Engineering Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-muted">
            <span>Verified Technical Capabilities</span>
            <span>·</span>
            <span>Zero Fabricated Statistics</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
