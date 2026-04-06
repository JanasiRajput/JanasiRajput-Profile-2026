import { useState, useMemo } from 'react';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';

export default function Projects({ isTechMode }: { isTechMode: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeStatus, setActiveStatus] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract unique categories and statuses for the filters
  const categories = useMemo(() => Array.from(new Set(projectsData.map(p => p.category))), []);
  const statuses = useMemo(() => Array.from(new Set(projectsData.map(p => p.status))), []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchStatus = activeStatus === 'All' || project.status === activeStatus;
      return matchCategory && matchStatus;
    });
  }, [activeCategory, activeStatus]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className={`section-title ${isTechMode ? 'neon-text-pink' : ''}`}>
          {isTechMode ? 'FEATURED_PROJECTS' : 'Featured Projects'}
        </h2>
        
        <FilterBar 
          categories={categories}
          statuses={statuses}
          activeCategory={activeCategory}
          activeStatus={activeStatus}
          onCategoryChange={setActiveCategory}
          onStatusChange={setActiveStatus}
          isTechMode={isTechMode}
        />

        {filteredProjects.length > 0 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2rem', 
            marginTop: '1rem' 
          }}>
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isTechMode={isTechMode} 
                onClick={setSelectedProject} 
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
            <p className={isTechMode ? "tech-font" : ""}>
              {isTechMode ? 'ERROR: NO_PROJECTS_FOUND_MATCHING_CRITERIA' : 'No projects match your current filters.'}
            </p>
          </div>
        )}

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            isTechMode={isTechMode} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
}
