import React, { useState, useEffect, useRef } from 'react';
import { Award, Tv, Target, TrendingUp, Users, Radio, CheckCircle2, ArrowRight, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

export const WhyIndiarkScrollCards = ({ onActionClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const cardStageRef = useRef(null);

  const pillars = [
    {
      num: '01',
      title: '20+ YEARS IN MEDIA',
      category: 'INDUSTRY HERITAGE',
      desc: 'Deep experience across television, film, OTT and digital entertainment. Our leadership background spans legacy broadcast programming, theatrical feature film production, and the modern streaming paradigm.',
      icon: Award,
      accent: 'var(--brand-teal)',
      impact: 'Two decades of continuous relationships and media operations'
    },
    {
      num: '02',
      title: 'OTT EXPERTISE',
      category: 'STREAMING ACUMEN',
      desc: 'Understanding of OTT platforms, content requirements, audiences, rights and commercial opportunities. We assess where a title belongs based on subscriber demographics, commissioning cycles, and acquisition budgets.',
      icon: Tv,
      accent: 'var(--brand-lime)',
      impact: 'Deep insight into active platform programming mandates'
    },
    {
      num: '03',
      title: 'PLATFORM-FOCUSED',
      category: 'TARGETED POSITIONING',
      desc: 'Opportunities are identified according to the content rather than using a one-size-fits-all approach. We position each title individually to match specific buyer curations and programming slots.',
      icon: Target,
      accent: 'var(--brand-teal)',
      impact: 'Tailored pitching aligned with specific buyer briefs'
    },
    {
      num: '04',
      title: 'BUSINESS-DRIVEN',
      category: 'COMMERCIAL EXECUTION',
      desc: 'Our role extends beyond introductions to pitching, negotiation and deal coordination. We support content owners through complex term sheets, minimum guarantees, territory carve-outs, and licensing agreements.',
      icon: TrendingUp,
      accent: 'var(--brand-lime)',
      impact: 'Active deal execution from evaluation to final closure'
    },
    {
      num: '05',
      title: 'PRODUCER-FOCUSED',
      category: 'CREATOR ADVOCACY',
      desc: 'We work around the commercial objectives of the content owner. We safeguard rights integrity, assist in chain-of-title readiness, and ensure fair valuation throughout all buyer discussions.',
      icon: Users,
      accent: 'var(--brand-teal)',
      impact: 'Fiduciary representation protecting creator intellectual property'
    },
    {
      num: '06',
      title: 'INDUSTRY NETWORK',
      category: 'DIRECT CONNECTIONS',
      desc: 'Industry relationships and understanding developed through years of media experience across regional, national, and international entertainment markets with trusted platform decision-makers.',
      icon: Radio,
      accent: 'var(--brand-lime)',
      impact: 'Direct access to platform heads and commissioning executives'
    }
  ];

  // Scroll-based step detection with requestAnimationFrame
  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) {
          rafId = null;
          return;
        }
        const rect = containerRef.current.getBoundingClientRect();
        const windowH = window.innerHeight;
        const totalScrollable = rect.height - windowH;

        if (totalScrollable > 0) {
          const currentScrolled = -rect.top;
          const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollable));
          
          // Calculate active step: 0, 1, 2, 3, 4, 5 based on scroll depth
          const step = Math.min(5, Math.floor(progress * 5.999));
          setActiveIndex(step);
        }

        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Subtle 3D Card Tilt on Mouse Move
  const handleMouseMove = (e) => {
    if (!cardStageRef.current) return;
    const rect = cardStageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt within ±4 degrees
    const tiltX = ((y - centerY) / centerY) * -4;
    const tiltY = ((x - centerX) / centerX) * 4;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const jumpToStep = (idx) => {
    setActiveIndex(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = scrollTop + rect.top + (idx / 5) * totalScrollable;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const current = pillars[activeIndex];
  const IconComp = current.icon;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '320vh',
        width: '100%'
      }}
      className="why-scroll-container"
    >
      {/* Sticky Viewport Stage */}
      <div
        style={{
          position: 'sticky',
          top: '75px',
          minHeight: 'calc(100vh - 90px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBottom: '2rem'
        }}
        className="why-sticky-stage"
      >
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <span className="badge badge-lime">
              Scroll-Driven Exploration
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--brand-teal-light)', fontWeight: 700, letterSpacing: '0.06em' }}>
              STEP {activeIndex + 1} OF 6
            </span>
          </div>
          
          <h2 className="display-statement" style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>
            EXPERIENCE THAT CREATES CONNECTIONS
          </h2>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
            Scroll down to advance through the six foundational pillars powering Indiark’s representation and commercial deal execution.
          </p>
        </div>

        {/* 3D Perspective Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '360px 1fr',
            gap: '2.5rem',
            backgroundColor: 'rgba(11, 19, 31, 0.75)',
            border: '1px solid rgba(0, 157, 165, 0.25)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 157, 165, 0.1)',
            perspective: '1200px'
          }}
          className="why-showcase-grid"
        >
          {/* Left Column: Scroll-Synced Pillar Navigator */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Progress Bar */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-light-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Scroll Progression
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--brand-lime)', fontWeight: 800 }}>
                    {Math.round(((activeIndex + 1) / 6) * 100)}%
                  </span>
                </div>

                <div style={{ height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${((activeIndex + 1) / 6) * 100}%`,
                      backgroundColor: 'var(--brand-teal)',
                      transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </div>
              </div>

              {/* 6 Step Interactive Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {pillars.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  const isPassed = activeIndex > idx;

                  return (
                    <button
                      key={item.num}
                      onClick={() => jumpToStep(idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: isActive 
                          ? 'linear-gradient(90deg, rgba(0, 157, 165, 0.2) 0%, rgba(0, 157, 165, 0.04) 100%)' 
                          : isPassed 
                            ? 'rgba(255, 255, 255, 0.02)' 
                            : 'transparent',
                        border: isActive 
                          ? '1px solid rgba(0, 157, 165, 0.45)' 
                          : '1px solid rgba(255, 255, 255, 0.04)',
                        color: isActive ? '#FFFFFF' : isPassed ? 'var(--text-light-secondary)' : 'var(--text-light-subtle)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 800,
                            fontSize: '0.95rem',
                            color: isActive ? 'var(--brand-lime)' : isPassed ? 'var(--brand-teal-light)' : 'var(--text-light-subtle)',
                            width: '24px'
                          }}
                        >
                          {item.num}
                        </span>
                        <div>
                          <div style={{ fontSize: '0.86rem', fontWeight: isActive ? 700 : 500, color: isActive ? '#FFFFFF' : 'inherit' }}>
                            {item.title}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: isActive ? 'var(--brand-lime)' : isPassed ? 'var(--brand-teal)' : 'rgba(255, 255, 255, 0.1)',
                          boxShadow: isActive ? '0 0 8px var(--brand-lime)' : 'none',
                          transition: 'all 0.25s ease'
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scroll Hint */}
            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-dark)', fontSize: '0.78rem', color: 'var(--text-light-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>↓ Scroll down to reveal next pillar</span>
            </div>
          </div>

          {/* Right Column: 3D-Tilt Active Pillar Stage */}
          <div
            ref={cardStageRef}
            key={current.num}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              padding: 'clamp(1rem, 2vw, 2rem)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              animation: 'whyPillar3DFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s ease-out',
              minHeight: '360px',
              position: 'relative'
            }}
            className="why-stage-pane"
          >
            {/* Subtle 3D Depth Glow Orb */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle, rgba(0, 157, 165, 0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
                transform: 'translateZ(-10px)'
              }}
            />

            <div>
              {/* Pillar Header with 3D Layer Elevation */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem', transform: 'translateZ(20px)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <span className="badge badge-teal">Pillar {current.num}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 700, letterSpacing: '0.08em' }}>
                      {current.category}
                    </span>
                  </div>

                  <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                    {current.title}
                  </h3>
                </div>

                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'rgba(0, 157, 165, 0.12)',
                    border: '1px solid rgba(0, 157, 165, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: current.accent,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.35)',
                    transform: 'translateZ(25px)'
                  }}
                >
                  <IconComp size={26} />
                </div>
              </div>

              {/* Comprehensive Description */}
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.75rem', maxWidth: '780px', transform: 'translateZ(15px)' }}>
                {current.desc}
              </p>

              {/* Strategic Value Box (3D Layered) */}
              <div
                style={{
                  padding: '1.15rem 1.35rem',
                  backgroundColor: 'rgba(7, 13, 20, 0.75)',
                  border: '1px solid rgba(0, 157, 165, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '1.5rem',
                  transform: 'translateZ(20px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                }}
              >
                <CheckCircle2 size={20} color="var(--brand-lime)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Verified Strategic Advantage
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 600 }}>
                    {current.impact}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-dark)',
                transform: 'translateZ(15px)'
              }}
            >
              <div style={{ fontSize: '0.84rem', color: 'var(--text-light-muted)' }}>
                Active Pillar {current.num} of 06
              </div>

              <button
                onClick={() => onActionClick && onActionClick('submit-content')}
                className="btn btn-lime btn-sm"
              >
                <span>Submit Project for Representation</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Entry Animation & Mobile Resets */}
      <style>{`
        @keyframes whyPillar3DFadeIn {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateX(7deg) translateY(12px) translateZ(-25px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0deg) translateY(0) translateZ(0);
          }
        }
        @media (max-width: 960px) {
          .why-scroll-container {
            height: auto !important;
          }
          .why-sticky-stage {
            position: relative !important;
            top: 0 !important;
            min-height: auto !important;
          }
          .why-showcase-grid {
            grid-template-columns: 1fr !important;
          }
          .why-stage-pane {
            border-left: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
            padding-top: 1.5rem !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};
