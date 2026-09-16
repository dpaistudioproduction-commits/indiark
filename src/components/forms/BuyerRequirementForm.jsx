import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, Film, ShieldCheck } from 'lucide-react';
import { dataService } from '../../services/dataService';

export const BuyerRequirementForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    designation: '',
    email: '',
    mobile: '',
    website: '',
    country: '',
    contentType: 'Feature Films',
    languages: '',
    genre: '',
    titlesRequired: '1-5 Titles',
    rightsRequired: 'OTT / Digital Streaming',
    territory: 'India & Global',
    contentDuration: '',
    timeline: 'Immediate / Q1',
    detailedRequirement: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.companyName.trim()) errs.companyName = 'Company / Platform Name is required';
    if (!formData.contactPerson.trim()) errs.contactPerson = 'Contact person name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.contentType) errs.contentType = 'Please select a content type';
    if (!formData.detailedRequirement.trim()) errs.detailedRequirement = 'Detailed requirement description is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      dataService.saveBuyerSubmission(formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  if (isSuccess) {
    return (
      <div
        className="card-dark"
        style={{
          padding: '3rem 2rem',
          textAlign: 'center',
          border: '1px solid var(--brand-teal)',
          backgroundColor: 'rgba(7, 13, 20, 0.95)'
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
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

        <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '1rem' }}>
          Requirement Successfully Received
        </h3>

        <p style={{ color: 'var(--text-light-secondary)', maxWidth: '540px', margin: '0 auto 1.75rem auto', fontSize: '1rem', lineHeight: '1.6' }}>
          Thank you. Our team will review your requirement and contact you if there is a relevant opportunity.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                companyName: '',
                contactPerson: '',
                designation: '',
                email: '',
                mobile: '',
                website: '',
                country: '',
                contentType: 'Feature Films',
                languages: '',
                genre: '',
                titlesRequired: '1-5 Titles',
                rightsRequired: 'OTT / Digital Streaming',
                territory: 'India & Global',
                contentDuration: '',
                timeline: 'Immediate / Q1',
                detailedRequirement: '',
                additionalInfo: ''
              });
            }}
            className="btn btn-secondary-dark btn-sm"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-dark" style={{ border: '1px solid var(--border-dark)', padding: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
      
      {/* Section 1: Company Details */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.75rem' }}>
          <Building2 size={20} color="var(--brand-teal)" />
          <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem' }}>
            1. Company & Platform Details
          </h4>
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label className="form-label">Company / Platform Name <span className="form-required">*</span></label>
            <input
              type="text"
              className={`form-input ${errors.companyName ? 'is-invalid' : ''}`}
              placeholder="e.g. Global Stream Media / OTT Network"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
            {errors.companyName && <span className="form-error-msg"><AlertCircle size={13} /> {errors.companyName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Contact Person <span className="form-required">*</span></label>
            <input
              type="text"
              className={`form-input ${errors.contactPerson ? 'is-invalid' : ''}`}
              placeholder="Full Name"
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
            />
            {errors.contactPerson && <span className="form-error-msg"><AlertCircle size={13} /> {errors.contactPerson}</span>}
          </div>
        </div>

        <div className="grid-3">
          <div className="form-group">
            <label className="form-label">Designation</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Head of Acquisitions"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Business Email <span className="form-required">*</span></label>
            <input
              type="email"
              className={`form-input ${errors.email ? 'is-invalid' : ''}`}
              placeholder="name@platform.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <span className="form-error-msg"><AlertCircle size={13} /> {errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Mobile / Phone</label>
            <input
              type="tel"
              className="form-input"
              placeholder="+91 / International"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
          </div>
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label className="form-label">Platform Website / Portal</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Country / Territory</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. India, Middle East, Global"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Content Requirement Details */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.75rem' }}>
          <Film size={20} color="var(--brand-lime)" />
          <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem' }}>
            2. Content Requirements & Specifications
          </h4>
        </div>

        <div className="grid-3">
          <div className="form-group">
            <label className="form-label">Content Type <span className="form-required">*</span></label>
            <select
              className="form-select"
              value={formData.contentType}
              onChange={(e) => setFormData({ ...formData, contentType: e.target.value })}
            >
              <option value="Feature Films">Feature Films</option>
              <option value="Web Series & Originals">Web Series & Originals</option>
              <option value="Regional Language Cinema">Regional Language Cinema</option>
              <option value="Dubbed Content">Dubbed Content</option>
              <option value="Music & Audio Catalogues">Music & Audio Catalogues</option>
              <option value="Documentaries & Special Formats">Documentaries & Special Formats</option>
              <option value="Film Library / Catalogue">Film Library / Catalogue</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Preferred Language(s)</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Hindi, Malayalam, Tamil, Telugu, English"
              value={formData.languages}
              onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Genre Preference</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Thriller, Drama, Comedy, Action"
              value={formData.genre}
              onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
            />
          </div>
        </div>

        <div className="grid-3">
          <div className="form-group">
            <label className="form-label">Number of Titles</label>
            <select
              className="form-select"
              value={formData.titlesRequired}
              onChange={(e) => setFormData({ ...formData, titlesRequired: e.target.value })}
            >
              <option value="Single Title">Single Title</option>
              <option value="1-5 Titles">1–5 Titles</option>
              <option value="5-15 Titles">5–15 Titles</option>
              <option value="Bulk / Catalogue 15+ Titles">Bulk / Catalogue (15+ Titles)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Rights Required</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Exclusive SVOD, AVOD, TVOD, Satellite"
              value={formData.rightsRequired}
              onChange={(e) => setFormData({ ...formData, rightsRequired: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Requirement Timeline</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Immediate, Next Quarter, 2025"
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Detailed Requirement Description <span className="form-required">*</span></label>
          <textarea
            className={`form-textarea ${errors.detailedRequirement ? 'is-invalid' : ''}`}
            rows={4}
            placeholder="Please describe your programming needs, audience targets, licensing term preferences, and specific criteria..."
            value={formData.detailedRequirement}
            onChange={(e) => setFormData({ ...formData, detailedRequirement: e.target.value })}
          />
          {errors.detailedRequirement && <span className="form-error-msg"><AlertCircle size={13} /> {errors.detailedRequirement}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Additional Information / Notes</label>
          <input
            type="text"
            className="form-input"
            placeholder="Any additional remarks or delivery requirements"
            value={formData.additionalInfo}
            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
          />
        </div>
      </div>

      {/* Submit Action */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-dark)' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>
          * Commercial inquiries are handled confidentially by Indiark's representation team.
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg"
          style={{ minWidth: '220px' }}
        >
          {isSubmitting ? (
            <span>Processing Requirement...</span>
          ) : (
            <>
              <span>SUBMIT REQUIREMENT</span>
              <Send size={16} />
            </>
          )}
        </button>
      </div>

    </form>
  );
};
