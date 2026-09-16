import React from 'react';
import { X, ShieldAlert, FileText, CheckCircle2, Download, Printer } from 'lucide-react';

export const AuthorizationLetterModal = ({ isOpen, onClose, projectTitle, submitterName }) => {
  if (!isOpen) return null;

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container"
        style={{ maxWidth: '820px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(7, 13, 20, 0.95)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={20} color="var(--brand-teal-light)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              CONTENT REPRESENTATION & PITCHING AUTHORIZATION
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-light-muted)', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Legal Disclaimer Alert */}
        <div
          style={{
            padding: '1rem 1.75rem',
            backgroundColor: 'rgba(0, 157, 165, 0.08)',
            borderBottom: '1px solid rgba(0, 157, 165, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.82rem',
            color: 'var(--text-light-secondary)',
          }}
        >
          <ShieldAlert size={18} color="var(--brand-teal-light)" style={{ flexShrink: 0 }} />
          <span>
            <strong>Legal Notice:</strong> This authorization letter template is for standard submission evaluation purposes. Formal representation mandates are subject to official bilateral agreement review.
          </span>
        </div>

        {/* Letter Body */}
        <div
          style={{
            padding: '2rem 1.75rem',
            color: 'var(--text-light-primary)',
            fontSize: '0.9rem',
            lineHeight: '1.7',
            fontFamily: 'var(--font-body)',
            backgroundColor: 'rgba(11, 19, 31, 0.65)',
          }}
        >
          <div style={{ marginBottom: '1.5rem', textAlign: 'right', color: 'var(--text-light-muted)', fontSize: '0.84rem' }}>
            Date: {today}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <strong>TO:</strong><br />
            INDIARK ENTERTAINMENTS<br />
            Media Rights & Representation Division<br />
            Subject: Authorization for Content Evaluation & Platform Representation
          </div>

          <p style={{ marginBottom: '1.25rem' }}>
            I/We, <strong>{submitterName || '[Name of Submitter / Rights Holder]'}</strong>, hereby represent and warrant that I/We hold the legitimate intellectual property rights, copyright, or verified authorized representation mandate for the media project titled <strong>"{projectTitle || '[Title of Content / Project]'}"</strong> (hereinafter referred to as the "Content").
          </p>

          <p style={{ marginBottom: '1.25rem' }}>
            I/We hereby authorize <strong>INDIARK ENTERTAINMENTS</strong> to review, evaluate, create B2B pitch materials, and present the Content on a non-exclusive evaluation basis to streaming platforms (OTT), satellite broadcasters, digital networks, and content acquisition executives for the purpose of exploring commercial licensing and distribution opportunities.
          </p>

          <div style={{ padding: '1rem 1.25rem', backgroundColor: 'rgba(7, 13, 20, 0.8)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--brand-lime)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
              Representations & Undertakings:
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--text-light-secondary)' }}>
              <li>1. The Content does not infringe upon the intellectual property, copyright, or moral rights of any third party.</li>
              <li>2. Indiark Entertainments is authorized to screen the screener link provided strictly to verified acquisition executives.</li>
              <li>3. No commercial agreement or binding contract shall be finalized without the express written consent and signature of the Rights Holder.</li>
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-dark)' }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginBottom: '0.5rem' }}>Authorized Submitter:</div>
              <div style={{ fontWeight: 700, color: '#FFFFFF' }}>{submitterName || 'Authorized Signatory'}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light-subtle)' }}>Producer / Rights Holder</div>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginBottom: '0.5rem' }}>Representation Agency:</div>
              <div style={{ fontWeight: 700, color: '#FFFFFF' }}>INDIARK ENTERTAINMENTS</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light-subtle)' }}>Media Rights Division</div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderTop: '1px solid var(--border-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(7, 13, 20, 0.95)',
          }}
        >
          <button
            onClick={() => window.print()}
            className="btn btn-secondary-dark btn-sm"
          >
            <Printer size={14} />
            <span>PRINT / SAVE AS PDF</span>
          </button>

          <button
            onClick={onClose}
            className="btn btn-lime btn-sm"
          >
            <CheckCircle2 size={14} />
            <span>ACKNOWLEDGE & CLOSE</span>
          </button>
        </div>

      </div>
    </div>
  );
};
