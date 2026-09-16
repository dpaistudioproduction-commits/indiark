import React, { useState } from 'react';
import { Film, Eye, Search, Filter, PlusCircle, ArrowUpRight, Sparkles } from 'lucide-react';

export const OurWorkPage = ({ projects, onSelectProject, onOpenAdmin, setActivePage }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Feature Film', 'Films', 'In Representation'];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = 
      selectedCategory === 'All' || 
      proj.category === selectedCategory || 
      proj.projectType?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'In Representation' && proj.status === 'In Representation');
      
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.synopsis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (proj.language && proj.language.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (proj.genre && proj.genre.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-950)' }}>
      
      {/* Page Header */}
      <section 
        className="section section-dark"
        style={{
          paddingTop: 'clamp(3rem, 6vw, 5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 4.5rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ maxWidth: '820px' }}>
              <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>
                Content Representation Portfolio
              </span>
              <h1 className="display-statement" style={{ marginBottom: '1.25rem' }}>
                PROJECTS IN ACTIVE REPRESENTATION
              </h1>
              <p className="text-editorial-body">
                Curated cinema and media projects represented by Indiark Entertainments for OTT platform pitching, theatrical licensing, and global rights monetisation.
              </p>
            </div>

            <button
              onClick={onOpenAdmin}
              className="btn btn-secondary-dark btn-sm"
              style={{ fontSize: '0.78rem' }}
            >
              <PlusCircle size={15} color="var(--brand-lime)" />
              <span>MANAGE CATALOGUE (CMS)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section style={{ backgroundColor: '#0B131F', padding: '1.25rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            
            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: selectedCategory === cat ? 'var(--brand-teal)' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-light-secondary)',
                    border: '1px solid transparent',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8rem',
                    fontWeight: selectedCategory === cat ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '240px' }}>
              <Search size={15} color="var(--text-light-subtle)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 1rem 0.5rem 2.25rem',
                  backgroundColor: 'rgba(7, 13, 20, 0.75)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#FFFFFF',
                  fontSize: '0.84rem',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section section-dark">
        <div className="container">
          
          {filteredProjects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: 'rgba(11, 19, 31, 0.5)', borderRadius: 'var(--radius-md)' }}>
              <Film size={40} color="var(--brand-teal)" style={{ marginBottom: '1rem', opacity: 0.6 }} />
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>No projects match your filter</h3>
              <p style={{ color: 'var(--text-light-muted)', fontSize: '0.9rem' }}>Try clearing your search query or selecting "All".</p>
            </div>
          ) : (
            <div className="project-catalogue-grid">
              {filteredProjects.map((proj) => (
                <div key={proj.id} className="project-card">
                  
                  {/* Poster Area */}
                  <div className="project-poster-area">
                    {proj.posterUrl ? (
                      <img
                        src={proj.posterUrl}
                        alt={proj.title}
                        className="project-poster-img"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/secret of kalinga.jpg';
                        }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0A121D', color: 'var(--text-light-muted)', padding: '2rem', textAlign: 'center' }}>
                        <Film size={36} color="var(--brand-teal)" style={{ marginBottom: '0.75rem' }} />
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: '#FFFFFF' }}>{proj.title}</div>
                        <div style={{ fontSize: '0.76rem', color: 'var(--brand-lime)', marginTop: '0.25rem' }}>OFFICIAL DOSSIER IN REPRESENTATION</div>
                      </div>
                    )}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'rgba(7, 13, 20, 0.85)',
                        backdropFilter: 'blur(4px)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--brand-lime)',
                        border: '1px solid rgba(148, 200, 32, 0.3)',
                      }}
                    >
                      {proj.status || 'In Representation'}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-teal-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                      {proj.projectType} • {proj.language}
                    </div>
                    
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                      {proj.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-light-secondary)', lineHeight: '1.55', marginBottom: '1.25rem', flexGrow: 1 }}>
                      {proj.synopsis}
                    </p>

                    <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>
                        <strong>Role:</strong> {proj.indiarkRole}
                      </div>
                      <button
                        onClick={() => onSelectProject && onSelectProject(proj)}
                        className="btn btn-outline-teal btn-sm"
                        style={{ padding: '0.4rem 0.75rem', fontSize: '0.74rem' }}
                      >
                        <span>VIEW DOSSIER</span>
                        <Eye size={12} />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Creator Submission Banner */}
      <section style={{ backgroundColor: '#0B131F', padding: '3.5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
            HAVE A PROJECT FOR REPRESENTATION?
          </h2>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', maxWidth: '680px', margin: '0 auto 2rem auto' }}>
            Submit your completed film, original series, or catalogue for evaluation by our media rights team.
          </p>
          <button
            onClick={() => {
              setActivePage('submit-content');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn btn-lime btn-lg"
          >
            <span>PITCH YOUR CONTENT</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
};
