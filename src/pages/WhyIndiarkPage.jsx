import React from 'react';
import { WhyIndiarkScrollCards } from '../components/why/WhyIndiarkScrollCards';
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyIndiarkPage = ({ setActivePage }) => {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-950)', minHeight: '80vh' }}>
      
      {/* Page Header */}
      <section
        className="section section-navy-glow"
        style={{
          paddingTop: 'clamp(4.5rem, 8vw, 6.5rem)',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-dark)'
        }}
      >
        <div className="container">
          <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>
            Corporate Principles & Strategic Edge
          </span>
          <h1 className="display-statement" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            WHY INDIARK
          </h1>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.15rem', maxWidth: '820px', lineHeight: '1.7' }}>
            A media rights representation business built on 20+ years of operational understanding, deep OTT buyer networks, and dedicated producer advocacy.
          </p>
        </div>
      </section>

      {/* Experience That Creates Connections - Interactive Pillar Showcase */}
      <section className="section section-dark">
        <div className="container">
          <WhyIndiarkScrollCards onActionClick={handleNav} />
        </div>
      </section>

      {/* Commercial Realism Narrative */}
      <section className="section section-teal-tinted">
        <div className="container">
          <div
            className="card-dark"
            style={{
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              backgroundColor: 'rgba(7, 13, 20, 0.9)',
              border: '1px solid rgba(0, 157, 165, 0.35)'
            }}
          >
            <span className="badge badge-lime" style={{ marginBottom: '1rem' }}>
              Strategic Positioning
            </span>

            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.25rem' }}>
              A Bridge Built on Commercial Realism
            </h2>

            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              In a rapidly transforming media landscape, creators often struggle to reach the right commissioning executives, while OTT buyers are inundated with unstructured submissions.
            </p>

            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Indiark acts as the professional conduit: structuring chain-of-title documentation, positioning content against active platform briefs, and conducting commercial discussions with transparency, realism, and clarity.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => handleNav('submit-content')} className="btn btn-lime btn-md">
                <span>Submit Content for Representation</span>
                <ArrowUpRight size={16} />
              </button>
              <button onClick={() => handleNav('for-platforms')} className="btn btn-secondary-dark btn-md">
                <span>Platform Acquisition Inquiries</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
