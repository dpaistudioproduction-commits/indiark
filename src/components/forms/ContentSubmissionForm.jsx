import React, { useState } from 'react';
import { 
  Check, ArrowRight, ArrowLeft, Download, Upload, ShieldCheck, 
  FileText, CheckCircle2, AlertCircle, Film, User, Layers, Lock 
} from 'lucide-react';
import { dataService } from '../../services/dataService';
import { AuthorizationLetterModal } from './AuthorizationLetterModal';

export const ContentSubmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Applicant
    applicantName: '',
    companyName: '',
    designation: '',
    email: '',
    mobile: '',
    city: '',
    country: 'India',
    portfolioUrl: '',

    // Step 2: Project
    projectName: '',
    contentType: 'Feature Film',
    language: '',
    genre: '',
    duration: '',
    yearOfProduction: '2024',
    productionStatus: 'Completed',
    synopsis: '',
    director: '',
    producer: '',
    cast: '',
    screenerLink: '',
    additionalLinks: '',

    // Step 3: Rights
    rights: {
      ott: true,
      digital: true,
      satellite: false,
      music: false,
      inflight: false,
      dub: false,
      remake: false,
      international: false
    },
    territory: 'Worldwide / All Available Territories',
    rightsNotes: '',

    // Step 4: Authorization
    hasSignedAuth: false,
    authFileName: '',
    authFileUploaded: false,
    confirmedAuthority: false
  });

  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const errs = {};
    if (step === 1) {
      if (!formData.applicantName.trim()) errs.applicantName = 'Applicant name is required';
      if (!formData.email.trim()) {
        errs.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errs.email = 'Please enter a valid email address';
      }
      if (!formData.mobile.trim()) errs.mobile = 'Contact mobile number is required';
    } else if (step === 2) {
      if (!formData.projectName.trim()) errs.projectName = 'Project name is required';
      if (!formData.language.trim()) errs.language = 'Language is required';
      if (!formData.synopsis.trim()) errs.synopsis = 'Project synopsis is required';
    } else if (step === 3) {
      const anyRightSelected = Object.values(formData.rights).some(Boolean);
      if (!anyRightSelected) errs.rights = 'Please select at least one available rights category';
    } else if (step === 4) {
      if (!formData.confirmedAuthority) {
        errs.confirmedAuthority = 'You must confirm your authority to submit this content';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrors({ ...errors, authFile: 'File size must be under 10MB' });
      return;
    }

    setFormData({
      ...formData,
      authFileName: file.name,
      authFileUploaded: true
    });
    setErrors({ ...errors, authFile: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const saved = dataService.saveContentSubmission(formData);
      setSubmissionId(saved.id);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const steps = [
    { num: 1, title: 'Applicant' },
    { num: 2, title: 'Project' },
    { num: 3, title: 'Rights' },
    { num: 4, title: 'Authorization' },
    { num: 5, title: 'Review & Submit' }
  ];

  if (isSuccess) {
    return (
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
            width: '68px',
            height: '68px',
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
          <CheckCircle2 size={36} />
        </div>

        <span className="badge badge-lime" style={{ marginBottom: '1rem' }}>
          Submission Ref: {submissionId}
        </span>

        <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', marginBottom: '1rem' }}>
          Content Submission Received
        </h3>

        <p style={{ color: 'var(--text-light-secondary)', maxWidth: '560px', margin: '0 auto 2rem auto', fontSize: '1rem', lineHeight: '1.6' }}>
          Thank you for submitting <strong>"{formData.projectName}"</strong> to Indiark Entertainments. Our evaluation desk will review the project details, rights availability, and screener material to determine appropriate platform pitching avenues.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button
            onClick={() => {
              setIsSuccess(false);
              setCurrentStep(1);
              setFormData({
                applicantName: '',
                companyName: '',
                designation: '',
                email: '',
                mobile: '',
                city: '',
                country: 'India',
                portfolioUrl: '',
                projectName: '',
                contentType: 'Feature Film',
                language: '',
                genre: '',
                duration: '',
                yearOfProduction: '2024',
                productionStatus: 'Completed',
                synopsis: '',
                director: '',
                producer: '',
                cast: '',
                screenerLink: '',
                additionalLinks: '',
                rights: { ott: true, digital: true, satellite: false, music: false, inflight: false, dub: false, remake: false, international: false },
                territory: 'Worldwide / All Available Territories',
                rightsNotes: '',
                hasSignedAuth: false,
                authFileName: '',
                authFileUploaded: false,
                confirmedAuthority: false
              });
            }}
            className="btn btn-primary btn-sm"
          >
            Submit Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-dark" style={{ border: '1px solid var(--border-dark)', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
      
      {/* Step Indicator Progress Bar */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginBottom: '1rem' }}>
          {/* Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '18px',
              left: '5%',
              right: '5%',
              height: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              zIndex: 1
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '18px',
              left: '5%',
              width: `${((currentStep - 1) / (steps.length - 1)) * 90}%`,
              height: '2px',
              backgroundColor: 'var(--brand-teal)',
              zIndex: 2,
              transition: 'width 0.3s ease'
            }}
          />

          {steps.map((step) => {
            const isDone = currentStep > step.num;
            const isCurrent = currentStep === step.num;
            return (
              <div
                key={step.num}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 3,
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: isDone ? 'var(--brand-teal)' : isCurrent ? 'var(--bg-dark-950)' : 'var(--bg-dark-850)',
                    border: isCurrent ? '2px solid var(--brand-lime)' : isDone ? '2px solid var(--brand-teal)' : '2px solid var(--border-dark)',
                    color: isDone ? '#FFFFFF' : isCurrent ? 'var(--brand-lime)' : 'var(--text-light-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {isDone ? <Check size={16} /> : step.num}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: isCurrent ? 700 : 500,
                    color: isCurrent ? '#FFFFFF' : 'var(--text-light-muted)',
                    marginTop: '0.4rem',
                    textAlign: 'center'
                  }}
                >
                  {step.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STEP 1: APPLICANT DETAILS */}
      {currentStep === 1 && (
        <div>
          <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.75rem' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>Step 1 — Applicant & Production Details</h3>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem' }}>Please enter details of the submitting creator, producer, or production entity.</p>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Full Name <span className="form-required">*</span></label>
              <input
                type="text"
                className={`form-input ${errors.applicantName ? 'is-invalid' : ''}`}
                placeholder="Your Full Name"
                value={formData.applicantName}
                onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
              />
              {errors.applicantName && <span className="form-error-msg"><AlertCircle size={13} /> {errors.applicantName}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Company / Production House</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Acme Pictures / Independent Creator"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </div>
          </div>

          <div className="grid-3">
            <div className="form-group">
              <label className="form-label">Designation / Role</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Producer, Director, Rights Holder"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address <span className="form-required">*</span></label>
              <input
                type="email"
                className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                placeholder="producer@studio.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <span className="form-error-msg"><AlertCircle size={13} /> {errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Mobile Number <span className="form-required">*</span></label>
              <input
                type="tel"
                className={`form-input ${errors.mobile ? 'is-invalid' : ''}`}
                placeholder="+91 / Mobile"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              />
              {errors.mobile && <span className="form-error-msg"><AlertCircle size={13} /> {errors.mobile}</span>}
            </div>
          </div>

          <div className="grid-3">
            <div className="form-group">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Kochi, Mumbai, Chennai"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-input"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Portfolio / Studio Website</label>
              <input
                type="url"
                className="form-input"
                placeholder="https://"
                value={formData.portfolioUrl}
                onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: PROJECT DETAILS */}
      {currentStep === 2 && (
        <div>
          <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.75rem' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>Step 2 — Project Information & Materials</h3>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem' }}>Provide creative metadata, production status, and confidential screener links.</p>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Project Name / Title <span className="form-required">*</span></label>
              <input
                type="text"
                className={`form-input ${errors.projectName ? 'is-invalid' : ''}`}
                placeholder="Official title"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              />
              {errors.projectName && <span className="form-error-msg"><AlertCircle size={13} /> {errors.projectName}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Content Type <span className="form-required">*</span></label>
              <select
                className="form-select"
                value={formData.contentType}
                onChange={(e) => setFormData({ ...formData, contentType: e.target.value })}
              >
                <option value="Feature Film">Feature Film</option>
                <option value="Web Series">Web Series</option>
                <option value="Short Film">Short Film</option>
                <option value="Documentary / Docufiction">Documentary / Docufiction</option>
                <option value="Music Single / Album">Music Single / Album</option>
                <option value="Animation">Animation</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid-4">
            <div className="form-group">
              <label className="form-label">Language <span className="form-required">*</span></label>
              <input
                type="text"
                className={`form-input ${errors.language ? 'is-invalid' : ''}`}
                placeholder="e.g. Malayalam, Hindi"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              />
              {errors.language && <span className="form-error-msg"><AlertCircle size={13} /> {errors.language}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Genre</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Thriller, Drama"
                value={formData.genre}
                onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Duration</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. 128 mins / 8 eps"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Production Status</label>
              <select
                className="form-select"
                value={formData.productionStatus}
                onChange={(e) => setFormData({ ...formData, productionStatus: e.target.value })}
              >
                <option value="Completed">Completed</option>
                <option value="Post-Production">In Post-Production</option>
                <option value="In Production">In Production</option>
                <option value="Ready for Release">Ready for Release</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Synopsis / Story Summary <span className="form-required">*</span></label>
            <textarea
              className={`form-textarea ${errors.synopsis ? 'is-invalid' : ''}`}
              rows={3}
              placeholder="Outline the core plot, logline, thematic hooks, and commercial appeal..."
              value={formData.synopsis}
              onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
            />
            {errors.synopsis && <span className="form-error-msg"><AlertCircle size={13} /> {errors.synopsis}</span>}
          </div>

          <div className="grid-3">
            <div className="form-group">
              <label className="form-label">Director</label>
              <input
                type="text"
                className="form-input"
                placeholder="Director name"
                value={formData.director}
                onChange={(e) => setFormData({ ...formData, director: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Producer</label>
              <input
                type="text"
                className="form-input"
                placeholder="Producer name"
                value={formData.producer}
                onChange={(e) => setFormData({ ...formData, producer: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Key Cast / Artists</label>
              <input
                type="text"
                className="form-input"
                placeholder="Key actors or talent"
                value={formData.cast}
                onChange={(e) => setFormData({ ...formData, cast: e.target.value })}
              />
            </div>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Confidential Screener / Trailer Link</label>
              <input
                type="url"
                className="form-input"
                placeholder="Vimeo / YouTube unlisted / Drive URL"
                value={formData.screenerLink}
                onChange={(e) => setFormData({ ...formData, screenerLink: e.target.value })}
              />
              <span className="form-hint">Add password in notes if link is protected.</span>
            </div>

            <div className="form-group">
              <label className="form-label">Additional Links (Press / IMDb / Drive)</label>
              <input
                type="text"
                className="form-input"
                placeholder="Links to press kit, poster drive, or references"
                value={formData.additionalLinks}
                onChange={(e) => setFormData({ ...formData, additionalLinks: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: RIGHTS BREAKDOWN */}
      {currentStep === 3 && (
        <div>
          <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.75rem' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>Step 3 — Available Rights & Territory</h3>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem' }}>Select the commercial rights available for representation and negotiation.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label className="form-label" style={{ marginBottom: '0.75rem', display: 'block' }}>
              Available Rights Breakdown <span className="form-required">*</span>
            </label>

            <div className="grid-2" style={{ gap: '0.75rem' }}>
              {[
                { key: 'ott', label: 'OTT / Digital Streaming Rights' },
                { key: 'digital', label: 'Digital Video & Social Rights (YouTube/AVOD)' },
                { key: 'satellite', label: 'Satellite & Television Broadcast Rights' },
                { key: 'music', label: 'Music & Audio Publishing Rights' },
                { key: 'inflight', label: 'In-Flight & Non-Theatrical Transport Rights' },
                { key: 'dub', label: 'Dubbing & Multilingual Rights' },
                { key: 'remake', label: 'Remake & Adaptation Rights' },
                { key: 'international', label: 'International & Overseas Territory Rights' }
              ].map((item) => (
                <label
                  key={item.key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.85rem 1rem',
                    backgroundColor: formData.rights[item.key] ? 'rgba(0, 157, 165, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: formData.rights[item.key] ? '1px solid var(--brand-teal)' : '1px solid var(--border-dark)',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: formData.rights[item.key] ? '#FFFFFF' : 'var(--text-light-secondary)',
                    transition: 'all 0.2s'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.rights[item.key]}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        rights: { ...formData.rights, [item.key]: e.target.checked }
                      });
                    }}
                    style={{ accentColor: 'var(--brand-teal)', width: '16px', height: '16px' }}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
            {errors.rights && <span className="form-error-msg" style={{ marginTop: '0.5rem' }}><AlertCircle size={13} /> {errors.rights}</span>}
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Available Territory</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Worldwide, India only, Overseas excl. Middle East"
                value={formData.territory}
                onChange={(e) => setFormData({ ...formData, territory: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Rights Notes / Holdbacks</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Theatrical window completes next month"
                value={formData.rightsNotes}
                onChange={(e) => setFormData({ ...formData, rightsNotes: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: AUTHORIZATION & UPLOAD */}
      {currentStep === 4 && (
        <div>
          <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.75rem' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>Step 4 — Representation Authorization</h3>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem' }}>Indiark requires verified authority from content owners prior to commercial pitching.</p>
          </div>

          {/* Action Box to Download Document Template */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(0, 157, 165, 0.08)',
              border: '1px solid rgba(0, 157, 165, 0.3)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                Content Submission & Authorization Document
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light-secondary)' }}>
                Download the official submission template, sign/stamp, and upload the executed copy.
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowAuthModal(true)}
              className="btn btn-lime btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Download size={15} />
              <span>Download Authorization Letter</span>
            </button>
          </div>

          {/* Upload Box */}
          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label">Upload Signed Authorization Letter / Chain-of-Title (PDF/Image)</label>
            <div
              style={{
                border: '2px dashed var(--border-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={handleFileUpload}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer'
                }}
              />
              <Upload size={32} color="var(--brand-teal)" style={{ margin: '0 auto 0.75rem auto' }} />
              <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                {formData.authFileUploaded ? `Uploaded: ${formData.authFileName}` : 'Click or drag signed authorization document here'}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>
                Accepted formats: PDF, PNG, JPG (Max: 10MB)
              </div>
            </div>
            {errors.authFile && <span className="form-error-msg"><AlertCircle size={13} /> {errors.authFile}</span>}
          </div>

          {/* Mandatory Checkbox */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: errors.confirmedAuthority ? '1px solid #EF4444' : '1px solid var(--border-dark)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1rem'
            }}
          >
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-light-primary)', lineHeight: '1.5' }}>
              <input
                type="checkbox"
                checked={formData.confirmedAuthority}
                onChange={(e) => setFormData({ ...formData, confirmedAuthority: e.target.checked })}
                style={{ accentColor: 'var(--brand-lime)', marginTop: '0.2rem', width: '17px', height: '17px', flexShrink: 0 }}
              />
              <span>
                <strong>Mandatory Confirmation:</strong> I confirm that I have the legitimate authority to submit this content and that the information provided is accurate. I authorize Indiark Entertainments to evaluate the submitted material for potential business and content representation opportunities.
              </span>
            </label>
            {errors.confirmedAuthority && <span className="form-error-msg" style={{ marginTop: '0.5rem' }}><AlertCircle size={13} /> {errors.confirmedAuthority}</span>}
          </div>

          {/* Pending Legal Review Notice */}
          <div style={{ fontSize: '0.78rem', color: 'var(--text-light-subtle)', fontStyle: 'italic' }}>
            * Note: Final authorization and commercial representation wording is subject to official review and formal contract execution by company legal counsel before binding platform deals.
          </div>
        </div>
      )}

      {/* STEP 5: REVIEW & SUBMIT */}
      {currentStep === 5 && (
        <div>
          <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.75rem' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>Step 5 — Final Review & Submission</h3>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem' }}>Please verify your project details before submitting to Indiark's evaluation desk.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
            {/* Applicant Summary */}
            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--brand-teal-light)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Applicant & Submitter</strong>
                <button type="button" onClick={() => setCurrentStep(1)} style={{ background: 'none', border: 'none', color: 'var(--text-light-muted)', fontSize: '0.78rem', cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{formData.applicantName} ({formData.designation || 'Creator'})</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)' }}>{formData.companyName || 'Independent'} • {formData.email} • {formData.mobile}</div>
            </div>

            {/* Project Summary */}
            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--brand-teal-light)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Project Overview</strong>
                <button type="button" onClick={() => setCurrentStep(2)} style={{ background: 'none', border: 'none', color: 'var(--text-light-muted)', fontSize: '0.78rem', cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem' }}>{formData.projectName}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light-secondary)', marginTop: '0.2rem' }}>
                {formData.contentType} • {formData.language} • {formData.genre || 'General'} • {formData.productionStatus}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                "{formData.synopsis}"
              </p>
            </div>

            {/* Rights Summary */}
            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--brand-teal-light)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Rights Mandate & Territory</strong>
                <button type="button" onClick={() => setCurrentStep(3)} style={{ background: 'none', border: 'none', color: 'var(--text-light-muted)', fontSize: '0.78rem', cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
                {Object.entries(formData.rights).filter(([_, v]) => v).map(([k]) => (
                  <span key={k} className="badge badge-teal" style={{ fontSize: '0.72rem' }}>
                    {k.toUpperCase()} RIGHTS
                  </span>
                ))}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)', marginTop: '0.5rem' }}>
                Territory: {formData.territory}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-dark)' }}>
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="btn btn-secondary-dark btn-sm"
          >
            <ArrowLeft size={16} />
            <span>Previous Step</span>
          </button>
        ) : <div />}

        {currentStep < 5 ? (
          <button
            type="button"
            onClick={handleNext}
            className="btn btn-primary btn-sm"
          >
            <span>Proceed to Step {currentStep + 1}</span>
            <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="btn btn-lime btn-lg"
          >
            {isSubmitting ? (
              <span>Submitting Material...</span>
            ) : (
              <>
                <span>CONFIRM & SUBMIT CONTENT</span>
                <CheckCircle2 size={18} />
              </>
            )}
          </button>
        )}
      </div>

      {/* Authorization Document Modal */}
      <AuthorizationLetterModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        applicantName={formData.applicantName}
        projectName={formData.projectName}
        companyName={formData.companyName}
      />

    </div>
  );
};
