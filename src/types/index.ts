export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  heroTagline: string;
  pillar: 'software' | 'automation' | 'infrastructure';
  problem: string[];
  targetAudience: string[];
  solution: string;
  deliverables: string[];
  technologies: string[];
  process: { step: string; title: string; desc: string }[];
  securityConsiderations: string[];
  businessBenefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  category: 'Software Engineering' | 'Automation & AI' | 'Cloud & DevOps' | 'DevSecOps';
  description: string;
  fullCaseStudy: {
    overview: string;
    challenge: string;
    architectureSolution: string;
    results: string[];
    securityHighlights: string[];
  };
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  verifiedStatus: 'Demonstrated Engineering' | 'Active Implementation' | 'Open Source Reference';
  featured: boolean;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics?: string[];
  statusNote?: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  serviceInterest: string;
  projectDescription: string;
  budgetRange?: string;
  preferredContact: 'email' | 'phone' | 'video_call';
  honeypot?: string; // anti-spam
}
