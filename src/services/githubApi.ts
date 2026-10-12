import { GitHubRepo } from '../types';

const CACHE_KEY = 'nexorel_github_repos_cache';
const CACHE_TIMESTAMP_KEY = 'nexorel_github_cache_ts';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes cache to strictly respect GitHub rate limits

// Real verified repositories from the engineering workspace
const VERIFIED_FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: 'Secure-REST-API-Platform',
    description: 'Hardened RESTful API platform architecture featuring JWT authentication, role-based authorization, rate limiting, and PostgreSQL persistence.',
    html_url: 'https://github.com/ghaithsoltani/Secure-REST-API-Platform',
    language: 'TypeScript',
    stargazers_count: 0,
    updated_at: '2026-09-24T18:00:00Z',
    topics: ['security', 'api', 'jwt', 'postgresql', 'docker'],
    statusNote: 'Verified Architecture'
  },
  {
    id: 102,
    name: 'spring-boot-rag-pipeline',
    description: 'Enterprise Retrieval-Augmented Generation (RAG) pipeline connecting relational databases with vector embeddings for hallucination-resistant LLM workflows.',
    html_url: 'https://github.com/ghaithsoltani/spring-boot-rag-pipeline',
    language: 'Java',
    stargazers_count: 0,
    updated_at: '2026-09-26T14:30:00Z',
    topics: ['spring-boot', 'rag', 'llm', 'vector-database', 'ai'],
    statusNote: 'Demonstrated Pipeline'
  },
  {
    id: 103,
    name: 'Linux-Server-Audit-Hardening-Tool',
    description: 'Automated Linux security assessment and hardening script suite based on CIS benchmark security recommendations.',
    html_url: 'https://github.com/ghaithsoltani/Linux-Server-Audit-Hardening-Tool',
    language: 'Shell',
    stargazers_count: 0,
    updated_at: '2026-09-28T11:20:00Z',
    topics: ['devsecops', 'linux', 'hardening', 'security', 'bash'],
    statusNote: 'Security Tooling'
  },
  {
    id: 104,
    name: 'Resume_Screener_with_LLM',
    description: 'Document extraction and structured evaluation pipeline matching resumes against structured job specifications using LLM agents.',
    html_url: 'https://github.com/ghaithsoltani/Resume_Screener_with_LLM',
    language: 'Python',
    stargazers_count: 0,
    updated_at: '2026-09-24T15:36:00Z',
    topics: ['python', 'llm', 'document-parsing', 'automation'],
    statusNote: 'Functional Automation'
  },
  {
    id: 105,
    name: 'k8s-microservices-task-app',
    description: 'Kubernetes microservices architecture lab demonstrating declarative manifests, ingress routing, volume claims, and rolling updates.',
    html_url: 'https://github.com/ghaithsoltani/k8s-microservices-task-app',
    language: 'Kubernetes',
    stargazers_count: 0,
    updated_at: '2026-09-27T19:00:00Z',
    topics: ['kubernetes', 'devops', 'microservices', 'docker'],
    statusNote: 'Infrastructure Lab'
  },
  {
    id: 106,
    name: 'Github_action_CI-CD',
    description: 'Standardized GitHub Actions workflow templates for automated test suites, Docker image builds, and deployment release pipelines.',
    html_url: 'https://github.com/ghaithsoltani/Github_action_CI-CD',
    language: 'YAML',
    stargazers_count: 0,
    updated_at: '2026-09-25T16:40:00Z',
    topics: ['github-actions', 'ci-cd', 'automation', 'devops'],
    statusNote: 'Workflow Templates'
  }
];

export interface FetchReposResult {
  repos: GitHubRepo[];
  source: 'live' | 'cached' | 'fallback';
  lastUpdated: string;
}

export async function fetchPublicRepositories(): Promise<FetchReposResult> {
  // 1. Check local / session cache
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTs = localStorage.getItem(CACHE_TIMESTAMP_KEY);

    if (cachedData && cachedTs) {
      const age = Date.now() - parseInt(cachedTs, 10);
      if (age < CACHE_TTL_MS) {
        return {
          repos: JSON.parse(cachedData),
          source: 'cached',
          lastUpdated: new Date(parseInt(cachedTs, 10)).toLocaleTimeString()
        };
      }
    }
  } catch {
    // Ignore storage read errors in restricted contexts
  }

  // 2. Fetch from GitHub public API
  try {
    const response = await fetch(
      'https://api.github.com/users/ghaithsoltani/repos?sort=updated&per_page=12',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API HTTP ${response.status}`);
    }

    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      const curatedRepos: GitHubRepo[] = data
        .filter((r: { fork?: boolean; name?: string }) => !r.fork && r.name && !r.name.startsWith('.'))
        .slice(0, 8)
        .map((r: { id: number; name: string; description: string | null; html_url: string; language: string | null; stargazers_count: number; updated_at: string; topics?: string[] }) => ({
          id: r.id,
          name: r.name,
          description: r.description || 'Verified engineering codebase and deployment architecture.',
          html_url: r.html_url,
          language: r.language || 'Code',
          stargazers_count: r.stargazers_count || 0,
          updated_at: r.updated_at,
          topics: r.topics || [],
          statusNote: 'Public Repository'
        }));

      // Cache the result safely
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(curatedRepos));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
      } catch {
        // Storage might be full or disabled
      }

      return {
        repos: curatedRepos,
        source: 'live',
        lastUpdated: new Date().toLocaleTimeString()
      };
    }
  } catch {
    // Network or rate limit fallback
  }

  // 3. Fallback to verified local dataset
  return {
    repos: VERIFIED_FALLBACK_REPOS,
    source: 'fallback',
    lastUpdated: 'Snapshot'
  };
}
