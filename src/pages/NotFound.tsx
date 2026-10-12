import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Home } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="404 — Route Not Found"
        description="The requested page could not be located in the NEXOREL routing table."
      />

      <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center" style={{ maxWidth: '640px' }}>
          <div 
            style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: 'var(--radius-lg)', 
              background: 'rgba(51, 189, 254, 0.1)', 
              color: 'var(--brand-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto'
            }}
          >
            <Terminal size={40} />
          </div>

          <span className="badge badge-amber mb-3" style={{ fontSize: '0.8rem' }}>
            ERROR: 404 NOT FOUND
          </span>

          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Route Unreachable</h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '32px' }}>
            The requested path does not exist in our application router. You might have followed an outdated link or mistyped the URL.
          </p>

          <div className="terminal-window mb-8 text-left" style={{ maxWidth: '520px', margin: '0 auto 32px auto' }}>
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot dot-red"></div>
                <div className="terminal-dot dot-yellow"></div>
                <div className="terminal-dot dot-green"></div>
              </div>
              <span className="terminal-title">nexorel-router · trace</span>
            </div>
            <div className="terminal-body" style={{ fontSize: '0.8rem' }}>
              <div><span className="terminal-prompt">&gt;</span> Router: Evaluating pathname...</div>
              <div><span style={{ color: '#f87171' }}>✗</span> HTTP Status: 404 (Unmatched Route)</div>
              <div><span className="terminal-comment"># Fallback suggestion: Return to safe application entrypoint.</span></div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/" className="btn btn-primary">
              <Home size={16} />
              <span>Back to Homepage</span>
            </Link>
            <Link to="/services" className="btn btn-secondary">
              <span>Explore Services</span>
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
