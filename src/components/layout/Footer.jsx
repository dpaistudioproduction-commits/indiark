import React from 'react';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../../services/dataService';

export const Footer = ({ setActivePage, onOpenLegal }) => {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark-950)',
        borderTop: '1px solid var(--border-dark)',
        color: 'var(--text-light-secondary)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        fontSize: '0.9rem',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Top Closing Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Official Logo & Brand Thesis */}
          <div style={{ maxWidth: '340px' }}>
            <img
              src="/indiark-logo.png"
              alt="INDIARK ENTERTAINMENTS"
              style={{
                height: '48px',
                width: 'auto',
                marginBottom: '1.25rem'
              }}
            />
            
            <div style={{ fontSize: '0.8rem', color: 'var(--brand-teal-light)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '0.75rem' }}>
              Media Rights • Content Representation • OTT • Film • Music • Digital
            </div>

            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.84rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Strategic media rights representation and entertainment business agency helping producers connect their content with leading platforms, buyers, and global commercial opportunities.
            </p>

            <div
              style={{
                padding: '0.85rem 1rem',
                backgroundColor: 'rgba(0, 157, 165, 0.08)',
                border: '1px solid rgba(0, 157, 165, 0.25)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.8rem',
                color: 'var(--brand-lime)',
                fontWeight: 700
              }}
            >
              Connecting Content. Creating Opportunities. Closing Business.
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '1.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'who-we-are', label: 'Who We Are' },
                { id: 'what-we-do', label: 'What We Do (Services Atlas)' },
                { id: 'why-indiark', label: 'Why Indiark (Manifesto)' },
                { id: 'our-work', label: 'Our Work (Cinema Archive)' },
                { id: 'for-platforms', label: 'For Platforms & Buyers' },
                { id: 'submit-content', label: 'Submit Content' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-light-muted)',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      padding: 0,
                      textAlign: 'left',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-teal-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light-muted)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 7 Business Streams */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '1.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Business Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-light-muted)', fontSize: '0.85rem' }}>
              <li>01 • OTT Platform Pitching</li>
              <li>02 • Movie & Web Series Representation</li>
              <li>03 • Content Rights Business</li>
              <li>04 • Music Business</li>
              <li>05 • Digital Business</li>
              <li>06 • Video Production</li>
              <li>07 • Post-Production</li>
            </ul>
          </div>

          {/* Column 4: Official Inquiries & Placeholders */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '1.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Official Communications
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <Mail size={16} color="var(--brand-teal)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ color: 'var(--text-light-subtle)', fontSize: '0.75rem' }}>Official Email</div>
                  <div style={{ color: 'var(--text-light-secondary)', fontStyle: 'italic' }}>{CONTACT_INFO.emailPlaceholder}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <Phone size={16} color="var(--brand-teal)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ color: 'var(--text-light-subtle)', fontSize: '0.75rem' }}>Direct Line</div>
                  <div style={{ color: 'var(--text-light-secondary)', fontStyle: 'italic' }}>{CONTACT_INFO.mobilePlaceholder}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--brand-teal)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ color: 'var(--text-light-subtle)', fontSize: '0.75rem' }}>Office Address</div>
                  <div style={{ color: 'var(--text-light-secondary)', fontStyle: 'italic' }}>{CONTACT_INFO.addressPlaceholder}</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', fontSize: '0.78rem', color: 'var(--text-light-subtle)' }}>
              * Verified corporate registry details will be published upon formal launch.
            </div>
          </div>

        </div>

        {/* Legal Notice Banner */}
        <div
          style={{
            padding: '1rem 1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-dark)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', maxWidth: '800px' }}>
            <strong style={{ color: '#FFFFFF' }}>Notice of Content Integrity:</strong> All business streams, process definitions, and project representations conform to official corporate specifications. Content submission and authorization instruments are subject to legal advisor confirmation prior to formal execution.
          </div>
          <button
            onClick={() => onOpenLegal('terms')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--brand-teal-light)',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <span>Legal Disclaimers</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Bottom Bar: Copyright & Legal Policy Modals */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-light-subtle)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} INDIARK ENTERTAINMENTS. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { id: 'privacy', label: 'Privacy Policy' },
              { id: 'terms', label: 'Terms & Conditions' },
              { id: 'submission-policy', label: 'Content Submission Policy' },
              { id: 'copyright', label: 'Copyright Notice' },
              { id: 'disclaimer', label: 'Disclaimer' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onOpenLegal(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-light-subtle)',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '0.8rem',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-teal-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light-subtle)')}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
