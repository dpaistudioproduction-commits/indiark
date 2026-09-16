import React, { useState } from 'react';
import { Film, Filter, Plus, SlidersHorizontal, Lock, ArrowUpRight, CheckCircle2, Eye } from 'lucide-react';
import { CinemaArchive } from '../components/work/CinemaArchive';

export const OurWorkPage = ({ projects = [], onSelectProject, onOpenAdmin, setActivePage }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Films', 'Web Series', 'Digital', 'Music', 'Production'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => (p.category || 'Films').toLowerCase() === selectedCategory.toLowerCase());

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-950)', minHeight: '80vh' }}>
      
      {/* Page Header */}
      <section
        className="section section-darker"
        style={{
          paddingTop: 'clamp(4rem, 7vw, 6rem)',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-dark)'
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>
                Represented Catalogue
              </span>
              <h1 className="display-statement" style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
                OUR WORK
              </h1>
              <div style={{ color: 'var(--brand-lime)', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                CINEMA ARCHIVE & SELECTED PROJECTS
              </div>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', maxWidth: '780px', lineHeight: '1.6' }}>
                A curated selection of feature titles and creative intellectual properties represented for OTT pitching, broadcast licensing, and commercial distribution.
              </p>
            </div>

            <button
              onClick={onOpenAdmin}
              className="btn btn-secondary-dark btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <SlidersHorizontal size={15} />
              <span>Studio Management</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Cinema Archive Showcase */}
      <section className="section section-dark">
        <div className="container">
          
          {/* Cinema Archive Component */}
          <CinemaArchive
            projects={filteredProjects}
            onSelectProject={onSelectProject}
            onActionClick={handleNav}
          />

          {/* Institutional Rights Notice */}
          <div
            style={{
              marginTop: '4rem',
              padding: '2rem 2.5rem',
              backgroundColor: 'rgba(7, 13, 20, 0.85)',
              border: '1px solid var(--border-dark)',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', maxWidth: '750px' }}>
              <Lock size={24} color="var(--brand-teal)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.25rem' }}>Institutional Buyer & Platform Inquiries</h4>
                <p style={{ color: 'var(--text-light-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  Complete pitch dossiers, confidential screeners, chain-of-title instruments, and territory availability matrices are provided directly to accredited platform acquisitions executives under standard non-disclosure terms.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleNav('for-platforms')}
              className="btn btn-primary btn-md"
            >
              <span>Submit Platform Acquisition Brief</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
