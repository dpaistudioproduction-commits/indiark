import React from 'react';
import { 
  Tv, Film, Layers, Music, Globe2, Video, Sliders, 
  ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Sparkles 
} from 'lucide-react';

export const WhatWeDoPage = ({ setActivePage }) => {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      id: '01',
      code: 'OTT PITCHING',
      title: 'OTT Platform Pitching',
      subtitle: 'Targeted curation and direct pitching to leading streaming buyers',
      icon: Tv,
      isPitchable: true,
      overview: 'We identify suitable OTT platforms and streaming buyers, position content in accordance with platform programming mandates, and manage the pitching process through commercial discussions and deal coordination.',
      buyers: ['Netflix', 'Amazon Prime Video', 'SonyLIV', 'ZEE5', 'JioHotstar', 'Aha', 'SunNXT', 'Lionsgate Play'],
      formats: ['Independent Feature Films', 'Original Web Series', 'Regional Cinema', 'Dubbed & Multilingual', 'Archival Libraries'],
      models: ['Outright License Fee', 'Minimum Guarantee (MG)', 'AVOD Revenue Share', 'Territory Carve-Outs'],
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
      icon: Film,
      isPitchable: true,
      overview: 'We act as dedicated representatives for filmmakers, producers, and production studios to manage all facets of content representation, protecting rights integrity while actively unlocking commercial value across multiple buyers.',
      buyers: ['Major Streaming Giants', 'National Satellite Networks', 'International Rights Aggregators', 'Theatrical Distributors'],
      formats: ['Independent Feature Films', 'Studio Slate Productions', 'Original Miniseries', 'Festival Titles', 'Finished Rough Cuts'],
      models: ['Worldwide Rights Licensing', 'Language Dubbing Packages', 'Theatrical-to-Digital Windows', 'Remake Rights Optioning'],
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
      icon: Layers,
      isPitchable: true,
      overview: 'We explore and structure licensing opportunities across OTT, linear satellite television, digital networks, audio publishing, in-flight transportation, and international territories.',
      buyers: ['Satellite TV Broadcasters (DTH/Cable)', 'In-Flight Airline Networks', 'International Dubbing Buyers', 'Telco Platforms'],
      formats: ['SVOD / AVOD Rights', 'Satellite TV Broadcast', 'Music Publishing & Master Sync', 'In-Flight / Transport', 'International Rights'],
      models: ['Satellite Television Syndication', 'In-Flight & Transport Rights', 'International Dubbing & Remake', 'Ancillary Windowing'],
      deliverables: [
        'Territory-Specific Rights Carve-outs',
        'Windowing Strategy Optimization',
        'Ancillary & Transport Rights Monetization',
        'International Dubbing & Remake Rights Inquiries'
      ]
    },
    {
      id: '04',
      code: 'MUSIC BUSINESS',
      title: 'Music Business',
      subtitle: 'Commercial opportunities for independent creators and audio rights holders',
      icon: Music,
      isPitchable: true,
      overview: 'We support independent music creators, composers, and rights holders with digital distribution, sync licensing for film and digital media, audio publishing administration, and catalogue monetization.',
      buyers: ['Spotify, Apple Music, JioSaavn, Wynk', 'Film & Web Series Music Supervisors', 'Advertising Commercial Agencies', 'YouTube Sound Sync'],
      formats: ['Independent Singles & EPs', 'Film Soundtracks & Original Score (BGM)', 'Audio Catalogues', 'Sync & Master Rights'],
      models: ['Master Rights Sync Fees', 'Streaming DSP Royalty Payouts', 'Publishing Administration', 'Brand Sync Partnerships'],
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
      icon: Globe2,
      isPitchable: true,
      overview: 'We help content owners unlock legitimate revenue streams across YouTube, Facebook, social video ecosystems, and emerging digital entertainment channels with full rights protection.',
      buyers: ['YouTube Premium & MCN Networks', 'Facebook Watch / Meta Video', 'Snapchat Spotlight', 'FAST Channels & CTV Apps'],
      formats: ['YouTube MCN Networks', 'Social Syndication', 'Digital Video Portals', 'Creator Catalogues', 'Short-form Video Slates'],
      models: ['Content ID Claim Revenue Share', 'AVOD Ad Yield Optimization', 'Shorts & Reel Derivative Monetization', 'Global Digital FAST Syndication'],
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
      icon: Video,
      isPitchable: false,
      overview: 'End-to-end production craft delivering high-impact video content for corporate brands, commercial advertisers, events, and documentary storytelling.',
      buyers: ['Corporate Brands', 'Direct-to-Consumer Enterprises', 'Documentary Producers', 'Creative Ad Agencies'],
      formats: ['Ad Films & Commercials', 'Corporate Brand Films', 'Documentaries & Docufictions', 'Promotional Campaigns'],
      models: ['Turnkey Commercial Packages', 'Multi-Cam Live Event Production', 'Branded Narrative Documentaries', 'Modular Social Ad Suites'],
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
      icon: Sliders,
      isPitchable: false,
      overview: 'Professional editing and colour grading workflows ensuring international broadcast, OTT, and theatrical technical compliance.',
      buyers: ['Feature Film Producers', 'OTT Series Showrunners', 'Commercial Video Directors', 'Broadcasters'],
      formats: ['Feature Film Finishing', 'Commercial Video Editing', 'DI / DaVinci Resolve', 'OTT Mastering', 'IMF / DCP Archival Delivery'],
      models: ['DaVinci Resolve HDR Color Suite', 'NLE Offline/Online Editing Package', 'International Broadcast QC Mastering', 'DCP & IMF Packaging'],
      deliverables: [
        'Non-Linear Editing (NLE) Workflows',
        'Colour Science & HDR / Rec.709 Grading',
        'Multi-Format Deliverables & QC Compliance',
        'Audio-Visual Finishing'
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
              Comprehensive Services Architecture
            </span>
            <h1 className="display-statement" style={{ marginBottom: '1.25rem' }}>
              SEVEN INTERCONNECTED MEDIA CAPABILITIES
            </h1>
            <p className="text-editorial-body">
              Indiark Entertainments provides structured commercial representation, platform pitching, content licensing, and high-standard production craft across seven specialized business capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="section section-secondary">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {services.map((svc) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={svc.id}
                  style={{
                    backgroundColor: 'rgba(7, 13, 20, 0.8)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
                  }}
                >
                  {/* Top Bar */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                        <span className="badge badge-teal" style={{ fontSize: '0.72rem' }}>Stream {svc.id}</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--brand-lime)', fontWeight: 700, letterSpacing: '0.08em' }}>
                          {svc.code}
                        </span>
                        {svc.isPitchable && (
                          <span style={{ fontSize: '0.68rem', fontWeight: 800, padding: '0.15rem 0.55rem', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(148, 200, 32, 0.15)', color: 'var(--brand-lime-light)', border: '1px solid rgba(148, 200, 32, 0.35)' }}>
                            OPEN FOR PITCHING
                          </span>
                        )}
                      </div>
                      <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
                        {svc.title}
                      </h2>
                      <p style={{ color: 'var(--brand-teal-light)', fontSize: '0.95rem', fontWeight: 500, marginTop: '0.25rem', marginBottom: 0 }}>
                        {svc.subtitle}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <button
                        onClick={() => handleNav(svc.isPitchable ? 'submit-content' : 'contact')}
                        className={`btn ${svc.isPitchable ? 'btn-lime' : 'btn-secondary-dark'} btn-sm`}
                      >
                        <span>{svc.isPitchable ? 'PITCH CONTENT' : 'CONTACT US'}</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Overview */}
                  <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                    {svc.overview}
                  </p>

                  {/* Buyer & Commercial Models Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1.25rem',
                      padding: '1.25rem',
                      backgroundColor: 'rgba(11, 19, 31, 0.75)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--brand-lime)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                        Target Platforms & Buyers:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {svc.buyers.map((b, bI) => (
                          <span key={bI} style={{ fontSize: '0.76rem', padding: '0.2rem 0.6rem', backgroundColor: 'rgba(0, 157, 165, 0.08)', border: '1px solid rgba(0, 157, 165, 0.2)', borderRadius: 'var(--radius-xs)', color: '#FFFFFF' }}>
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                        Commercial Deal Models:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {svc.models.map((m, mI) => (
                          <span key={mI} style={{ fontSize: '0.76rem', padding: '0.2rem 0.6rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-xs)', color: 'var(--text-light-secondary)' }}>
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-light-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                      Scope & Deliverables:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                      {svc.deliverables.map((del, dI) => (
                        <div key={dI} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', padding: '0.65rem 0.85rem', backgroundColor: 'rgba(7, 13, 20, 0.6)', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                          <CheckCircle2 size={15} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                          <span style={{ fontSize: '0.84rem', color: 'var(--text-light-secondary)', lineHeight: '1.45' }}>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            READY TO ADVANCE YOUR CONTENT MANDATE?
          </h2>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            Connect directly with our media business team for pitching submissions or platform content procurement.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => handleNav('submit-content')} className="btn btn-lime btn-lg">
              <span>PITCH YOUR CONTENT</span>
              <ArrowUpRight size={18} />
            </button>
            <button onClick={() => handleNav('for-platforms')} className="btn btn-outline-teal btn-lg">
              <span>FOR BUYERS & PLATFORMS</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
