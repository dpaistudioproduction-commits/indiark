import React from 'react';
import { Sparkles, ArrowUpRight, ArrowRight, ShieldCheck, Film, Tv, Layers, Award, UserCheck } from 'lucide-react';
import { ASSOCIATED_ORGANIZATION } from '../services/dataService';

export const WhoWeArePage = ({ setActivePage, team }) => {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <div style={{ maxWidth: '880px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>
              Corporate Overview & Identity
            </span>
            <h1 className="display-statement" style={{ marginBottom: '1.25rem' }}>
              MEDIA EXPERIENCE.<br />
              BUSINESS UNDERSTANDING.<br />
              <span style={{ color: 'var(--brand-teal-light)' }}>INDUSTRY CONNECTIONS.</span>
            </h1>
            <p className="text-editorial-body">
              Indiark Entertainments is an entertainment rights house and media business agency representing producers, filmmakers, and creators to negotiate and close commercial licensing deals across OTT platforms, broadcasters, and global buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Foundation & Credibility Strip */}
      <section style={{ backgroundColor: '#0B131F', padding: '2.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div className="highlight-strip" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <div className="highlight-stat-box highlight-lime">
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--brand-lime)', fontFamily: 'var(--font-heading)' }}>
                20+
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: '#FFFFFF', marginTop: '0.2rem' }}>
                Years of Media Industry Experience
              </div>
            </div>
            <div className="highlight-stat-box">
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>STRATEGIC RIGHTS ADVOCACY</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>Protecting valuation & Chain of Title</div>
            </div>
            <div className="highlight-stat-box">
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>DIRECT PLATFORM ACCESS</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>Curated outreach to acquisition heads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy Narrative */}
      <section className="section section-dark">
        <div className="container">
          <div className="split-editorial">
            <div>
              <span className="eyebrow-label" style={{ marginBottom: '0.75rem' }}>
                Our Commercial Philosophy
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                BRINGING DISCIPLINE AND CLARITY TO MEDIA RIGHTS
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                In the modern streaming and broadcast era, great content often struggles to find the right commercial home due to complex licensing parameters, misaligned pitching, and lack of direct institutional access.
              </p>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Indiark bridges this divide. We act as an institutional advocate for producers, ensuring their creative output is professionally packaged, evaluated, pitched, and closed with favorable commercial terms.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => handleNav('submit-content')} className="btn btn-lime">
                  <span>PITCH YOUR CONTENT</span>
                  <ArrowUpRight size={15} />
                </button>
                <button onClick={() => handleNav('what-we-do')} className="btn btn-secondary-dark">
                  <span>SERVICES ATLAS</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(11, 19, 31, 0.75)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2rem, 3vw, 2.5rem)',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                Core Capabilities & Scope
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'OTT Platform Pitching (Netflix, Prime, SonyLIV, ZEE5, JioHotstar, Regional OTTs)',
                  'Producer Representation & Deal Management',
                  'Multi-Territory & Multi-Window Licensing',
                  'Music Master & Sync Rights Administration',
                  'YouTube & AVOD Digital Syndication',
                  'Turnkey Video Production & Technical Post-Production'
                ].map((cap, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <ShieldCheck size={16} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-light-secondary)' }}>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Professional Team Section */}
      <section className="section section-secondary">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.6rem' }}>Leadership Team</span>
            <h2 className="display-statement" style={{ marginBottom: '0.75rem' }}>
              PROFESSIONAL LEADERSHIP
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem' }}>
              The management and advisory team guiding Indiark Entertainments' commercial mandates.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {team.map((member) => (
              <div
                key={member.id}
                style={{
                  backgroundColor: 'rgba(7, 13, 20, 0.75)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(0, 157, 165, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-teal-light)' }}>
                      <UserCheck size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                        {member.name}
                      </h3>
                      <div style={{ fontSize: '0.76rem', color: 'var(--brand-lime)', fontWeight: 600 }}>
                        {member.designation}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)', lineHeight: '1.6', margin: 0 }}>
                    {member.bio}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.74rem', color: 'var(--text-light-subtle)' }}>
                  Indiark Commercial Leadership
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associated Academic Initiative */}
      <section className="section section-dark">
        <div className="container">
          <div
            style={{
              padding: 'clamp(2.5rem, 4vw, 3.5rem)',
              backgroundColor: 'rgba(11, 19, 31, 0.85)',
              border: '1px solid var(--border-teal-subtle)',
              borderRadius: 'var(--radius-lg)',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '0.6rem' }}>Associated Academic Initiative</span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                {ASSOCIATED_ORGANIZATION.name}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-light-secondary)', lineHeight: '1.65', margin: 0 }}>
                {ASSOCIATED_ORGANIZATION.description}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(7, 13, 20, 0.75)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.76rem', color: 'var(--text-light-muted)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Approved Ecosystem Flow
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--brand-lime)', letterSpacing: '0.04em' }}>
                {ASSOCIATED_ORGANIZATION.ecosystem}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
