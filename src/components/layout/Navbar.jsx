import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, SlidersHorizontal, Film, Briefcase, Sparkles } from 'lucide-react';

export const Navbar = ({ activePage, setActivePage, onOpenAdmin }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current) return;

      rafIdRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        setIsScrolled(currentScrollY > 20);

        if (currentScrollY > 80 && currentScrollY > lastScrollYRef.current) {
          if (!mobileMenuOpen) {
            setIsVisible(false);
          }
        } else {
          setIsVisible(true);
        }

        lastScrollYRef.current = currentScrollY;
        rafIdRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'what-we-do', label: 'What We Do' },
    { id: 'why-indiark', label: 'Why Indiark' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'for-platforms', label: 'For Platforms' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isScrolled ? '0.65rem 0' : '1rem 0',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease, background-color 0.3s ease',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: isScrolled ? 'rgba(7, 13, 20, 0.92)' : 'rgba(7, 13, 20, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: 'none',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.35)' : 'none'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            width: '100%'
          }}
        >
          {/* Brand Logo with Smooth Hover */}
          <button
            onClick={() => handleNavClick('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0.2rem 0',
              outline: 'none',
              transition: 'opacity 0.2s ease, transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Indiark Entertainments Home"
          >
            <img
              src="/indiark-logo.png"
              alt="INDIARK ENTERTAINMENTS"
              style={{
                height: '44px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </button>

          {/* Center Clean Plain Navigation Island */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
              padding: '0.3rem 0.5rem',
              borderRadius: 'var(--radius-full)',
              border: 'none'
            }}
            className="desktop-nav-island"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: isActive ? 'rgba(0, 157, 165, 0.15)' : 'transparent',
                    border: 'none',
                    color: isActive ? 'var(--brand-teal-light)' : 'var(--text-light-secondary)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    padding: '0.5rem 0.95rem',
                    borderRadius: 'var(--radius-full)',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    letterSpacing: '0.01em',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-light-secondary)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Hub */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            
            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('submit-content')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, #94C820 0%, #A7DC28 100%)',
                color: '#070D14',
                fontWeight: 700,
                fontSize: '0.84rem',
                letterSpacing: '0.02em',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 16px rgba(148, 200, 32, 0.25), 0 2px 6px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(148, 200, 32, 0.4), 0 4px 10px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(148, 200, 32, 0.25), 0 2px 6px rgba(0, 0, 0, 0.2)';
              }}
            >
              <span>Pitch Content</span>
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </button>

            {/* Studio Pill */}
            <button
              onClick={onOpenAdmin}
              title="Content Studio / Management"
              aria-label="Open Studio Console"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: 'none',
                color: 'var(--text-light-muted)',
                padding: '0.55rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-teal-light)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 157, 165, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-light-muted)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
              }}
            >
              <SlidersHorizontal size={15} />
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: 'none',
                color: '#FFFFFF',
                padding: '0.5rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Smooth Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 13, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 99,
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            overflowY: 'auto',
            animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <button
              onClick={() => handleNavClick('submit-content')}
              className="card-dark"
              style={{
                padding: '1rem',
                textAlign: 'left',
                border: 'none',
                backgroundColor: 'rgba(148, 200, 32, 0.08)'
              }}
            >
              <Film size={18} color="var(--brand-lime)" style={{ marginBottom: '0.35rem' }} />
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF' }}>Content Owners</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--brand-lime)' }}>Pitch Projects &rarr;</div>
            </button>

            <button
              onClick={() => handleNavClick('for-platforms')}
              className="card-dark"
              style={{
                padding: '1rem',
                textAlign: 'left',
                border: 'none',
                backgroundColor: 'rgba(0, 157, 165, 0.08)'
              }}
            >
              <Briefcase size={18} color="var(--brand-teal)" style={{ marginBottom: '0.35rem' }} />
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF' }}>Platforms & Buyers</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--brand-teal-light)' }}>Request Slate &rarr;</div>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {[
              ...navItems,
              { id: 'submit-content', label: 'Submit Content (Producers)' }
            ].map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    textAlign: 'left',
                    background: isActive ? 'rgba(0, 157, 165, 0.12)' : 'transparent',
                    border: 'none',
                    borderLeft: isActive ? '3px solid var(--brand-teal)' : '3px solid transparent',
                    color: isActive ? 'var(--brand-teal-light)' : '#FFFFFF',
                    padding: '0.85rem 1rem',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 500,
                    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="btn btn-secondary-dark"
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <SlidersHorizontal size={15} />
              <span>Indiark Content Studio</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1040px) {
          .desktop-nav-island {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
};
