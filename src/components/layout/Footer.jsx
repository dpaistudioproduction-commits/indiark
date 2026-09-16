import React from 'react';
import { ArrowUpRight, Shield, Film, Layers, Globe, Mail, Sparkles } from 'lucide-react';
import { ASSOCIATED_ORGANIZATION, CONTACT_INFO } from '../../services/dataService';

export const Footer = ({ setActivePage, onOpenLegal }) => {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#05090F',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        color: 'var(--text-light-secondary)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="container">
        
        {/* Main 4-Column Directory Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          
          {/* Column 1: Brand Positioning & Credibility */}
          <div>
            <div 
              onClick={() => handleNav('home')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', marginBottom: '1.25rem' }}
            >
              <img
                src="/indiark-logo.png"
                alt="Indiark Logo"
                style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#FFFFFF', lineHeight: 1.1 }}>
                  INDIARK
                </div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--brand-teal-light)', fontWeight: 700 }}>
                  ENTERTAINMENTS
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: 'var(--text-light-muted)', marginBottom: '1.5rem' }}>
              Media rights house and commercial agency connecting producers, filmmakers, and content owners with OTT platforms, broadcasters, and global buyers.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 0.85rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ fontSize: '0.76rem', color: 'var(--brand-lime)', fontWeight: 800 }}>20+ YEARS</span>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-light-secondary)' }}>Media Experience</span>
            </div>
          </div>

          {/* Column 2: Navigation Directory */}
          <div>
            <h4 style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Corporate Directory
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => handleNav('home')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('who-we-are')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                  Who We Are & Leadership
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('what-we-do')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                  What We Do (7 Business Streams)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('why-indiark')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                  Why Indiark (6 Pillars)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('our-work')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                  Our Work & Catalogue
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Commercial Portals & Ingestion */}
          <div>
            <h4 style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Commercial Portals
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button 
                  onClick={() => handleNav('submit-content')}
                  style={{ background: 'none', border: 'none', color: 'var(--brand-lime-light)', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>Pitch Your Content</span>
                  <ArrowUpRight size={13} />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('for-platforms')}
                  style={{ background: 'none', border: 'none', color: 'var(--brand-teal-light)', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>For Platforms & Buyers</span>
                  <ArrowUpRight size={13} />
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('what-we-do')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                  OTT Platform Pitching
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('what-we-do')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                  Content Rights & Licensing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                  Executive Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Academic Initiative & Governance */}
          <div>
            <h4 style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Associated Initiative
            </h4>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.3rem' }}>
                {ASSOCIATED_ORGANIZATION.name}
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--brand-teal-light)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                {ASSOCIATED_ORGANIZATION.ecosystem}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', lineHeight: '1.45', margin: 0 }}>
                {ASSOCIATED_ORGANIZATION.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.8rem' }}>
              <button
                onClick={() => onOpenLegal && onOpenLegal('terms')}
                style={{ background: 'none', border: 'none', color: 'var(--text-light-subtle)', cursor: 'pointer' }}
              >
                Terms of Business
              </button>
              <span style={{ color: 'var(--border-dark)' }}>•</span>
              <button
                onClick={() => onOpenLegal && onOpenLegal('privacy')}
                style={{ background: 'none', border: 'none', color: 'var(--text-light-subtle)', cursor: 'pointer' }}
              >
                Privacy Notice
              </button>
            </div>
          </div>

        </div>

        {/* Sub-Footer Copyright & Compliance Row */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-light-subtle)',
          }}
        >
          <div>
            © {new Date().getFullYear()} INDIARK ENTERTAINMENTS. All rights reserved. Connecting great content with the right opportunities.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Media Rights • Content Representation • Entertainment Business</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
