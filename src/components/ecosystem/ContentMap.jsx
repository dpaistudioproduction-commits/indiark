import React, { useState } from 'react';
import { 
  Film, Tv, Music, Globe2, Radio, Compass, 
  Plane, Globe, Layers, ArrowUpRight, Sparkles, CheckCircle2 
} from 'lucide-react';

export const ContentMap = ({ onActionClick }) => {
  const [activeCategory, setActiveCategory] = useState('01');

  const categories = [
    {
      id: '01',
      name: 'Films',
      icon: Film,
      desc: 'Theatrical & direct-to-digital feature films across mainstream and indie productions.',
      commercialAvenues: ['SVOD Direct License', 'Theatrical Distribution Rights', 'Satellite Broadcast Window', 'Dubbing & Remake Rights'],
      color: 'var(--brand-teal)'
    },
    {
      id: '02',
      name: 'Web Series',
      icon: Tv,
      desc: 'High-concept episodic originals, limited mini-series, and docuseries.',
      commercialAvenues: ['OTT Commissioning Pitch', 'Original Co-production', 'Multi-Season Licensing', 'Format Syndication'],
      color: 'var(--brand-lime)'
    },
    {
      id: '03',
      name: 'OTT Platforms',
      icon: Radio,
      desc: 'Global and domestic streaming ecosystems seeking curated regional and pan-Indian slates.',
      commercialAvenues: ['B2B Pitching & Screener Tracking', 'Exclusive Windowing', 'Non-exclusive Library Aggregation'],
      color: 'var(--brand-teal)'
    },
    {
      id: '04',
      name: 'Television',
      icon: Layers,
      desc: 'Linear satellite networks, terrestrial broadcast channels, and cable syndication.',
      commercialAvenues: ['Satellite Telecast Rights', 'Syndicated Regional Telecast', 'Long-term Library Licensing'],
      color: 'var(--brand-lime)'
    },
    {
      id: '05',
      name: 'Music',
      icon: Music,
      desc: 'Original soundtracks, background scores, indie singles, and comprehensive music catalogues.',
      commercialAvenues: ['Digital Streaming (DSP)', 'Film & Commercial Sync Licensing', 'Master & Publishing Rights Monetization'],
      color: 'var(--brand-teal)'
    },
    {
      id: '06',
      name: 'Digital Content',
      icon: Globe2,
      desc: 'YouTube creator channels, social video syndication, and digital-first video formats.',
      commercialAvenues: ['YouTube MCN Rights', 'AVOD Advertising Revenue', 'Cross-platform Clip Monetization'],
      color: 'var(--brand-lime)'
    },
    {
      id: '07',
      name: 'Regional Content',
      icon: Compass,
      desc: 'Malayalam, Tamil, Telugu, Hindi, Kannada and other rich language cinema and storytelling.',
      commercialAvenues: ['Pan-India OTT Dubbing', 'Regional Platform Licensing', 'Satellite Broadcast Syndication'],
      color: 'var(--brand-teal)'
    },
    {
      id: '08',
      name: 'In-Flight Entertainment',
      icon: Plane,
      desc: 'Airlines, cruise liners, and global non-theatrical transport entertainment systems.',
      commercialAvenues: ['Airline Fleet In-Flight Rights', 'Non-Theatrical Institutional Licensing', 'Maritime Fleet Systems'],
      color: 'var(--brand-lime)'
    },
    {
      id: '09',
      name: 'International Rights',
      icon: Globe,
      desc: 'Global territory distribution, overseas theatrical release, and international streaming.',
      commercialAvenues: ['Diaspora Theatrical Syndication', 'Foreign Territory SVOD/VOD', 'Subtitled Global Distribution'],
      color: 'var(--brand-teal)'
    }
  ];

  const current = categories.find(c => c.id === activeCategory) || categories[0];
  const IconComp = current.icon;

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Visual Map Matrix Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem',
          backgroundColor: 'rgba(11, 19, 31, 0.7)',
          border: '1px solid rgba(0, 157, 165, 0.25)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)'
        }}
      >
        
        {/* Left Side: Content Map Visual Hub */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <span className="eyebrow-label">Ecosystem Node Network</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>Select node to inspect monetization</span>
          </div>

          {/* Central Hub & Category Orbit Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              position: 'relative'
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const CatIcon = cat.icon;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '1.1rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isActive ? 'rgba(7, 25, 34, 0.95)' : 'rgba(255, 255, 255, 0.03)',
                    border: isActive ? '1px solid var(--brand-teal)' : '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-normal)',
                    textAlign: 'center',
                    boxShadow: isActive ? '0 8px 24px rgba(0, 157, 165, 0.25)' : 'none'
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'rgba(0, 157, 165, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isActive ? 'var(--brand-teal-light)' : 'var(--text-light-muted)'
                    }}
                  >
                    <CatIcon size={18} />
                  </div>

                  <span
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#FFFFFF' : 'var(--text-light-secondary)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Central Conduit Tag */}
          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.75rem 1.25rem',
              backgroundColor: 'rgba(7, 13, 20, 0.85)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              fontSize: '0.8rem',
              color: 'var(--brand-lime)',
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}
          >
            <span>CONTENT HAS VALUE • INDIARK CREATES CONNECTION & OPPORTUNITY</span>
          </div>
        </div>

        {/* Right Side: Selected Category Commercial Detail */}
        <div
          style={{
            padding: 'clamp(1rem, 2vw, 1.5rem)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-teal">Sector {current.id}</span>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(0, 157, 165, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-teal-light)'
                }}
              >
                <IconComp size={16} />
              </div>
            </div>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
              {current.name}
            </h3>

            <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {current.desc}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--brand-lime)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                Monetization & Licensing Pathways:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {current.commercialAvenues.map((ave, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 0.85rem',
                      backgroundColor: 'rgba(7, 13, 20, 0.6)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                      fontSize: '0.84rem',
                      color: 'var(--text-light-primary)'
                    }}
                  >
                    <CheckCircle2 size={14} color="var(--brand-teal-light)" style={{ flexShrink: 0 }} />
                    <span>{ave}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-dark)' }}>
            <button
              onClick={() => onActionClick && onActionClick('submit-content')}
              className="btn btn-lime btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Submit {current.name} Project</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
