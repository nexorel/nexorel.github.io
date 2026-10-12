import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { insightsData } from '../data/insights';

export const Insights: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Engineering Insights & Articles"
        description="Technical essays and architecture blueprints from the NEXOREL engineering team: Continuous delivery, self-hosted n8n automation, and practical DevSecOps."
        canonicalPath="/insights"
      />

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '72px', background: 'rgba(8, 21, 46, 0.4)' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Insights</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag mb-4">
              <BookOpen size={14} />
              <span>Technical Publications</span>
            </span>
            <h1 style={{ marginBottom: '20px' }}>Engineering Insights</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '32px' }}>
              Deep technical breakdowns, architectural blueprints, and lessons learned building, automating, and deploying digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {insightsData.map((article) => (
              <article key={article.slug} className="card card-interactive flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge badge-cyan">{article.category}</span>
                    <span className="flex items-center gap-1 text-muted" style={{ fontSize: '0.8rem' }}>
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', lineHeight: 1.4 }}>
                    <Link to={`/insights/${article.slug}`} style={{ color: '#fff' }}>
                      {article.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    {article.summary}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <span className="flex items-center gap-1.5 text-muted" style={{ fontSize: '0.8rem' }}>
                      <Calendar size={13} />
                      <span>{article.date}</span>
                    </span>

                    <Link to={`/insights/${article.slug}`} className="text-cyan flex items-center gap-1" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      <span>Read Article</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
