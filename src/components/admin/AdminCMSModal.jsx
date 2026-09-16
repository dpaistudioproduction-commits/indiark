import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Edit3, Save, RefreshCw, Layers, Users, Handshake, AlertCircle, CheckCircle, Lock, KeyRound } from 'lucide-react';
import { dataService } from '../../services/dataService';

export const AdminCMSModal = ({ isOpen, onClose, onDataChange }) => {
  if (!isOpen) return null;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'team' | 'partners'
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [partners, setPartners] = useState([]);
  
  // Project Form State
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'Films',
    projectType: 'Feature Film',
    language: '',
    genre: '',
    year: '2025',
    synopsis: '',
    indiarkRole: 'Content Representation & Pitching',
    status: 'In Representation',
    posterUrl: '',
    trailerUrl: ''
  });

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Default studio access key
    if (accessCode.trim().toLowerCase() === 'indiark' || accessCode.trim() === '2025' || accessCode.trim() === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid studio access key. (Default development key: indiark)');
    }
  };


  const loadData = () => {
    setProjects(dataService.getProjects());
    setTeam(dataService.getTeam());
    setPartners(dataService.getPartners());
  };

  const showToast = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3500);
  };

  const handleEditProject = (proj) => {
    setEditingProjectId(proj.id);
    setProjectForm({
      title: proj.title || '',
      category: proj.category || 'Films',
      projectType: proj.projectType || 'Feature Film',
      language: proj.language || '',
      genre: proj.genre || '',
      year: proj.year || '',
      synopsis: proj.synopsis || '',
      indiarkRole: proj.indiarkRole || '',
      status: proj.status || 'In Representation',
      posterUrl: proj.posterUrl || '',
      trailerUrl: proj.trailerUrl || ''
    });
  };

  const handleResetProjectForm = () => {
    setEditingProjectId(null);
    setProjectForm({
      title: '',
      category: 'Films',
      projectType: 'Feature Film',
      language: '',
      genre: '',
      year: '2025',
      synopsis: '',
      indiarkRole: 'Content Representation & Pitching',
      status: 'In Representation',
      posterUrl: '',
      trailerUrl: ''
    });
  };

  const handleSaveProject = (e) => {
    e.preventDefault();
    if (!projectForm.title.trim()) {
      showToast('Project title is required', 'error');
      return;
    }

    if (editingProjectId) {
      dataService.updateProject(editingProjectId, projectForm);
      showToast(`Updated project "${projectForm.title}"`);
    } else {
      dataService.createProject(projectForm);
      showToast(`Created new project "${projectForm.title}"`);
    }

    handleResetProjectForm();
    loadData();
    if (onDataChange) onDataChange();
  };

  const handleDeleteProject = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      dataService.deleteProject(id);
      loadData();
      showToast(`Deleted "${title}"`);
      if (onDataChange) onDataChange();
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset catalogue back to initial verified titles (Bheeshmar & Secret of Kalinga)?')) {
      dataService.resetProjectsToDefault();
      loadData();
      showToast('Reset to default verified projects.');
      if (onDataChange) onDataChange();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(7, 13, 20, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 1100,
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
          maxWidth: isAuthenticated ? '960px' : '480px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          border: '1px solid var(--brand-teal)',
          overflow: 'hidden',
          transition: 'max-width 0.3s ease'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {!isAuthenticated ? (
          <div style={{ padding: '2.5rem', backgroundColor: 'rgba(7, 13, 20, 0.98)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Lock size={22} color="var(--brand-teal)" />
                <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>Indiark Studio Access</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  background: 'none',
                  border: '1px solid var(--border-dark)',
                  color: 'var(--text-light-muted)',
                  cursor: 'pointer',
                  padding: '0.35rem',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <X size={16} />
              </button>
            </div>

            <p style={{ color: 'var(--text-light-secondary)', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              Restricted management console for editing represented titles, leadership metadata, and partner affiliations.
            </p>

            <form onSubmit={handleLogin}>
              <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                <label className="form-label">Studio Access Passcode</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Enter access code (e.g. indiark)"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    autoFocus
                  />
                </div>
                {authError && (
                  <span className="form-error-msg" style={{ marginTop: '0.4rem' }}>
                    <AlertCircle size={13} /> {authError}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" onClick={onClose} className="btn btn-secondary-dark btn-sm">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  <KeyRound size={15} />
                  <span>Authenticate</span>
                </button>
              </div>
            </form>

            <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-dark)', fontSize: '0.75rem', color: 'var(--text-light-subtle)' }}>
              <strong>Architecture Notice:</strong> Client preview environment uses a decoupled DataService layer. In production, this binds to your authenticated REST/GraphQL database.
            </div>
          </div>
        ) : (
          <>
            {/* Top Header */}
            <div
              style={{
                padding: '1.25rem 2rem',
                borderBottom: '1px solid var(--border-dark)',
                backgroundColor: 'rgba(7, 13, 20, 0.98)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
          <div>
            <div className="badge badge-teal" style={{ marginBottom: '0.25rem' }}>
              Management Console
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>
              Indiark Content & Catalogue Studio
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handleResetDefaults}
              className="btn btn-secondary-dark btn-sm"
              title="Reset data to initial state"
            >
              <RefreshCw size={14} />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close Studio"
              style={{
                background: 'none',
                border: '1px solid var(--border-dark)',
                color: 'var(--text-light-muted)',
                cursor: 'pointer',
                padding: '0.45rem',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab Navigation & Architecture Notice */}
        <div
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: 'rgba(11, 19, 31, 0.95)',
            borderBottom: '1px solid var(--border-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('projects')}
              style={{
                background: activeTab === 'projects' ? 'var(--brand-teal)' : 'transparent',
                color: activeTab === 'projects' ? '#FFFFFF' : 'var(--text-light-secondary)',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Layers size={15} />
              <span>Projects Catalogue ({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('team')}
              style={{
                background: activeTab === 'team' ? 'var(--brand-teal)' : 'transparent',
                color: activeTab === 'team' ? '#FFFFFF' : 'var(--text-light-secondary)',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Users size={15} />
              <span>Leadership Roster ({team.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('partners')}
              style={{
                background: activeTab === 'partners' ? 'var(--brand-teal)' : 'transparent',
                color: activeTab === 'partners' ? '#FFFFFF' : 'var(--text-light-secondary)',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Handshake size={15} />
              <span>Channel Partners ({partners.length})</span>
            </button>
          </div>

          <div style={{ fontSize: '0.75rem', color: 'var(--brand-lime)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <CheckCircle size={14} />
            <span>Persistent Data Layer Ready</span>
          </div>
        </div>

        {/* Notification Alert */}
        {notification && (
          <div
            style={{
              padding: '0.6rem 2rem',
              backgroundColor: notification.type === 'error' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(0, 157, 165, 0.2)',
              borderBottom: '1px solid var(--border-dark)',
              fontSize: '0.85rem',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <AlertCircle size={15} />
            <span>{notification.msg}</span>
          </div>
        )}

        {/* Modal Scrollable Content */}
        <div style={{ padding: '2rem', overflowY: 'auto', flexGrow: 1 }}>
          
          {/* TAB 1: PROJECTS */}
          {activeTab === 'projects' && (
            <div>
              {/* Add / Edit Form */}
              <div
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {editingProjectId ? <Edit3 size={16} color="var(--brand-teal)" /> : <Plus size={16} color="var(--brand-lime)" />}
                    <span>{editingProjectId ? 'Edit Project Metadata' : 'Add New Represented Project'}</span>
                  </h4>

                  {editingProjectId && (
                    <button onClick={handleResetProjectForm} className="btn btn-secondary-dark btn-sm">
                      Cancel Editing
                    </button>
                  )}
                </div>

                <form onSubmit={handleSaveProject}>
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Project Title <span className="form-required">*</span></label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. BHEESHMAR"
                        value={projectForm.title}
                        onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Category</label>
                      <select
                        className="form-select"
                        value={projectForm.category}
                        onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                      >
                        <option value="Films">Films</option>
                        <option value="Web Series">Web Series</option>
                        <option value="Digital">Digital</option>
                        <option value="Music">Music</option>
                        <option value="Production">Production</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid-3">
                    <div className="form-group">
                      <label className="form-label">Project Type</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Feature Film / Series"
                        value={projectForm.projectType}
                        onChange={(e) => setProjectForm({ ...projectForm, projectType: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Language</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Malayalam, Hindi, Tamil"
                        value={projectForm.language}
                        onChange={(e) => setProjectForm({ ...projectForm, language: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Year / Status</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. 2024–2025"
                        value={projectForm.year}
                        onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Indiark Mandate / Role</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. OTT Platform Pitching & Rights Representation"
                      value={projectForm.indiarkRole}
                      onChange={(e) => setProjectForm({ ...projectForm, indiarkRole: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Synopsis / Description</label>
                    <textarea
                      className="form-textarea"
                      rows={3}
                      placeholder="Brief overview of the project content and rights positioning..."
                      value={projectForm.synopsis}
                      onChange={(e) => setProjectForm({ ...projectForm, synopsis: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                    <button type="submit" className="btn btn-primary btn-sm">
                      <Save size={15} />
                      <span>{editingProjectId ? 'Save Changes' : 'Add to Catalogue'}</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Current Projects List */}
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '1rem' }}>
                Current Catalogue Titles ({projects.length})
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    style={{
                      padding: '1rem 1.25rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <strong style={{ color: '#FFFFFF', fontSize: '1rem' }}>{proj.title}</strong>
                        <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>{proj.category}</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>
                        {proj.projectType} • {proj.indiarkRole}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => handleEditProject(proj)}
                        className="btn btn-secondary-dark btn-sm"
                        style={{ padding: '0.4rem 0.75rem' }}
                      >
                        <Edit3 size={14} />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteProject(proj.id, proj.title)}
                        style={{
                          background: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          color: '#F87171',
                          padding: '0.4rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.85rem'
                        }}
                      >
                        <Trash2 size={14} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: TEAM */}
          {activeTab === 'team' && (
            <div>
              <div
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(0, 157, 165, 0.08)',
                  border: '1px solid rgba(0, 157, 165, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-light-secondary)'
                }}
              >
                <strong style={{ color: '#FFFFFF' }}>Source-of-Truth Integrity Rule:</strong> Biographies and designations must remain in placeholder state until officially signed off by company leadership.
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {team.map((member) => (
                  <div
                    key={member.id}
                    style={{
                      padding: '1.25rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                      {member.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--brand-teal-light)', marginBottom: '0.3rem' }}>
                      {member.designation}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', fontStyle: 'italic' }}>
                      {member.bio}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PARTNERS */}
          {activeTab === 'partners' && (
            <div>
              <div
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(148, 200, 32, 0.08)',
                  border: '1px solid rgba(148, 200, 32, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-light-secondary)'
                }}
              >
                <strong style={{ color: '#FFFFFF' }}>Partner Representation Rule:</strong> Partner logos are only displayed following explicit written confirmation. Clean text styling is applied by default.
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    style={{
                      padding: '1.25rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1rem' }}>{partner.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>{partner.type}</div>
                    </div>
                    <span className="badge badge-dark">Verified Name</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
          </>
        )}

      </div>
    </div>
  );
};

