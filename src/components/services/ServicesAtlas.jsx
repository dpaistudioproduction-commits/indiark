import React, { useState, useEffect, useRef } from 'react';
import { 
  Tv, Film, Layers, Music, Globe2, Video, Sliders, 
  ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight 
} from 'lucide-react';

export const ServicesAtlas = ({ onSelectService, onActionClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const stageCardRef = useRef(null);

  const services = [
    {
      id: '01',
      code: 'OTT PITCHING',
      title: 'OTT Platform Pitching',
      subtitle: 'Targeted curation and direct pitching to leading streaming buyers',
      icon: Tv,
      accentColor: 'var(--brand-teal)',
      isPitchable: true,
      pitchBadge: 'Direct Platform Pitch Mandate',
      pitchCtaText: 'PITCH YOUR OTT CONTENT',
      pitchSummary: 'We position your film or series directly in front of OTT commissioning editors & acquisition heads.',
      overview: 'We identify suitable OTT platforms and streaming buyers, position content in accordance with platform programming mandates, and manage the pitching process through commercial discussions and deal coordination.',
      targetBuyers: ['Netflix', 'Amazon Prime Video', 'SonyLIV', 'ZEE5', 'JioHotstar', 'Aha', 'SunNXT', 'Lionsgate Play'],
      commercialModels: ['Outright License Fee', 'Minimum Guarantee (MG)', 'AVOD Revenue Share', 'Multi-Territory Carve-Outs'],
      formats: ['Feature Films', 'Original Web Series', 'Regional Cinema', 'Dubbed & Multilingual', 'Archival Libraries'],
      process: ['Platform Mandate Matching', 'B2B Pitch Deck & Screener', 'Acquisitions Screening', 'Commercial Negotiation', 'Closing Coordination'],
      deliverables: [
        'Curated Platform Matching & Buyer Outreach',
        'B2B Pitch Decks & Screener Presentation',
        'Commercial Term Negotiation (License Fee / MG / Rev Share)',
        'Contract Term Sheet & Closing Coordination'
      ],
      turnaround: 'Pitch Evaluation: 48–72h • Platform Pitching: Immediate'
    },
    {
      id: '02',
      code: 'REPRESENTATION',
      title: 'Movie & Web Series Representation',
      subtitle: 'Comprehensive mandate representation from evaluation to deal closure',
      icon: Film,
      accentColor: 'var(--brand-lime)',
      isPitchable: true,
      pitchBadge: 'Full Producer Representation Mandate',
      pitchCtaText: 'SUBMIT FOR REPRESENTATION',
      pitchSummary: 'Dedicated commercial representation protecting rights integrity while unlocking maximum market valuation.',
      overview: 'We act as dedicated representatives for filmmakers, producers, and production studios to manage all facets of content representation, protecting rights integrity while actively unlocking commercial value across multiple buyers.',
      targetBuyers: ['Major Streaming Giants', 'National Satellite Networks', 'International Rights Aggregators', 'Theatrical SLATE Buyers'],
      commercialModels: ['Worldwide Rights Licensing', 'Language Dubbing Packages', 'Theatrical-to-Digital Windows', 'Remake Rights Optioning'],
      formats: ['Independent Feature Films', 'Studio Slate Productions', 'Original Miniseries', 'Festival Titles', 'Finished Rough Cuts'],
      process: ['Rights Audit & Chain of Title', 'Strategic Valuation Positioning', 'Active Buyer Interfacing', 'Multi-Party Bidding', 'Execution Support'],
      deliverables: [
        'Comprehensive Rights Portfolio Audit',
        'Active Buyer & Broadcaster Interfacing',
        'Direct Negotiation of Commercial Valuation',
        'Execution Support on Representation Mandates'
      ],
      turnaround: 'Mandate Review: 48h • Direct Buyer Engagement'
    },
    {
      id: '03',
      code: 'RIGHTS BUSINESS',
      title: 'Content Rights Business',
      subtitle: 'Multi-territory and multi-window licensing architecture',
      icon: Layers,
      accentColor: 'var(--brand-teal)',
      isPitchable: true,
      pitchBadge: 'Multi-Window Rights Monetization',
      pitchCtaText: 'MONETIZE RIGHTS PORTFOLIO',
      pitchSummary: 'Unbundling and licensing your content across TV, digital, transport, and international markets.',
      overview: 'We explore and structure licensing opportunities across OTT, linear satellite television, digital networks, audio publishing, in-flight transportation, and international territories.',
      targetBuyers: ['Linear Satellite Broadcasters (DTH/Cable)', 'Global In-Flight Entertainment', 'International Dubbing Buyers', 'Telco Video Networks'],
      commercialModels: ['Satellite Television Syndication', 'In-Flight & Transport Rights', 'International Dubbing & Remake', 'Ancillary Windowing'],
      formats: ['SVOD / AVOD Rights', 'Satellite Television Broadcast', 'Music Publishing & Master Sync', 'In-Flight / Transport', 'International Rights'],
      process: ['Windowing Optimization', 'Territory Carve-outs', 'Rights Structuring', 'Cross-Media Syndication', 'Ancillary Monetization'],
      deliverables: [
        'Territory-Specific Rights Carve-outs',
        'Windowing Strategy Optimization',
        'Ancillary & Transport Rights Monetization',
        'International Dubbing & Remake Rights Inquiries'
      ],
      turnaround: 'Rights Valuation: 3–5 Days • Syndication Deployment'
    },
    {
      id: '04',
      code: 'MUSIC BUSINESS',
      title: 'Music Business',
      subtitle: 'Commercial opportunities for independent creators and audio rights holders',
      icon: Music,
      accentColor: 'var(--brand-lime)',
      isPitchable: true,
      pitchBadge: 'Audio Masters & Sync Mandate',
      pitchCtaText: 'PITCH MUSIC CATALOGUE',
      pitchSummary: 'Distribute, monetize, and sync your music masters across streaming platforms and video productions.',
      overview: 'We support independent music creators, composers, and rights holders with digital distribution, sync licensing for film and digital media, audio publishing administration, and catalogue monetization.',
      targetBuyers: ['Spotify, Apple Music, JioSaavn, Wynk', 'Film & Web Series Music Supervisors', 'Advertising Commercial Agencies', 'YouTube Sound Sync'],
      commercialModels: ['Master Rights Sync Fees', 'Streaming DSP Royalty Payouts', 'Publishing Administration', 'Brand Sync Partnerships'],
      formats: ['Independent Singles & EPs', 'Film Soundtracks & Original Score (BGM)', 'Audio Catalogues', 'Sync & Master Rights'],
      process: ['Streaming Strategy & Ingestion', 'Sync Placement Pitching', 'Publishing Rights Admin', 'Partner Synergy & Monetization'],
      deliverables: [
        'Audio Streaming Platform Strategy',
        'Sync Licensing for Films, Ads & Web Shows',
        'Music Rights Administration & Monetization',
        'Artist & Digital Platform Partnerships'
      ],
      turnaround: 'Track Review: 48h • Direct Platform Onboarding'
    },
    {
      id: '05',
      code: 'DIGITAL BUSINESS',
      title: 'Digital Business',
      subtitle: 'YouTube syndication, social video optimization, and digital networks',
      icon: Globe2,
      accentColor: 'var(--brand-teal)',
      isPitchable: true,
      pitchBadge: 'AVOD & YouTube Syndication',
      pitchCtaText: 'SYNDICATE DIGITAL CONTENT',
      pitchSummary: 'Maximize legitimate AVOD revenues, claim management, and social video monetization with rights safety.',
      overview: 'We help content owners unlock legitimate revenue streams across YouTube, Facebook, social video ecosystems, and emerging digital entertainment channels with full rights protection.',
      targetBuyers: ['YouTube Premium & MCN Networks', 'Facebook Watch / Meta Video', 'Snapchat Discover & Spotlight', 'FAST Channels & CTV Apps'],
      commercialModels: ['Content ID Claim Revenue Share', 'AVOD Ad Yield Optimization', 'Shorts & Reel Derivative Monetization', 'Global Digital FAST Syndication'],
      formats: ['YouTube MCN Networks', 'Social Syndication', 'Digital Video Portals', 'Creator Catalogues', 'Short-form Video Slates'],
      process: ['Content ID Claim Protection', 'AVOD Optimization & SEO', 'Short & Long Repurposing', 'Multi-Network Syndication'],
      deliverables: [
        'Digital Rights Protection & Claim Management',
        'AVOD Monetization & Revenue Optimization',
        'Catalogue Repurposing for Short & Long Form Video',
        'Cross-Platform Content Distribution'
      ],
      turnaround: 'Digital Audit: 24–48h • Claim Protection Setup'
    },
    {
      id: '06',
      code: 'PRODUCTION',
      title: 'Video Production',
      subtitle: 'Turnkey commercial and documentary production solutions',
      icon: Video,
      accentColor: 'var(--brand-lime)',
      isPitchable: false,
      pitchBadge: 'Turnkey Production Suite',
      pitchCtaText: 'COMMISSION PRODUCTION',
      pitchSummary: 'End-to-end creative production from script development to cinematic 4K/6K shooting.',
      overview: 'End-to-end production craft delivering high-impact video content for corporate brands, commercial advertisers, events, and documentary storytelling.',
      targetBuyers: ['Corporate Brands', 'Direct-to-Consumer Enterprises', 'Documentary Producers', 'Creative Ad Agencies'],
      commercialModels: ['Turnkey Commercial Packages', 'Multi-Cam Live Event Production', 'Branded Narrative Documentaries', 'Modular Social Ad Suites'],
      formats: ['Ad Films & Commercials', 'Corporate Brand Films', 'Documentaries & Docufictions', 'Promotional Campaigns'],
      process: ['Concept & Scripting', 'Cinematography & Location Production', 'Talent & Crew Management', 'High-Res Delivery'],
      deliverables: [
        'Concept Development & Creative Scripting',
        'Cinematography & Location Production',
        'Talent & Crew Management',
        'Turnkey High-Resolution Delivery'
      ],
      turnaround: 'Project Scoping: 24–48h • Production Deployment'
    },
    {
      id: '07',
      code: 'POST-PRODUCTION',
      title: 'Post-Production',
      subtitle: 'High-precision technical finishing, editing, and colour grading',
      icon: Sliders,
      accentColor: 'var(--brand-teal)',
      isPitchable: false,
      pitchBadge: 'Finishing & Mastering Lab',
      pitchCtaText: 'BOOK POST-PRODUCTION',
      pitchSummary: 'Precision DaVinci Resolve HDR colour science, NLE offline/online editing, and broadcast QC.',
      overview: 'Professional editing and colour grading workflows ensuring international broadcast, OTT, and theatrical technical compliance.',
      targetBuyers: ['Feature Film Producers', 'OTT Series Showrunners', 'Commercial Video Directors', 'Broadcasters'],
      commercialModels: ['DaVinci Resolve HDR Color Suite', 'NLE Offline/Online Editing Package', 'International Broadcast QC Mastering', 'DCP & IMF Packaging'],
      formats: ['Feature Film Finishing', 'Commercial Video Editing', 'DI / DaVinci Resolve', 'OTT Mastering', 'IMF / DCP Archival Delivery'],
      process: ['NLE Editing Workflows', 'Color Science & Look Development', 'Audio-Visual Sync & Conforming', 'QC Compliance & Deliverables'],
      deliverables: [
        'Non-Linear Editing (NLE) Workflows',
        'Colour Science & HDR / Rec.709 Grading',
        'Multi-Format Deliverables & QC Compliance',
        'Audio-Visual Finishing'
      ],
      turnaround: 'Timeline Configured to Production Schedule'
    }
  ];

  // Scroll-driven progression logic for 01 -> 07 with requestAnimationFrame
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
          
          const step = Math.min(6, Math.floor(progress * 6.999));
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
  }, [services.length]);

  // Subtle 3D Card Tilt on Mouse Move
  const handleMouseMove = (e) => {
    if (!stageCardRef.current) return;
    const rect = stageCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -3;
    const tiltY = ((x - centerX) / centerX) * 3;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const jumpToStream = (idx) => {
    setActiveIndex(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = scrollTop + rect.top + (idx / 6) * totalScrollable;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const current = services[activeIndex] || services[0];
  const IconComponent = current.icon;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '350vh',
        width: '100%'
      }}
      className="atlas-scroll-container"
    >
      {/* Sticky Viewport Stage */}
      <div
        style={{
          position: 'sticky',
          top: '70px',
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBottom: '1.5rem'
        }}
        className="atlas-sticky-stage"
      >
        {/* Section Header */}
        <div style={{ maxWidth: '900px', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span className="badge badge-teal">
              Scroll-Driven Atlas
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 700, letterSpacing: '0.06em' }}>
              STREAM {activeIndex + 1} OF 07 • {current.isPitchable ? '🔥 OPEN FOR CONTENT PITCHING' : 'STUDIO SERVICES'}
            </span>
          </div>

          <h2 className="display-statement" style={{ color: '#FFFFFF', marginBottom: '0.25rem' }}>
            SERVICES ATLAS
          </h2>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
            Explore our seven core media verticals. Streams 01 to 05 are active commercial pitching channels for producers, filmmakers, and rights holders.
          </p>
        </div>

        {/* 3D Perspective Atlas Container */}
        <div
          style={{
            perspective: '1200px'
          }}
        >
          <div className="atlas-container" style={{ boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 157, 165, 0.1)', padding: 'clamp(1.2rem, 2.2vw, 1.85rem)' }}>
            
            {/* Left Navigation Streams */}
            <div className="atlas-nav" style={{ minWidth: '290px' }}>
              
              {/* Scroll Progress Bar */}
              <div style={{ padding: '0.4rem 0.6rem', marginBottom: '0.4rem', borderBottom: '1px solid var(--border-dark)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span className="eyebrow-label" style={{ fontSize: '0.72rem' }}>Scroll Progression</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 800 }}>
                    {Math.round(((activeIndex + 1) / 7) * 100)}%
                  </span>
                </div>
                <div style={{ height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${((activeIndex + 1) / 7) * 100}%`,
                      backgroundColor: 'var(--brand-teal)',
                      transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </div>
              </div>

              {/* Stream Buttons */}
              {services.map((item, idx) => {
                const isActive = activeIndex === idx;
                const isPassed = activeIndex > idx;

                return (
                  <button
                    key={item.id}
                    onClick={() => jumpToStream(idx)}
                    className={`atlas-nav-btn ${isActive ? 'is-active' : ''}`}
                    style={{
                      padding: '0.65rem 0.85rem',
                      background: isActive 
                        ? 'linear-gradient(90deg, rgba(0, 157, 165, 0.22) 0%, rgba(0, 157, 165, 0.06) 100%)' 
                        : isPassed 
                          ? 'rgba(255, 255, 255, 0.02)' 
                          : 'transparent'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexGrow: 1 }}>
                      <span
                        className="atlas-nav-num"
                        style={{
                          color: isActive ? 'var(--brand-lime)' : isPassed ? 'var(--brand-teal-light)' : 'var(--text-light-subtle)',
                          marginRight: '0.4rem'
                        }}
                      >
                        {item.id}
                      </span>
                      <span
                        className="atlas-nav-title"
                        style={{
                          color: isActive ? '#FFFFFF' : isPassed ? 'var(--text-light-secondary)' : 'var(--text-light-subtle)',
                          fontWeight: isActive ? 700 : 500,
                          fontSize: '0.84rem'
                        }}
                      >
                        {item.title}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      {item.isPitchable && (
                        <span
                          style={{
                            fontSize: '0.62rem',
                            padding: '0.15rem 0.45rem',
                            borderRadius: '4px',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            backgroundColor: isActive ? 'rgba(148, 200, 32, 0.25)' : 'rgba(0, 157, 165, 0.12)',
                            color: isActive ? 'var(--brand-lime-light)' : 'var(--brand-teal-light)',
                            border: `1px solid ${isActive ? 'rgba(148, 200, 32, 0.4)' : 'rgba(0, 157, 165, 0.2)'}`
                          }}
                        >
                          Pitch
                        </span>
                      )}
                      <ChevronRight size={14} style={{ opacity: isActive ? 1 : 0.25, color: isActive ? 'var(--brand-lime)' : 'inherit' }} />
                    </div>
                  </button>
                );
              })}

              {/* Scroll Hint */}
              <div style={{ marginTop: 'auto', paddingTop: '0.6rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.72rem', color: 'var(--text-light-muted)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>↓ Scroll to reveal streams</span>
                <span style={{ color: 'var(--brand-lime)' }}>1 to 5 Pitchable</span>
              </div>
            </div>

            {/* Right 3D Tilt Stage */}
            <div
              ref={stageCardRef}
              key={current.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="atlas-stage"
              style={{
                animation: 'atlasStage3DFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out',
                position: 'relative',
                padding: 'clamp(0.9rem, 1.8vw, 1.5rem)',
                minHeight: 'auto'
              }}
            >
              {/* Subtle 3D Ambient Depth Orb */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(0, 157, 165, 0.14) 0%, rgba(148, 200, 32, 0.05) 50%, transparent 75%)',
                  pointerEvents: 'none',
                  transform: 'translateZ(-10px)'
                }}
              />

              <div>
                {/* Header Row with 3D Elevation + Instant Top Pitch CTA */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1rem', transform: 'translateZ(20px)' }}>
                  <div style={{ flex: 1, minWidth: '260px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-teal" style={{ fontSize: '0.7rem', padding: '0.2rem 0.55rem' }}>Stream {current.id}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--brand-lime)', fontWeight: 700, letterSpacing: '0.08em' }}>
                        {current.code}
                      </span>
                      {current.isPitchable && (
                        <span
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            padding: '0.2rem 0.6rem',
                            borderRadius: 'var(--radius-full)',
                            backgroundColor: 'rgba(148, 200, 32, 0.16)',
                            border: '1px solid rgba(148, 200, 32, 0.45)',
                            color: 'var(--brand-lime-light)',
                            letterSpacing: '0.04em'
                          }}
                        >
                          ● OPEN FOR PITCHING
                        </span>
                      )}
                    </div>
                    <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
                      {current.title}
                    </h3>
                    <p style={{ color: 'var(--brand-teal-light)', fontSize: '0.88rem', fontWeight: 500, marginTop: '0.2rem', marginBottom: 0 }}>
                      {current.subtitle}
                    </p>
                  </div>

                  {/* Top Action & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button
                      onClick={() => onActionClick && onActionClick(current.isPitchable ? 'submit-content' : 'contact')}
                      className={`btn ${current.isPitchable ? 'btn-lime' : 'btn-outline-teal'} btn-sm`}
                      style={{
                        padding: '0.55rem 1rem',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        boxShadow: current.isPitchable ? '0 4px 15px rgba(148, 200, 32, 0.3)' : 'none'
                      }}
                    >
                      <span>{current.pitchCtaText}</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'rgba(0, 157, 165, 0.12)',
                        border: '1px solid rgba(0, 157, 165, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: current.accentColor,
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.35)',
                        transform: 'translateZ(25px)',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={22} />
                    </div>
                  </div>
                </div>

                {/* Overview Statement */}
                <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '1rem', maxWidth: '850px', transform: 'translateZ(15px)' }}>
                  {current.overview}
                </p>

                {/* High-Impact Pitch & Commercial Targets Block */}
                <div
                  style={{
                    backgroundColor: 'rgba(7, 13, 20, 0.75)',
                    border: '1px solid rgba(0, 157, 165, 0.22)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.9rem 1.1rem',
                    marginBottom: '1rem',
                    transform: 'translateZ(16px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
                    {/* Target Buyers & Platforms */}
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--brand-lime)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span>Target Buyers & Platforms:</span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {current.targetBuyers.map((buyer, bIdx) => (
                          <span
                            key={bIdx}
                            style={{
                              fontSize: '0.74rem',
                              padding: '0.2rem 0.55rem',
                              borderRadius: '4px',
                              backgroundColor: 'rgba(0, 157, 165, 0.08)',
                              border: '1px solid rgba(0, 157, 165, 0.2)',
                              color: '#FFFFFF',
                              fontWeight: 500
                            }}
                          >
                            {buyer}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Commercial Deal Structure */}
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.4rem' }}>
                        Commercial Deal Models:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {current.commercialModels.map((model, mIdx) => (
                          <span
                            key={mIdx}
                            style={{
                              fontSize: '0.74rem',
                              padding: '0.2rem 0.55rem',
                              borderRadius: '4px',
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--border-dark)',
                              color: 'var(--text-light-secondary)'
                            }}
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formats Grid */}
                <div style={{ marginBottom: '1rem', transform: 'translateZ(15px)' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-light-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Accepted Content Formats & Categories:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {current.formats.map((fmt, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.76rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid var(--border-dark)',
                          color: 'var(--text-light-primary)'
                        }}
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div style={{ marginBottom: '1.1rem', transform: 'translateZ(18px)' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem' }}>
                    Mandate Deliverables & Execution Scope:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.55rem' }}>
                    {current.deliverables.map((del, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          padding: '0.55rem 0.75rem',
                          backgroundColor: 'rgba(7, 13, 20, 0.5)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid rgba(255, 255, 255, 0.04)',
                          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        <CheckCircle2 size={14} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-light-secondary)', lineHeight: '1.45' }}>
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-dark)',
                  transform: 'translateZ(15px)'
                }}
              >
                <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>
                  <span style={{ color: 'var(--brand-lime)', fontWeight: 700 }}>Stream {current.id} of 07</span> • {current.turnaround}
                </div>

                <div style={{ display: 'flex', gap: '0.65rem' }}>
                  <button
                    onClick={() => onActionClick && onActionClick(current.isPitchable ? 'submit-content' : 'contact')}
                    className="btn btn-lime btn-sm"
                    style={{ fontWeight: 700, padding: '0.55rem 1.15rem' }}
                  >
                    <span>{current.pitchCtaText}</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <button
                    onClick={() => onActionClick && onActionClick('for-platforms')}
                    className="btn btn-secondary-dark btn-sm"
                    style={{ fontSize: '0.78rem' }}
                  >
                    <span>Buyer Briefing</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* 3D Entry Animation & Overrides */}
      <style>{`
        @keyframes atlasStage3DFadeIn {
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
          .atlas-scroll-container {
            height: auto !important;
          }
          .atlas-sticky-stage {
            position: relative !important;
            top: 0 !important;
            min-height: auto !important;
          }
          .atlas-stage {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};
