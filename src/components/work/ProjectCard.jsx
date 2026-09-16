import React from 'react';
import { Film, ArrowUpRight, Tag, Globe2 } from 'lucide-react';

export const ProjectCard = ({ project, onSelect }) => {
  return (
    <div
      className="card-dark"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 0,
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1px solid var(--border-dark)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: 'rgba(7, 13, 20, 0.85)'
      }}
      onClick={() => onSelect(project)}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--brand-teal)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.45)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-dark)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Visual Poster or Cinematic Brand Fallback */}
      <div
        style={{
          width: '100%',
          height: '280px',
          position: 'relative',
          backgroundColor: 'var(--bg-dark-950)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--border-dark)',
          overflow: 'hidden'
        }}
      >
        {project.posterUrl ? (
          <>
            <img
              src={project.posterUrl}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                transition: 'transform 0.4s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 13, 20, 0.95) 0%, rgba(7, 13, 20, 0.2) 50%, rgba(7, 13, 20, 0) 100%)',
                pointerEvents: 'none'
              }}
            />
          </>
        ) : (
          <div
            style={{
              padding: '2rem 1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at 50% 30%, rgba(0, 157, 165, 0.2), rgba(7, 13, 20, 0.95))'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 157, 165, 0.12)',
                border: '1px solid rgba(0, 157, 165, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-teal)',
                marginBottom: '1rem'
              }}
            >
              <Film size={26} />
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: '#FFFFFF', letterSpacing: '0.04em' }}>
              {project.title}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--brand-lime)', marginTop: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {project.projectType || 'Represented Title'}
            </div>
          </div>
        )}

        {/* Category Pill */}
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            right: '0.85rem',
            padding: '0.3rem 0.75rem',
            backgroundColor: 'rgba(7, 13, 20, 0.85)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border-dark)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: 'var(--brand-teal-light)',
            textTransform: 'uppercase',
            zIndex: 2
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 700 }}>
              {project.title}
            </h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>
              {project.year || ''}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.78rem', color: 'var(--brand-teal-light)', marginBottom: '0.75rem' }}>
            <span>{project.projectType}</span>
            {project.language && <span>• {project.language}</span>}
          </div>

          <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.86rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
            {project.synopsis}
          </p>
        </div>

        {/* Card Footer / Metadata */}
        <div>
          <div
            style={{
              padding: '0.65rem 0.85rem',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-dark)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.78rem',
              marginBottom: '1rem'
            }}
          >
            <div style={{ color: 'var(--text-light-muted)', fontSize: '0.7rem' }}>Indiark Role</div>
            <div style={{ color: 'var(--brand-teal-light)', fontWeight: 600 }}>{project.indiarkRole}</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="badge badge-teal" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>
              {project.status || 'Active Representation'}
            </span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.8rem',
                color: 'var(--brand-lime)',
                fontWeight: 600
              }}
            >
              <span>Project Details</span>
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
