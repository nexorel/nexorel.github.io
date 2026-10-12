import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GitBranch, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Filter 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { projectsData } from '../data/projects';
import { ProjectData } from '../types';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Software Engineering',
    'Automation & AI',
    'Cloud & DevOps',
    'DevSecOps'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <>
      <SEOHead 
        title="Projects & Engineering Portfolio"
        description="Verified technical projects, case studies, and architecture blueprints engineered by NEXOREL: REST API platforms, RAG pipelines, Linux hardening, and Kubernetes topologies."
        canonicalPath="/projects"
      />

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '72px', background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Projects</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag mb-4">
              <Terminal size={14} />
              <span>Verifiable Implementations</span>
            </span>
            <h1 style={{ marginBottom: '20px' }}>Projects & Case Studies</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '32px' }}>
              Real architectures, working prototypes, and open-source tooling. We distinguish between demonstrated engineering capabilities, active implementations, and research blueprints.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <a 
                href="https://github.com/nexorel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <Terminal size={14} />
                <span>Visit NEXOREL GitHub</span>
                <ExternalLink size={14} />
              </a>
              <a 
                href="https://github.com/ghaithsoltani" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                <GitBranch size={14} />
                <span>Public Repositories</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid with Filter */}
      <section className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="tab-filter-container">
            <span className="text-muted flex items-center gap-1.5" style={{ fontSize: '0.85rem', marginRight: '8px' }}>
              <Filter size={14} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-3">
            {filteredProjects.map((project: ProjectData) => (
              <div key={project.id} className="card card-interactive flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge badge-cyan">{project.category}</span>
                    <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                      {project.verifiedStatus}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
                    <Link to={`/projects/${project.slug}`} style={{ color: '#fff' }}>
                      {project.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="badge" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <Link 
                      to={`/projects/${project.slug}`} 
                      className="text-cyan flex items-center gap-1"
                      style={{ fontSize: '0.9rem', fontWeight: 600 }}
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={14} />
                    </Link>

                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted flex items-center gap-1"
                        style={{ fontSize: '0.85rem' }}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GitBranch size={13} />
                        <span>Source Code</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy Statement Banner */}
      <section className="section" style={{ background: 'rgba(8, 21, 46, 0.5)', paddingBottom: '96px' }}>
        <div className="container text-center" style={{ maxWidth: '780px' }}>
          <div className="card" style={{ background: 'rgba(4, 13, 31, 0.9)' }}>
            <div className="flex items-center justify-center gap-2 mb-3 text-cyan">
              <CheckCircle2 size={20} />
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Accuracy & Credibility Policy</h3>
            </div>
            <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              NEXOREL is an early-stage engineering studio. We never invent fictitious enterprise client logos, fabricated testimonial quotes, or false revenue metrics. All projects displayed represent verified engineering codebases and working technical demonstrations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
