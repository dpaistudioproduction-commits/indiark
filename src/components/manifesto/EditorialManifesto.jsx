import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Users, Target, Clock, Radio, Award } from 'lucide-react';

export const EditorialManifesto = ({ onActionClick }) => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      num: '01',
      title: '20+ YEARS IN MEDIA',
      subtitle: 'Broadcast, Theatrical & Streaming Heritage',
      desc: 'Deep experience across television broadcast, theatrical feature films, OTT streaming platforms, and emerging digital entertainment landscapes built over two decades.',
      icon: Clock,
      highlight: 'Decades of foundational industry experience'
    },
    {
      num: '02',
      title: 'OTT EXPERTISE',
      subtitle: 'Direct Streaming Acumen & Mandates',
      desc: 'Deep understanding of OTT platform commissioning cycles, programming mandates, content curation standards, target audience segments, and digital rights monetization structures.',
      icon: Radio,
      highlight: 'Deep understanding of platform buyer expectations'
    },
    {
      num: '03',
      title: 'PLATFORM-FOCUSED',
      subtitle: 'Tailored Matchmaking vs Generic Outreach',
      desc: 'Opportunities are specifically identified according to the content’s unique strengths, genre, and demographic appeal rather than relying on broadcast mass-submissions.',
      icon: Target,
      highlight: 'Curated alignment with buyer acquisition briefs'
    },
    {
      num: '04',
      title: 'BUSINESS-DRIVEN',
      subtitle: 'Active Commercial Deal Execution',
      desc: 'Our role extends far beyond introductory pitches to comprehensive valuation, deal structuring, minimum guarantee negotiations, windowing optimization, and contract coordination.',
      icon: TrendingUp,
      highlight: 'From evaluation to executed licensing agreements'
    },
    {
      num: '05',
      title: 'PRODUCER-FOCUSED',
      subtitle: 'Protecting Content Owner Objectives',
      desc: 'We structure representation around the commercial objectives and creative rights integrity of the producer, filmmaker, or IP holder at every negotiation stage.',
      icon: ShieldCheck,
      highlight: 'Fiduciary representation & rights protection'
    },
    {
      num: '06',
      title: 'INDUSTRY NETWORK',
      subtitle: 'Direct Access to Decision-Makers',
      desc: 'Trusted relationships and platform connections cultivated through decades of ethical, professional media operations across Indian and global markets.',
      icon: Users,
      highlight: 'Direct access to platform heads & buyers'
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Manifesto Track */}
      <div className="manifesto-track">
        {pillars.map((pillar, idx) => {
          const isActive = activePillar === idx;
          const IconComp = pillar.icon;

          return (
            <div
              key={pillar.num}
              onClick={() => setActivePillar(idx)}
              className={`manifesto-item ${isActive ? 'is-active' : ''}`}
              style={{
                cursor: 'pointer',
                borderLeft: isActive ? '4px solid var(--brand-teal)' : '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.35s ease'
              }}
            >
              {/* Number */}
              <div className="manifesto-num">{pillar.num}</div>

              {/* Title & Subtitle */}
              <div>
                <div className="manifesto-title">{pillar.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--brand-teal-light)', fontWeight: 600, marginTop: '0.2rem' }}>
                  {pillar.subtitle}
                </div>
              </div>

              {/* Description & Highlight */}
              <div>
                <p className="manifesto-desc" style={{ marginBottom: '0.5rem' }}>
                  {pillar.desc}
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 600 }}>
                  <CheckCircle2 size={13} />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Narrative Footer */}
      <div
        style={{
          marginTop: '3rem',
          padding: '2rem 2.5rem',
          backgroundColor: 'rgba(7, 25, 34, 0.6)',
          border: '1px solid rgba(0, 157, 165, 0.25)',
          borderRadius: 'var(--radius-xl)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '0.35rem' }}>
            Experience that creates sustainable commercial connections
          </h4>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.9rem', margin: 0 }}>
            Indiark functions as a professional bridge between artistic vision and institutional capital.
          </p>
        </div>

        <button
          onClick={() => onActionClick && onActionClick('submit-content')}
          className="btn btn-lime btn-md"
        >
          <span>Pitch Your Project</span>
          <ArrowUpRight size={16} />
        </button>
      </div>

    </div>
  );
};
