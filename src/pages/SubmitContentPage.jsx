import React from 'react';
import { ContentSubmissionForm } from '../components/forms/ContentSubmissionForm';
import { ShieldCheck, Clock, CheckCircle2, Lock, ArrowUpRight, Film, Tv } from 'lucide-react';

export const SubmitContentPage = () => {
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
            <span className="badge badge-lime" style={{ marginBottom: '1rem' }}>
              Creator & Producer Pitching Portal
            </span>
            <h1 className="display-statement" style={{ marginBottom: '1.25rem' }}>
              PITCH YOUR CONTENT FOR OTT & RIGHTS LICENSING
            </h1>
            <p className="text-editorial-body">
              Submit your feature film, original web series, music catalogue, or finished rough cut for institutional evaluation and direct commercial pitching to top OTT buyers and broadcast networks.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Process Highlights Strip */}
      <section style={{ backgroundColor: '#0B131F', padding: '2.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div className="highlight-strip" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
            <div className="highlight-stat-box highlight-lime">
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>48–72H EVALUATION</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>Initial assessment & platform alignment feedback</div>
            </div>
            <div className="highlight-stat-box">
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>SECURE SCREENER PROTOCOL</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>Encrypted links shared strictly with decision-makers</div>
            </div>
            <div className="highlight-stat-box">
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>COMMERCIAL DEFENSE</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>Negotiating license fees, MGs, and territorial carve-outs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Submission Form Section */}
      <section className="section section-dark">
        <div className="container">
          
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 className="display-sub" style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>
                CONFIDENTIAL PROJECT DOSSIER SUBMISSION
              </h2>
              <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem' }}>
                Please provide accurate metadata, screener credentials, and available rights.
              </p>
            </div>

            <ContentSubmissionForm />
          </div>

        </div>
      </section>

    </div>
  );
};
