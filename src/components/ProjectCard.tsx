import { Award, ChevronRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  isTechMode: boolean;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, isTechMode, onClick }: ProjectCardProps) {
  return (
    <div 
      className={`project-card glass-panel ${isTechMode ? 'tech-mode' : 'no-tech-mode'}`}
      onClick={() => onClick(project)}
      style={{
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Thumbnail area */}
      <div className="project-thumbnail" style={{ height: '200px', overflow: 'hidden', position: 'relative', background: 'var(--glass-bg)' }}>
        {project.thumbnail ? (
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; opacity:0.5; background:linear-gradient(45deg, var(--primary-pink), var(--primary-cyan));"><span>Image Unavailable</span></div>';
            }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--primary-pink), var(--primary-cyan))', opacity: 0.2 }} />
        )}
        
        {/* Hover overlay */}
        <div className="project-overlay">
          <span className={isTechMode ? "tech-font" : ""} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            VIEW_DETAILS <ChevronRight size={18} />
          </span>
        </div>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <h3 className={isTechMode ? "neon-text-pink" : ""} style={{ fontSize: '1.25rem', margin: 0, lineHeight: 1.3 }}>
            {project.title}
          </h3>
        </div>

        {project.badge && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ffb703', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            <Award size={14} />
            {project.badge}
          </div>
        )}
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {project.shortDescription}
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span 
              key={i} 
              className={isTechMode ? "tech-font" : ""} 
              style={{ 
                fontSize: '0.75rem', 
                color: isTechMode ? 'var(--primary-cyan)' : 'var(--text-main)', 
                fontWeight: isTechMode ? 'normal' : '600', 
                padding: isTechMode ? '2px 0' : '4px 8px', 
                background: isTechMode ? 'none' : 'rgba(0,0,0,0.05)', 
                borderRadius: '4px',
                border: isTechMode ? '1px solid rgba(0, 243, 255, 0.2)' : 'none',
                paddingLeft: isTechMode ? '6px' : '8px',
                paddingRight: isTechMode ? '6px' : '8px',
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
