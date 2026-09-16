import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, ArrowRight, ArrowUpRight, Compass, Target, 
  Layers, Share2, TrendingUp, ShieldCheck, CheckCircle2, Sparkles 
} from 'lucide-react';

export const BusinessPathway = ({ onActionClick }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const cardStageRef = useRef(null);

  const steps = [
    {
      num: '01',
      name: 'UNDERSTAND',
      stage: 'Discovery & Rights Evaluation',
      desc: 'We evaluate the project, chain-of-title rights position, target audience, format specifications, and creator commercial expectations.',
      deliverable: 'Rights positioning & market valuation review',
      focus: 'Clarity & Integrity',
      icon: Compass,
      accent: 'var(--brand-teal)'
    },
    {
      num: '02',
      name: 'IDENTIFY',
      stage: 'Buyer & Platform Mapping',
      desc: 'We map the project against real-time commissioning briefs, programming mandates, OTT platform catalogs, and international licensing buyers.',
      deliverable: 'Platform acquisition shortlist & buyer curation',
      focus: 'Targeted Relevance',
      icon: Target,
      accent: 'var(--brand-lime)'
    },
    {
      num: '03',
      name: 'POSITION',
      stage: 'Strategic Packaging',
      desc: 'We structure tailored B2B pitch dossiers, screener presentation packages, and commercial proposals tailored to the selected platform mandate.',
      deliverable: 'Institutional pitch deck & screener assets',
      focus: 'Commercial Presentation',
      icon: Layers,
      accent: 'var(--brand-teal)'
    },
    {
      num: '04',
      name: 'PITCH',
      stage: 'Direct Buyer Engagement',
      desc: 'We professionally present and pitch the content to accredited commissioning executives, acquisitions heads, and platform decision-makers.',
      deliverable: 'Direct buyer meetings & screener tracking',
      focus: 'Direct Access',
      icon: Share2,
      accent: 'var(--brand-lime)'
    },
    {
      num: '05',
      name: 'NEGOTIATE',
      stage: 'Commercial Terms & Windowing',
      desc: 'We structure commercial terms including licensing fees, minimum guarantees, territory carve-outs, holdbacks, and monetization windows.',
      deliverable: 'Commercial term sheet negotiation',
      focus: 'Value Maximization',
      icon: TrendingUp,
      accent: 'var(--brand-teal)'
    },
    {
      num: '06',
      name: 'CLOSE',
      stage: 'Contract & Deal Coordination',
      desc: 'We coordinate contract term execution, legal documentation delivery, materials compliance, and final deal closing.',
      deliverable: 'Executed license agreements & closing support',
      focus: 'Seamless Closure',
      icon: ShieldCheck,
      accent: 'var(--brand-lime)'
    }
  ];

  // Scroll detection mapping scroll depth to 01 -> 02 -> 03 -> 04 -> 05 -> 06
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
          const step = Math.min(5, Math.floor(progress * 5.999));
          setActiveStep(step);
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
  }, [steps.length]);

  // Subtle 3D Card Tilt
  const handleMouseMove = (e) => {
    if (!cardStageRef.current) return;
    const rect = cardStageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -3.5;
    const tiltY = ((x - centerX) / centerX) * 3.5;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const jumpToStep = (idx) => {
    setActiveStep(idx);
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

  const current = steps[activeStep] || steps[0];
  const IconComp = current.icon;
  const lineFillPercent = (activeStep / (steps.length - 1)) * 100;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '320vh', // Provides ample scroll distance for connecting dots sequence
        width: '100%'
      }}
      className="pathway-scroll-container"
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
        className="pathway-sticky-stage"
      >
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-teal">
              Connected Commercial Journey
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 700, letterSpacing: '0.06em' }}>
              PHASE {activeStep + 1} OF 06 • {current.name}
            </span>
          </div>

          <h2 className="display-statement" style={{ color: '#FFFFFF', marginBottom: '0.35rem' }}>
            HOW WE WORK
          </h2>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
            Scroll down to watch Indiark’s connecting dots pathway advance from initial rights discovery to successful deal closure.
          </p>
        </div>

        {/* ===================================================================
            CONNECTING DOTS CONSTELLATION LINE (Scroll-Synced Laser Beam)
            =================================================================== */}
        <div
          style={{
            position: 'relative',
            padding: '1.5rem 1.25rem 2rem 1.25rem',
            backgroundColor: 'rgba(11, 19, 31, 0.85)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(0, 157, 165, 0.25)',
            marginBottom: '1.75rem',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)'
          }}
          className="dots-constellation-track"
        >
          {/* Background Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '42px',
              left: '5%',
              right: '5%',
              height: '3px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '3px',
              zIndex: 1
            }}
          />

          {/* Active Glowing Laser Connection Line */}
          <div
            style={{
              position: 'absolute',
              top: '42px',
              left: '5%',
              width: `calc(90% * ${lineFillPercent / 100})`,
              height: '3px',
              background: 'linear-gradient(90deg, var(--brand-teal) 0%, var(--brand-lime) 100%)',
              boxShadow: '0 0 12px var(--brand-teal), 0 0 20px var(--brand-lime)',
              borderRadius: '3px',
              zIndex: 2,
              transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />

          {/* 6 Connected Dots */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 3
            }}
          >
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={step.num}
                  onClick={() => jumpToStep(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: 0,
                    outline: 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {/* Glowing Node Circle */}
                  <div
                    style={{
                      width: isActive ? '36px' : '30px',
                      height: isActive ? '36px' : '30px',
                      borderRadius: '50%',
                      backgroundColor: isActive 
                        ? 'var(--brand-lime)' 
                        : isPassed 
                          ? 'var(--brand-teal)' 
                          : 'rgba(11, 19, 31, 0.95)',
                      border: isActive 
                        ? '3px solid #FFFFFF' 
                        : isPassed 
                          ? '2px solid var(--brand-teal-light)' 
                          : '2px solid rgba(255, 255, 255, 0.2)',
                      color: isActive ? '#070D14' : '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isActive ? '0.88rem' : '0.78rem',
                      fontWeight: 800,
                      boxShadow: isActive 
                        ? '0 0 20px rgba(148, 200, 32, 0.8), 0 0 35px rgba(148, 200, 32, 0.4)' 
                        : isPassed 
                          ? '0 0 10px rgba(0, 157, 165, 0.5)' 
                          : 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isActive ? 'scale(1.15)' : 'scale(1)'
                    }}
                  >
                    {isPassed ? <Check size={14} strokeWidth={3} /> : step.num}
                  </div>

                  {/* Dot Name Label */}
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: isActive ? '0.85rem' : '0.74rem',
                        fontWeight: isActive ? 800 : 600,
                        color: isActive 
                          ? '#FFFFFF' 
                          : isPassed 
                            ? 'var(--brand-teal-light)' 
                            : 'var(--text-light-subtle)',
                        letterSpacing: '0.04em',
                        transition: 'color 0.2s ease',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {step.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================================================================
            ACTIVE STAGE CARD (3D Perspective Depth & Smooth Reveal)
            =================================================================== */}
        <div style={{ perspective: '1200px' }}>
          <div
            ref={cardStageRef}
            key={current.num}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="card-dark"
            style={{
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              backgroundColor: 'rgba(11, 19, 31, 0.95)',
              border: '1px solid rgba(0, 157, 165, 0.35)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.65), 0 0 30px rgba(0, 157, 165, 0.15)',
              animation: 'pathwayStep3DFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s ease-out',
              position: 'relative'
            }}
          >
            {/* Subtle 3D Ambient Depth Orb */}
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(0, 157, 165, 0.14) 0%, transparent 70%)',
                pointerEvents: 'none',
                transform: 'translateZ(-10px)'
              }}
            />

            <div>
              {/* Header Row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                  transform: 'translateZ(25px)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <span className="badge badge-teal">Phase {current.num}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      FOCUS: {current.focus}
                    </span>
                  </div>

                  <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                    {current.name} • {current.stage}
                  </h3>
                </div>

                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'rgba(0, 157, 165, 0.14)',
                    border: '1px solid rgba(0, 157, 165, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: current.accent,
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                    transform: 'translateZ(30px)'
                  }}
                >
                  <IconComp size={28} />
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-light-secondary)',
                  fontSize: '1.1rem',
                  lineHeight: '1.75',
                  marginBottom: '1.75rem',
                  maxWidth: '840px',
                  transform: 'translateZ(18px)'
                }}
              >
                {current.desc}
              </p>

              {/* Tangible Output / Deliverable Box */}
              <div
                style={{
                  padding: '1.15rem 1.5rem',
                  backgroundColor: 'rgba(7, 13, 20, 0.8)',
                  border: '1px solid rgba(0, 157, 165, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '1.75rem',
                  transform: 'translateZ(20px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                }}
              >
                <CheckCircle2 size={22} color="var(--brand-lime)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Tangible Phase Output & Milestone
                  </div>
                  <div style={{ fontSize: '0.96rem', color: '#FFFFFF', fontWeight: 600 }}>
                    {current.deliverable}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Strip */}
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
                Step {current.num} of 06 • Moving from Discovery to Execution
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => onActionClick && onActionClick('submit-content')}
                  className="btn btn-lime btn-sm"
                >
                  <span>Initiate Representation</span>
                  <ArrowUpRight size={14} />
                </button>

                <button
                  onClick={() => onActionClick && onActionClick('for-platforms')}
                  className="btn btn-secondary-dark btn-sm"
                >
                  <span>Platform Acquisition Inquiry</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3D Entry Animation & Mobile Overrides */}
      <style>{`
        @keyframes pathwayStep3DFadeIn {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateX(7deg) translateY(14px) translateZ(-30px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0deg) translateY(0) translateZ(0);
          }
        }
        @media (max-width: 960px) {
          .pathway-scroll-container {
            height: auto !important;
          }
          .pathway-sticky-stage {
            position: relative !important;
            top: 0 !important;
            min-height: auto !important;
          }
          .dots-constellation-track {
            overflow-x: auto !important;
          }
        }
      `}</style>
    </div>
  );
};
