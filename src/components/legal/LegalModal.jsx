import React from 'react';
import { X, ShieldAlert, Scale, FileText } from 'lucide-react';

export const LegalModal = ({ legalType, onClose }) => {
  if (!legalType) return null;

  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    'submission-policy': 'Content Submission & Rights Policy',
    copyright: 'Copyright & Intellectual Property Notice',
    disclaimer: 'Corporate & Media Rights Disclaimer'
  };

  const title = titles[legalType] || 'Legal Information';

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
        zIndex: 1300,
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
          maxWidth: '780px',
          maxHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          border: '1px solid var(--border-dark)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-dark)',
            backgroundColor: 'rgba(7, 13, 20, 0.98)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Scale size={20} color="var(--brand-teal)" />
            <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>{title}</h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'none',
              border: '1px solid var(--border-dark)',
              color: 'var(--text-light-muted)',
              cursor: 'pointer',
              padding: '0.4rem',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Warning Banner */}
        <div
          style={{
            padding: '1rem 1.75rem',
            backgroundColor: 'rgba(0, 157, 165, 0.1)',
            borderBottom: '1px solid rgba(0, 157, 165, 0.25)',
            color: 'var(--brand-teal-light)',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}
        >
          <ShieldAlert size={18} style={{ flexShrink: 0 }} />
          <div>
            <strong>LEGAL CONTENT NOTICE:</strong> Official binding legal policies and compliance instruments will be finalized and approved by corporate legal counsel prior to formal commercial launch.
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '2rem', overflowY: 'auto', fontSize: '0.92rem', lineHeight: '1.7', color: 'var(--text-light-secondary)' }}>
          
          <h4 style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
            1. Scope & Framework
          </h4>
          <p style={{ marginBottom: '1.25rem' }}>
            Indiark Entertainments operates as a media rights representation and entertainment business consultancy. This policy defines the standard governance model applying to website inquiries, content submissions, and platform communication.
          </p>

          <h4 style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
            2. Confidentiality & Non-Disclosure of Submissions
          </h4>
          <p style={{ marginBottom: '1.25rem' }}>
            All project synopses, scripts, screeners, screener links, and business terms submitted through this website are treated with strict commercial confidentiality. Materials are evaluated solely for the purpose of assessing distribution suitability, OTT pitching, and rights representation opportunities.
          </p>

          <h4 style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
            3. Chain of Title & Intellectual Property
          </h4>
          <p style={{ marginBottom: '1.25rem' }}>
            Content owners retain full underlying copyright in their works. Indiark Entertainments does not claim ownership of submitted intellectual property. Commercial representation mandates are executed under individual written representation contracts.
          </p>

          <h4 style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
            4. Legal Status
          </h4>
          <p style={{ marginBottom: '1.25rem' }}>
            <em>[FORMAL LEGAL POLICY TEXT TO BE REVIEWED & APPROVED BY COMPANY LEGAL ADVISOR PRIOR TO PRODUCTION LAUNCH]</em>
          </p>

          <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-dark)', display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={onClose} className="btn btn-secondary-dark btn-sm">
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
