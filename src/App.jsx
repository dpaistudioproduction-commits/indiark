import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Loader } from './components/layout/Loader';
import { HomePage } from './pages/HomePage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { WhatWeDoPage } from './pages/WhatWeDoPage';
import { WhyIndiarkPage } from './pages/WhyIndiarkPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { ForPlatformsPage } from './pages/ForPlatformsPage';
import { SubmitContentPage } from './pages/SubmitContentPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectDetailModal } from './components/work/ProjectDetailModal';
import { AdminCMSModal } from './components/admin/AdminCMSModal';
import { LegalModal } from './components/legal/LegalModal';
import { dataService } from './services/dataService';

export const App = () => {
  const getInitialPage = () => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const page = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'who-we-are', 'what-we-do', 'why-indiark', 'our-work', 'for-platforms', 'submit-content', 'contact'].includes(page)) {
        return page;
      }
    }
    return 'home';
  };

  const [isLoading, setIsLoading] = useState(true);
  const handleLoaderFinish = useCallback(() => setIsLoading(false), []);
  const [activePage, setActivePage] = useState(getInitialPage);
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [partners, setPartners] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [legalType, setLegalType] = useState(null);

  const loadData = () => {
    setProjects(dataService.getProjects());
    setTeam(dataService.getTeam());
    setPartners(dataService.getPartners());
  };

  useEffect(() => {
    loadData();
    const handleHashChange = () => {
      const page = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'who-we-are', 'what-we-do', 'why-indiark', 'our-work', 'for-platforms', 'submit-content', 'contact'].includes(page)) {
        setActivePage(page);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleContactForTitle = (projectTitle) => {
    setActivePage('for-platforms');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Short Branded Loader */}
      {isLoading && <Loader onFinish={handleLoaderFinish} />}
      
      {/* Global Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Page Body */}
      <main style={{ flexGrow: 1 }} className="page-transition-wrapper">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            projects={projects}
            partners={partners}
            onSelectProject={setSelectedProject}
          />
        )}

        {activePage === 'who-we-are' && (
          <WhoWeArePage
            setActivePage={setActivePage}
            team={team}
          />
        )}

        {activePage === 'what-we-do' && (
          <WhatWeDoPage
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'why-indiark' && (
          <WhyIndiarkPage
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'our-work' && (
          <OurWorkPage
            projects={projects}
            onSelectProject={setSelectedProject}
            onOpenAdmin={() => setIsAdminOpen(true)}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'for-platforms' && (
          <ForPlatformsPage />
        )}

        {activePage === 'submit-content' && (
          <SubmitContentPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenLegal={(type) => setLegalType(type)}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactForTitle={handleContactForTitle}
      />

      {/* Admin CMS Studio Modal */}
      <AdminCMSModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onDataChange={loadData}
      />

      {/* Legal Information Modal */}
      <LegalModal
        legalType={legalType}
        onClose={() => setLegalType(null)}
      />

    </div>
  );
};

export default App;
