import React from 'react';
import { Sparkles, ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Film, Tv, Layers, Clock, TrendingUp, Users } from 'lucide-react';

export const WhyIndiarkPage = ({ setActivePage }) => {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pillars = [
    {
      num: '01',
      title: '20+ Years in Media',
      subtitle: 'Foundational Industry Provenance',
      desc: 'Over two decades of foundational experience navigating film production, satellite broadcasting, digital rights, and the streaming ecosystem.',
      points: [
        'Decades of hands-on media business experience',
        'Comprehensive grasp of legacy and modern platforms',
        'Deep understanding of rights protection & commercial structures'
      ]
    },
    {
      num: '02',
      title: 'OTT Expertise',
      subtitle: 'Streaming Acquisition Knowledge',
      desc: 'Specialized insight into platform programming needs, acquisition windows, and content evaluation criteria across top OTT streamers.',
      points: [
        'Direct alignment with buyer programming mandates',
        'Expertise in both licensed acquisitions and originals',
        'Multi-lingual and regional content curation'
      ]
    },
    {
      num: '03',
      title: 'Platform-Focused',
      subtitle: 'Curated Buyer Positioning',
      desc: 'We position content precisely where it belongs, saving creators time and giving buyers relevant, high-standard propositions.',
      points: [
        'Tailored B2B pitching decks and screeners',
        'Elimination of mismatched submissions',
        'Structured deal parameters ready for review'
      ]
    },
    {
      num: '04',
      title: 'Business-Driven',
      subtitle: 'Commercial Value Maximization',
      desc: 'Entertainment is art, but representation is business. We focus on fair valuation, contractual clarity, and structured monetisation.',
      points: [
        'Commercial term negotiation (License / MG / Rev-Share)',
        'Windowing and multi-territory unbundling',
        'Transparent deal documentation'
      ]
    },
    {
      num: '05',
      title: 'Producer-Focused',
      subtitle: 'Creator-Centric Advocacy',
      desc: 'We protect the creator’s interests and rights integrity while actively unlocking new commercial revenue streams.',
      points: [
        'Chain of Title verification and security',
        'Dedicated advocate in buyer negotiations',
        'Long-term catalogue management'
      ]
    },
    {
      num: '06',
      title: 'Industry Network',
      subtitle: 'Established Industry Relations',
      desc: 'Longstanding professional relationships across platforms, production houses, broadcasters, and distribution channels.',
      points: [
        'Direct channel access to decision makers',
        'Pan-India and international territory outreach',
        'Collaborative multi-agency partnerships'
      ]
    }
  ];

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
          <div style={{ maxWidth: '900px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>
              Strategic Value Proposition
            </span>
            <h1 className="display-statement" style={{ marginBottom: '1.25rem' }}>
              EXPERIENCE THAT CREATES CONNECTIONS
            </h1>
            <p className="text-editorial-body">
              Why leading filmmakers, production houses, and streaming buyers partner with Indiark Entertainments to manage high-value commercial representation mandates.
            </p>
          </div>
        </div>
      </section>

      {/* Six Pillars Grid */}
      <section className="section section-secondary">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.num}
                style={{
                  backgroundColor: 'rgba(7, 13, 20, 0.8)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--brand-lime)', fontFamily: 'var(--font-heading)' }}>
                      {p.num}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {p.subtitle}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                    {p.title}
                  </h2>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-light-secondary)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                    {p.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {p.points.map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 size={15} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-light-primary)', lineHeight: '1.45' }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Sided Advantage Matrix */}
      <section className="section section-dark">
        <div className="container">
          <div className="two-path-grid">
            
            <div className="two-path-card path-creator">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
                FOR CONTENT OWNERS & CREATORS
              </h3>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                We provide a professional commercial buffer, eliminating the friction of cold pitching, protecting copyright terms, and negotiating maximum licensing value.
              </p>
              <button onClick={() => handleNav('submit-content')} className="btn btn-lime">
                <span>PITCH YOUR CONTENT</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="two-path-card path-buyer">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
                FOR PLATFORMS & BROADCASTERS
              </h3>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                We deliver curated, legally verified content packages matching programming briefs, audience tastes, and technical broadcast standards.
              </p>
              <button onClick={() => handleNav('for-platforms')} className="btn btn-outline-teal">
                <span>BUYER REQUIREMENTS</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
