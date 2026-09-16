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
      showToast(`Added new project "${projectForm.title}"`);
    }

    handleResetProjectForm();
    loadData();
    if (onDataChange) onDataChange();
  };

  const handleDeleteProject = (id, title) => {
    if (window.confirm(`Are you sure you want to remove "${title}" from the active representation catalogue?`)) {
      dataService.deleteProject(id);
      showToast(`Removed "${title}" from catalogue`);
      loadData();
      if (onDataChange) onDataChange();
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset catalogue and team metadata to official source-of-truth defaults?')) {
      dataService.resetProjectsToDefault();
      showToast('Reset catalogue to defaults');
      loadData();
      if (onDataChange) onDataChange();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: '960px', maxHeight: '92vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div style={{ padding: '3rem 2rem', textAlign: 'center', maxWidth: '480px', margin: '0 auto' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(0, 157, 165, 0.15)', color: 'var(--brand-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <Lock size={26} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Indiark CMS Studio Access
            </h3>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.88rem', marginBottom: '2rem' }}>
              Enter management authentication key to configure catalogue titles and metadata.
            </p>

            <form onSubmit={handleLogin}>
              <div className="form-group" style={{ textAlign: 'left' }}>
                <label className="form-label">Studio Access Key</label>
                <input
                  type="password"
                  placeholder="Enter key (e.g. indiark)"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="form-control"
                  autoFocus
                />
                {authError && (
                  <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.4rem' }}>
                    {authError}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                <button type="button" onClick={onClose} className="btn btn-secondary-dark btn-sm">
                  Cancel
                </button>
                <button type="submit" className="btn btn-lime btn-sm">
                  <KeyRound size={14} />
                  <span>Authenticate</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Management Panel */
          <>
            {/* Header */}
            <div
              style={{
                padding: '1.25rem 1.75rem',
                borderBottom: '1px solid var(--border-dark)',
                backgroundColor: 'rgba(7, 13, 20, 0.98)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>Management Console</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', margin: '0.2rem 0 0 0' }}>
                  Indiark Content & Catalogue Studio
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <button onClick={handleResetDefaults} className="btn btn-secondary-dark btn-sm" title="Reset defaults">
                  <RefreshCw size={13} />
                  <span>Reset Defaults</span>
                </button>
                <button onClick={onClose} style={{ background: 'none', border: '1px solid var(--border-dark)', color: 'var(--text-light-muted)', cursor: 'pointer', padding: '0.4rem', borderRadius: 'var(--radius-sm)' }}>
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Sub-Header Tabs */}
            <div
              style={{
                padding: '0.75rem 1.75rem',
                backgroundColor: 'rgba(11, 19, 31, 0.95)',
                borderBottom: '1px solid var(--border-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`btn ${activeTab === 'projects' ? 'btn-lime' : 'btn-secondary-dark'} btn-sm`}
                >
                  <Layers size={14} />
                  <span>Projects & Catalogue ({projects.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('team')}
                  className={`btn ${activeTab === 'team' ? 'btn-lime' : 'btn-secondary-dark'} btn-sm`}
                >
                  <Users size={14} />
                  <span>Team ({team.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('partners')}
                  className={`btn ${activeTab === 'partners' ? 'btn-lime' : 'btn-secondary-dark'} btn-sm`}
                >
                  <Handshake size={14} />
                  <span>Partners ({partners.length})</span>
                </button>
              </div>
            </div>

            {/* Notification Alert */}
            {notification && (
              <div style={{ padding: '0.6rem 1.75rem', backgroundColor: notification.type === 'error' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(148, 200, 32, 0.2)', borderBottom: '1px solid var(--border-dark)', color: '#FFFFFF', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={14} />
                <span>{notification.msg}</span>
              </div>
            )}

            {/* Modal Body */}
            <div style={{ padding: '1.75rem', overflowY: 'auto', flexGrow: 1 }}>
              {activeTab === 'projects' && (
                <div>
                  {/* Form Box */}
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <h4 style={{ color: '#FFFFFF', fontSize: '1rem', margin: 0 }}>
                        {editingProjectId ? 'Edit Project Metadata' : 'Add New Represented Project'}
                      </h4>
                      {editingProjectId && (
                        <button onClick={handleResetProjectForm} className="btn btn-secondary-dark btn-sm">
                          Cancel Editing
                        </button>
                      )}
                    </div>

                    <form onSubmit={handleSaveProject}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                        <div className="form-group">
                          <label className="form-label">Project Title *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. BHEESHMAR"
                            value={projectForm.title}
                            onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Category</label>
                          <select
                            value={projectForm.category}
                            onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                            className="form-control"
                          >
                            <option value="Films">Films</option>
                            <option value="Web Series">Web Series</option>
                            <option value="Digital">Digital</option>
                            <option value="Music">Music</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Project Type</label>
                          <input
                            type="text"
                            placeholder="e.g. Feature Film"
                            value={projectForm.projectType}
                            onChange={(e) => setProjectForm({ ...projectForm, projectType: e.target.value })}
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Language</label>
                          <input
                            type="text"
                            placeholder="e.g. Malayalam"
                            value={projectForm.language}
                            onChange={(e) => setProjectForm({ ...projectForm, language: e.target.value })}
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Genre</label>
                          <input
                            type="text"
                            placeholder="e.g. Historical / Mystery"
                            value={projectForm.genre}
                            onChange={(e) => setProjectForm({ ...projectForm, genre: e.target.value })}
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Year / Status</label>
                          <input
                            type="text"
                            placeholder="e.g. 2024–2025"
                            value={projectForm.year}
                            onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })}
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Indiark Role</label>
                          <input
                            type="text"
                            placeholder="e.g. Pitching & Representation"
                            value={projectForm.indiarkRole}
                            onChange={(e) => setProjectForm({ ...projectForm, indiarkRole: e.target.value })}
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Status</label>
                          <select
                            value={projectForm.status}
                            onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value })}
                            className="form-control"
                          >
                            <option value="In Representation">In Representation</option>
                            <option value="Pitching Active">Pitching Active</option>
                            <option value="Rights Licensed">Rights Licensed</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Poster Image Path</label>
                          <input
                            type="text"
                            placeholder="e.g. /secret of kalinga.jpg"
                            value={projectForm.posterUrl}
                            onChange={(e) => setProjectForm({ ...projectForm, posterUrl: e.target.value })}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Synopsis / Description</label>
                        <textarea
                          rows={3}
                          placeholder="Brief overview of the project content..."
                          value={projectForm.synopsis}
                          onChange={(e) => setProjectForm({ ...projectForm, synopsis: e.target.value })}
                          className="form-control"
                          style={{ resize: 'vertical' }}
                        />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                        <button type="submit" className="btn btn-lime btn-sm">
                          <Save size={14} />
                          <span>{editingProjectId ? 'Save Changes' : 'Add to Catalogue'}</span>
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Projects List */}
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '1rem' }}>
                    Active Representation Catalogue ({projects.length})
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
                          gap: '1rem',
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <strong style={{ color: '#FFFFFF', fontSize: '1rem' }}>{proj.title}</strong>
                            <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>{proj.category}</span>
                            <span className="badge badge-lime" style={{ fontSize: '0.7rem' }}>{proj.status}</span>
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', marginTop: '0.2rem' }}>
                            {proj.projectType} • {proj.language} • {proj.indiarkRole}
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            onClick={() => handleEditProject(proj)}
                            className="btn btn-secondary-dark btn-sm"
                            style={{ padding: '0.4rem 0.75rem' }}
                          >
                            <Edit3 size={13} />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteProject(proj.id, proj.title)}
                            style={{
                              background: 'rgba(239, 68, 68, 0.1)',
                              border: '1px solid rgba(239, 68, 68, 0.3)',
                              color: '#f87171',
                              borderRadius: 'var(--radius-sm)',
                              padding: '0.4rem 0.75rem',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              fontSize: '0.78rem',
                              fontWeight: 600,
                            }}
                          >
                            <Trash2 size={13} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '1rem' }}>
                    Verified Leadership Roster ({team.length})
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    {team.map((m) => (
                      <div key={m.id} style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)' }}>
                        <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '1rem' }}>{m.name}</div>
                        <div style={{ color: 'var(--brand-lime)', fontSize: '0.78rem', marginTop: '0.2rem' }}>{m.designation}</div>
                        <div style={{ color: 'var(--text-light-muted)', fontSize: '0.8rem', marginTop: '0.4rem' }}>{m.bio}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'partners' && (
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '1rem' }}>
                    Channel & Business Partners ({partners.length})
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    {partners.map((p) => (
                      <div key={p.id} style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)' }}>
                        <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '1rem' }}>{p.name}</div>
                        <div style={{ color: 'var(--brand-teal-light)', fontSize: '0.78rem', marginTop: '0.2rem' }}>{p.type}</div>
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
