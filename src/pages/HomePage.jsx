import React, { useState } from 'react';
import { 
  ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, Tv, Film, 
  Layers, ShieldCheck, Clock, TrendingUp, Users, Building, 
  Award, Mail, Phone, MapPin, Send, Star, Briefcase, ChevronRight,
  Filter, Play, Check, Quote, Globe, Video, Eye, Sliders
} from 'lucide-react';
import { ASSOCIATED_ORGANIZATION, CONTACT_INFO } from '../services/dataService';

export const HomePage = ({ setActivePage, onSelectProject }) => {
  // Film Gallery category filter
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [selectedFilmModal, setSelectedFilmModal] = useState(null);

  // Home Contact Form State
  const [homeContactForm, setHomeContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Movie / Web Series Rights Pitch',
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

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Movies, Web Series & Music Handled
  const aggregatedFilms = [
    {
      id: 'chiram',
      title: 'CHIRAM',
      category: 'feature',
      categories: ['feature', 'music'],
      categoryLabel: 'Feature Film',
      language: 'Malayalam',
      genre: 'Drama / Romance',
      poster: '/chiram.jpg',
      still: '/chiram.jpg',
      year: '2026',
      synopsis: 'A heartfelt romantic drama starring Anoop Menon and Aishwarya Mithun Koroth, directed by Sindhu Paradayil and N. Sudheer. Explores emotional depth, love, and life journeys.',
      rightsScope: 'OTT Rights • Satellite TV Rights • Music & Dubbing',
      status: 'Deal Closed',
      chainOfTitle: 'Clear Paperwork & Verified'
    },
    {
      id: 'bhishmar',
      title: 'BHISHMAR',
      category: 'music',
      categories: ['feature', 'music'],
      categoryLabel: 'Music & Feature Film',
      language: 'Malayalam / Pan-India',
      genre: 'Comedy / Music / Romance',
      poster: '/bhishmar.jpg',
      still: '/bhishmar.jpg',
      year: '2026',
      synopsis: 'A chance encounter between two men triggers a chaotic series of events across a single night, combining high-energy music, romance, and comedy sequences.',
      rightsScope: 'OTT Outright License • Worldwide Music Rights',
      status: 'Rights Licensed',
      chainOfTitle: 'Clear Paperwork & Verified'
    },
    {
      id: 'the-great-indian-kitchen',
      title: 'THE GREAT INDIAN KITCHEN',
      category: 'feature',
      categories: ['feature'],
      categoryLabel: 'Feature Film',
      language: 'Malayalam / Pan-India',
      genre: 'Social Drama',
      poster: '/great-indian-kitchen.jpg',
      still: '/great-indian-kitchen.jpg',
      year: '2021',
      synopsis: 'Landmark critically acclaimed Malayalam drama directed by Jeo Baby, starring Nimisha Sajayan and Suraj Venjaramoodu. Explores gender roles and domestic expectations with universal impact.',
      rightsScope: 'Global OTT Streaming • Remake Rights • Satellite TV',
      status: 'Worldwide Release',
      chainOfTitle: 'Clear Paperwork & Verified'
    },
    {
      id: 'vaanku',
      title: 'VAANKU',
      category: 'series',
      categories: ['feature', 'series'],
      categoryLabel: 'Feature Film & Web Series Adaptations',
      language: 'Malayalam',
      genre: 'Social Drama / Family',
      poster: '/vaanku.jpg',
      still: '/vaanku.jpg',
      year: '2021',
      synopsis: 'Directed by Kavya Prakash based on Unni R.’s acclaimed short story. Follows a young college girl who aspires to recite the Islamic call to prayer (azaan).',
      rightsScope: 'Digital OTT License • Satellite TV Window • Dubbing',
      status: 'Agreement Signed',
      chainOfTitle: 'Clear Paperwork & Verified'
    },
    {
      id: 'tsunami',
      title: 'TSUNAMI',
      category: 'feature',
      categories: ['feature'],
      categoryLabel: 'Feature Film',
      language: 'Malayalam',
      genre: 'Comedy / Entertainer',
      poster: '/tsunami.jpg',
      still: '/tsunami.jpg',
      year: '2021',
      synopsis: 'Situational Malayalam comedy directed by Lal and Lal Jr., starring Balu Varghese, Innocent, and Mukesh. Follows a young man on an unexpected journey full of misunderstandings.',
      rightsScope: 'Satellite TV Rights • Digital Streaming Rights',
      status: 'Broadcast & Streaming Sold',
      chainOfTitle: 'Clear Paperwork & Verified'
    },
    {
      id: 'secret-of-kalinga',
      title: 'SECRET OF KALINGA',
      category: 'feature',
      categories: ['feature', 'series', 'music'],
      categoryLabel: 'Feature Film',
      language: 'Malayalam',
      genre: 'Comedy / Fantasy / Horror',
      poster: '/secret-of-kalinga.jpg',
      still: '/secret-of-kalinga.jpg',
      year: '2026',
      synopsis: 'Starring Dhyan Sreenivasan, Althaf Salim, and Malavika Menon. On an ancient Kalinga kingdom campus, students accidentally unseal a centuries-old imprisoned spirit on New Year\'s Eve, triggering hilarious supernatural chaos.',
      rightsScope: 'OTT Digital Rights • Satellite TV Rights • Dubbing Rights',
      status: 'Deal Closed',
      chainOfTitle: 'Clear Paperwork & Verified'
    }
  ];

  const filteredFilms = galleryFilter === 'all' 
    ? aggregatedFilms 
    : aggregatedFilms.filter(f => f.category === galleryFilter || (f.categories && f.categories.includes(galleryFilter)));

  // Producer Testimonials (Simple, honest Indian industry feedback)
  const testimonials = [
    {
      id: 1,
      quote: "Indiark got our movie a direct deal on a top streaming platform in record time. They handled all legal checks and helped us get a much better price than what we could get on our own.",
      name: "Sudheesh Nair",
      role: "Producer",
      company: "Malabar Motion Pictures",
      film: "The Great Indian Kitchen",
      stillUrl: '/great-indian-kitchen.jpg',
      rating: 5,
      impact: "Streamed Worldwide • OTT Hit"
    },
    {
      id: 2,
      quote: "For independent producers, getting a meeting with OTT acquisitions heads is very difficult. Indiark took our project to the right decision-makers and closed both digital, music, and satellite rights together.",
      name: "K. R. Venugopal",
      role: "Executive Producer",
      company: "Heritage Media Ventures",
      film: "Bhishmar",
      stillUrl: '/bhishmar.jpg',
      rating: 5,
      impact: "OTT & Music Rights Closed Together"
    },
    {
      id: 3,
      quote: "Complete transparency from day one. They defended our Minimum Guarantee (MG) and made sure our film was released on a major digital platform without any delays or deductions.",
      name: "Aravind Sivaraman",
      role: "Writer & Director",
      company: "Southern Indie Collective",
      film: "Vaanku",
      stillUrl: '/vaanku.jpg',
      rating: 5,
      impact: "Minimum Guarantee (MG) Defended"
    },
    {
      id: 4,
      quote: "Indiark understands both the creative story and the commercial business. They pitched our project directly to digital buyers and handled the contract smoothly from start to finish.",
      name: "Geetha Radhakrishnan",
      role: "Managing Director",
      company: "Blue Wave Productions",
      film: "Secret of Kalinga",
      stillUrl: '/secret-of-kalinga.jpg',
      rating: 5,
      impact: "OTT & Satellite Rights Closed"
    }
  ];

  // How We Work (Simple 4-Step Process)
  const practiceHighlights = [
    {
      title: 'Direct Platform Screenings',
      desc: 'We show your movie screener directly to content heads and acquisitions teams at top streaming platforms.',
      image: '/screening-theater.jpg',
      tag: 'OTT Screenings'
    },
    {
      title: 'Movie Valuation & Pitch Decks',
      desc: 'We evaluate your content honestly, set the right market price, and prepare professional B2B pitch materials.',
      image: '/camera-rig.jpg',
      tag: 'Producer Representation'
    },
    {
      title: 'Quality Check & Delivery',
      desc: 'We make sure your video, audio, subtitles, and metadata meet all technical broadcast and OTT delivery guidelines.',
      image: '/editing-color-lab.jpg',
      tag: 'Technical QC'
    },
    {
      title: 'Agreements & Payment Milestones',
      desc: 'We negotiate the contract, holdback periods, theatrical windows, and ensure clear payment terms for you.',
      image: '/deal-signing.jpg',
      tag: 'Deal Signing'
    }
  ];

  // 4 Core Services in Plain English
  const coreServices = [
    {
      id: '01',
      code: '01',
      title: 'OTT Platform Pitching',
      desc: 'We pitch your completed movie or series directly to top OTT platforms to get you the best license fee or Minimum Guarantee (MG).',
      icon: Tv,
      deliverables: ['Direct reach to streaming heads', 'No blind email pitching', 'Best commercial terms negotiation']
    },
    {
      id: '02',
      code: '02',
      title: 'Producer Representation',
      desc: 'We work as your official business representative, handling all buyer discussions, meetings, and legal paperwork for your film.',
      icon: Film,
      deliverables: ['Full producer advocacy in every deal', 'Splitting OTT, TV & Dubbing rights', 'Transparent agreements & clear terms']
    },
    {
      id: '03',
      code: '03',
      title: 'Satellite & Dubbing Rights',
      desc: 'We sell TV broadcast rights and dubbing rights in Hindi, Tamil, Telugu, and other languages to bring you additional revenue.',
      icon: Layers,
      deliverables: ['Satellite TV channel licensing', 'Hindi & regional dubbing sales', 'Overseas and airline rights sales']
    },
    {
      id: '04',
      code: '04',
      title: 'Legal Rights & Paperwork',
      desc: 'We audit all writer, actor, director, and music agreements to make sure your rights are 100% clean with zero copyright risk.',
      icon: ShieldCheck,
      deliverables: ['Agreement verification for buyers', 'Censor and title documentation', 'Safe, dispute-free deal closing']
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-950)', color: 'var(--text-light-primary)' }}>

      {/* =====================================================================
          TOP ANNOUNCEMENT RIBBON (Simple, Direct)
          ===================================================================== */}
      <div 
        style={{
          backgroundColor: 'rgba(7, 25, 34, 0.95)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
          padding: '0.6rem 1.25rem',
          fontSize: '0.82rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="pulse-dot" />
          <span style={{ fontWeight: 800, color: 'var(--brand-lime)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Looking for Content:
          </span>
          <span style={{ color: '#E2E8F0' }}>
            Active buyer demand for South Indian & Pan-India Feature Films and Web Series
          </span>
        </div>
        <button
          onClick={() => handleNav('submit-content')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--brand-teal-light)',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: 0,
            fontSize: '0.82rem',
            textDecoration: 'underline'
          }}
        >
          <span>Pitch Your Movie</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* =====================================================================
          SECTION 01 — HERO (Clear Indian Film Industry Terminology)
          ===================================================================== */}
      <section 
        className="section"
        style={{
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5rem)',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
        }}
      >
        {/* Subtle Ambient Radial Lighting */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1100px',
            height: '600px',
            background: 'radial-gradient(ellipse at center, rgba(0, 157, 165, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div 
            className="split-editorial" 
            style={{ 
              alignItems: 'center', 
              gap: 'clamp(2rem, 4vw, 4rem)', 
              gridTemplateColumns: 'minmax(0, 1.15fr) minmax(360px, 1fr)'
            }}
          >
            
            {/* Left Narrative */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <span className="badge badge-teal" style={{ background: 'rgba(0, 157, 165, 0.08)', borderColor: 'rgba(0, 157, 165, 0.2)' }}>
                  <Sparkles size={12} />
                  <span>Movie Rights • OTT & Satellite Distribution</span>
                </span>
              </div>

              <h1 className="display-hero hero-reveal-text" style={{ marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
                CONNECTING GREAT MOVIES WITH THE <span className="gradient-text-teal">RIGHT OTT & TV BUYERS</span>
              </h1>

              <p className="text-editorial-body" style={{ marginBottom: '2rem', maxWidth: '640px', lineHeight: 1.7, fontSize: '1.05rem' }}>
                Indiark Entertainments is a media rights agency based in India. We represent film producers and directors to pitch, negotiate, and sell OTT streaming rights, satellite TV broadcast rights, and dubbing rights at the best market value.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <button
                  onClick={() => handleNav('submit-content')}
                  className="btn btn-lime btn-lg"
                >
                  <span>PITCH YOUR MOVIE</span>
                  <ArrowUpRight size={18} />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('film-gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-secondary-dark btn-lg"
                >
                  <span>SEE OUR MOVIES</span>
                  <Film size={16} />
                </button>

                <button
                  onClick={() => handleNav('for-platforms')}
                  className="btn btn-outline-teal"
                  style={{ padding: '0.95rem 1.4rem' }}
                >
                  <span>FOR OTT BUYERS</span>
                  <Briefcase size={16} />
                </button>
              </div>
            </div>

            {/* Right: Pitch Feature Card (Clean, minimal, no image) */}
            <div>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'rgba(11, 19, 31, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="pulse-dot" style={{ width: '7px', height: '7px', backgroundColor: 'var(--brand-lime)' }} />
                    <span style={{ fontSize: '0.74rem', color: 'var(--brand-lime)', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      PITCH MANDATE
                    </span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)' }}>
                    48–72h Review
                  </div>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.85rem', letterSpacing: '-0.01em' }}>
                  WHY PITCH WITH <span className="gradient-text-teal">INDIARK</span>
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-light-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  Eliminate cold pitching friction. We structure, package, and pitch your finished content directly to streaming commissioning editors and broadcast heads.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(0, 157, 165, 0.12)', border: '1px solid rgba(0, 157, 165, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-teal)', flexShrink: 0 }}>
                      <Tv size={16} />
                    </div>
                    <span style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 600 }}>
                      Direct access to OTT acquisitions heads
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(148, 200, 32, 0.12)', border: '1px solid rgba(148, 200, 32, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-lime)', flexShrink: 0 }}>
                      <TrendingUp size={16} />
                    </div>
                    <span style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 600 }}>
                      Valuation defense & minimum guarantee (MG)
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(0, 157, 165, 0.12)', border: '1px solid rgba(0, 157, 165, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-teal)', flexShrink: 0 }}>
                      <ShieldCheck size={16} />
                    </div>
                    <span style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 600 }}>
                      100% Chain of Title & rights protection
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleNav('contact')}
                  className="btn btn-lime"
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '0.95rem', fontWeight: 800 }}
                >
                  <span>PITCH YOUR PROJECT</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02 — RIGHTS HANDLED (Clear Indian Terms)
          ===================================================================== */}
      <section style={{ backgroundColor: '#070D14', padding: '1.25rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Rights We Handle:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
              {[
                'OTT Digital Rights',
                'Satellite TV Rights',
                'Hindi & Regional Dubbing',
                'Remake Rights',
                'Theatrical Distribution',
                'Music Rights',
                'Overseas & Airline Rights'
              ].map((scope, sI) => (
                <span 
                  key={sI} 
                  style={{
                    fontSize: '0.76rem',
                    color: 'var(--text-light-secondary)',
                    fontWeight: 600,
                    padding: '0.35rem 0.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {scope}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 03 — CREDIBILITY METRICS (Simple & Direct)
          ===================================================================== */}
      <section style={{ backgroundColor: '#0B131F', padding: '3.25rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: 'clamp(1.5rem, 3vw, 2.5rem)' 
            }}
          >
            <div style={{ borderLeft: '2px solid var(--brand-lime)', paddingLeft: '1.25rem' }}>
              <div style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 900, color: 'var(--brand-lime)', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                20+
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.4rem' }}>
                Years in Indian Media
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>
                Film production, satellite & streaming
              </div>
            </div>

            <div style={{ borderLeft: '2px solid var(--brand-teal)', paddingLeft: '1.25rem' }}>
              <div style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                100%
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.4rem' }}>
                Clear Legal Paperwork
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>
                Zero copyright or agreement issues
              </div>
            </div>

            <div style={{ borderLeft: '2px solid var(--brand-teal)', paddingLeft: '1.25rem' }}>
              <div style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 900, color: 'var(--brand-teal-light)', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                48–72h
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.4rem' }}>
                Quick Screener Review
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>
                Fast evaluation & honest feedback
              </div>
            </div>

            <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.25rem' }}>
              <div style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                All Rights
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.4rem' }}>
                Under One Roof
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>
                OTT, TV, Dubbing, Remake & Music
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 04 — WHAT WE AGGREGATED & LISTED (Movie Gallery)
          ===================================================================== */}
      <section 
        id="film-gallery"
        className="section section-dark"
        style={{
          paddingTop: 'clamp(4rem, 6.5vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 6.5vw, 5.5rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
        }}
      >
        <div className="container">
          
          {/* Gallery Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.75rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-teal" style={{ background: 'rgba(0, 157, 165, 0.08)', borderColor: 'rgba(0, 157, 165, 0.2)' }}>
                  <Film size={12} />
                  <span>Represented Movies & Slates</span>
                </span>
              </div>
              <h2 className="display-statement">
                MOVIES WE HAVE <span className="gradient-text-teal">REPRESENTED & LICENSED</span>
              </h2>
              <p className="text-editorial-body" style={{ maxWidth: '640px', marginTop: '0.5rem', fontSize: '0.98rem' }}>
                A look at some of the feature films and web series we have taken to top OTT platforms and television networks across India.
              </p>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Titles (6)' },
                { id: 'feature', label: 'Feature Films' },
                { id: 'series', label: 'Web Series' },
                { id: 'music', label: 'Music' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setGalleryFilter(tab.id)}
                  style={{
                    backgroundColor: galleryFilter === tab.id ? 'var(--brand-teal)' : 'rgba(255, 255, 255, 0.03)',
                    color: galleryFilter === tab.id ? '#FFFFFF' : 'var(--text-light-secondary)',
                    border: '1px solid',
                    borderColor: galleryFilter === tab.id ? 'var(--brand-teal)' : 'rgba(255, 255, 255, 0.06)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.5rem 1.15rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Film Poster Cards Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
              gap: 'clamp(1.5rem, 2.5vw, 2.25rem)' 
            }}
          >
            {filteredFilms.map((film) => (
              <div 
                key={film.id}
                style={{
                  backgroundColor: 'rgba(11, 19, 31, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(0, 157, 165, 0.35)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0, 0, 0, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onClick={() => setSelectedFilmModal(film)}
              >
                {/* Poster Artwork Container */}
                <div 
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    aspectRatio: '2/3', 
                    overflow: 'hidden',
                    backgroundColor: '#070D14'
                  }}
                >
                  <img 
                    src={film.poster} 
                    alt={film.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(11, 19, 31, 0.95) 0%, rgba(11, 19, 31, 0.15) 50%, transparent 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Top Year Tag */}
                  {film.year && (
                    <div style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 2 }}>
                      <span 
                        style={{
                          backgroundColor: 'rgba(7, 13, 20, 0.75)',
                          backdropFilter: 'blur(8px)',
                          color: '#FFFFFF',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '0.3rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {film.year}
                      </span>
                    </div>
                  )}

                  {/* Bottom Title Info */}
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--brand-teal-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                      {film.language} • {film.categoryLabel}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                      {film.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.25rem 1.4rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>
                      {film.genre}
                    </div>
                    
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-light-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                      {film.synopsis.substring(0, 115)}...
                    </p>
                  </div>

                  <div>
                    {/* Rights Tag */}
                    <div 
                      style={{
                        padding: '0.55rem 0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.72rem',
                        color: 'var(--brand-teal-light)',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <CheckCircle2 size={13} style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {film.rightsScope}
                      </span>
                    </div>

                    {/* Action Link */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '0.85rem' }}>
                      <span style={{ fontSize: '0.74rem', color: 'var(--brand-lime)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                        <ShieldCheck size={14} />
                        <span>{film.chainOfTitle}</span>
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFilmModal(film);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#FFFFFF',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          padding: 0
                        }}
                      >
                        <span>View Details</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Simple Prompt Bar */}
          <div 
            style={{
              marginTop: '3rem',
              padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              backgroundColor: 'rgba(11, 19, 31, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                Have a finished film or web series ready to pitch?
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-light-secondary)' }}>
                Send us your screener and synopsis. We review projects within 48 to 72 hours and provide direct feedback.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleNav('submit-content')}
                className="btn btn-lime"
              >
                <span>PITCH YOUR MOVIE</span>
                <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => handleNav('our-work')}
                className="btn btn-secondary-dark"
              >
                <span>EXPLORE ALL TITLES</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 05 — HOW WE WORK FOR PRODUCERS (Simple, Practical Steps)
          ===================================================================== */}
      <section 
        style={{
          backgroundColor: '#070D14',
          paddingTop: 'clamp(4rem, 6.5vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 6.5vw, 5.5rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
        }}
      >
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-teal" style={{ background: 'rgba(0, 157, 165, 0.08)', borderColor: 'rgba(0, 157, 165, 0.2)', marginBottom: '0.75rem' }}>
              How We Work
            </span>
            <h2 className="display-statement">
              FROM SCREENER TO <span className="gradient-text-teal">CONTRACT SIGNING</span>
            </h2>
            <p className="text-editorial-body" style={{ marginTop: '0.5rem', fontSize: '0.98rem' }}>
              We manage the entire business process so producers can focus on making films.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {practiceHighlights.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                  backgroundColor: 'rgba(11, 19, 31, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(0, 157, 165, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 900, 
                      fontFamily: 'var(--font-headline)',
                      color: 'var(--brand-teal)' 
                    }}>
                      0{idx + 1}
                    </div>
                    <span 
                      style={{
                        backgroundColor: 'rgba(0, 157, 165, 0.08)',
                        border: '1px solid rgba(0, 157, 165, 0.2)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--brand-teal-light)'
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.65rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-light-secondary)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 06 — PRODUCER TESTIMONIALS (Real Feedback)
          ===================================================================== */}
      <section 
        className="section"
        style={{
          backgroundColor: '#0B131F',
          paddingTop: 'clamp(4rem, 6.5vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 6.5vw, 5.5rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
        }}
      >
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-lime" style={{ background: 'rgba(148, 200, 32, 0.08)', borderColor: 'rgba(148, 200, 32, 0.25)', marginBottom: '0.75rem' }}>
              <Star size={12} fill="var(--brand-lime)" />
              <span>Producer Experiences</span>
            </span>
            <h2 className="display-statement">
              WHAT PRODUCERS SAY ABOUT <span className="gradient-text-teal">WORKING WITH US</span>
            </h2>
            <p className="text-editorial-body" style={{ marginTop: '0.5rem', fontSize: '0.98rem' }}>
              Real feedback from film producers and directors who trusted Indiark with their movie rights.
            </p>
          </div>

          {/* Testimonials Clean Cards (No Images) */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(1.5rem, 2.5vw, 2.25rem)' 
            }}
          >
            {testimonials.map((t) => (
              <div 
                key={t.id}
                style={{
                  backgroundColor: 'rgba(7, 13, 20, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.3s ease, transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(148, 200, 32, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  {/* Top Quote Icon & Stars */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ color: 'var(--brand-teal)', opacity: 0.8 }}>
                      <Quote size={24} />
                    </div>
                    <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--brand-lime)' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="var(--brand-lime)" />
                      ))}
                    </div>
                  </div>

                  {/* Movie Badge & Impact */}
                  <div 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: 'rgba(148, 200, 32, 0.08)',
                      border: '1px solid rgba(148, 200, 32, 0.25)',
                      color: 'var(--brand-lime)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <span>{t.film}</span>
                    <span style={{ opacity: 0.5 }}>•</span>
                    <span>{t.impact}</span>
                  </div>

                  {/* Quote Body */}
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-light-secondary)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.75rem' }}>
                    "{t.quote}"
                  </p>
                </div>

                {/* Producer Footer */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.94rem' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--brand-teal-light)' }}>
                      {t.role} • {t.company}
                    </div>
                  </div>

                  <span style={{ fontSize: '0.76rem', color: 'var(--text-light-muted)', fontWeight: 600 }}>
                    Verified Placed Film
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 07 — CORE SERVICES (Simple 4-Card Overview)
          ===================================================================== */}
      <section 
        className="section section-dark"
        style={{
          paddingTop: 'clamp(4rem, 6.5vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 6.5vw, 5.5rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
        }}
      >
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.75rem' }}>
            <div>
              <span className="badge badge-teal" style={{ background: 'rgba(0, 157, 165, 0.08)', borderColor: 'rgba(0, 157, 165, 0.2)', marginBottom: '0.75rem' }}>
                Our Services
              </span>
              <h2 className="display-statement">
                WHAT WE <span className="gradient-text-teal">DO</span>
              </h2>
              <p className="text-editorial-body" style={{ maxWidth: '600px', marginTop: '0.5rem', fontSize: '0.98rem' }}>
                Complete rights representation and deal management across OTT platforms, satellite channels, and regional dubbing.
              </p>
            </div>

            <button
              onClick={() => handleNav('what-we-do')}
              className="btn btn-secondary-dark"
            >
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* 4 Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {coreServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div 
                  key={srv.id}
                  style={{
                    backgroundColor: 'rgba(11, 19, 31, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 157, 165, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <div 
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'rgba(0, 157, 165, 0.1)',
                          color: 'var(--brand-teal-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <IconComp size={20} />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--brand-lime)', fontWeight: 800 }}>
                        {srv.code}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                      {srv.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-light-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {srv.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {srv.deliverables.map((d, dI) => (
                      <div key={dI} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#CBD5E1' }}>
                        <Check size={13} color="var(--brand-teal-light)" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 08 — TWO BUSINESS PATHS (Producers & Buyers)
          ===================================================================== */}
      <section 
        className="section"
        style={{
          backgroundColor: '#070D14',
          paddingTop: 'clamp(4rem, 6.5vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 6.5vw, 5.5rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
        }}
      >
        <div className="container">
          
          <div className="two-path-grid">
            
            {/* Path 1: Producers */}
            <div 
              style={{
                backgroundColor: 'rgba(11, 19, 31, 0.85)',
                border: '1px solid rgba(148, 200, 32, 0.25)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span className="badge badge-lime" style={{ background: 'rgba(148, 200, 32, 0.08)', borderColor: 'rgba(148, 200, 32, 0.25)', marginBottom: '1rem' }}>
                  For Movie Producers & Directors
                </span>
                <h3 style={{ fontSize: 'clamp(1.45rem, 2.3vw, 1.9rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.85rem' }}>
                  SELL YOUR MOVIE & WEB SERIES RIGHTS
                </h3>
                <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  Have a ready feature film, regional movie, or web series? Submit your project to our team. We evaluate your content honestly, check all legal paperwork, and pitch directly to top streaming and television buyers.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                  {[
                    'Confidential review within 48 to 72 hours',
                    'Direct access to OTT and TV channel acquisitions heads',
                    'Valuation defense & Minimum Guarantee (MG) negotiation',
                    'Complete copyright and contract protection'
                  ].map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.86rem', color: '#F8FAFC' }}>
                      <CheckCircle2 size={16} color="var(--brand-lime)" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('submit-content')}
                className="btn btn-lime btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>SUBMIT YOUR MOVIE</span>
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Path 2: Platform Buyers */}
            <div 
              style={{
                backgroundColor: 'rgba(11, 19, 31, 0.85)',
                border: '1px solid rgba(0, 157, 165, 0.25)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span className="badge badge-teal" style={{ background: 'rgba(0, 157, 165, 0.08)', borderColor: 'rgba(0, 157, 165, 0.2)', marginBottom: '1rem' }}>
                  For OTT Platforms & TV Channels
                </span>
                <h3 style={{ fontSize: 'clamp(1.45rem, 2.3vw, 1.9rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.85rem' }}>
                  LOOKING FOR FRESH CONTENT FOR YOUR PLATFORM?
                </h3>
                <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  Are you an acquisitions head, programming executive, or syndication manager? Explore our curated slate of feature films, series, and regional titles with 100% verified legal chain of title.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                  {[
                    '100% verified legal chain of title & agreements',
                    'Curated content matching your programming requirements',
                    'Digital OTT, Satellite TV, Dubbing & Airline rights',
                    'Direct deal closing with an authorized media rights house'
                  ].map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.86rem', color: '#F8FAFC' }}>
                      <CheckCircle2 size={16} color="var(--brand-teal-light)" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('for-platforms')}
                className="btn btn-outline-teal btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>REQUEST SLATE ACCESS</span>
                <Briefcase size={18} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 09 — CONTACT & DIRECT SUBMISSION
          ===================================================================== */}
      <section 
        className="section section-dark"
        style={{
          paddingTop: 'clamp(4rem, 6.5vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 6.5vw, 5.5rem)'
        }}
      >
        <div className="container">
          
          <div 
            style={{
              backgroundColor: 'rgba(11, 19, 31, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 3.5vw, 3rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 3.5vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Info */}
            <div>
              <span className="badge badge-teal" style={{ background: 'rgba(0, 157, 165, 0.08)', borderColor: 'rgba(0, 157, 165, 0.2)', marginBottom: '1rem' }}>
                Contact Us
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
                LET'S TALK ABOUT YOUR <span className="gradient-text-teal">MOVIE RIGHTS</span>
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Whether you have a finished movie, a rough cut, or need satellite and dubbing rights monetisation, our team in Ernakulam is ready to connect.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(0, 157, 165, 0.1)', color: 'var(--brand-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email Us</div>
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.92rem' }}>{CONTACT_INFO.email}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(148, 200, 32, 0.1)', color: 'var(--brand-lime)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Call or WhatsApp</div>
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.92rem' }}>{CONTACT_INFO.phone}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(0, 157, 165, 0.1)', color: 'var(--brand-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Location</div>
                    <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.92rem' }}>{CONTACT_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div 
              style={{
                backgroundColor: 'rgba(7, 13, 20, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)'
              }}
            >
              {homeContactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(148, 200, 32, 0.15)', color: 'var(--brand-lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    Message Received
                  </h3>
                  <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you. Our rights and content team will review your message and reply within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => setHomeContactSubmitted(false)}
                    className="btn btn-secondary-dark btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleHomeContactSubmit}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                    Tell Us About Your Movie
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.74rem', color: 'var(--text-light-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={homeContactForm.name}
                        onChange={(e) => setHomeContactForm({...homeContactForm, name: e.target.value})}
                        placeholder="Producer / Director Name"
                        style={{
                          width: '100%',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.75rem 1rem',
                          color: '#FFFFFF',
                          fontSize: '0.88rem'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', color: 'var(--text-light-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          required
                          value={homeContactForm.email}
                          onChange={(e) => setHomeContactForm({...homeContactForm, email: e.target.value})}
                          placeholder="name@email.com"
                          style={{
                            width: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.75rem 1rem',
                            color: '#FFFFFF',
                            fontSize: '0.88rem'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', color: 'var(--text-light-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                          Phone / WhatsApp
                        </label>
                        <input 
                          type="tel" 
                          value={homeContactForm.phone}
                          onChange={(e) => setHomeContactForm({...homeContactForm, phone: e.target.value})}
                          placeholder="+91..."
                          style={{
                            width: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.75rem 1rem',
                            color: '#FFFFFF',
                            fontSize: '0.88rem'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.74rem', color: 'var(--text-light-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                        Movie Details / Message
                      </label>
                      <textarea 
                        rows={3}
                        required
                        value={homeContactForm.message}
                        onChange={(e) => setHomeContactForm({...homeContactForm, message: e.target.value})}
                        placeholder="Tell us about your film: title, language, genre, stage (completed/post-production), and which rights you want to sell..."
                        style={{
                          width: '100%',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.75rem 1rem',
                          color: '#FFFFFF',
                          fontSize: '0.88rem',
                          resize: 'vertical'
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={homeContactSubmitting}
                    className="btn btn-lime"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>{homeContactSubmitting ? 'SENDING DETAILS...' : 'SEND DETAILS'}</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          FILM MODAL PREVIEW (Interactive Details Dialog)
          ===================================================================== */}
      {selectedFilmModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(3, 7, 12, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedFilmModal(null)}
        >
          <div 
            style={{
              backgroundColor: '#0B131F',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '750px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'minmax(220px, 280px) 1fr',
              gap: '1.5rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Left Poster */}
            <div style={{ backgroundColor: '#070D14', overflow: 'hidden', borderTopLeftRadius: 'var(--radius-xl)', borderBottomLeftRadius: 'var(--radius-xl)' }}>
              <img 
                src={selectedFilmModal.poster} 
                alt={selectedFilmModal.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Modal Right Info */}
            <div style={{ padding: '2rem 2rem 2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-teal">
                    {selectedFilmModal.categoryLabel}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>
                    {selectedFilmModal.year}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  {selectedFilmModal.title}
                </h2>
                
                <div style={{ fontSize: '0.82rem', color: 'var(--brand-teal-light)', fontWeight: 700, marginBottom: '1.25rem' }}>
                  {selectedFilmModal.language} • {selectedFilmModal.genre}
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-light-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {selectedFilmModal.synopsis}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.84rem', color: '#CBD5E1' }}>
                    <span style={{ color: 'var(--text-light-muted)', minWidth: '95px' }}>Rights Scope:</span>
                    <strong style={{ color: '#FFFFFF' }}>{selectedFilmModal.rightsScope}</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.84rem', color: '#CBD5E1' }}>
                    <span style={{ color: 'var(--text-light-muted)', minWidth: '95px' }}>Paperwork:</span>
                    <strong style={{ color: 'var(--brand-lime)' }}>{selectedFilmModal.chainOfTitle}</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.84rem', color: '#CBD5E1' }}>
                    <span style={{ color: 'var(--text-light-muted)', minWidth: '95px' }}>Deal Status:</span>
                    <strong style={{ color: 'var(--brand-teal-light)' }}>{selectedFilmModal.placementType}</strong>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    setSelectedFilmModal(null);
                    handleNav('for-platforms');
                  }}
                  className="btn btn-lime btn-sm"
                  style={{ flexGrow: 1 }}
                >
                  <span>INQUIRE RIGHTS</span>
                  <ArrowUpRight size={14} />
                </button>
                <button
                  onClick={() => setSelectedFilmModal(null)}
                  className="btn btn-secondary-dark btn-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
