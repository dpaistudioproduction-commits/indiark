import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Briefcase } from 'lucide-react';
import { CONTACT_INFO } from '../services/dataService';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Business Consultation',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

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
          <div style={{ maxWidth: '880px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>
              Corporate Inquiries & Representation
            </span>
            <h1 className="display-statement" style={{ marginBottom: '1.25rem' }}>
              LET'S TALK CONTENT
            </h1>
            <p className="text-editorial-body">
              Whether you are an independent creator seeking platform pitching representation or an acquisition executive looking for curated content slates, we look forward to connecting.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section section-secondary">
        <div className="container">
          
          <div className="split-editorial" style={{ alignItems: 'flex-start' }}>
            
            {/* Left: Contact Info & Routing */}
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                INDIARK ENTERTAINMENTS
              </h2>
              <p style={{ color: 'var(--brand-teal-light)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '2rem' }}>
                {CONTACT_INFO.tagline}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(0, 157, 165, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-teal-light)', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      Official Inquiries Email
                    </div>
                    <div style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600, marginTop: '0.2rem' }}>
                      {CONTACT_INFO.emailPlaceholder}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(148, 200, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-lime)', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      Telephone / WhatsApp
                    </div>
                    <div style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600, marginTop: '0.2rem' }}>
                      {CONTACT_INFO.mobilePlaceholder}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      Principal Operating Office
                    </div>
                    <div style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600, marginTop: '0.2rem' }}>
                      {CONTACT_INFO.addressPlaceholder}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Fast Routes */}
              <div style={{ padding: '1.5rem', backgroundColor: 'rgba(7, 13, 20, 0.75)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Fast Action Channels:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a href="/#/submit-content" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', color: 'var(--brand-lime-light)', fontSize: '0.85rem', fontWeight: 700 }}>
                    <span>Pitch Your Finished Content / Slate</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a href="/#/for-platforms" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', color: 'var(--brand-teal-light)', fontSize: '0.85rem', fontWeight: 700 }}>
                    <span>Register Platform Acquisition Brief</span>
                    <Briefcase size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Direct Corporate Message Form */}
            <div
              style={{
                backgroundColor: 'rgba(7, 13, 20, 0.85)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              }}
            >
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={42} color="var(--brand-lime)" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    MESSAGE TRANSMITTED
                  </h3>
                  <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                    Thank you for reaching out. Our business management team will respond to your message promptly.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary-dark btn-sm">
                    <span>SEND ANOTHER MESSAGE</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>
                    Send an Executive Inquiry
                  </h3>

                  <div className="form-group">
                    <label className="form-label">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-control"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+91 / Int."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject / Inquiry Scope *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-control"
                    >
                      <option value="General Business Consultation">General Business Consultation</option>
                      <option value="Producer Representation Inquiry">Producer Representation Inquiry</option>
                      <option value="OTT / Platform Procurement">OTT / Platform Procurement</option>
                      <option value="Rights & Catalogue Licensing">Rights & Catalogue Licensing</option>
                      <option value="Media Edge Academic Partnership">Media Edge Academic Partnership</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please outline the nature of your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-control"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-lime"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {isSubmitting ? <span>SENDING INQUIRY...</span> : <><span>SEND MESSAGE</span><Send size={15} /></>}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
