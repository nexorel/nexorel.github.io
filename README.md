# NEXOREL — Engineering Studio

> **AUTOMATE. BUILD. DEPLOY.**  
> *From idea to git push to production.*

NEXOREL is an early-stage engineering studio based in Tunis, Tunisia. We help small and growing businesses build reliable digital products, eliminate manual work with automated n8n pipelines, connect fragmented software tools, and operate cloud/DevOps infrastructure safely.

---

## 🏛️ The Three Connected Pillars

1. **Software Engineering**
   - Full-stack web applications (React, TypeScript, Node.js, Spring Boot, Python)
   - Strongly typed RESTful & GraphQL APIs with OpenAPI contracts
   - Relational database schema design and migrations (PostgreSQL)
   - Modular component architectures and design systems

2. **Automation & AI-Assisted Workflows**
   - Self-hosted and cloud n8n workflow orchestrations
   - Multi-system data synchronization and real-time webhook architectures
   - Supervised LLM pipelines with structured JSON validation and human-in-the-loop review
   - Document extraction, candidate screening, and automated reporting

3. **Reliable Infrastructure & DevOps**
   - Multi-stage Docker containerization and Docker Compose environments
   - Automated CI/CD pipelines via GitHub Actions
   - Linux server hardening (CIS baseline, UFW, Fail2ban, SSH key-only auth)
   - Zero-downtime releases, Let's Encrypt automated SSL, and health check monitoring

---

## 🛠️ Technical Architecture

This website is engineered for speed, zero-downtime reliability, and accessible UX:

- **Framework**: React 19 + TypeScript 5
- **Build Tool**: Vite 6 (tree-shaking, sub-3-second builds)
- **Styling**: Vanilla CSS Design System with custom CSS variables and dark technical aesthetic
- **Routing**: Client-side routing with deep link fallback support for GitHub Pages, Cloudflare Pages, Netlify, and Vercel
- **GitHub Integration**: Live client-side fetch from the official GitHub API with localStorage caching (TTL 30 min) to avoid rate limits
- **SEO & Meta**: Complete Open Graph, Twitter cards, XML sitemap (`/sitemap.xml`), and `robots.txt`
- **Zero Cost**: Engineered to deploy entirely on free tier infrastructure with zero upfront or monthly hosting fees

---

## 📁 Repository Structure

```
├── .github/
│   └── workflows/
│       ├── ci.yml            # Automated lint, typecheck & build gate
│       └── deploy.yml        # Zero-cost GitHub Pages automated deployment
├── public/
│   ├── brand/                # Approved brand assets (WebP optimized)
│   ├── 404.html              # SPA deep link router fallback
│   ├── _headers              # Security headers for Cloudflare / Netlify
│   ├── _redirects            # SPA redirect rule for Netlify
│   ├── robots.txt            # Search engine crawler permissions
│   ├── sitemap.xml           # Search engine index of all 16 pages
│   └── favicon.ico           # Multi-resolution favicons
├── src/
│   ├── components/           # Reusable UI components (Navbar, Footer, Lifecycle, etc.)
│   ├── data/                 # Verified data structures (services, projects, insights)
│   ├── pages/                # 16 complete page views
│   ├── services/             # GitHub API integration & caching
│   ├── styles/               # Modular CSS design system
│   ├── types/                # TypeScript interface declarations
│   ├── App.tsx               # Master route configuration
│   └── main.tsx              # Application entrypoint
├── vercel.json               # SPA rewrites & security headers for Vercel
└── vite.config.ts            # Vite bundler configuration
```

---

## 🚀 Local Development

### Prerequisites
- Node.js v18+ (tested on Node v24.21.0)
- npm v9+

### Quickstart

```bash
# 1. Clone the repository
git clone git@github.com:nexorel/nexorel-website.git
cd nexorel-website

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Run TypeScript checks
npm run typecheck

# 5. Build for production
npm run build

# 6. Preview production build locally
npm run preview
```

---

## 🌐 Zero-Budget Deployment Options

This website is configured out of the box for the four major free hosting providers:

### 1. GitHub Pages (Recommended)
1. Push this repository to GitHub (either `nexorel/nexorel.github.io` or `nexorel/nexorel-website`).
2. Navigate to **Repository Settings** → **Pages**.
3. Under **Build and deployment**, select **Source: GitHub Actions**.
4. The `.github/workflows/deploy.yml` pipeline will automatically compile and deploy your site to `https://<org>.github.io` with free HTTPS and zero cost.

### 2. Cloudflare Pages
1. Connect your GitHub repository to Cloudflare Pages.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Automatic free SSL, global CDN, and unlimited bandwidth.

### 3. Vercel
1. Import the repository into Vercel.
2. Framework preset: **Vite**.
3. Output directory: `dist`.
4. Deploy using the included `vercel.json` for SPA routing and security headers.

---

## 🔒 Credibility & Honesty Statement

NEXOREL adheres strictly to transparent engineering:
- **No Fabricated Statistics**: We do not claim fictitious client revenue numbers or fake customer counts.
- **No Invented Testimonials**: All case studies represent verified technical codebases and working prototypes.
- **Demonstrated Engineering**: All featured repositories link to real GitHub codebases with verifiable commit histories.

---

## 📬 Contact & Studio Information

- **Studio**: NEXOREL
- **Location**: Tunis, Republic of Tunisia
- **Email**: `ghaithsoltani36@email.com`
- **GitHub**: [github.com/nexorel](https://github.com/nexorel) | [github.com/ghaithsoltani](https://github.com/ghaithsoltani)
