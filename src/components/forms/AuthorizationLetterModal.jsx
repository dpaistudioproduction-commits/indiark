import React from 'react';
import { X, Download, Printer, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const AuthorizationLetterModal = ({ isOpen, onClose, applicantName = '', projectName = '', companyName = '' }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(7, 13, 20, 0.88)',
        backdropFilter: 'blur(8px)',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        className="card-dark"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          border: '1px solid var(--brand-teal)',
          backgroundColor: '#FFFFFF',
          color: '#0F172A',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '1.25rem 2rem',
            backgroundColor: 'var(--bg-dark-950)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-dark)'
          }}
        >
          <div>
            <div className="badge badge-teal" style={{ marginBottom: '0.2rem' }}>
              Official Document Template
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem' }}>
              Content Representation Authorization Letter
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handlePrint}
              className="btn btn-lime btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                background: 'none',
                border: '1px solid var(--border-dark)',
                color: 'var(--text-light-muted)',
                padding: '0.4rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Legal Advisory Warning */}
        <div
          style={{
            padding: '0.85rem 2rem',
            backgroundColor: '#FEF3C7',
            borderBottom: '1px solid #FCD34D',
            color: '#92400E',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem'
          }}
        >
          <ShieldAlert size={18} style={{ flexShrink: 0 }} />
          <div>
            <strong>Legal Review Notice:</strong> This authorization document format is provided as an initial evaluation instrument. Official legal wording must be reviewed and signed off by the company’s legal counsel prior to binding distribution agreements.
          </div>
        </div>

        {/* Printable Document Body */}
        <div
          id="printable-auth-doc"
          style={{
            padding: '2.5rem',
            overflowY: 'auto',
            fontFamily: 'Georgia, serif',
            fontSize: '0.95rem',
            lineHeight: '1.7',
            color: '#1E293B',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '2px solid #009DA5', paddingBottom: '1rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0B131F', fontSize: '1.4rem', letterSpacing: '0.04em' }}>
              INDIARK ENTERTAINMENTS
            </h2>
            <div style={{ fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Content Submission & Representation Mandate Form
            </div>
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Date:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>To:</strong><br />
            Indiark Entertainments<br />
            Media Rights Representation Division
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>SUBJECT:</strong> Authorization for Content Evaluation and Representation Discussions for the Project titled <em>"{projectName || '____________________'}"</em>.
          </p>

          <p style={{ marginBottom: '1.25rem' }}>
            Dear Indiark Entertainments Team,
          </p>

          <p style={{ marginBottom: '1.25rem' }}>
            I/We, <strong>{applicantName || '________________________________________'}</strong> representing <strong>{companyName || '________________________________________'}</strong> (hereinafter referred to as the "Content Owner/Authorized Representative"), hereby confirm that:
          </p>

          <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>
              I/We hold the legitimate authority and rights to submit the material pertaining to the project <strong>"{projectName || '____________________'}"</strong> for professional evaluation.
            </li>
            <li>
              I/We authorize <strong>Indiark Entertainments</strong> to review the submitted screener, synopsis, and metadata to explore potential pitching, distribution, media rights licensing, and commercial representation opportunities across OTT, broadcast, digital, and international platforms.
            </li>
            <li>
              I/We understand that this initial submission does not constitute an exclusive assignment of rights until a formal commercial representation agreement is mutually negotiated and legally executed.
            </li>
            <li>
              All information and chain-of-title representations provided in the accompanying submission form are accurate to the best of my/our knowledge.
            </li>
          </ol>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <div style={{ borderBottom: '1px solid #94A3B8', height: '45px', marginBottom: '0.5rem' }}></div>
              <div><strong>Authorized Signatory</strong></div>
              <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Name: {applicantName || '________________________'}</div>
              <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Designation: ________________________</div>
            </div>

            <div>
              <div style={{ borderBottom: '1px solid #94A3B8', height: '45px', marginBottom: '0.5rem' }}></div>
              <div><strong>Company / Entity Seal</strong></div>
              <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Entity: {companyName || '________________________'}</div>
              <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Date: ________________________</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
