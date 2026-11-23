import React, { useState } from 'react';
import { Film, Eye, ArrowUpRight, Lock, Sparkles, Filter, ChevronRight, Play } from 'lucide-react';

export const CinemaArchive = ({ projects = [], onSelectProject, onActionClick }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Featured Project: The Great Indian Kitchen or fallback to first
  const featuredProject = projects.find(p => p.id === 'the-great-indian-kitchen') || projects[0];
  const secondaryProject = projects.find(p => p.id === 'bhishmar') || projects[1] || projects[0];
  const otherProjects = projects.filter(p => p.id !== featuredProject?.id && p.id !== secondaryProject?.id);

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Featured Showcase: Large Featured Project + Secondary Project */}
      <div className="cinema-archive-showcase">
        
        {/* Large Featured Project */}
        {featuredProject && (
          <div
            className="cinema-dossier-hero"
            style={{
              backgroundImage: featuredProject.posterUrl 
                ? `linear-gradient(180deg, rgba(7, 13, 20, 0.2) 0%, rgba(7, 13, 20, 0.75) 50%, rgba(7, 13, 20, 0.98) 100%), url("${featuredProject.posterUrl}")`
                : 'linear-gradient(135deg, #070D14 0%, #09212C 100%)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top'
            }}
          >
            {/* Top Badges */}
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.5rem', zIndex: 2 }}>
              <span className="badge badge-lime">Featured Dossier</span>
              <span className="badge badge-dark">{featuredProject.category || 'Films'}</span>
            </div>

            {/* Bottom Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--brand-teal-light)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                {featuredProject.projectType || 'Feature Film'} • {featuredProject.language || 'Malayalam'}
              </div>

              <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                {featuredProject.title}
              </h3>

              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '640px', marginBottom: '1.5rem' }}>
                {featuredProject.synopsis}
              </p>

              {/* Verified Metadata Row */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(7, 13, 20, 0.85)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-dark)',
                  marginBottom: '1.5rem',
                  width: 'fit-content'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-light-subtle)', textTransform: 'uppercase' }}>Genre</div>
                  <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>{featuredProject.genre || 'Drama'}</div>
                </div>

                <div style={{ borderLeft: '1px solid var(--border-dark)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-light-subtle)', textTransform: 'uppercase' }}>Timeline</div>
                  <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>{featuredProject.year || '2021'}</div>
                </div>

                <div style={{ borderLeft: '1px solid var(--border-dark)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--brand-teal-light)', textTransform: 'uppercase' }}>Indiark Role</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--brand-lime)', fontWeight: 600 }}>{featuredProject.indiarkRole || 'Representation & Pitching'}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onSelectProject(featuredProject)}
                  className="btn btn-primary btn-md"
                >
                  <Eye size={16} />
                  <span>Inspect Title Dossier</span>
                </button>

                <button
                  onClick={() => onActionClick && onActionClick('for-platforms')}
                  className="btn btn-secondary-dark btn-md"
                >
                  <span>Request Rights Screener</span>
                  <Lock size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Featured Project */}
        {secondaryProject && (
          <div className="cinema-dossier-sub">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span className="badge badge-teal">Represented Title</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--brand-teal-light)', fontWeight: 700 }}>
                  {secondaryProject.status || 'In Representation'}
                </span>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '160px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(7, 25, 34, 0.9)',
                  border: '1px solid rgba(0, 157, 165, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {secondaryProject.posterUrl ? (
                  <img 
                    src={secondaryProject.posterUrl} 
                    alt={secondaryProject.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <Film size={36} color="var(--brand-teal)" style={{ margin: '0 auto 0.5rem auto' }} />
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>Official Poster Under Institutional Review</div>
                  </div>
                )}
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                {secondaryProject.projectType || 'Feature Film'}
              </div>

              <h4 style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                {secondaryProject.title}
              </h4>

              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {secondaryProject.synopsis}
              </p>

              {/* Verified Metadata */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '0.4rem 0', borderBottom: '1px solid var(--border-dark)' }}>
                  <span style={{ color: 'var(--text-light-muted)' }}>Genre</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{secondaryProject.genre || 'Drama / Action'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '0.4rem 0', borderBottom: '1px solid var(--border-dark)' }}>
                  <span style={{ color: 'var(--text-light-muted)' }}>Timeline</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{secondaryProject.year || '2026'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '0.4rem 0' }}>
                  <span style={{ color: 'var(--text-light-muted)' }}>Indiark Role</span>
                  <span style={{ color: 'var(--brand-teal-light)', fontWeight: 600 }}>{secondaryProject.indiarkRole || 'Platform Pitching'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectProject(bheeshmarProject)}
              className="btn btn-secondary-dark btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Eye size={14} />
              <span>Inspect Project Details</span>
            </button>
          </div>
        )}

      </div>

      {/* Additional represented projects if any created via CMS */}
      {otherProjects.length > 0 && (
        <div style={{ marginTop: '2.5rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>
            Additional Represented Titles
          </div>
          <div className="grid-3">
            {otherProjects.map(proj => (
              <div
                key={proj.id}
                className="card-dark"
                style={{ cursor: 'pointer' }}
                onClick={() => onSelectProject(proj)}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--brand-lime)', fontWeight: 700, marginBottom: '0.3rem' }}>{proj.category}</div>
                <h4 style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>{proj.title}</h4>
                <p style={{ color: 'var(--text-light-muted)', fontSize: '0.82rem', marginBottom: '1rem' }}>{proj.synopsis}</p>
                <div style={{ fontSize: '0.78rem', color: 'var(--brand-teal-light)', fontWeight: 600 }}>Inspect &rarr;</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Procurement Banner */}
      <div
        style={{
          marginTop: '3rem',
          padding: '1.5rem 2rem',
          backgroundColor: 'rgba(7, 13, 20, 0.85)',
          border: '1px solid var(--border-dark)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <Lock size={20} color="var(--brand-teal)" />
          <div style={{ fontSize: '0.86rem', color: 'var(--text-light-secondary)' }}>
            Confidential screener links and chain-of-title dossiers are issued directly to verified platform acquisition executives.
          </div>
        </div>

        <button
          onClick={() => onActionClick && onActionClick('for-platforms')}
          className="btn btn-outline-teal btn-sm"
        >
          <span>Acquisition Inquiry</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

    </div>
  );
};
