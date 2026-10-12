import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { SoftwareEngineering } from './pages/SoftwareEngineering';
import { AutomationIntegrations } from './pages/AutomationIntegrations';
import { CloudDevOps } from './pages/CloudDevOps';
import { SecurityDevSecOps } from './pages/SecurityDevSecOps';
import { UiUx } from './pages/UiUx';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Approach } from './pages/Approach';
import { Insights } from './pages/Insights';
import { InsightDetail } from './pages/InsightDetail';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

// Automatically scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/software-engineering" element={<SoftwareEngineering />} />
          <Route path="/services/automation-integrations" element={<AutomationIntegrations />} />
          <Route path="/services/cloud-devops" element={<CloudDevOps />} />
          <Route path="/services/security-devsecops" element={<SecurityDevSecOps />} />
          <Route path="/services/ui-ux" element={<UiUx />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
