import React from 'react';
import { Film, ShieldCheck, Lock, CheckCircle2, FileText, Download, Users, Layers, Sparkles } from 'lucide-react';
import { ContentSubmissionForm } from '../components/forms/ContentSubmissionForm';

export const SubmitContentPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-dark-950)', minHeight: '80vh' }}>
      
      {/* Editorial Creator Header */}
      <section
        className="section section-navy-glow"
        style={{
          paddingTop: 'clamp(4.5rem, 8vw, 6.5rem)',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(0, 157, 165, 0.2)'
        }}
      >
        <div className="container">
          <span className="badge badge-lime" style={{ marginBottom: '1.25rem' }}>
            Producer & Creator Representation Portal
          </span>
          
          <h1 className="display-hero" style={{ color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: '1.05' }}>
            YOU CREATE. <br />
            WE HELP FIND <br />
            <span style={{ color: 'var(--brand-lime)' }}>THE RIGHT OPPORTUNITIES.</span>
          </h1>

          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.15rem', maxWidth: '840px', lineHeight: '1.7' }}>
            Producers, filmmakers, production studios, and independent artists can submit projects to Indiark Entertainments for professional evaluation, commercial positioning, and strategic representation across OTT platforms, broadcasters, and distribution buyers.
          </p>
        </div>
      </section>

      {/* Pre-Submission Clarity Section (Who / What / Requirements) */}
      <section className="section section-dark">
        <div className="container">
          
          <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
            <span className="eyebrow-label" style={{ marginBottom: '0.5rem' }}>Submission Standards</span>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              Submission Guidelines & Protocol
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.95rem', marginTop: '0.35rem' }}>
              Ensure your project meets our representation criteria before proceeding to the 5-stage application.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '1.75rem', marginBottom: '4.5rem' }}>
            
            {/* 01 Who Can Submit */}
            <div
              className="card-dark"
              style={{
                padding: '2rem',
                backgroundColor: 'rgba(7, 13, 20, 0.8)',
                borderTop: '4px solid var(--brand-teal)'
              }}
            >
              <div style={{ color: 'var(--brand-teal-light)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                01 • Eligibility
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                WHO CAN SUBMIT
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-light-secondary)' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Feature film producers & production houses</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Independent filmmakers & directors</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Web series creators & showrunners</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Music composers, artists & IP rights holders</span>
                </li>
              </ul>
            </div>

            {/* 02 What Can Be Submitted */}
            <div
              className="card-dark"
              style={{
                padding: '2rem',
                backgroundColor: 'rgba(7, 13, 20, 0.8)',
                borderTop: '4px solid var(--brand-lime)'
              }}
            >
              <div style={{ color: 'var(--brand-lime)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                02 • Scope
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                WHAT CAN BE SUBMITTED
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-light-secondary)' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Completed feature films (Theatrical or Digital)</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Web series (Completed or in post-production)</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Music singles, albums & soundtrack catalogues</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-lime)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Film libraries seeking digital rights monetization</span>
                </li>
              </ul>
            </div>

            {/* 03 What Information Is Required */}
            <div
              className="card-dark"
              style={{
                padding: '2rem',
                backgroundColor: 'rgba(7, 13, 20, 0.8)',
                borderTop: '4px solid var(--brand-teal)'
              }}
            >
              <div style={{ color: 'var(--brand-teal-light)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                03 • Requirements
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                INFORMATION REQUIRED
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-light-secondary)' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Applicant & production entity details</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Project synopsis, genre, language & cast/crew</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Rights availability (SVOD, Satellite, Territory)</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--brand-teal-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Executed Authorization Letter mandate</span>
                </li>
              </ul>
            </div>

          </div>

          {/* 5-Stage Portal Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>5-Stage Intake Application</span>
            <h2 className="display-statement" style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
              REPRESENTATION APPLICATION
            </h2>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem', maxWidth: '700px' }}>
              Follow the 5-step guided process: 01 Applicant &rarr; 02 Project &rarr; 03 Rights &rarr; 04 Authorization &rarr; 05 Review.
            </p>
          </div>

          {/* Multi-Step Content Submission Form (Full Width Alignment) */}
          <div style={{ width: '100%' }}>
            <ContentSubmissionForm />
          </div>

        </div>
      </section>

    </div>
  );
};
