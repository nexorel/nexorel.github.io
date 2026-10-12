import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { insightsData } from '../data/insights';

export const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = insightsData.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <>
      <SEOHead 
        title={article.title}
        description={article.summary}
        canonicalPath={`/insights/${article.slug}`}
        ogType="article"
      />

      <article className="section" style={{ paddingTop: '80px', paddingBottom: '96px' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/insights">Insights</Link>
            <span className="breadcrumb-separator">/</span>
            <span style={{ color: 'var(--text-primary)' }}>{article.title}</span>
          </div>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge badge-cyan">{article.category}</span>
              <span className="flex items-center gap-1 text-muted" style={{ fontSize: '0.85rem' }}>
                <Clock size={14} />
                <span>{article.readTime}</span>
              </span>
              <span className="flex items-center gap-1 text-muted" style={{ fontSize: '0.85rem' }}>
                <Calendar size={14} />
                <span>{article.date}</span>
              </span>
            </div>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: 1.25 }}>
              {article.title}
            </h1>

            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#94a3b8', fontStyle: 'italic', borderLeft: '3px solid var(--brand-cyan)', paddingLeft: '16px' }}>
              {article.summary}
            </p>

            <div className="flex items-center gap-3 mt-6 pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <div 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'rgba(51, 189, 254, 0.15)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--brand-cyan)'
                }}
              >
                <User size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>{article.author.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{article.author.role}</div>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="card" style={{ padding: '40px', fontSize: '1.05rem', lineHeight: 1.85, color: '#e2e8f0' }}>
            {article.content.map((paragraph, idx) => {
              if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.') || paragraph.startsWith('•')) {
                return (
                  <p key={idx} style={{ marginBottom: '16px', fontWeight: 500, color: '#f8fafc', paddingLeft: '16px', borderLeft: '2px solid rgba(51, 189, 254, 0.4)' }}>
                    {paragraph}
                  </p>
                );
              }
              return (
                <p key={idx} style={{ marginBottom: '24px' }}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Article Footer & Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            <Link to="/insights" className="btn btn-outline btn-sm">
              <ArrowLeft size={14} />
              <span>Back to All Insights</span>
            </Link>

            <Link to="/contact" className="btn btn-primary btn-sm">
              <span>Discuss a Project With Our Team</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
