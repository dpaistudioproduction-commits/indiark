import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, Tv, Film, 
  Layers, Music, Globe2, Video, Sliders, ChevronRight, ChevronLeft, Briefcase, 
  ShieldCheck, Clock, TrendingUp, Users, Building, Eye, Award,
  Mail, Phone, MapPin, Send
} from 'lucide-react';
import { ASSOCIATED_ORGANIZATION, CONTACT_INFO } from '../services/dataService';

export const HomePage = ({ setActivePage, projects, onSelectProject }) => {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [serviceViewMode, setServiceViewMode] = useState('horizontal');
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const [hoveredPath, setHoveredPath] = useState(null);
  const serviceScrollRef = useRef(null);

  // Section 12 Home Contact Form State
  const [homeContactForm, setHomeContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Producer / Slate Representation',
    message: ''
  });
  const [homeContactSubmitted, setHomeContactSubmitted] = useState(false);
  const [homeContactSubmitting, setHomeContactSubmitting] = useState(false);

  const handleHomeContactSubmit = (e) => {
    e.preventDefault();
    setHomeContactSubmitting(true);
    setTimeout(() => {
      setHomeContactSubmitting(false);
      setHomeContactSubmitted(true);
    }, 500);
  };

  const scrollServiceTrack = (direction) => {
    if (serviceScrollRef.current) {
      const cardWidth = serviceScrollRef.current.offsetWidth * 0.75;
      serviceScrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServiceIndex = (idx) => {
    setActiveServiceIdx(idx);
    if (serviceScrollRef.current) {
      const cards = serviceScrollRef.current.querySelectorAll('.service-scroll-card');
      if (cards[idx]) {
        cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleServiceScroll = () => {
    if (!serviceScrollRef.current) return;
    const container = serviceScrollRef.current;
    const cards = container.querySelectorAll('.service-scroll-card');
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    
    let closestIdx = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(containerCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    if (closestIdx !== activeServiceIdx) {
      setActiveServiceIdx(closestIdx);
    }
  };

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 7 Approved Service Streams
  const services = [
    {
      id: '01',
      code: 'OTT PITCHING',
      title: 'OTT Platform Pitching',
      subtitle: 'Targeted curation and direct pitching to leading streaming buyers',
      tag: 'Pitch Open',
      isPitchable: true,
      icon: Tv,
      overview: 'We identify suitable OTT platforms and streaming buyers, position content in accordance with platform programming mandates, and manage the pitching process through commercial discussions and deal coordination.',
      formats: ['Feature Films', 'Original Web Series', 'Regional Cinema', 'Dubbed & Multilingual', 'Archival Libraries'],
      buyers: ['Netflix', 'Amazon Prime Video', 'SonyLIV', 'ZEE5', 'JioHotstar', 'Aha', 'SunNXT'],
      deliverables: [
        'Curated Platform Matching & Buyer Outreach',
        'B2B Pitch Decks & Screener Presentation',
        'Commercial Term Negotiation (License Fee / MG / Rev Share)',
        'Contract Term Sheet & Closing Coordination'
      ]
    },
    {
      id: '02',
      code: 'REPRESENTATION',
      title: 'Movie & Web Series Representation',
      subtitle: 'Comprehensive mandate representation from evaluation to deal closure',
      tag: 'Producer Mandate',
      isPitchable: true,
      icon: Film,
      overview: 'We act as dedicated representatives for filmmakers, producers, and production studios to manage all facets of content representation, protecting rights integrity while unlocking maximum market valuation.',
      formats: ['Independent Feature Films', 'Studio Slate Productions', 'Original Miniseries', 'Festival Titles', 'Finished Rough Cuts'],
      buyers: ['Major Streaming Giants', 'National Satellite Networks', 'International Rights Aggregators'],
      deliverables: [
        'Comprehensive Rights Portfolio Audit',
        'Active Buyer & Broadcaster Interfacing',
        'Direct Negotiation of Commercial Valuation',
        'Execution Support on Representation Mandates'
      ]
    },
    {
      id: '03',
      code: 'RIGHTS BUSINESS',
      title: 'Content Rights Business',
      subtitle: 'Multi-territory and multi-window licensing architecture',
      tag: 'Rights Licensing',
      isPitchable: true,
      icon: Layers,
      overview: 'We explore and structure licensing opportunities across OTT, linear satellite television, digital networks, audio publishing, in-flight transportation, and international territories.',
      formats: ['SVOD / AVOD Rights', 'Satellite TV Broadcast', 'Music Publishing & Master Sync', 'In-Flight / Transport', 'International Rights'],
      buyers: ['Satellite TV Broadcasters', 'In-Flight Airline Networks', 'International Dubbing Buyers'],
      deliverables: [
        'Territory-Specific Rights Carve-outs',
        'Windowing Strategy Optimization',
        'Ancillary & Transport Rights Monetization',
        'International Dubbing & Remake Inquiries'
      ]
    },
    {
      id: '04',
      code: 'MUSIC BUSINESS',
      title: 'Music Business',
      subtitle: 'Commercial opportunities for independent creators and audio rights holders',
      tag: 'Music & Sync',
      isPitchable: true,
      icon: Music,
      overview: 'We support independent music creators, composers, and rights holders with digital distribution, sync licensing for film and digital media, audio publishing administration, and catalogue monetization.',
      formats: ['Original Soundtracks', 'Independent Singles & EPs', 'BGM Libraries', 'Sync Masters'],
      buyers: ['Spotify', 'Apple Music', 'JioSaavn', 'Wynk', 'Film & Ad Sync Agencies'],
      deliverables: [
        'Audio Streaming Platform Strategy',
        'Sync Licensing for Films, Ads & Web Shows',
        'Music Rights Administration & Monetization',
        'Artist & Digital Platform Partnerships'
      ]
    },
    {
      id: '05',
      code: 'DIGITAL BUSINESS',
      title: 'Digital Business',
      subtitle: 'YouTube syndication, social video optimization, and digital networks',
      tag: 'Digital AVOD',
      isPitchable: true,
      icon: Globe2,
      overview: 'We help content owners unlock legitimate revenue streams across YouTube, Facebook, social video ecosystems, and emerging digital entertainment channels with full rights protection.',
      formats: ['YouTube MCN Networks', 'Social Syndication', 'Digital Portals', 'Creator Catalogues'],
      buyers: ['YouTube Premium', 'Facebook Watch', 'Snapchat Spotlight', 'FAST Channels'],
      deliverables: [
        'Digital Rights Protection & Claim Management',
        'AVOD Monetization & Revenue Optimization',
        'Catalogue Repurposing for Short & Long Form Video',
        'Cross-Platform Content Distribution'
      ]
    },
    {
      id: '06',
      code: 'PRODUCTION',
      title: 'Video Production',
      subtitle: 'Turnkey commercial and documentary production solutions',
      tag: 'Production Suite',
      isPitchable: false,
      icon: Video,
      overview: 'End-to-end production craft delivering high-impact video content for corporate brands, commercial advertisers, events, and documentary storytelling.',
      formats: ['Commercial Ad Films', 'Corporate Brand Films', 'Documentaries', 'Promotional Campaigns'],
      buyers: ['Corporate Brands', 'Direct-to-Consumer Enterprises', 'Creative Ad Agencies'],
      deliverables: [
        'Concept Development & Creative Scripting',
        'Cinematography & Location Production',
        'Talent & Crew Management',
        'Turnkey High-Resolution Delivery'
      ]
    },
    {
      id: '07',
      code: 'POST-PRODUCTION',
      title: 'Post-Production',
      subtitle: 'High-precision technical finishing, editing, and colour grading',
      tag: 'Finishing Lab',
      isPitchable: false,
      icon: Sliders,
      overview: 'Professional editing and colour grading workflows ensuring international broadcast, OTT, and theatrical technical compliance.',
      formats: ['Feature Film Finishing', 'Commercial Video Editing', 'DI / DaVinci Resolve', 'OTT Mastering'],
      buyers: ['Feature Film Producers', 'OTT Series Showrunners', 'Commercial Directors'],
      deliverables: [
        'Non-Linear Editing (NLE) Workflows',
        'Colour Science & HDR / Rec.709 Grading',
        'Multi-Format Deliverables & QC Compliance',
        'Audio-Visual Finishing'
      ]
    }
  ];

  // 6-Stage Business Methodology
  const processStages = [
    {
      step: '01',
      name: 'UNDERSTAND',
      shortTitle: 'Content Evaluation',
      desc: 'Thorough evaluation of the project, commercial viability, Chain of Title verification, and rights audit.',
    },
    {
      step: '02',
      name: 'IDENTIFY',
      shortTitle: 'Buyer Mapping',
      desc: 'Targeted mapping of suitable OTT platforms, broadcasters, territories, and programming mandates.',
    },
    {
      step: '03',
      name: 'POSITION',
      shortTitle: 'Packaging & Valuation',
      desc: 'Packaging content with B2B pitch materials, screener protocols, and strategic commercial valuation.',
    },
    {
      step: '04',
      name: 'PITCH',
      shortTitle: 'Direct Outreach',
      desc: 'Direct representation and outreach to platform commissioning editors and content acquisition heads.',
    },
    {
      step: '05',
      name: 'NEGOTIATE',
      shortTitle: 'Commercial Terms',
      desc: 'Structuring commercial terms, license fees, minimum guarantees (MG), windowing, and territory rights.',
    },
    {
      step: '06',
      name: 'CLOSE',
      shortTitle: 'Contract Finalization',
      desc: 'Term sheet execution, legal closing coordination, technical QC compliance, and final delivery.',
    },
  ];

  // 6 Strategic Pillars for Why Indiark
  const pillars = [
    {
      id: '20-years',
      title: '20+ Years in Media',
      subtitle: 'Deep Industry Foundation',
      desc: 'Over two decades of foundational experience navigating film production, satellite broadcasting, digital rights, and the streaming ecosystem.',
      points: ['Decades of hands-on media business experience', 'Comprehensive grasp of legacy and modern platforms', 'Deep understanding of rights protection & commercial structures']
    },
    {
      id: 'ott-expertise',
      title: 'OTT Expertise',
      subtitle: 'Streaming Acquisition Knowledge',
      desc: 'Specialized insight into platform programming needs, acquisition windows, and content evaluation criteria across top OTT streamers.',
      points: ['Direct alignment with buyer programming mandates', 'Expertise in both licensed acquisitions and originals', 'Multi-lingual and regional content curation']
    },
    {
      id: 'platform-focused',
      title: 'Platform-Focused',
      subtitle: 'Curated Buyer Positioning',
      desc: 'We position content precisely where it belongs, saving creators time and giving buyers relevant, high-standard propositions.',
      points: ['Tailored B2B pitching decks and screeners', 'Elimination of mismatched submissions', 'Structured deal parameters ready for review']
    },
    {
      id: 'business-driven',
      title: 'Business-Driven',
      subtitle: 'Commercial Value Maximization',
      desc: 'Entertainment is art, but representation is business. We focus on fair valuation, contractual clarity, and structured monetisation.',
      points: ['Commercial term negotiation (License / MG / Rev-Share)', 'Windowing and multi-territory unbundling', 'Transparent deal documentation']
    },
    {
      id: 'producer-focused',
      title: 'Producer-Focused',
      subtitle: 'Creator-Centric Advocacy',
      desc: 'We protect the creator’s interests and rights integrity while actively unlocking new commercial revenue streams.',
      points: ['Chain of Title verification and security', 'Dedicated advocate in buyer negotiations', 'Long-term catalogue management']
    },
    {
      id: 'industry-network',
      title: 'Industry Network',
      subtitle: 'Established Industry Relations',
      desc: 'Longstanding professional relationships across platforms, production houses, broadcasters, and distribution channels.',
      points: ['Direct channel access to decision makers', 'Pan-India and international territory outreach', 'Collaborative multi-agency partnerships']
    }
  ];

  const currentService = services[activeServiceIdx];
  const ServiceIcon = currentService.icon;
  const currentPillar = pillars[activePillarIdx];
  const currentProject = projects[activeProjectIdx] || projects[0] || {};

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-950)' }}>

      {/* =====================================================================
          SECTION 01 — HERO (Layered Composition with Floating Depth)
          ===================================================================== */}
      <section 
        className="section"
        style={{
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(4.5rem, 8vw, 6.5rem)',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Subtle Ambient Radial Lighting */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1100px',
            height: '600px',
            background: 'radial-gradient(ellipse at center, rgba(0, 157, 165, 0.16) 0%, rgba(148, 200, 32, 0.03) 45%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          <div className="split-editorial" style={{ alignItems: 'center' }}>
            
            {/* Left Hero Narrative */}
            <div>
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <span className="badge badge-teal">
                  <Sparkles size={12} />
                  <span>Media Rights • Content Representation • Entertainment Business</span>
                </span>
              </div>

              {/* Headline with Masked Upward Reveal */}
              <h1 className="display-hero hero-reveal-text" style={{ marginBottom: '1.5rem' }}>
                CONNECTING GREAT CONTENT WITH THE <span style={{ color: 'var(--brand-teal-light)' }}>RIGHT OPPORTUNITIES</span>
              </h1>

              {/* Approved Subtitle */}
              <p className="text-editorial-body" style={{ marginBottom: '2.25rem' }}>
                Indiark Entertainments is an entertainment rights house and media business agency representing producers, filmmakers, and creators to negotiate and close commercial licensing deals across OTT platforms, broadcasters, and global buyers.
              </p>

              {/* Strategic CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                <button
                  onClick={() => handleNav('submit-content')}
                  className="btn btn-lime btn-lg"
                >
                  <span>PITCH YOUR CONTENT</span>
                  <ArrowUpRight size={18} />
                </button>

                <button
                  onClick={() => handleNav('what-we-do')}
                  className="btn btn-secondary-dark btn-lg"
                >
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Core Business Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {['CONTENT REPRESENTATION', 'OTT', 'MEDIA RIGHTS', 'DIGITAL', 'MUSIC'].map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: 'var(--radius-xs)',
                      color: 'var(--text-light-secondary)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Layered Visual with Floating Depth */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              
              {/* Main Visual Base Card */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '460px',
                  backgroundColor: 'rgba(11, 19, 31, 0.85)',
                  border: '1px solid var(--border-teal-subtle)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>Commercial Intake Hub</span>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-lime)', boxShadow: '0 0 10px var(--brand-lime)' }} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Active Representation Slate
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem' }}>
                    Multi-Platform Distribution
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: 'OTT Pitching Mandates', val: 'Direct Acquisitions' },
                    { label: 'Rights Structuring', val: 'SVOD / Satellite / Master' },
                    { label: 'Territory Coverage', val: 'Pan-India & Overseas' }
                  ].map((row, rI) => (
                    <div key={rI} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0.85rem', backgroundColor: 'rgba(7, 13, 20, 0.65)', borderRadius: 'var(--radius-xs)', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--text-light-muted)' }}>{row.label}</span>
                      <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{row.val}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleNav('for-platforms')}
                  className="btn btn-outline-teal btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>FOR PLATFORMS & BUYERS</span>
                  <Briefcase size={14} />
                </button>
              </div>

              {/* Floating Depth Fragment 1 (Top Right) */}
              <div
                className="animate-float-slow"
                style={{
                  position: 'absolute',
                  top: '-24px',
                  right: '-16px',
                  backgroundColor: 'rgba(7, 13, 20, 0.92)',
                  border: '1px solid rgba(0, 157, 165, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
                  zIndex: 3,
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(0, 157, 165, 0.15)', color: 'var(--brand-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Tv size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--brand-teal-light)', fontWeight: 700 }}>DIRECT OTT PITCHING</div>
                  <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 700 }}>Netflix • Prime • SonyLIV</div>
                </div>
              </div>

              {/* Floating Depth Fragment 2 (Bottom Left) */}
              <div
                className="animate-float-drift"
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  backgroundColor: 'rgba(7, 13, 20, 0.92)',
                  border: '1px solid rgba(148, 200, 32, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
                  zIndex: 3,
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(148, 200, 32, 0.15)', color: 'var(--brand-lime)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Film size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--brand-lime)', fontWeight: 700 }}>PRODUCER REPRESENTATION</div>
                  <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 700 }}>20+ Years Experience</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================================
          SECTION 02 — CREDIBILITY / HIGHLIGHT (Verified statement only)
          ===================================================================== */}
      <section style={{ backgroundColor: '#0B131F', padding: '2.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div className="highlight-strip" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            
            <div className="highlight-stat-box highlight-lime">
              <div style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, color: 'var(--brand-lime)', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                20+
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF', marginTop: '0.35rem' }}>
                Years of Media Experience
              </div>
            </div>

            <div className="highlight-stat-box">
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, fontFamily: 'var(--font-heading)' }}>
                MEDIA RIGHTS & LICENSING
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.35rem' }}>
                Multi-window & territorial syndication
              </div>
            </div>

            <div className="highlight-stat-box">
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, fontFamily: 'var(--font-heading)' }}>
                OTT & BUYER PITCHING
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.35rem' }}>
                Direct outreach to platform acquisition heads
              </div>
            </div>

            <div className="highlight-stat-box">
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, fontFamily: 'var(--font-heading)' }}>
                PRODUCER REPRESENTATION
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.35rem' }}>
                From evaluation to commercial term closure
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================================
          SECTION 03 — WHO WE ARE (Split Corporate Narrative + Mask Reveal)
          ===================================================================== */}
      <section className="section section-dark">
        <div className="container">
          <div className="split-editorial">
            
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>Corporate Identity</span>
              <h2 className="display-statement" style={{ marginBottom: '1.5rem' }}>
                MEDIA EXPERIENCE.<br />
                BUSINESS UNDERSTANDING.<br />
                <span style={{ color: 'var(--brand-teal-light)' }}>INDUSTRY CONNECTIONS.</span>
              </h2>
              <p className="text-editorial-body" style={{ marginBottom: '1.5rem' }}>
                Indiark Entertainments operates as a strategic bridge between content creators and commercial media buyers. We understand the creative vision of filmmakers and the business requirements of platforms.
              </p>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                Backed by over <strong>20 years of media industry experience</strong>, our team manages the entire representation pipeline—from evaluating scripts and rough cuts to structuring complex multi-window licensing contracts across OTT, satellite television, and global territories.
              </p>

              <button
                onClick={() => handleNav('who-we-are')}
                className="btn btn-secondary-dark"
              >
                <span>LEARN MORE ABOUT INDIARK</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(11, 19, 31, 0.75)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2rem, 3.5vw, 3rem)',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div style={{ fontSize: '0.82rem', color: 'var(--brand-lime)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                The Indiark Commercial Bridge
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(0, 157, 165, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-teal-light)', flexShrink: 0 }}>
                    <Film size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.95rem' }}>For Content Creators & Producers</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>
                      Professional representation, B2B pitching decks, valuation defense, and direct access to decision-makers.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(148, 200, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-lime)', flexShrink: 0 }}>
                    <Tv size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.95rem' }}>For OTT Platforms & Broadcasters</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>
                      Curated, legally verified content slates matching programming briefs and audience demographics.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', flexShrink: 0 }}>
                    <Layers size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.95rem' }}>Full Rights & Windowing Structuring</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>
                      Unbundling SVOD, AVOD, TVOD, linear broadcast, in-flight, and international remake/dubbing rights.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================================
          SECTION 04 — WHAT WE DO (Scroll-Based: Horizontal Track & Top-Down Stack)
          ===================================================================== */}
      <section className="section section-secondary" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
        <div className="container" style={{ width: '100%' }}>
          
          {/* Header & Mode Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '0.6rem' }}>Seven Specialized Business Streams</span>
              <h2 className="display-statement">WHAT WE DO</h2>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem', margin: '0.4rem 0 0 0' }}>
                Explore our full suite of media representation, rights structuring, and content distribution streams.
              </p>
            </div>

            {/* Navigation & View Mode Controls */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              
              {/* View Mode Toggle */}
              <div style={{ display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', padding: '0.2rem', border: '1px solid var(--border-dark)' }}>
                <button
                  onClick={() => setServiceViewMode('horizontal')}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-xs)',
                    border: 'none',
                    backgroundColor: serviceViewMode === 'horizontal' ? 'var(--brand-teal)' : 'transparent',
                    color: serviceViewMode === 'horizontal' ? '#FFFFFF' : 'var(--text-light-secondary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  ⇆ Horizontal Track
                </button>
                <button
                  onClick={() => setServiceViewMode('vertical')}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-xs)',
                    border: 'none',
                    backgroundColor: serviceViewMode === 'vertical' ? 'var(--brand-teal)' : 'transparent',
                    color: serviceViewMode === 'vertical' ? '#FFFFFF' : 'var(--text-light-secondary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  ⇅ Top-Down Stack
                </button>
              </div>

              {serviceViewMode === 'horizontal' && (
                <>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-lime)', margin: '0 0.35rem', fontFamily: 'var(--font-heading)' }}>
                    <span>0{activeServiceIdx + 1}</span>
                    <span style={{ color: 'var(--text-light-subtle)', margin: '0 0.3rem' }}>/</span>
                    <span style={{ color: 'var(--text-light-muted)' }}>07</span>
                  </div>

                  <button
                    onClick={() => scrollServiceTrack('left')}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-dark)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    aria-label="Previous Stream"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--brand-teal)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; }}
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={() => scrollServiceTrack('right')}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-dark)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    aria-label="Next Stream"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--brand-teal)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              <button
                onClick={() => handleNav('what-we-do')}
                className="btn btn-secondary-dark btn-sm"
              >
                <span>Full Atlas</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Quick Stream Jump Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              overflowX: 'auto', 
              paddingBottom: '0.75rem', 
              marginBottom: '1.75rem',
              scrollbarWidth: 'none',
              width: '100%',
            }}
          >
            {services.map((svc, idx) => {
              const isSelected = activeServiceIdx === idx;
              return (
                <button
                  key={svc.id}
                  onClick={() => {
                    if (serviceViewMode === 'horizontal') {
                      scrollToServiceIndex(idx);
                    } else {
                      const el = document.getElementById(`service-vertical-${svc.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      setActiveServiceIdx(idx);
                    }
                  }}
                  style={{
                    padding: '0.6rem 1.1rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isSelected ? 'var(--brand-teal)' : 'rgba(255, 255, 255, 0.04)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-light-secondary)',
                    border: isSelected ? '1px solid var(--brand-teal)' : '1px solid transparent',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8rem',
                    fontWeight: isSelected ? 800 : 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span style={{ color: isSelected ? 'var(--brand-lime)' : 'inherit', opacity: isSelected ? 1 : 0.6 }}>{svc.id}</span>
                  <span>{svc.title}</span>
                </button>
              );
            })}
          </div>

          {/* 1. HORIZONTAL SCROLL TRACK MODE */}
          {serviceViewMode === 'horizontal' ? (
            <>
              <div
                ref={serviceScrollRef}
                onScroll={handleServiceScroll}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory',
                  scrollBehavior: 'smooth',
                  padding: '0.5rem 0.25rem 1.5rem 0.25rem',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'var(--brand-teal) rgba(255, 255, 255, 0.05)',
                  WebkitOverflowScrolling: 'touch',
                  width: '100%',
                }}
              >
                {services.map((svc, idx) => {
                  const SvcIcon = svc.icon;
                  const isActive = activeServiceIdx === idx;
                  return (
                    <div
                      key={svc.id}
                      className="service-scroll-card"
                      style={{
                        flex: '0 0 clamp(310px, 82vw, 840px)',
                        width: 'clamp(310px, 82vw, 840px)',
                        maxWidth: '100%',
                        scrollSnapAlign: 'start',
                        backgroundColor: 'rgba(7, 13, 20, 0.92)',
                        border: isActive ? '1px solid var(--border-teal-subtle)' : '1px solid var(--border-dark)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                        boxShadow: isActive ? '0 20px 50px -10px rgba(0, 157, 165, 0.15)' : '0 15px 40px rgba(0, 0, 0, 0.4)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        {/* Card Top Strip */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                            <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(0, 157, 165, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-teal-light)' }}>
                              <SvcIcon size={22} />
                            </div>
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--brand-lime)', letterSpacing: '0.08em' }}>STREAM {svc.id}</span>
                                <span style={{ fontSize: '0.72rem', color: 'var(--text-light-subtle)' }}>•</span>
                                <span style={{ fontSize: '0.72rem', color: 'var(--brand-teal-light)', fontWeight: 700 }}>{svc.code}</span>
                              </div>
                              <h3 style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0.2rem 0 0 0' }}>
                                {svc.title}
                              </h3>
                            </div>
                          </div>

                          {svc.isPitchable ? (
                            <span style={{ fontSize: '0.68rem', fontWeight: 800, padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(148, 200, 32, 0.15)', color: 'var(--brand-lime-light)', border: '1px solid rgba(148, 200, 32, 0.35)' }}>
                              OPEN FOR PITCHING
                            </span>
                          ) : (
                            <span style={{ fontSize: '0.68rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-light-secondary)', border: '1px solid var(--border-dark)' }}>
                              STUDIO SERVICE
                            </span>
                          )}
                        </div>

                        <p style={{ color: 'var(--brand-teal-light)', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.85rem' }}>
                          {svc.subtitle}
                        </p>

                        <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                          {svc.overview}
                        </p>

                        {/* Formats & Target Buyers Matrix */}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '1rem',
                            padding: '1.25rem',
                            backgroundColor: 'rgba(11, 19, 31, 0.7)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            marginBottom: '1.5rem',
                          }}
                        >
                          <div>
                            <div style={{ fontSize: '0.72rem', color: 'var(--brand-lime)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                              Target Platforms & Buyers:
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                              {svc.buyers.map((b, bI) => (
                                <span key={bI} style={{ fontSize: '0.72rem', padding: '0.2rem 0.55rem', backgroundColor: 'rgba(0, 157, 165, 0.1)', border: '1px solid rgba(0, 157, 165, 0.25)', borderRadius: 'var(--radius-xs)', color: '#FFFFFF' }}>
                                  {b}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div style={{ fontSize: '0.72rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                              Accepted Formats:
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                              {svc.formats.map((f, fI) => (
                                <span key={fI} style={{ fontSize: '0.72rem', padding: '0.2rem 0.55rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-xs)', color: 'var(--text-light-secondary)' }}>
                                  {f}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Deliverables Checklist */}
                        <div style={{ marginBottom: '1.75rem' }}>
                          <div style={{ fontSize: '0.74rem', color: 'var(--text-light-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
                            Execution Deliverables:
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.5rem' }}>
                            {svc.deliverables.map((del, dI) => (
                              <div key={dI} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-light-secondary)' }}>
                                <CheckCircle2 size={14} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                                <span>{del}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Bottom CTA Strip */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>
                          Commercial Representation & Rights Mandate
                        </div>
                        <button
                          onClick={() => handleNav(svc.isPitchable ? 'submit-content' : 'contact')}
                          className={`btn ${svc.isPitchable ? 'btn-lime' : 'btn-secondary-dark'} btn-sm`}
                        >
                          <span>{svc.isPitchable ? `PITCH STREAM ${svc.id}` : 'INQUIRE NOW'}</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Horizontal Progress Track Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                {services.map((_, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => scrollToServiceIndex(pIdx)}
                    style={{
                      width: activeServiceIdx === pIdx ? '32px' : '8px',
                      height: '6px',
                      borderRadius: '3px',
                      backgroundColor: activeServiceIdx === pIdx ? 'var(--brand-lime)' : 'rgba(255, 255, 255, 0.15)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={`Go to service stream ${pIdx + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            /* 2. TOP-DOWN FULL STACK SCROLL MODE */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              {services.map((svc) => {
                const SvcIcon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    id={`service-vertical-${svc.id}`}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(7, 13, 20, 0.92)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.35)',
                      transition: 'border-color 0.25s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--brand-teal)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-dark)')}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <div style={{ width: '46px', height: '46px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(0, 157, 165, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-teal-light)' }}>
                          <SvcIcon size={24} />
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--brand-lime)', letterSpacing: '0.08em' }}>STREAM {svc.id}</span>
                            <span style={{ fontSize: '0.74rem', color: 'var(--text-light-subtle)' }}>•</span>
                            <span style={{ fontSize: '0.74rem', color: 'var(--brand-teal-light)', fontWeight: 700 }}>{svc.code}</span>
                          </div>
                          <h3 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0.25rem 0 0 0' }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      {svc.isPitchable ? (
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(148, 200, 32, 0.15)', color: 'var(--brand-lime-light)', border: '1px solid rgba(148, 200, 32, 0.35)' }}>
                          OPEN FOR PITCHING
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-light-secondary)', border: '1px solid var(--border-dark)' }}>
                          STUDIO SERVICE
                        </span>
                      )}
                    </div>

                    <p style={{ color: 'var(--brand-teal-light)', fontSize: '0.96rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                      {svc.subtitle}
                    </p>

                    <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem', maxWidth: '1000px' }}>
                      {svc.overview}
                    </p>

                    {/* Formats & Target Buyers Matrix */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.25rem',
                        padding: '1.25rem',
                        backgroundColor: 'rgba(11, 19, 31, 0.7)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(255, 255, 255, 0.04)',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--brand-lime)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                          Target Platforms & Buyers:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {svc.buyers.map((b, bI) => (
                            <span key={bI} style={{ fontSize: '0.76rem', padding: '0.25rem 0.65rem', backgroundColor: 'rgba(0, 157, 165, 0.1)', border: '1px solid rgba(0, 157, 165, 0.25)', borderRadius: 'var(--radius-xs)', color: '#FFFFFF' }}>
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                          Accepted Formats:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {svc.formats.map((f, fI) => (
                            <span key={fI} style={{ fontSize: '0.76rem', padding: '0.25rem 0.65rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-xs)', color: 'var(--text-light-secondary)' }}>
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-light-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
                        Execution Deliverables:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem' }}>
                        {svc.deliverables.map((del, dI) => (
                          <div key={dI} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--text-light-secondary)' }}>
                            <CheckCircle2 size={15} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Bottom CTA Strip */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-light-muted)' }}>
                        Commercial Representation & Rights Mandate
                      </div>
                      <button
                        onClick={() => handleNav(svc.isPitchable ? 'submit-content' : 'contact')}
                        className={`btn ${svc.isPitchable ? 'btn-lime' : 'btn-secondary-dark'} btn-sm`}
                      >
                        <span>{svc.isPitchable ? `PITCH STREAM ${svc.id}` : 'INQUIRE NOW'}</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>


      {/* =====================================================================
          SECTION 05 — HOW WE WORK (Progressive Horizontal Business Journey)
          ===================================================================== */}
      <section className="section section-dark">
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.6rem' }}>Six-Stage Commercial Methodology</span>
            <h2 className="display-statement" style={{ marginBottom: '0.75rem' }}>
              FROM CONTENT TO CLOSURE
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem' }}>
              A structured institutional representation pipeline ensuring legal compliance, valuation defense, and successful transaction closing.
            </p>
          </div>

          {/* Horizontal Step Tracker */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {processStages.map((stage, idx) => {
              const isActive = activeProcessStep === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveProcessStep(idx)}
                  style={{
                    padding: '1.25rem 1rem',
                    backgroundColor: isActive ? 'rgba(0, 157, 165, 0.15)' : 'rgba(11, 19, 31, 0.75)',
                    border: isActive ? '1px solid var(--brand-teal)' : '1px solid var(--border-dark)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: isActive ? 'var(--brand-lime)' : 'var(--text-light-muted)', fontFamily: 'var(--font-heading)' }}>
                    {stage.step}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.25rem' }}>
                    {stage.name}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-light-subtle)', marginTop: '0.2rem' }}>
                    {stage.shortTitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Process Stage Detail Banner */}
          <div
            style={{
              padding: '2rem 2.5rem',
              backgroundColor: 'rgba(11, 19, 31, 0.85)',
              border: '1px solid var(--border-dark)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Stage {processStages[activeProcessStep].step} Focus
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem', marginBottom: '0.5rem' }}>
                {processStages[activeProcessStep].name} — {processStages[activeProcessStep].shortTitle}
              </h3>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0, maxWidth: '750px' }}>
                {processStages[activeProcessStep].desc}
              </p>
            </div>

            <button
              onClick={() => handleNav('submit-content')}
              className="btn btn-lime btn-sm"
            >
              <span>INITIATE STAGE 01</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

        </div>
      </section>


      {/* =====================================================================
          SECTION 06 — CONTENT ECOSYSTEM (2.5D Visual Matrix with Floating Nodes)
          ===================================================================== */}
      <section className="section section-teal-tinted">
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.6rem' }}>Omnichannel Rights & Licensing</span>
            <h2 className="display-statement" style={{ marginBottom: '0.75rem' }}>
              CONTENT ACROSS THE ENTERTAINMENT ECOSYSTEM
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem' }}>
              We commercialize intellectual property across the complete spectrum of modern global media distribution channels.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              { title: 'FILMS', sub: 'Theatrical & Direct-to-Digital', icon: Film },
              { title: 'WEB SERIES', sub: 'Original & Commissioned Slates', icon: Tv },
              { title: 'OTT', sub: 'SVOD, AVOD & TVOD Models', icon: Globe2 },
              { title: 'TELEVISION', sub: 'Linear Satellite DTH & Cable', icon: Layers },
              { title: 'MUSIC', sub: 'Masters, BGM & Sync Licensing', icon: Music },
              { title: 'DIGITAL CONTENT', sub: 'YouTube MCNs & Social Video', icon: Globe2 },
              { title: 'REGIONAL CONTENT', sub: 'Pan-India & Multilingual', icon: Film },
              { title: 'IN-FLIGHT ENTERTAINMENT', sub: 'Global Airlines & Transport', icon: Tv },
              { title: 'INTERNATIONAL RIGHTS', sub: 'Dubbing, Remake & Overseas', icon: Layers }
            ].map((node, idx) => {
              const NodeIcon = node.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: '1.75rem 1.25rem',
                    backgroundColor: 'rgba(7, 13, 20, 0.75)',
                    border: '1px solid rgba(0, 157, 165, 0.25)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'var(--brand-teal-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(0, 157, 165, 0.25)';
                  }}
                >
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(0, 157, 165, 0.12)', color: 'var(--brand-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.85rem auto' }}>
                    <NodeIcon size={18} />
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.02em', marginBottom: '0.3rem' }}>
                    {node.title}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--brand-teal-light)' }}>
                    {node.sub}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================================
          SECTION 07 — OUR WORK (Cinematic Showcase Slider with Large Artwork)
          ===================================================================== */}
      <section className="section section-dark">
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '0.6rem' }}>Representation Catalogue</span>
              <h2 className="display-statement">OUR WORK</h2>
            </div>
            
            {/* Project Navigation Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={() => setActiveProjectIdx(prev => (prev === 0 ? projects.length - 1 : prev - 1))}
                className="btn btn-secondary-dark btn-sm"
                aria-label="Previous project"
              >
                <ChevronLeft size={16} />
              </button>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-light-muted)', fontWeight: 700 }}>
                {activeProjectIdx + 1} / {projects.length || 2}
              </span>
              <button
                onClick={() => setActiveProjectIdx(prev => (prev === projects.length - 1 ? 0 : prev + 1))}
                className="btn btn-secondary-dark btn-sm"
                aria-label="Next project"
              >
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => handleNav('our-work')}
                className="btn btn-outline-teal btn-sm"
              >
                <span>Full Catalogue</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Large Project Stage */}
          <div
            key={currentProject.id}
            style={{
              backgroundColor: 'rgba(11, 19, 31, 0.85)',
              border: '1px solid var(--border-dark)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.6)',
              animation: 'heroUpwardReveal 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="split-editorial" style={{ gap: 0 }}>
              
              {/* Large Poster Artwork Area */}
              <div style={{ position: 'relative', minHeight: '380px', backgroundColor: '#070D14' }}>
                {currentProject.posterUrl ? (
                  <img
                    src={currentProject.posterUrl}
                    alt={currentProject.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '380px', display: 'block' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/secret of kalinga.jpg';
                    }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', minHeight: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
                    <Film size={48} color="var(--brand-teal)" style={{ marginBottom: '1rem' }} />
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.6rem', color: '#FFFFFF' }}>{currentProject.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', marginTop: '0.35rem' }}>OFFICIAL REPRESENTATION DOSSIER</div>
                  </div>
                )}
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <span className="badge badge-lime">{currentProject.status || 'In Representation'}</span>
                </div>
              </div>

              {/* Project Meta & Dossier Area */}
              <div style={{ padding: 'clamp(2rem, 3.5vw, 3rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-teal-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    {currentProject.projectType} • {currentProject.language}
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                    {currentProject.title}
                  </h3>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-light-secondary)', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                    {currentProject.synopsis}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', padding: '1.25rem', backgroundColor: 'rgba(7, 13, 20, 0.65)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.04)', marginBottom: '1.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-light-muted)' }}>Genre</div>
                      <div style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 600 }}>{currentProject.genre || 'To be confirmed'}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-light-muted)' }}>Indiark Role</div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--brand-lime)', fontWeight: 600 }}>{currentProject.indiarkRole}</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => onSelectProject && onSelectProject(currentProject)}
                    className="btn btn-lime"
                  >
                    <span>VIEW PROJECT DOSSIER</span>
                    <Eye size={15} />
                  </button>
                  <button
                    onClick={() => handleNav('for-platforms')}
                    className="btn btn-secondary-dark"
                  >
                    <span>INQUIRE RIGHTS</span>
                    <Briefcase size={15} />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================================
          SECTION 08 — WHY INDIARK (6 Strategic Pillars with Interactive Selector)
          ===================================================================== */}
      <section className="section section-secondary">
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.6rem' }}>Strategic Differentiators</span>
            <h2 className="display-statement" style={{ marginBottom: '0.75rem' }}>
              EXPERIENCE THAT CREATES CONNECTIONS
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem' }}>
              Why filmmakers, production houses, and streaming platforms choose Indiark Entertainments to manage high-value commercial mandates.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 1fr) 2fr',
              gap: '2.5rem',
              alignItems: 'stretch',
            }}
          >
            {/* Left Pillar Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {pillars.map((pillar, idx) => {
                const isSelected = activePillarIdx === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarIdx(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected ? 'rgba(0, 157, 165, 0.18)' : 'rgba(255, 255, 255, 0.02)',
                      border: isSelected ? '1px solid var(--brand-teal)' : '1px solid transparent',
                      color: isSelected ? '#FFFFFF' : 'var(--text-light-secondary)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: isSelected ? 800 : 600,
                      fontSize: '0.95rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{pillar.title}</span>
                    <ChevronRight size={18} color={isSelected ? 'var(--brand-lime)' : 'var(--text-light-subtle)'} />
                  </button>
                );
              })}
            </div>

            {/* Right Pillar Stage Card */}
            <div
              key={currentPillar.id}
              style={{
                backgroundColor: 'rgba(7, 13, 20, 0.85)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2rem, 3.5vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                animation: 'heroUpwardReveal 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {currentPillar.subtitle}
                </div>
                
                <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                  {currentPillar.title}
                </h3>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-light-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                  {currentPillar.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {currentPillar.points.map((pt, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle2 size={18} color="var(--brand-lime)" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.92rem', color: 'var(--text-light-primary)' }}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-dark)', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => handleNav('why-indiark')}
                  className="btn btn-secondary-dark btn-sm"
                >
                  <span>Learn More in Why Indiark</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================================
          SECTION 09 — TWO BUSINESS PATHS (Interactive Conversion Stage)
          ===================================================================== */}
      <section className="section section-dark">
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.6rem' }}>Strategic Conversion Hub</span>
            <h2 className="display-statement" style={{ marginBottom: '0.75rem' }}>
              HOW CAN WE ASSIST YOUR ENTERTAINMENT BUSINESS?
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem' }}>
              Select your commercial gateway to begin direct collaboration with Indiark Entertainments.
            </p>
          </div>

          <div className="two-path-grid">
            
            {/* PATH A: I HAVE CONTENT */}
            <div
              className="two-path-card path-creator"
              onMouseEnter={() => setHoveredPath('creator')}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(0, 157, 165, 0.15)', color: 'var(--brand-teal-light)', fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                  PATH A • FOR CREATORS & PRODUCERS
                </div>

                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  I HAVE CONTENT
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-light-secondary)', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                  For filmmakers, independent producers, production studios, and catalogue owners seeking representation, OTT platform pitching, and multi-territory rights monetisation.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {['Evaluation within 48–72 Hours', 'Direct Commissioning Editor Pitching', 'Commercial Terms & MG Negotiation', 'Chain of Title & Legal Protection'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#FFFFFF' }}>
                      <CheckCircle2 size={15} color="var(--brand-teal-light)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('submit-content')}
                className="btn btn-lime btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>SUBMIT CONTENT</span>
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* PATH B: I NEED CONTENT */}
            <div
              className="two-path-card path-buyer"
              onMouseEnter={() => setHoveredPath('buyer')}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(148, 200, 32, 0.15)', color: 'var(--brand-lime)', fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                  PATH B • FOR PLATFORMS & BUYERS
                </div>

                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  I NEED CONTENT
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-light-secondary)', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                  For OTT platforms, broadcasters, distributors, and legitimate buyers looking for curated slates matching specific programming briefs.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {['Verified Clear Chain of Title', 'Curated to Programming Mandates', 'Feature Films, Series & Regional Catalogues', 'Rapid Screener & Rights Delivery'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#FFFFFF' }}>
                      <CheckCircle2 size={15} color="var(--brand-lime)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('for-platforms')}
                className="btn btn-outline-teal btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>TELL US YOUR CONTENT REQUIREMENTS</span>
                <Briefcase size={18} />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================================
          SECTION 10 — FOR PLATFORMS & BUYERS (Animated Visual Tiles)
          ===================================================================== */}
      <section className="section section-secondary">
        <div className="container">
          
          <div className="split-editorial">
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '0.6rem' }}>Buyer Mandate Hub</span>
              <h2 className="display-statement" style={{ marginBottom: '1.25rem' }}>
                LOOKING FOR CONTENT?
              </h2>
              <p className="text-editorial-body" style={{ marginBottom: '1.75rem' }}>
                We curate legally verified content slates matching programming briefs, demographic requirements, and broadcast standards for streaming platforms and international buyers.
              </p>
              
              {/* Category Matrix */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { name: 'MOVIES', desc: 'Theatrical & OTT Premieres' },
                  { name: 'WEB SERIES', desc: 'Original Episodic Slates' },
                  { name: 'REGIONAL', desc: 'Malayalam, Tamil, Telugu, Hindi' },
                  { name: 'DUBBED', desc: 'Multi-Language Audio Assets' },
                  { name: 'MUSIC', desc: 'Soundtrack Masters & Sync' },
                  { name: 'CATALOGUES', desc: 'High-Volume Archival Slates' }
                ].map((cat, idx) => (
                  <div key={idx} style={{ padding: '0.85rem 1rem', backgroundColor: 'rgba(7, 13, 20, 0.65)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#FFFFFF' }}>{cat.name}</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--brand-teal-light)', marginTop: '0.15rem' }}>{cat.desc}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleNav('for-platforms')}
                className="btn btn-lime"
              >
                <span>TELL US YOUR CONTENT REQUIREMENTS</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(7, 13, 20, 0.75)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2rem, 3vw, 2.5rem)',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                Institutional Procurement Standards
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.9rem', color: 'var(--text-light-secondary)' }}>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span><strong>Verified Chain of Title:</strong> Clean legal documentation on all represented titles.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span><strong>Zero Mismatch:</strong> We only pitch content that aligns with your specific acquisition briefs.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span><strong>Direct Commercial Negotiation:</strong> Structured pricing, term sheets, and closing coordination.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================================
          SECTION 11 — MEDIA EDGE (Academic Ecosystem)
          ===================================================================== */}
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


      {/* =====================================================================
          SECTION 12 — CONTACT (Let's Talk Content)
          ===================================================================== */}
      <section className="section section-secondary" style={{ width: '100%' }}>
        <div className="container" style={{ width: '100%' }}>
          
          <div className="split-editorial" style={{ alignItems: 'flex-start' }}>
            
            {/* Left Column: Direct Corporate Overview & Touchpoints */}
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>
                Direct Commercial Dialogue
              </span>
              <h2 className="display-statement" style={{ marginBottom: '1.25rem' }}>
                LET'S TALK CONTENT
              </h2>
              <p className="text-editorial-body" style={{ marginBottom: '2rem' }}>
                Whether you are a creator seeking representation to license a finished project or an acquisition head sourcing curated content slates, our executive team is ready to assist your commercial mandate.
              </p>

              {/* Touchpoint Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(0, 157, 165, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-teal-light)', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                      Official Inquiries Email
                    </div>
                    <div style={{ color: '#FFFFFF', fontSize: '0.96rem', fontWeight: 600, marginTop: '0.15rem' }}>
                      {CONTACT_INFO.emailPlaceholder}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(148, 200, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-lime)', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                      Telephone / WhatsApp
                    </div>
                    <div style={{ color: '#FFFFFF', fontSize: '0.96rem', fontWeight: 600, marginTop: '0.15rem' }}>
                      {CONTACT_INFO.mobilePlaceholder}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                      Principal Operating Office
                    </div>
                    <div style={{ color: '#FFFFFF', fontSize: '0.96rem', fontWeight: 600, marginTop: '0.15rem' }}>
                      {CONTACT_INFO.addressPlaceholder}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Fast Routes */}
              <div style={{ padding: '1.25rem', backgroundColor: 'rgba(7, 13, 20, 0.7)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <button
                  onClick={() => handleNav('submit-content')}
                  className="btn btn-lime btn-sm"
                  style={{ flex: '1 1 200px', justifyContent: 'center' }}
                >
                  <span>PITCH YOUR CONTENT</span>
                  <ArrowUpRight size={15} />
                </button>
                <button
                  onClick={() => handleNav('for-platforms')}
                  className="btn btn-secondary-dark btn-sm"
                  style={{ flex: '1 1 200px', justifyContent: 'center' }}
                >
                  <span>BUYER REQUIREMENTS</span>
                  <Briefcase size={15} />
                </button>
              </div>
            </div>

            {/* Right Column: Beautiful Dark Glassmorphic Inquiry Form */}
            <div
              style={{
                backgroundColor: 'rgba(7, 13, 20, 0.9)',
                border: '1px solid var(--border-teal-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
                position: 'relative',
              }}
            >
              {homeContactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(148, 200, 32, 0.15)', border: '1px solid var(--brand-lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto', color: 'var(--brand-lime)' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.6rem' }}>
                    INQUIRY TRANSMITTED
                  </h3>
                  <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.94rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
                    Thank you for reaching out. Our business team has received your message and will respond to your corporate email shortly.
                  </p>
                  <button onClick={() => setHomeContactSubmitted(false)} className="btn btn-secondary-dark btn-sm">
                    <span>SEND ANOTHER MESSAGE</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleHomeContactSubmit}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.75rem' }}>
                    <div>
                      <span style={{ fontSize: '0.74rem', color: 'var(--brand-lime)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Direct Executive Channel
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', margin: '0.2rem 0 0 0' }}>
                        Send a Consultation Message
                      </h3>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.15rem' }}>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={homeContactForm.name}
                      onChange={(e) => setHomeContactForm({ ...homeContactForm, name: e.target.value })}
                      className="form-control"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.15rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={homeContactForm.email}
                        onChange={(e) => setHomeContactForm({ ...homeContactForm, email: e.target.value })}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+91 / International"
                        value={homeContactForm.phone}
                        onChange={(e) => setHomeContactForm({ ...homeContactForm, phone: e.target.value })}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.15rem' }}>
                    <label className="form-label">Nature of Inquiry *</label>
                    <select
                      value={homeContactForm.subject}
                      onChange={(e) => setHomeContactForm({ ...homeContactForm, subject: e.target.value })}
                      className="form-control"
                    >
                      <option value="Producer / Slate Representation">Producer / Slate Pitching Representation</option>
                      <option value="OTT / Broadcaster Requirement">OTT Platform / Broadcaster Content Requirement</option>
                      <option value="Rights & Catalogue Licensing">Content Rights & Catalogue Licensing</option>
                      <option value="Music & Sync Licensing">Music Business & Audio Sync</option>
                      <option value="General Corporate Consultation">General Corporate Consultation</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label">Your Message / Requirement *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your project or procurement mandate..."
                      value={homeContactForm.message}
                      onChange={(e) => setHomeContactForm({ ...homeContactForm, message: e.target.value })}
                      className="form-control"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={homeContactSubmitting}
                    className="btn btn-lime btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {homeContactSubmitting ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <span>SEND EXECUTIVE MESSAGE</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
