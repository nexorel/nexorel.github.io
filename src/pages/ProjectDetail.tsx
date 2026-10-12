import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  GitBranch, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { projectsData } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <SEOHead 
        title={`${project.title} — Case Study`}
        description={project.description}
        canonicalPath={`/projects/${project.slug}`}
      />

      {/* Header */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '72px', background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/projects">Projects</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>{project.title}</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge badge-cyan">{project.category}</span>
              <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#cbd5e1' }}>
                {project.verifiedStatus}
              </span>
            </div>

            <h1 style={{ marginBottom: '20px' }}>{project.title}</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '32px' }}>
              {project.description}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <GitBranch size={16} />
                  <span>Inspect Code on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              )}
              <Link to="/contact" className="btn btn-secondary">
                <span>Discuss Similar Implementation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Content */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
            {/* Left: Overview, Challenge, Architecture */}
            <div>
              <div className="card mb-8">
                <span className="section-tag mb-3">01 · Project Context</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Executive Overview</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#e2e8f0' }}>
                  {project.fullCaseStudy.overview}
                </p>
              </div>

              <div className="card mb-8" style={{ borderColor: 'rgba(239, 68, 68, 0.25)' }}>
                <span className="section-tag mb-3" style={{ color: '#f87171', background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                  02 · The Challenge
                </span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Technical & Architectural Bottleneck</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#e2e8f0' }}>
                  {project.fullCaseStudy.challenge}
                </p>
              </div>

              <div className="card card-gradient-top">
                <span className="section-tag mb-3">03 · The Solution</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Engineered Architecture</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#e2e8f0' }}>
                  {project.fullCaseStudy.architectureSolution}
                </p>
              </div>
            </div>

            {/* Right: Deliverables, Results, Security, Tech */}
            <div>
              {/* Verifiable Results */}
              <div className="card mb-8">
                <div className="flex items-center gap-2 mb-4 text-cyan">
                  <CheckCircle2 size={20} />
                  <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Demonstrated Results</h3>
                </div>
                <ul className="feature-list">
                  {project.fullCaseStudy.results.map((result, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-icon-wrapper"><CheckCircle2 size={16} /></span>
                      <span style={{ fontSize: '0.925rem' }}>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security & Reliability Highlights */}
              <div className="card mb-8">
                <div className="flex items-center gap-2 mb-4 text-emerald">
                  <ShieldCheck size={20} />
                  <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Security & Reliability Controls</h3>
                </div>
                <ul className="feature-list">
                  {project.fullCaseStudy.securityHighlights.map((highlight, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-icon-wrapper" style={{ color: 'var(--brand-emerald)' }}>
                        <ShieldCheck size={16} />
                      </span>
                      <span style={{ fontSize: '0.925rem' }}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="card" style={{ background: 'var(--bg-secondary)' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="badge badge-cyan" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="flex items-center justify-between mt-12 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            <Link to="/projects" className="btn btn-outline btn-sm">
              <ArrowLeft size={14} />
              <span>Back to All Projects</span>
            </Link>

            <Link to="/contact" className="btn btn-primary btn-sm">
              <span>Discuss Your Project Needs</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
