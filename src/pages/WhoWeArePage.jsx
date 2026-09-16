import React from 'react';
import { Target, Compass, Users, CheckCircle2, ArrowRight, ArrowUpRight, ShieldCheck, User } from 'lucide-react';
import { ASSOCIATED_ORGANIZATION } from '../services/dataService';

export const WhoWeArePage = ({ setActivePage, team = [] }) => {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-950)', minHeight: '80vh' }}>
      
      {/* Editorial Opening Header */}
      <section
        className="section section-navy-glow"
        style={{
          paddingTop: 'clamp(4.5rem, 8vw, 6.5rem)',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(0, 157, 165, 0.2)',
          position: 'relative'
        }}
      >
        <div className="container">
          <span className="badge badge-teal" style={{ marginBottom: '1.25rem' }}>
            Corporate Profile & Leadership
          </span>
          <h1 className="display-statement" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            WHO WE ARE
          </h1>
          <div style={{ color: 'var(--brand-lime)', fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: '1.3' }}>
            EXPERIENCE. NETWORK. PLATFORM KNOWLEDGE. BUSINESS UNDERSTANDING.
          </div>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.15rem', maxWidth: '840px', lineHeight: '1.7' }}>
            Indiark Entertainments is a media rights representation and entertainment business agency backed by professionals with more than 20 years of combined experience across television, theatrical film, OTT streaming, and digital content ecosystems.
          </p>
        </div>
      </section>

      {/* Vision & Mission (Asymmetric Editorial Cards) */}
      <section className="section section-teal-tinted">
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            
            {/* Vision */}
            <div
              className="card-dark"
              style={{
                backgroundColor: 'rgba(7, 13, 20, 0.85)',
                borderTop: '4px solid var(--brand-teal)',
                padding: 'clamp(2rem, 3.5vw, 3rem)'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(0, 157, 165, 0.12)',
                  color: 'var(--brand-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <Compass size={24} />
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--brand-teal-light)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Corporate Vision
              </div>

              <h3 style={{ color: '#FFFFFF', fontSize: '1.45rem', marginBottom: '1rem', lineHeight: '1.3', fontWeight: 800 }}>
                TO BECOME A TRUSTED GLOBAL CONNECTOR FOR ENTERTAINMENT CONTENT.
              </h3>

              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                We aim to build a strong international media business that connects Indian and global content creators with the right platforms, buyers, markets, and commercial opportunities.
              </p>
            </div>

            {/* Mission */}
            <div
              className="card-dark"
              style={{
                backgroundColor: 'rgba(7, 13, 20, 0.85)',
                borderTop: '4px solid var(--brand-lime)',
                padding: 'clamp(2rem, 3.5vw, 3rem)'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(148, 200, 32, 0.12)',
                  color: 'var(--brand-lime)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <Target size={24} />
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--brand-lime)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Strategic Mission
              </div>

              <h3 style={{ color: '#FFFFFF', fontSize: '1.45rem', marginBottom: '1rem', lineHeight: '1.3', fontWeight: 800 }}>
                CREATING MEANINGFUL COMMERCIAL VALUE FOR CREATORS.
              </h3>

              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                To create meaningful commercial opportunities for producers, filmmakers, production houses, and independent artists through content representation, platform pitching, rights business, and strategic entertainment partnerships.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Team Directory */}
      <section className="section section-darker" id="leadership">
        <div className="container">
          
          <div style={{ maxWidth: '750px', marginBottom: '3rem' }}>
            <span className="eyebrow-label" style={{ marginBottom: '0.5rem' }}>
              Management & Advisory
            </span>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '0.5rem' }}>
              LEADERSHIP DIRECTORY
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem' }}>
              The management team steering Indiark’s representation, strategic acquisition, and platform partnerships.
            </p>
          </div>

          {/* Team Directory Grid */}
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {team.map((member) => (
              <div
                key={member.id}
                className="card-dark"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid var(--border-dark)',
                  backgroundColor: 'rgba(7, 13, 20, 0.75)'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-teal-light)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <User size={26} />
                  </div>

                  <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.3rem' }}>
                    {member.name}
                  </h3>

                  <div style={{ color: 'var(--brand-teal-light)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {member.designation}
                  </div>

                  <p style={{ color: 'var(--text-light-muted)', fontSize: '0.86rem', lineHeight: '1.6', fontStyle: 'italic' }}>
                    {member.bio}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-dark)', fontSize: '0.75rem', color: 'var(--text-light-subtle)' }}>
                  Confirmed Leadership Team
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-light-subtle)', fontStyle: 'italic' }}>
            * Note: Complete executive biographies, expanded advisory board additions, and portfolio profiles will be updated upon formal corporate publication.
          </div>

        </div>
      </section>

      {/* Associated Educational Initiative */}
      <section className="section section-dark">
        <div className="container">
          <div
            className="card-dark"
            style={{
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              border: '1px solid rgba(148, 200, 32, 0.35)',
              backgroundColor: 'rgba(7, 13, 20, 0.9)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <span className="badge badge-lime">Connected Academic Ecosystem</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--brand-lime)', fontWeight: 700 }}>
                {ASSOCIATED_ORGANIZATION.ecosystem}
              </span>
            </div>

            <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '0.75rem', fontWeight: 800 }}>
              {ASSOCIATED_ORGANIZATION.name}
            </h3>

            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.02rem', lineHeight: '1.7', maxWidth: '880px', marginBottom: '2rem' }}>
              {ASSOCIATED_ORGANIZATION.description}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1rem',
                borderTop: '1px solid var(--border-dark)',
                paddingTop: '1.5rem'
              }}
            >
              {[
                { label: '01 • EDUCATION', desc: 'Industry curriculum' },
                { label: '02 • TALENT', desc: 'Creative incubation' },
                { label: '03 • CONTENT', desc: 'Original storytelling' },
                { label: '04 • MEDIA', desc: 'Production craft' },
                { label: '05 • BUSINESS', desc: 'Commercial monetization' }
              ].map((step, idx) => (
                <div key={idx} style={{ padding: '0.85rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ color: 'var(--brand-teal-light)', fontWeight: 700, fontSize: '0.85rem' }}>{step.label}</div>
                  <div style={{ color: 'var(--text-light-muted)', fontSize: '0.75rem' }}>{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section section-darker" style={{ borderTop: '1px solid var(--border-dark)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#FFFFFF', fontSize: '1.8rem', marginBottom: '1rem' }}>Partner with Indiark</h2>
          <p style={{ color: 'var(--text-light-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Discover how our media experience and platform network can create new commercial opportunities for your content.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => handleNav('submit-content')} className="btn btn-lime btn-lg">
              <span>PITCH YOUR CONTENT</span>
              <ArrowUpRight size={16} />
            </button>
            <button onClick={() => handleNav('for-platforms')} className="btn btn-primary btn-lg">
              <span>FOR PLATFORMS & BUYERS</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
