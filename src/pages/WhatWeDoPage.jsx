import React from 'react';
import { ServicesAtlas } from '../components/services/ServicesAtlas';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, Tv, Film, Layers, Music, Globe2, Video, Sliders } from 'lucide-react';

export const WhatWeDoPage = ({ setActivePage }) => {
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
          <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>
            Capabilities & Strategic Services
          </span>
          <h1 className="display-statement" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            WHAT WE DO
          </h1>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.15rem', maxWidth: '820px', lineHeight: '1.7' }}>
            Indiark Entertainments structures professional media rights representation, platform pitching, content licensing, and high-standard production craft across seven interconnected business capabilities.
          </p>
        </div>
      </section>

      {/* Interactive Services Atlas */}
      <section className="section section-dark">
        <div className="container">
          <ServicesAtlas onActionClick={handleNav} />
        </div>
      </section>

      {/* Strategic Value Proposition Strip */}
      <section className="section section-teal-tinted">
        <div className="container">
          <div className="split-editorial">
            <div>
              <span className="eyebrow-label" style={{ marginBottom: '0.75rem' }}>
                End-to-End Monetization
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', marginBottom: '1rem' }}>
                From Development to Deal Execution
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                Whether positioning a feature film for a direct OTT premiere, managing complex multi-territory digital rights, or overseeing turnkey video productions, Indiark coordinates every milestone with legal transparency and commercial discipline.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                className="card-dark"
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(7, 13, 20, 0.7)',
                  borderLeft: '4px solid var(--brand-lime)'
                }}
              >
                <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                  Producer Representation Mandate
                </div>
                <div style={{ color: 'var(--text-light-muted)', fontSize: '0.86rem' }}>
                  Fiduciary pitching to verified streaming platforms and international distributors.
                </div>
              </div>

              <div
                className="card-dark"
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(7, 13, 20, 0.7)',
                  borderLeft: '4px solid var(--brand-teal)'
                }}
              >
                <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                  Buyer Slate Curation
                </div>
                <div style={{ color: 'var(--text-light-muted)', fontSize: '0.86rem' }}>
                  Pre-cleared Indian and regional titles tailored to platform commissioning briefs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-darker" style={{ textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ color: '#FFFFFF', fontSize: '1.8rem', marginBottom: '1rem' }}>
            Ready to initiate discussions?
          </h3>
          <p style={{ color: 'var(--text-light-secondary)', maxWidth: '580px', margin: '0 auto 2rem auto' }}>
            Connect with our representation team to explore opportunities for your project or slate.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => handleNav('submit-content')} className="btn btn-lime btn-lg">
              <span>PITCH YOUR CONTENT</span>
              <ArrowUpRight size={16} />
            </button>
            <button onClick={() => handleNav('for-platforms')} className="btn btn-secondary-dark btn-lg">
              <span>FOR PLATFORMS & BUYERS</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
