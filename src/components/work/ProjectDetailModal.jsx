import React from 'react';
import { X, Film, Calendar, Globe2, Tag, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const ProjectDetailModal = ({ project, onClose, onContactForTitle }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(7, 13, 20, 0.88)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
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
          maxWidth: project.posterUrl ? '860px' : '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 0,
          border: '1px solid var(--border-dark)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
          position: 'relative',
          transition: 'max-width 0.3s ease'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(7, 13, 20, 0.98)',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="badge badge-teal">{project.category}</span>
            <span className="badge badge-lime">{project.status}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            style={{
              background: 'none',
              border: '1px solid var(--border-dark)',
              color: 'var(--text-light-muted)',
              cursor: 'pointer',
              padding: '0.4rem',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body: Poster & Details Layout */}
        <div
          style={{
            padding: '2rem',
            display: project.posterUrl ? 'grid' : 'block',
            gridTemplateColumns: project.posterUrl ? '280px 1fr' : '1fr',
            gap: '2rem',
            alignItems: 'start'
          }}
          className="project-modal-grid"
        >
          {/* Left Poster if available */}
          {project.posterUrl && (
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-dark)',
                backgroundColor: 'var(--bg-dark-950)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)'
              }}
            >
              <img
                src={project.posterUrl}
                alt={project.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </div>
          )}

          {/* Right Details */}
          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.8rem', marginBottom: '0.4rem' }}>
              {project.title}
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-light-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Film size={15} color="var(--brand-teal)" />
                {project.projectType || 'Title'}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Tag size={15} color="var(--brand-teal)" />
                {project.genre || 'Genre to be confirmed'}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={15} color="var(--brand-teal)" />
                {project.year || '2024–2025'}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Globe2 size={15} color="var(--brand-teal)" />
                {project.language || 'Language to be confirmed'}
              </span>
            </div>

            {/* Synopsis */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                Project Overview & Positioning
              </h4>
              <p style={{ color: 'var(--text-light-secondary)', lineHeight: '1.6', fontSize: '0.92rem' }}>
                {project.synopsis}
              </p>
            </div>

            {/* Representation Details */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                padding: '1.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)' }}>Mandate / Scope</div>
                <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.88rem', marginTop: '0.2rem' }}>
                  {project.indiarkRole}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)' }}>Distribution Inquiries</div>
                <div style={{ color: 'var(--brand-teal-light)', fontWeight: 600, fontSize: '0.88rem', marginTop: '0.2rem' }}>
                  Open for OTT & Rights Discussions
                </div>
              </div>
            </div>

            {/* Content Integrity Notice */}
            <div style={{ fontSize: '0.78rem', color: 'var(--text-light-subtle)', fontStyle: 'italic', marginBottom: '1.75rem' }}>
              * Note: Detailed screener access, rights availability matrices, and commercial terms are provided exclusively upon formal buyer qualification.
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button onClick={onClose} className="btn btn-secondary-dark btn-sm">
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  if (onContactForTitle) onContactForTitle(project.title);
                }}
                className="btn btn-primary btn-sm"
              >
                <span>Inquire About This Title</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

        </div>

        <style>{`
          @media (max-width: 680px) {
            .project-modal-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};
