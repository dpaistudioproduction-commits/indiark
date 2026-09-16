import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';

export const Navbar = ({ activePage, setActivePage, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'who-we-are', label: 'WHO WE ARE' },
    { id: 'what-we-do', label: 'WHAT WE DO' },
    { id: 'why-indiark', label: 'WHY US' },
    { id: 'our-work', label: 'OUR WORK' },
    { id: 'for-platforms', label: 'FOR PLATFORMS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(7, 13, 20, 0.94)' : 'rgba(7, 13, 20, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.03)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, height 0.3s ease',
        }}
      >
        <div 
          className="container-wide" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            height: isScrolled ? '68px' : '78px',
            transition: 'height 0.3s ease'
          }}
        >
          
          {/* Single Clean Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            title="Indiark Entertainments"
          >
            <img
              src="/indiark-logo.png"
              alt="Indiark Entertainments"
              style={{ 
                height: isScrolled ? '40px' : '46px', 
                width: 'auto', 
                objectFit: 'contain', 
                transition: 'height 0.3s ease',
                display: 'block'
              }}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.6rem' }} className="desktop-nav-links">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 600,
                    letterSpacing: '0.04em',
                    color: isActive ? '#FFFFFF' : 'var(--text-light-secondary)',
                    cursor: 'pointer',
                    padding: '0.4rem 0.1rem',
                    position: 'relative',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.target.style.color = isActive ? '#FFFFFF' : 'var(--text-light-secondary)')}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--brand-lime)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="desktop-nav-cta">
            <button
              onClick={() => handleNavClick('submit-content')}
              className="btn btn-lime btn-sm"
              style={{ fontWeight: 800, letterSpacing: '0.04em' }}
            >
              <span>PITCH YOUR CONTENT</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-menu-toggle">
            <button
              onClick={() => handleNavClick('submit-content')}
              className="btn btn-lime btn-sm"
              style={{ padding: '0.45rem 0.8rem', fontSize: '0.74rem' }}
            >
              <span>PITCH</span>
              <ArrowUpRight size={13} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.5rem',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '70px',
            backgroundColor: 'rgba(7, 13, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: isActive ? 'rgba(0, 157, 165, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                    border: isActive ? '1px solid var(--brand-teal)' : '1px solid transparent',
                    color: isActive ? '#FFFFFF' : 'var(--text-light-secondary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 500,
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} color={isActive ? 'var(--brand-lime)' : 'var(--text-light-subtle)'} />
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => handleNavClick('submit-content')}
              className="btn btn-lime btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>PITCH YOUR CONTENT</span>
              <ArrowUpRight size={18} />
            </button>
            <button
              onClick={() => handleNavClick('for-platforms')}
              className="btn btn-secondary-dark btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>BUYER REQUIREMENTS</span>
            </button>
          </div>
        </div>
      )}

      {/* Navigation Responsive Styles */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav-links { display: flex !important; }
          .desktop-nav-cta { display: flex !important; }
          .mobile-menu-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};
