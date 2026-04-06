import { useEffect, useState } from 'react';
import { X, ExternalLink, Code, Award, Server, Layers, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  isTechMode: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isTechMode, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'features'>('overview');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className={`modal-content glass-panel ${isTechMode ? 'tech-mode' : 'no-tech-mode'}`} 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '90%',
          maxWidth: '900px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          overflow: 'hidden',
          animation: 'modalSlideIn 0.3s ease-out forwards',
        }}
      >
        {/* Header Image / Close Button */}
        <div style={{ position: 'relative', height: '250px', background: 'var(--glass-bg)' }}>
          {project.detailsImage?.[0] ? (
            <img 
              src={project.detailsImage[0]} 
              alt={project.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:linear-gradient(45deg, var(--primary-pink), var(--primary-cyan)); opacity:0.3;"></div>';
              }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--primary-pink), var(--primary-cyan))', opacity: 0.3 }} />
          )}
          
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid var(--glass-border)',
              color: 'white',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              backdropFilter: 'blur(5px)'
            }}
          >
            <X size={20} />
          </button>

          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '2rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', background: 'var(--primary-pink)', color: 'white', fontWeight: 'bold' }}>{project.category}</span>
                <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 'bold' }}>{project.status}</span>
              </div>
              <h2 className={isTechMode ? "neon-text-pink" : ""} style={{ fontSize: '2.5rem', margin: 0, color: 'white' }}>
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '1rem 2rem', 
          borderBottom: '1px solid var(--glass-border)',
          background: isTechMode ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.5)'
        }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              className={isTechMode ? "tech-font" : ""}
              onClick={() => setActiveTab('overview')}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === 'overview' ? (isTechMode ? 'var(--primary-cyan)' : 'var(--primary-pink)') : 'var(--text-muted)',
                fontWeight: activeTab === 'overview' ? 'bold' : 'normal',
                cursor: 'pointer',
                padding: '0.5rem 0',
                borderBottom: activeTab === 'overview' ? `2px solid ${isTechMode ? 'var(--primary-cyan)' : 'var(--primary-pink)'}` : '2px solid transparent'
              }}
            >
              {isTechMode ? 'INIT.OVERVIEW' : 'Overview'}
            </button>
            <button 
              className={isTechMode ? "tech-font" : ""}
              onClick={() => setActiveTab('features')}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === 'features' ? (isTechMode ? 'var(--primary-cyan)' : 'var(--primary-pink)') : 'var(--text-muted)',
                fontWeight: activeTab === 'features' ? 'bold' : 'normal',
                cursor: 'pointer',
                padding: '0.5rem 0',
                borderBottom: activeTab === 'features' ? `2px solid ${isTechMode ? 'var(--primary-cyan)' : 'var(--primary-pink)'}` : '2px solid transparent'
              }}
            >
              {isTechMode ? 'LOAD_FEATURES' : 'Features & Details'}
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {project.githubLink && (
              <a href={project.githubLink} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }} target="_blank" rel="noreferrer">
                <Code size={18} /> <span className="hide-on-mobile">Source Code</span>
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: isTechMode ? 'var(--primary-cyan)' : 'var(--primary-pink)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }} target="_blank" rel="noreferrer">
                <ExternalLink size={18} /> <span className="hide-on-mobile">Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div style={{ padding: '2rem', overflowY: 'auto', flexGrow: 1 }}>
          {activeTab === 'overview' ? (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 className={isTechMode ? "tech-font neon-text-cyan" : ""} style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={20} /> Project Overview
                </h3>
                <p style={{ color: 'var(--text-main)', lineHeight: 1.6, fontSize: '1.05rem', whiteSpace: 'pre-wrap' }}>
                  {project.overview}
                </p>
              </div>

              {project.badge && (
                <div style={{ padding: '1rem', background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#ffb703', color: 'black', padding: '0.5rem', borderRadius: '50%' }}>
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: '#ffb703', fontSize: '1.1rem' }}>Achievement</h4>
                    <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.9rem' }}>{project.badge}</p>
                  </div>
                </div>
              )}

              {project.timeline && (
                <div>
                  <h3 className={isTechMode ? "tech-font neon-text-cyan" : ""} style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={20} /> Challenge Timeline
                  </h3>
                  <div style={{ padding: '1rem', background: 'var(--glass-bg)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                    <p className={isTechMode ? "tech-font" : ""} style={{ color: 'var(--text-main)', margin: 0 }}>{project.timeline}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 className={isTechMode ? "tech-font neon-text-cyan" : ""} style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Server size={20} /> Tech Stack
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {project.techStack.map((tech, i) => (
                    <div 
                      key={i} 
                      className={isTechMode ? "tech-font" : ""} 
                      style={{ 
                        padding: '0.8rem 1.2rem', 
                        background: 'var(--glass-bg)', 
                        border: '1px solid var(--glass-border)',
                        borderRadius: '8px',
                        color: 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isTechMode ? '0 0 10px rgba(0, 243, 255, 0.1)' : 'none'
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={isTechMode ? "tech-font neon-text-cyan" : ""} style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={20} /> Key Features
                </h3>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {project.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                      <div style={{ color: isTechMode ? 'var(--primary-cyan)' : 'var(--primary-pink)', marginTop: '2px' }}>
                        <ChevronRight size={18} />
                      </div>
                      <span style={{ color: 'var(--text-main)', lineHeight: 1.5 }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
