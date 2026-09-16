import React from 'react';
import { BuyerRequirementForm } from '../components/forms/BuyerRequirementForm';
import { ShieldCheck, Film, Tv, Layers, Globe, Clock, CheckCircle2 } from 'lucide-react';

export const ForPlatformsPage = () => {
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
              Platform Acquisition & Content Procurement
            </span>
            <h1 className="display-statement" style={{ marginBottom: '1.25rem' }}>
              LOOKING FOR CURATED CONTENT?
            </h1>
            <p className="text-editorial-body">
              Indiark Entertainments serves as an institutional supply partner for OTT streaming platforms, satellite broadcasters, airline networks, and international distributors seeking verified, high-quality content slates.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Value Pillars */}
      <section style={{ backgroundColor: '#0B131F', padding: '2.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div className="highlight-strip" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <div className="highlight-stat-box highlight-lime">
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>100% CHAIN OF TITLE</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>Verified legal provenance & clear documentation</div>
            </div>
            <div className="highlight-stat-box">
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>MANDATE-MATCHED SLATES</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>Tailored to your specific programming brief</div>
            </div>
            <div className="highlight-stat-box">
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>RAPID TRANSACTION CLOSING</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>Structured term sheets & technical QC support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Formats Covered */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.6rem' }}>Available Catalogue Types</span>
            <h2 className="display-sub" style={{ marginBottom: '0.5rem', color: '#FFFFFF' }}>
              CATEGORIES AVAILABLE FOR PROCUREMENT
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem' }}>
              Direct access to finished and in-production titles across diverse genres and languages.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginBottom: '4rem',
            }}
          >
            {[
              { title: 'FEATURE MOVIES', desc: 'Theatrical, Direct-to-Digital, and Festival Award-winning cinema.' },
              { title: 'ORIGINAL WEB SERIES', desc: 'Episodic miniseries, crime thrillers, drama, and comedy slates.' },
              { title: 'REGIONAL SLATES', desc: 'Malayalam, Tamil, Telugu, Kannada, Hindi, and multilingual packages.' },
              { title: 'DUBBED & MULTILINGUAL', desc: 'Multi-audio dubbed assets ready for pan-India and international release.' },
              { title: 'MUSIC & MASTER SYNC', desc: 'Soundtrack masters, background scores, and synch licensing catalogues.' },
              { title: 'ARCHIVAL LIBRARIES', desc: 'High-volume catalogue packages for AVOD and linear television.' }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(11, 19, 31, 0.75)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem', letterSpacing: '0.02em' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-light-secondary)', lineHeight: '1.5' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Multi-Section Buyer Requirement Form */}
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge badge-lime" style={{ marginBottom: '0.6rem' }}>Direct Acquisition Form</span>
              <h2 className="display-statement" style={{ color: '#FFFFFF' }}>
                REGISTER YOUR BUYER REQUIREMENT
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Complete this formal acquisition brief to receive curated screeners and commercial term sheets.
              </p>
            </div>

            <BuyerRequirementForm />
          </div>

        </div>
      </section>

    </div>
  );
};
