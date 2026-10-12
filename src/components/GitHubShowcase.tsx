import React, { useEffect, useState } from 'react';
import { 
  GitBranch, 
  ExternalLink, 
  Star, 
  RefreshCw, 
  CheckCircle2, 
  Terminal, 
  AlertCircle 
} from 'lucide-react';
import { GitHubRepo } from '../types';
import { fetchPublicRepositories, FetchReposResult } from '../services/githubApi';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Java: '#b07219',
  Python: '#3572A5',
  Shell: '#89e051',
  HTML: '#e34c26',
  CSS: '#563d7c',
  YAML: '#cb171e',
  Kubernetes: '#326ce5'
};

export const GitHubShowcase: React.FC = () => {
  const [data, setData] = useState<FetchReposResult | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const result = await fetchPublicRepositories();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <section className="section" id="github-repositories">
      <div className="container">
        <div className="section-header">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="section-tag">
              <Terminal size={14} />
              <span>Public Repositories & Open Architecture</span>
            </span>
          </div>
          <h2 className="section-title">Verified GitHub Codebases</h2>
          <p className="section-desc">
            We believe in verifiable engineering. Inspect real source code, container configurations, and CI/CD pipelines directly on GitHub.
          </p>

          {/* Live API Status Pill */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {loading ? (
              <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)' }}>
                <RefreshCw size={12} className="animate-spin" /> Querying GitHub API...
              </span>
            ) : data?.source === 'live' ? (
              <span className="badge badge-emerald">
                <CheckCircle2 size={12} /> GitHub API: Live Sync ({data.lastUpdated})
              </span>
            ) : data?.source === 'cached' ? (
              <span className="badge badge-cyan">
                <CheckCircle2 size={12} /> GitHub API: Cached Response ({data.lastUpdated})
              </span>
            ) : (
              <span className="badge badge-amber">
                <AlertCircle size={12} /> GitHub API: Offline Snapshot
              </span>
            )}
          </div>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card" style={{ height: '220px', opacity: 0.6 }}>
                  <div style={{ height: '24px', width: '60%', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', marginBottom: '16px' }}></div>
                  <div style={{ height: '16px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <div style={{ height: '16px', width: '80%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                </div>
              ))
            : data?.repos.map((repo: GitHubRepo) => {
                const langColor = repo.language ? LANGUAGE_COLORS[repo.language] || '#94a3b8' : '#94a3b8';
                return (
                  <div key={repo.id} className="card card-interactive card-gradient-top flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="flex items-center gap-2" style={{ fontWeight: 600, fontSize: '1rem', color: '#fff' }}>
                          <GitBranch size={16} className="text-cyan" />
                          <span style={{ wordBreak: 'break-all' }}>{repo.name}</span>
                        </span>
                        {repo.statusNote && (
                          <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>
                            {repo.statusNote}
                          </span>
                        )}
                      </div>

                      <p style={{ fontSize: '0.875rem', marginBottom: '20px', lineHeight: 1.6, minHeight: '60px' }}>
                        {repo.description}
                      </p>
                    </div>

                    <div>
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {repo.topics.slice(0, 3).map((topic, tIdx) => (
                            <span 
                              key={tIdx} 
                              style={{ 
                                fontSize: '0.7rem', 
                                padding: '2px 8px', 
                                background: 'rgba(51, 189, 254, 0.08)', 
                                color: 'var(--brand-cyan)',
                                borderRadius: '4px' 
                              }}
                            >
                              #{topic}
                            </span>
                          ))}
                        </div>
                      )}

                      <div 
                        className="flex items-center justify-between pt-3" 
                        style={{ borderTop: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--text-muted)' }}
                      >
                        <div className="flex items-center gap-3">
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              <span 
                                style={{ 
                                  width: '9px', 
                                  height: '9px', 
                                  borderRadius: '50%', 
                                  backgroundColor: langColor,
                                  display: 'inline-block' 
                                }} 
                              />
                              <span style={{ color: 'var(--text-secondary)' }}>{repo.language}</span>
                            </span>
                          )}
                          {repo.stargazers_count > 0 && (
                            <span className="flex items-center gap-1">
                              <Star size={12} /> {repo.stargazers_count}
                            </span>
                          )}
                        </div>

                        <a 
                          href={repo.html_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-cyan"
                          style={{ fontWeight: 500 }}
                          aria-label={`View ${repo.name} on GitHub`}
                        >
                          <span>Inspect Code</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>

        {/* GitHub Organization CTA */}
        <div 
          className="mt-12 text-center card"
          style={{ 
            background: 'linear-gradient(180deg, rgba(8, 21, 46, 0.7) 0%, rgba(4, 13, 31, 0.9) 100%)',
            maxWidth: '820px',
            margin: '48px auto 0 auto'
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Terminal size={24} className="text-cyan" />
            <h3 style={{ margin: 0 }}>NEXOREL on GitHub</h3>
          </div>
          <p style={{ maxWidth: '560px', margin: '0 auto 24px auto', fontSize: '0.95rem' }}>
            Follow our open organization on GitHub for public templates, architecture RFCs, and open-source infrastructure tooling.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a 
              href="https://github.com/nexorel" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm"
            >
              <span>Visit @nexorel Organization</span>
              <ExternalLink size={14} />
            </a>
            <a 
              href="https://github.com/ghaithsoltani" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-sm"
            >
              <span>Browse All Repositories (@ghaithsoltani)</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
