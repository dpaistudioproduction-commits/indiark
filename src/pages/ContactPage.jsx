import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Upload, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../services/dataService';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    mobile: '',
    enquiryType: 'Content Representation',
    message: '',
    fileName: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors({ ...errors, file: 'File must be under 10MB' });
        return;
      }
      setFormData({ ...formData, fileName: file.name });
      setErrors({ ...errors, file: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-950)', minHeight: '80vh' }}>
      
      {/* Header */}
      <section
        className="section section-navy-glow"
        style={{
          paddingTop: 'clamp(4rem, 7vw, 6rem)',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(0, 157, 165, 0.2)'
        }}
      >
        <div className="container">
          <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>
            Direct Communications
          </span>
          <h1 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            LET'S TALK CONTENT.
          </h1>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.15rem', maxWidth: '820px', lineHeight: '1.7' }}>
            Whether you are a producer, production house, filmmaker, independent artist, OTT platform, broadcaster, distributor or content buyer, let's discuss the opportunity.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Contact Form */}
      <section className="section section-teal-tinted">
        <div className="container">
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.6fr)',
              gap: '3.5rem',
              alignItems: 'flex-start'
            }}
            className="contact-layout"
          >
            {/* Left Info Column */}
            <div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '1.5rem' }}>
                Corporate Contact
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                
                <div className="card-dark" style={{ padding: '1.25rem', backgroundColor: 'rgba(7, 13, 20, 0.75)' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Mail size={20} color="var(--brand-teal)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.95rem' }}>Official Email</div>
                      <div style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.2rem' }}>
                        {CONTACT_INFO.emailPlaceholder}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-dark" style={{ padding: '1.25rem', backgroundColor: 'rgba(7, 13, 20, 0.75)' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Phone size={20} color="var(--brand-lime)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.95rem' }}>Direct Line</div>
                      <div style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.2rem' }}>
                        {CONTACT_INFO.mobilePlaceholder}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-dark" style={{ padding: '1.25rem', backgroundColor: 'rgba(7, 13, 20, 0.75)' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <MapPin size={20} color="var(--brand-teal)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.95rem' }}>Office Address</div>
                      <div style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.2rem' }}>
                        {CONTACT_INFO.addressPlaceholder}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'rgba(0, 157, 165, 0.08)',
                  border: '1px solid rgba(0, 157, 165, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.85rem',
                  color: 'var(--text-light-secondary)',
                  lineHeight: '1.5'
                }}
              >
                <strong style={{ color: '#FFFFFF' }}>Privacy Assurance:</strong> All creative pitches, screeners, and business communications are handled under strict NDA protocols.
              </div>
            </div>

            {/* Right Form Column */}
            <div>
              {isSuccess ? (
                <div
                  className="card-dark"
                  style={{
                    padding: '3.5rem 2rem',
                    textAlign: 'center',
                    border: '1px solid var(--brand-teal)',
                    backgroundColor: 'rgba(7, 13, 20, 0.95)'
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 157, 165, 0.15)',
                      border: '1px solid var(--brand-teal)',
                      color: 'var(--brand-teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto'
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                    Enquiry Received
                  </h3>

                  <p style={{ color: 'var(--text-light-secondary)', maxWidth: '480px', margin: '0 auto 1.75rem auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Thank you for reaching out to Indiark Entertainments. Our team will review your message and connect with you shortly.
                  </p>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        company: '',
                        designation: '',
                        email: '',
                        mobile: '',
                        enquiryType: 'Content Representation',
                        message: '',
                        fileName: ''
                      });
                    }}
                    className="btn btn-secondary-dark btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-dark" style={{ border: '1px solid var(--border-dark)', padding: '2.5rem' }}>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '1.5rem' }}>
                    Send an Official Enquiry
                  </h3>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Full Name <span className="form-required">*</span></label>
                      <input
                        type="text"
                        className={`form-input ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <span className="form-error-msg"><AlertCircle size={13} /> {errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Company / Entity</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Organization Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid-3">
                    <div className="form-group">
                      <label className="form-label">Designation</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Producer / Buyer"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address <span className="form-required">*</span></label>
                      <input
                        type="email"
                        className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="form-error-msg"><AlertCircle size={13} /> {errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Mobile Number</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+91 / Mobile"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Enquiry Nature / Classification</label>
                    <select
                      className="form-select"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    >
                      <option value="Content Representation">Content Representation & OTT Pitching</option>
                      <option value="Platform Content Sourcing">Platform Content Acquisition / Sourcing</option>
                      <option value="Media Rights & Licensing">Media Rights & Territory Licensing</option>
                      <option value="Music Business">Music Business & Audio Rights</option>
                      <option value="Video Production">Professional Video Production</option>
                      <option value="Post Production">Post-Production & Colour Grading</option>
                      <option value="General Business">General Business Discussion</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Requirement Details <span className="form-required">*</span></label>
                    <textarea
                      className={`form-textarea ${errors.message ? 'is-invalid' : ''}`}
                      rows={4}
                      placeholder="Please outline your requirement or project context..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <span className="form-error-msg"><AlertCircle size={13} /> {errors.message}</span>}
                  </div>

                  {/* File Attachment */}
                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label">Attachment / One-Pager / Pitch Deck (Optional, Max 10MB)</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <label
                        className="btn btn-secondary-dark btn-sm"
                        style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        <Upload size={14} />
                        <span>Choose File</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.png,.jpg"
                          onChange={handleFileUpload}
                          style={{ display: 'none' }}
                        />
                      </label>
                      <span style={{ fontSize: '0.82rem', color: formData.fileName ? 'var(--brand-teal-light)' : 'var(--text-light-muted)' }}>
                        {formData.fileName || 'No file selected'}
                      </span>
                    </div>
                    {errors.file && <span className="form-error-msg"><AlertCircle size={13} /> {errors.file}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>SEND ENQUIRY</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        <style>{`
          @media (max-width: 860px) {
            .contact-layout {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

    </div>
  );
};
