import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Terminal, 
  Menu, 
  X, 
  ChevronDown, 
  Code2, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Palette, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const serviceLinks = [
    {
      to: '/services/software-engineering',
      title: 'Software Engineering',
      desc: 'Full-stack web apps, APIs & databases',
      icon: <Code2 size={18} className="dropdown-icon" />
    },
    {
      to: '/services/automation-integrations',
      title: 'Automation & AI Workflows',
      desc: 'n8n pipelines & supervised LLM workflows',
      icon: <Cpu size={18} className="dropdown-icon" />
    },
    {
      to: '/services/cloud-devops',
      title: 'Cloud & DevOps',
      desc: 'Docker, CI/CD pipelines & Linux servers',
      icon: <Cloud size={18} className="dropdown-icon" />
    },
    {
      to: '/services/security-devsecops',
      title: 'Security & DevSecOps',
      desc: 'Vulnerability checks & system hardening',
      icon: <ShieldCheck size={18} className="dropdown-icon" />
    },
    {
      to: '/services/ui-ux',
      title: 'UI/UX & Digital Experiences',
      desc: 'Design systems & responsive web interfaces',
      icon: <Palette size={18} className="dropdown-icon" />
    }
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Link */}
        <Link to="/" className="brand-link" aria-label="NEXOREL Home">
          <img 
            src="./brand/nexorel-logo-128.webp" 
            alt="NEXOREL Logo" 
            className="brand-logo-img"
            width="36"
            height="36"
          />
          <div className="flex items-center gap-2">
            <span>NEXOREL</span>
            <span className="badge badge-cyan" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>STUDIO</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main Navigation">
          <div className="nav-item">
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              aria-haspopup="true"
              aria-expanded={servicesDropdownOpen}
            >
              Services <ChevronDown size={14} />
            </Link>
            <div className="nav-dropdown" role="menu">
              {serviceLinks.map((item) => (
                <Link 
                  key={item.to} 
                  to={item.to} 
                  className="dropdown-link"
                  role="menuitem"
                >
                  {item.icon}
                  <div className="dropdown-text">
                    <span className="dropdown-title">{item.title}</span>
                    <span className="dropdown-desc">{item.desc}</span>
                  </div>
                </Link>
              ))}
              <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: '4px', paddingTop: '4px' }}>
                <Link 
                  to="/services" 
                  className="dropdown-link" 
                  style={{ fontSize: '0.8rem', color: 'var(--brand-cyan)' }}
                >
                  <span>View All Capabilities</span>
                  <ArrowRight size={12} style={{ marginLeft: 'auto' }} />
                </Link>
              </div>
            </div>
          </div>

          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname.startsWith('/projects') ? 'active' : ''}`}
          >
            Projects
          </Link>

          <Link 
            to="/approach" 
            className={`nav-link ${location.pathname === '/approach' ? 'active' : ''}`}
          >
            Approach
          </Link>

          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>

          <Link 
            to="/insights" 
            className={`nav-link ${location.pathname.startsWith('/insights') ? 'active' : ''}`}
          >
            Insights
          </Link>

          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions-desktop flex items-center gap-4">
          <a 
            href="https://github.com/nexorel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline btn-sm"
            aria-label="NEXOREL GitHub Organization"
          >
            <Terminal size={14} />
            <span>GitHub</span>
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Discuss a Project
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <Link to="/" className="mobile-nav-link">Home</Link>
          </li>
          <li>
            <div className="mobile-nav-link">
              <span>Services</span>
              <Link to="/services" style={{ fontSize: '0.8rem', color: 'var(--brand-cyan)' }}>Overview</Link>
            </div>
            <ul className="mobile-submenu">
              {serviceLinks.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="mobile-sub-link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/projects" className="mobile-nav-link">Projects & Portfolio</Link>
          </li>
          <li>
            <Link to="/approach" className="mobile-nav-link">Engineering Approach</Link>
          </li>
          <li>
            <Link to="/about" className="mobile-nav-link">About NEXOREL</Link>
          </li>
          <li>
            <Link to="/insights" className="mobile-nav-link">Insights & Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="mobile-nav-link">Contact & Inquiries</Link>
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-4">
          <Link to="/contact" className="btn btn-primary btn-block">
            Discuss a Project
          </Link>
          <a 
            href="https://github.com/nexorel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary btn-block"
          >
            <Terminal size={16} />
            <span>GitHub Org</span>
            <ExternalLink size={14} style={{ marginLeft: 'auto' }} />
          </a>
        </div>
      </div>
    </header>
  );
};
