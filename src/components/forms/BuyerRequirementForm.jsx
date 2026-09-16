import React, { useState } from 'react';
import { CheckCircle2, Send, Building, Mail, Phone, Globe, Shield, Sparkles } from 'lucide-react';
import { dataService } from '../../services/dataService';

export const BuyerRequirementForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    platformName: '',
    orgType: 'OTT Platform',
    territories: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    contentTypes: [],
    languages: '',
    genres: '',
    rightsNeeded: [],
    dealModel: 'Outright License Fee',
    timeline: 'Immediate / Next 30 Days',
    specificRequirements: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const orgTypes = [
    'OTT Streaming Platform',
    'Satellite / Linear Broadcaster',
    'Theatrical / Overseas Distributor',
    'In-Flight / Transport Network',
    'AVOD / YouTube Network',
    'Telco / Digital Portal',
    'Music Label / Publisher'
  ];

  const contentTypeOptions = [
    'Feature Films',
    'Original Web Series',
    'Regional Cinema',
    'Dubbed & Multilingual',
    'Music Catalogues',
    'Documentaries',
    'Short-form Slates'
  ];

  const rightsOptions = [
    'SVOD Rights',
    'AVOD Rights',
    'TVOD / Pay-Per-View',
    'Satellite Linear TV',
    'In-Flight / Transport',
    'International Remake / Dubbing',
    'Master Music Sync'
  ];

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => {
      const current = prev[field] || [];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      dataService.saveBuyerSubmission(formData);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 600);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        style={{
          padding: '3.5rem 2rem',
          backgroundColor: 'rgba(11, 19, 31, 0.95)',
          border: '1px solid rgba(0, 157, 165, 0.4)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(148, 200, 32, 0.15)',
            border: '2px solid var(--brand-lime)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            color: 'var(--brand-lime)',
          }}
        >
          <CheckCircle2 size={36} />
        </div>
        
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
          REQUIREMENT REGISTERED
        </h3>
        
        <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
          Thank you. Your buyer acquisition brief has been logged with Indiark Entertainments. Our content rights team will review your parameters and prepare a curated slate of verified titles matching your mandate.
        </p>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              companyName: '',
              platformName: '',
              orgType: 'OTT Platform',
              territories: '',
              contactName: '',
              designation: '',
              email: '',
              phone: '',
              contentTypes: [],
              languages: '',
              genres: '',
              rightsNeeded: [],
              dealModel: 'Outright License Fee',
              timeline: 'Immediate / Next 30 Days',
              specificRequirements: ''
            });
          }}
          className="btn btn-secondary-dark"
        >
          <span>SUBMIT ANOTHER REQUIREMENT</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: 'rgba(11, 19, 31, 0.85)',
        border: '1px solid var(--border-dark)',
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(1.75rem, 4vw, 3rem)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
      }}
    >
      
      {/* Section 1: Company & Platform Profile */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-teal-light)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.6rem' }}>
          1. Company & Platform Details
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          <div className="form-group">
            <label className="form-label">Company / Organization Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Acme Streaming Media Ltd"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Platform / Network Name</label>
            <input
              type="text"
              placeholder="e.g. StreamMax OTT / Satellite TV"
              value={formData.platformName}
              onChange={(e) => setFormData({ ...formData, platformName: e.target.value })}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Organization Type *</label>
            <select
              value={formData.orgType}
              onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
              className="form-control"
            >
              {orgTypes.map((t, idx) => (
                <option key={idx} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Operating Territories / Geography *</label>
            <input
              type="text"
              required
              placeholder="e.g. India (Pan-India), Middle East, Global"
              value={formData.territories}
              onChange={(e) => setFormData({ ...formData, territories: e.target.value })}
              className="form-control"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Contact Person */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-teal-light)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.6rem' }}>
          2. Acquisition Contact Information
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          <div className="form-group">
            <label className="form-label">Contact Person Name *</label>
            <input
              type="text"
              required
              placeholder="Your full name"
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Official Designation *</label>
            <input
              type="text"
              required
              placeholder="e.g. Head of Content Acquisition / Programming"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Corporate Email Address *</label>
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
            <label className="form-label">Phone / WhatsApp *</label>
            <input
              type="tel"
              required
              placeholder="+91 / International code"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="form-control"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Content Requirements & Categories */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-teal-light)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.6rem' }}>
          3. Content Specifications
        </h3>

        <div className="form-group">
          <label className="form-label">Categories Required (Select all that apply):</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem', marginTop: '0.5rem' }}>
            {contentTypeOptions.map((opt) => (
              <label
                key={opt}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.6rem 0.85rem',
                  backgroundColor: 'rgba(7, 13, 20, 0.65)',
                  border: formData.contentTypes.includes(opt) ? '1px solid var(--brand-lime)' : '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontSize: '0.84rem',
                  color: formData.contentTypes.includes(opt) ? '#FFFFFF' : 'var(--text-light-secondary)',
                }}
              >
                <input
                  type="checkbox"
                  checked={formData.contentTypes.includes(opt)}
                  onChange={() => handleCheckboxChange('contentTypes', opt)}
                  style={{ accentColor: 'var(--brand-lime)' }}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
          <div className="form-group">
            <label className="form-label">Target Languages *</label>
            <input
              type="text"
              required
              placeholder="e.g. Malayalam, Tamil, Telugu, Hindi, English"
              value={formData.languages}
              onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Preferred Genres</label>
            <input
              type="text"
              placeholder="e.g. Thriller, Drama, Comedy, Historical, Action"
              value={formData.genres}
              onChange={(e) => setFormData({ ...formData, genres: e.target.value })}
              className="form-control"
            />
          </div>
        </div>
      </div>

      {/* Section 4: Rights & Commercial Model */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-teal-light)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.6rem' }}>
          4. Rights, Commercial Model & Timeline
        </h3>

        <div className="form-group">
          <label className="form-label">Rights Required:</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem', marginTop: '0.5rem' }}>
            {rightsOptions.map((opt) => (
              <label
                key={opt}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.6rem 0.85rem',
                  backgroundColor: 'rgba(7, 13, 20, 0.65)',
                  border: formData.rightsNeeded.includes(opt) ? '1px solid var(--brand-teal-light)' : '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontSize: '0.84rem',
                  color: formData.rightsNeeded.includes(opt) ? '#FFFFFF' : 'var(--text-light-secondary)',
                }}
              >
                <input
                  type="checkbox"
                  checked={formData.rightsNeeded.includes(opt)}
                  onChange={() => handleCheckboxChange('rightsNeeded', opt)}
                  style={{ accentColor: 'var(--brand-teal-light)' }}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
          <div className="form-group">
            <label className="form-label">Commercial Deal Structuring Preference</label>
            <select
              value={formData.dealModel}
              onChange={(e) => setFormData({ ...formData, dealModel: e.target.value })}
              className="form-control"
            >
              <option value="Outright License Fee">Outright License Fee (Fixed Term)</option>
              <option value="Minimum Guarantee (MG)">Minimum Guarantee (MG) + Revenue Share</option>
              <option value="AVOD Revenue Share">AVOD / Yield Share</option>
              <option value="Co-Production / Slate Funding">Co-Production / Slate Acquisition</option>
              <option value="Open to Discussion">Open to Discussion based on Valuation</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Acquisition Timeline</label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="form-control"
            >
              <option value="Immediate / Next 30 Days">Immediate (Next 30 Days)</option>
              <option value="Next 1–3 Months">Next 1–3 Months</option>
              <option value="Upcoming Quarter">Upcoming Quarter Slate</option>
              <option value="Ongoing Catalogue Intake">Ongoing Catalogue Intake</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 5: Detailed Brief */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-teal-light)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.6rem' }}>
          5. Specific Programming Mandate & Notes
        </h3>

        <div className="form-group">
          <label className="form-label">Detailed Content Brief / Additional Requirements</label>
          <textarea
            rows={4}
            placeholder="Please specify any particular cast preferences, budget ranges, technical delivery formats (e.g., 4K HDR, Dolby Atmos), or programming themes..."
            value={formData.specificRequirements}
            onChange={(e) => setFormData({ ...formData, specificRequirements: e.target.value })}
            className="form-control"
            style={{ resize: 'vertical' }}
          />
        </div>
      </div>

      {/* Submit Button & Compliance Notice */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-lime btn-lg"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {isSubmitting ? (
            <span>PROCESSING REQUIREMENT...</span>
          ) : (
            <>
              <span>SUBMIT BUYER ACQUISITION REQUIREMENT</span>
              <Send size={18} />
            </>
          )}
        </button>

        <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', textAlign: 'center', lineHeight: '1.5' }}>
          By submitting this requirement, you confirm that you are an authorized representative of your organization. Indiark will treat all briefs with institutional confidentiality.
        </div>
      </div>

    </form>
  );
};
