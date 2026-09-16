import React, { useState } from 'react';
import { CheckCircle2, Send, FileText, Lock, ShieldCheck, Film, AlertCircle, ArrowUpRight } from 'lucide-react';
import { dataService } from '../../services/dataService';
import { AuthorizationLetterModal } from './AuthorizationLetterModal';

export const ContentSubmissionForm = () => {
  const [formData, setFormData] = useState({
    submitterType: 'Independent Producer',
    submitterName: '',
    companyName: '',
    email: '',
    phone: '',
    countryState: '',
    projectTitle: '',
    projectType: 'Feature Film',
    languages: '',
    genres: '',
    runtime: '',
    projectStatus: 'Completed Master (Ready for OTT/Theatrical)',
    cbfcStatus: 'CBFC Certified (U/A or U)',
    availableRights: ['SVOD Rights', 'AVOD Rights', 'Satellite TV Rights'],
    screenerLink: '',
    screenerPassword: '',
    pitchDeckLink: '',
    synopsis: '',
    chainOfTitleAgreed: false,
    authLetterAccepted: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const submitterTypes = [
    'Independent Producer',
    'Filmmaker / Director',
    'Production House / Studio',
    'Legal Rights Holder / IP Owner',
    'Authorized Sales Agent / Representative'
  ];

  const projectTypes = [
    'Feature Film',
    'Original Web Series',
    'Documentary Film / Series',
    'Short Film / Anthology',
    'Music Video / Master Album',
    'Archival Catalogue'
  ];

  const projectStatusOptions = [
    'Completed Master (Ready for OTT/Theatrical)',
    'Finished Rough Cut / Post-Production',
    'In Production (Shoot Ongoing)',
    'Script / Pre-Production Slate'
  ];

  const cbfcOptions = [
    'CBFC Certified (U)',
    'CBFC Certified (U/A)',
    'CBFC Certified (A)',
    'Uncertified / OTT Master',
    'International Certification'
  ];

  const rightsOptions = [
    'SVOD Rights',
    'AVOD Rights',
    'TVOD / PPV Rights',
    'Satellite Television Broadcast',
    'Music Master & Sync Rights',
    'In-Flight / Transport Licensing',
    'International Dubbing & Remake'
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
    if (!formData.chainOfTitleAgreed) {
      alert('Please confirm the Chain of Title and copyright ownership declaration.');
      return;
    }

    setIsSubmitting(true);
    try {
      dataService.saveContentSubmission(formData);
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
          border: '1px solid rgba(148, 200, 32, 0.4)',
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
          CONTENT DOSSIER SUBMITTED
        </h3>
        
        <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
          Your project <strong>"{formData.projectTitle}"</strong> has been successfully registered in our secure evaluation database. Our media rights team will conduct an initial screening within <strong>48–72 hours</strong> and reach out with strategic feedback and platform alignment opportunities.
        </p>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              submitterType: 'Independent Producer',
              submitterName: '',
              companyName: '',
              email: '',
              phone: '',
              countryState: '',
              projectTitle: '',
              projectType: 'Feature Film',
              languages: '',
              genres: '',
              runtime: '',
              projectStatus: 'Completed Master (Ready for OTT/Theatrical)',
              cbfcStatus: 'CBFC Certified (U/A or U)',
              availableRights: ['SVOD Rights', 'AVOD Rights', 'Satellite TV Rights'],
              screenerLink: '',
              screenerPassword: '',
              pitchDeckLink: '',
              synopsis: '',
              chainOfTitleAgreed: false,
              authLetterAccepted: false
            });
          }}
          className="btn btn-secondary-dark"
        >
          <span>PITCH ANOTHER TITLE</span>
        </button>
      </div>
    );
  }

  return (
    <>
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
        
        {/* Section 1: Submitter / Creator Profile */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-lime)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.6rem' }}>
            1. Submitter & Rights Holder Information
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label">Submitter Role / Category *</label>
              <select
                value={formData.submitterType}
                onChange={(e) => setFormData({ ...formData, submitterType: e.target.value })}
                className="form-control"
              >
                {submitterTypes.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Full Name of Submitter *</label>
              <input
                type="text"
                required
                placeholder="Producer / Authorized Signatory Name"
                value={formData.submitterName}
                onChange={(e) => setFormData({ ...formData, submitterName: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Production Banner / Company</label>
              <input
                type="text"
                placeholder="e.g. Dreamscape Cinema LLP"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Official Email Address *</label>
              <input
                type="email"
                required
                placeholder="producer@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Direct Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="+91 / International code"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Location (State / Country) *</label>
              <input
                type="text"
                required
                placeholder="e.g. Kerala, India"
                value={formData.countryState}
                onChange={(e) => setFormData({ ...formData, countryState: e.target.value })}
                className="form-control"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Project Specifications */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-lime)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.6rem' }}>
            2. Project Metadata & Specifications
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label">Project Title *</label>
              <input
                type="text"
                required
                placeholder="Title of Film / Series"
                value={formData.projectTitle}
                onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Project Type *</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="form-control"
              >
                {projectTypes.map((pt, i) => (
                  <option key={i} value={pt}>{pt}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Original Language(s) *</label>
              <input
                type="text"
                required
                placeholder="e.g. Malayalam, Tamil, Telugu, Hindi"
                value={formData.languages}
                onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Genre(s) *</label>
              <input
                type="text"
                required
                placeholder="e.g. Thriller, Mystery, Drama, Action"
                value={formData.genres}
                onChange={(e) => setFormData({ ...formData, genres: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Runtime / Number of Episodes *</label>
              <input
                type="text"
                required
                placeholder="e.g. 128 mins or 8 Episodes x 45 mins"
                value={formData.runtime}
                onChange={(e) => setFormData({ ...formData, runtime: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Current Completion Status *</label>
              <select
                value={formData.projectStatus}
                onChange={(e) => setFormData({ ...formData, projectStatus: e.target.value })}
                className="form-control"
              >
                {projectStatusOptions.map((st, i) => (
                  <option key={i} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Synopsis / Story Logline *</label>
            <textarea
              rows={3}
              required
              placeholder="Provide a concise 2–3 paragraph storyline synopsis, key cast, and director details..."
              value={formData.synopsis}
              onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
              className="form-control"
              style={{ resize: 'vertical' }}
            />
          </div>
        </div>

        {/* Section 3: Available Rights */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-lime)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.6rem' }}>
            3. Available Rights for Pitching & Licensing
          </h3>

          <div className="form-group">
            <label className="form-label">Select Rights Available for Commercial Representation:</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem', marginTop: '0.5rem' }}>
              {rightsOptions.map((opt) => (
                <label
                  key={opt}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.6rem 0.85rem',
                    backgroundColor: 'rgba(7, 13, 20, 0.65)',
                    border: formData.availableRights.includes(opt) ? '1px solid var(--brand-lime)' : '1px solid var(--border-dark)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    fontSize: '0.84rem',
                    color: formData.availableRights.includes(opt) ? '#FFFFFF' : 'var(--text-light-secondary)',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.availableRights.includes(opt)}
                    onChange={() => handleCheckboxChange('availableRights', opt)}
                    style={{ accentColor: 'var(--brand-lime)' }}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Screener & Pitch Materials */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-lime)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.6rem' }}>
            4. Secure Screener & Pitch Materials
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label">Screener Link (Vimeo / Drive / YouTube Unlisted) *</label>
              <input
                type="url"
                required
                placeholder="https://vimeo.com/... or Google Drive link"
                value={formData.screenerLink}
                onChange={(e) => setFormData({ ...formData, screenerLink: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Screener Password (if protected)</label>
              <input
                type="text"
                placeholder="Leave blank if not password protected"
                value={formData.screenerPassword}
                onChange={(e) => setFormData({ ...formData, screenerPassword: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label">Pitch Deck / Lookbook URL (Optional)</label>
              <input
                type="url"
                placeholder="https://drive.google.com/..."
                value={formData.pitchDeckLink}
                onChange={(e) => setFormData({ ...formData, pitchDeckLink: e.target.value })}
                className="form-control"
              />
            </div>
          </div>
        </div>

        {/* Section 5: Chain of Title Declaration & Authorization Letter */}
        <div style={{ marginBottom: '2.5rem', padding: '1.5rem', backgroundColor: 'rgba(7, 13, 20, 0.75)', border: '1px solid var(--border-teal-subtle)', borderRadius: 'var(--radius-md)' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={18} color="var(--brand-teal-light)" />
            <span>Chain of Title & Legal Representations</span>
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-light-secondary)' }}>
              <input
                type="checkbox"
                required
                checked={formData.chainOfTitleAgreed}
                onChange={(e) => setFormData({ ...formData, chainOfTitleAgreed: e.target.checked })}
                style={{ accentColor: 'var(--brand-lime)', marginTop: '0.2rem' }}
              />
              <span>
                I hereby declare that I hold clear, unencumbered rights or authorized mandate to represent and pitch the submitted content, and that all provided information is accurate and legally valid. *
              </span>
            </label>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-light-muted)' }}>
                Representation Authorization Letter:
              </span>
              <button
                type="button"
                onClick={() => setShowAuthModal(true)}
                className="btn btn-secondary-dark btn-sm"
              >
                <FileText size={14} color="var(--brand-teal-light)" />
                <span>View Authorization Letter Template</span>
              </button>
            </div>
          </div>
        </div>

        {/* Submit Action */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-lime btn-lg"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {isSubmitting ? (
            <span>PROCESSING PITCH SUBMISSION...</span>
          ) : (
            <>
              <span>PITCH YOUR CONTENT TO INDIARK</span>
              <ArrowUpRight size={18} />
            </>
          )}
        </button>

      </form>

      {/* Authorization Letter Modal */}
      <AuthorizationLetterModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        projectTitle={formData.projectTitle}
        submitterName={formData.submitterName}
      />
    </>
  );
};
