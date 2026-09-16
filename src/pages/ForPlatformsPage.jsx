import React from 'react';
import { Briefcase, Film, Globe2, ShieldCheck, CheckCircle2, ArrowRight, Layers, Radio, Sparkles } from 'lucide-react';
import { BuyerRequirementForm } from '../components/forms/BuyerRequirementForm';

export const ForPlatformsPage = () => {
  const contentPillars = [
    { title: 'Feature Films', desc: 'Direct-to-digital premieres, post-theatrical windowing, and curated catalogue packages.' },
    { title: 'Original Web Series', desc: 'Episodic drama, crime, thriller, and regional multi-part narrative properties.' },
    { title: 'Regional Content', desc: 'Authentic Malayalam, Tamil, Telugu, Hindi, and Kannada cinematic stories.' },
    { title: 'Dubbed & Multilingual', desc: 'High-production value cinema cleared and ready for multilingual localization.' },
    { title: 'Music & Audio Catalogues', desc: 'Original film soundtracks, independent audio IP, and background score syncs.' },
    { title: 'Library Aggregations', desc: 'Pre-cleared volume libraries for rapid streaming catalog expansion.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-950)', minHeight: '80vh' }}>
      
      {/* Editorial B2B Header */}
      <section
        className="section section-navy-glow"
        style={{
          paddingTop: 'clamp(4.5rem, 8vw, 6.5rem)',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(0, 157, 165, 0.2)'
        }}
      >
        <div className="container">
          <span className="badge badge-teal" style={{ marginBottom: '1.25rem' }}>
            Institutional Content Procurement
          </span>
          <h1 className="display-hero" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            LOOKING <br />
            <span style={{ color: 'var(--brand-teal-light)' }}>FOR CONTENT?</span>
          </h1>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.15rem', maxWidth: '820px', lineHeight: '1.7', marginBottom: '2rem' }}>
            Indiark Entertainments serves as an institutional bridge for OTT platforms, satellite broadcasters, theatrical distributors, and international buyers seeking verified, cleared Indian entertainment content.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Movies', 'Web Series', 'Regional Cinema', 'Dubbed Titles', 'Music Rights', 'Library Packages'].map((tag, i) => (
              <span key={i} className="badge badge-dark">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Matrix Scope */}
      <section className="section section-dark">
        <div className="container">
          
          <div style={{ maxWidth: '750px', marginBottom: '3rem' }}>
            <span className="eyebrow-label" style={{ marginBottom: '0.5rem' }}>Acquisition Scope</span>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              Curated Slates for Global & Domestic Buyers
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', marginTop: '0.35rem' }}>
              We pre-evaluate titles, audit chain-of-title rights, and structure presentations directly aligned with your commissioning and acquisition briefs.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
            {contentPillars.map((item, idx) => (
              <div
                key={idx}
                className="card-dark"
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'rgba(7, 13, 20, 0.75)',
                  border: '1px solid var(--border-dark)'
                }}
              >
                <div style={{ color: 'var(--brand-teal-light)', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Category 0{idx + 1}
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Form Briefing Header */}
          <div id="buyer-requirement-form" style={{ marginBottom: '2.5rem' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>B2B Procurement Briefing</span>
            <h2 className="display-statement" style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
              TELL US YOUR CONTENT REQUIREMENTS
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', maxWidth: '700px' }}>
              Define your acquisition criteria, target language, genre preferences, territory rights, and programming timeline.
            </p>
          </div>

          {/* Embedded Buyer Requirement Form (Full Width Alignment) */}
          <div style={{ width: '100%' }}>
            <BuyerRequirementForm />
          </div>

        </div>
      </section>

    </div>
  );
};
