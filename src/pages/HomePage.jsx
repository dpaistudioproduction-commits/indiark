import React, { Suspense, lazy } from 'react';
import { 
  ArrowUpRight, ArrowRight, ShieldCheck, Film, Tv, Radio, Music, 
  Globe2, Video, Sparkles, CheckCircle2, ChevronRight, Briefcase, 
  Layers, Users, Compass, Clapperboard, Award, Lock, Eye, ExternalLink 
} from 'lucide-react';
import { ServicesAtlas } from '../components/services/ServicesAtlas';
import { BusinessPathway } from '../components/pathway/BusinessPathway';
import { ContentMap } from '../components/ecosystem/ContentMap';
import { WhyIndiarkScrollCards } from '../components/why/WhyIndiarkScrollCards';
import { CinemaArchive } from '../components/work/CinemaArchive';
import { ASSOCIATED_ORGANIZATION } from '../services/dataService';

export const HomePage = ({ setActivePage, projects, partners, onSelectProject }) => {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      
      {/* =====================================================================
          01. CINEMATIC OPENING & HERO
          Dark, cinematic, minimal opening with breathing room & convergent nodes
          ===================================================================== */}
      <section className="section-hero-narrative">
        {/* Subtle Ambient Light Cone */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1000px',
            height: '550px',
            background: 'radial-gradient(ellipse at center, rgba(0, 157, 165, 0.16) 0%, rgba(148, 200, 32, 0.04) 45%, rgba(7, 13, 20, 0) 75%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '2rem', paddingBottom: '3rem' }}>
          
          {/* Opening Positioning Statement */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
            <span className="badge badge-teal">
              <Sparkles size={12} />
              <span>Media Rights • Content Representation • Entertainment Business</span>
            </span>
          </div>

          {/* Monumental Cinematic Headline with Flash Shimmer Effect */}
          <h1 className="display-hero hero-flash-headline" style={{ maxWidth: '1100px', marginBottom: '2rem' }}>
            <span className="hero-flash-glow-backdrop" aria-hidden="true" />
            <span className="hero-flash-primary">CONNECTING GREAT CONTENT WITH THE </span>
            <span className="hero-flash-accent">RIGHT OPPORTUNITIES</span>
          </h1>

          {/* Subtitle / Value Thesis */}
          <p className="text-editorial-body" style={{ maxWidth: '840px', marginBottom: '2.75rem' }}>
            Indiark Entertainments is an entertainment rights house and media business agency representing producers, filmmakers, and creators to negotiate and close commercial licensing deals across OTT platforms, broadcasters, and global buyers.
          </p>

          {/* Strategic Call to Action Hub */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '4rem' }}>
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
              <span>SERVICES ATLAS</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => handleNav('for-platforms')}
              className="btn btn-outline-teal btn-lg"
            >
              <span>FOR PLATFORMS & BUYERS</span>
              <Briefcase size={16} />
            </button>
          </div>

          {/* Hero Convergent Pipeline Bar */}
          <div
            style={{
              padding: '1.25rem 1.75rem',
              backgroundColor: 'rgba(11, 19, 31, 0.65)',
              border: '1px solid var(--border-dark)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-lime)', boxShadow: '0 0 10px var(--brand-lime)' }} />
              <span style={{ fontSize: '0.82rem', color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Active Core Focus:
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
              {['OTT Platforms', 'Film Representation', 'Media Rights', 'Digital Business', 'Music Licensing'].map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-light-secondary)',
                    padding: '0.25rem 0.65rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--brand-teal-light)', fontWeight: 600 }}>
              20+ Years Industry Experience &rarr;
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          02. INTRODUCTION AFTER HERO (Asymmetric Split Screen)
          Oversized display typography + authoritative business explanation
          ===================================================================== */}
      <section className="section section-darker">
        <div className="container">
          
          <div className="split-editorial">
            
            {/* Left: Oversized Statement */}
            <div>
              <span className="eyebrow-label" style={{ marginBottom: '1rem' }}>
                Strategic Core Principle
              </span>
              <h2 className="display-statement" style={{ color: '#FFFFFF' }}>
                WE CONNECT CONTENT WITH THE PLACES WHERE IT CAN <span style={{ color: 'var(--brand-teal-light)' }}>CREATE VALUE.</span>
              </h2>
            </div>

            {/* Right: Authoritative Explanation + Audience Routing */}
            <div>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                In a fragmented media universe, great storytelling often struggles to find the right buyer, while streaming platforms and broadcasters require structured, cleared, high-calibre intellectual property.
              </p>

              <p style={{ color: 'var(--text-light-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Indiark operates as the strategic bridge: evaluating project viability, auditing chain of title, pitching to verified commissioning heads, and conducting commercial discussions through to closing.
              </p>

              {/* Dual Entry Points */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                
                <div
                  className="card-dark"
                  style={{
                    cursor: 'pointer',
                    padding: '1.25rem',
                    backgroundColor: 'rgba(7, 25, 34, 0.6)',
                    borderLeft: '3px solid var(--brand-lime)'
                  }}
                  onClick={() => handleNav('submit-content')}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--brand-lime)', fontWeight: 700, textTransform: 'uppercase' }}>Content Owners</span>
                    <ArrowUpRight size={14} color="var(--brand-lime)" />
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.2rem' }}>Filmmakers & Producers</div>
                  <div style={{ color: 'var(--text-light-muted)', fontSize: '0.78rem' }}>Submit projects for OTT pitching &rarr;</div>
                </div>

                <div
                  className="card-dark"
                  style={{
                    cursor: 'pointer',
                    padding: '1.25rem',
                    backgroundColor: 'rgba(7, 25, 34, 0.6)',
                    borderLeft: '3px solid var(--brand-teal)'
                  }}
                  onClick={() => handleNav('for-platforms')}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase' }}>Platforms & Buyers</span>
                    <ArrowUpRight size={14} color="var(--brand-teal)" />
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.2rem' }}>Acquisitions & Studios</div>
                  <div style={{ color: 'var(--text-light-muted)', fontSize: '0.78rem' }}>Define acquisition criteria &rarr;</div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          03. SERVICES RECONCEPTUALIZED — THE SERVICES ATLAS
          Interactive 7-Stream Navigator replacing generic card grids
          ===================================================================== */}
      <section className="section section-dark" id="services-atlas">
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="eyebrow-label" style={{ marginBottom: '0.5rem' }}>
                Connected Capabilities
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                SERVICES ATLAS
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', marginTop: '0.35rem', maxWidth: '600px' }}>
                Seven interconnected business capabilities built to represent, monetize, and produce high-impact media.
              </p>
            </div>

            <button
              onClick={() => handleNav('what-we-do')}
              className="btn btn-secondary-dark btn-sm"
            >
              <span>Explore Comprehensive Overview</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Interactive Services Atlas Component */}
          <ServicesAtlas onActionClick={handleNav} />

        </div>
      </section>

      {/* =====================================================================
          04. THE "20+ YEARS" MOMENT
          Monumental editorial typographic statement with negative space
          ===================================================================== */}
      <section className="section section-monumental">
        <div className="container">
          
          <div className="split-editorial-reversed">
            
            {/* Left: Restrained Business Context */}
            <div>
              <span className="eyebrow-label" style={{ marginBottom: '1rem' }}>
                Institutional Standing
              </span>
              
              <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', marginBottom: '1.25rem', lineHeight: '1.25' }}>
                A legacy forged across Indian television, theatrical cinema, and the streaming revolution.
              </h3>

              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Indiark’s leadership brings together more than two decades of real-world operational understanding in rights clearance, buyer relations, programming dynamics, and commercial negotiations.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-dark)' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--brand-lime)', fontWeight: 700 }}>TELEVISION & CABLE</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)' }}>Linear satellite distribution</div>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-dark)', paddingLeft: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--brand-teal-light)', fontWeight: 700 }}>THEATRICAL & OTT</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)' }}>Digital streaming & rights</div>
                </div>
              </div>
            </div>

            {/* Right: Monumental Number & Statement */}
            <div style={{ textAlign: 'right' }}>
              <div className="display-huge" style={{ color: 'var(--brand-teal-light)', opacity: 0.95 }}>
                20+
              </div>
              <div style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: '1.1' }}>
                YEARS OF MEDIA EXPERIENCE
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          05. HOW WE WORK — 6-STEP DIRECTIONAL BUSINESS PATHWAY
          Movement from uncertainty to commercial closure
          ===================================================================== */}
      <section className="section section-darker">
        <div className="container">
          
          <div style={{ maxWidth: '750px', marginBottom: '2.5rem' }}>
            <span className="eyebrow-label" style={{ marginBottom: '0.5rem' }}>
              Commercial Journey
            </span>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              HOW WE WORK
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', marginTop: '0.35rem' }}>
              A disciplined, transparent six-stage execution pathway ensuring complete rights protection and maximized valuation.
            </p>
          </div>

          {/* Connected Directional Pathway Component */}
          <BusinessPathway onActionClick={handleNav} />

        </div>
      </section>

      {/* =====================================================================
          06. CONTENT ECOSYSTEM — CONTENT MAP
          Central CONTENT node connecting to 9 sectors and commercial avenues
          ===================================================================== */}
      <section className="section section-teal-tinted" id="content-ecosystem">
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="eyebrow-label" style={{ marginBottom: '0.5rem' }}>
                Monetization Architecture
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                CONTENT ECOSYSTEM
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', marginTop: '0.35rem', maxWidth: '620px' }}>
                Connecting films, web series, music, and digital formats to high-value commercial licensing avenues.
              </p>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--brand-lime)', fontWeight: 700, letterSpacing: '0.04em' }}>
              CONTENT HAS VALUE • CONNECTION CREATES OPPORTUNITY
            </div>
          </div>

          {/* Interactive Content Map Component */}
          <ContentMap onActionClick={handleNav} />

        </div>
      </section>

      {/* =====================================================================
          07. OUR WORK — CINEMA ARCHIVE
          Featured project dossiers (Secret of Kalinga & Bheeshmar)
          ===================================================================== */}
      <section className="section section-darker" id="cinema-archive">
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="eyebrow-label" style={{ marginBottom: '0.5rem' }}>
                Represented Catalogue
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                CINEMA ARCHIVE
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', marginTop: '0.35rem', maxWidth: '600px' }}>
                Selected feature titles and intellectual properties represented for OTT pitching, rights licensing, and distribution.
              </p>
            </div>

            <button
              onClick={() => handleNav('our-work')}
              className="btn btn-secondary-dark btn-sm"
            >
              <span>Explore Complete Archive</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Cinema Archive Component */}
          <CinemaArchive
            projects={projects}
            onSelectProject={onSelectProject}
            onActionClick={handleNav}
          />

        </div>
      </section>

      {/* =====================================================================
          08. WHY INDIARK — EXPERIENCE THAT CREATES CONNECTIONS
          6 pillars with crystal-clear interactive showcase & smooth transitions
          ===================================================================== */}
      <section className="section section-dark" id="why-indiark">
        <div className="container">
          <WhyIndiarkScrollCards onActionClick={handleNav} />
        </div>
      </section>

      {/* =====================================================================
          09. ASSOCIATED ACADEMIC & PARTNER ECOSYSTEM
          Media Edge School of Academics + Text Partner presentation
          ===================================================================== */}
      <section className="section section-teal-tinted">
        <div className="container">
          
          {/* Media Edge School of Academics Card */}
          <div
            className="card-dark"
            style={{
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              backgroundColor: 'rgba(7, 13, 20, 0.9)',
              border: '1px solid rgba(148, 200, 32, 0.3)',
              marginBottom: '3rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <span className="badge badge-lime">Associated Educational Initiative</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--brand-lime)', fontWeight: 700 }}>
                {ASSOCIATED_ORGANIZATION.ecosystem}
              </span>
            </div>

            <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '0.75rem' }}>
              {ASSOCIATED_ORGANIZATION.name}
            </h3>

            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '880px', marginBottom: '2rem' }}>
              {ASSOCIATED_ORGANIZATION.description}
            </p>

            {/* Horizontal 5-Step Ecosystem Progression */}
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
                { label: '01 • EDUCATION', desc: 'Academic media foundation' },
                { label: '02 • TALENT', desc: 'Creative incubation' },
                { label: '03 • CONTENT', desc: 'Original IP creation' },
                { label: '04 • MEDIA', desc: 'High-grade production craft' },
                { label: '05 • BUSINESS', desc: 'Commercial monetization' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <div style={{ color: 'var(--brand-teal-light)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.2rem' }}>
                    {item.label}
                  </div>
                  <div style={{ color: 'var(--text-light-muted)', fontSize: '0.75rem' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmed Channel & Business Partners (Text Presentation) */}
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem', textAlign: 'center' }}>
              Confirmed Channel & Business Partners
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {partners.map(partner => (
                <div
                  key={partner.id}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: 'rgba(7, 13, 20, 0.65)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-dark)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                    {partner.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--brand-teal-light)' }}>
                    {partner.type}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          10. CLOSING NARRATIVE & CONTACT CONDUIT
          "LET'S TALK CONTENT."
          ===================================================================== */}
      <section className="section section-darker" style={{ borderTop: '1px solid var(--border-dark)' }}>
        <div className="container">
          
          <div
            style={{
              padding: 'clamp(2.5rem, 5vw, 4.5rem)',
              backgroundColor: 'rgba(7, 25, 34, 0.85)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(0, 157, 165, 0.35)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span className="badge badge-lime" style={{ marginBottom: '1.25rem' }}>
              Direct Commercial Gateway
            </span>

            <h2 className="display-statement" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
              LET'S TALK CONTENT.
            </h2>

            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2.5rem auto', lineHeight: '1.7' }}>
              Whether you are a producer seeking strategic platform representation, or an OTT buyer looking for curated content slates, connect directly with Indiark.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleNav('submit-content')}
                className="btn btn-lime btn-lg"
              >
                <span>PITCH YOUR CONTENT</span>
                <ArrowUpRight size={18} />
              </button>

              <button
                onClick={() => handleNav('for-platforms')}
                className="btn btn-primary btn-lg"
              >
                <span>PLATFORM PROCUREMENT BRIEF</span>
                <Briefcase size={16} />
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="btn btn-secondary-dark btn-lg"
              >
                <span>GENERAL ENQUIRY</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
