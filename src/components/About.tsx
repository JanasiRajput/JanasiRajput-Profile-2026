import { Monitor, Server, Cpu, Layers } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: <Monitor size={32} />, items: ['React', 'TypeScript', 'CSS', 'HTML'] },
  { name: 'Backend', icon: <Server size={32} />, items: ['Node.js', 'Express', 'SQL', 'MongoDB'] },
  { name: 'Tools', icon: <Cpu size={32} />, items: ['Git', 'Vite', 'Webpack', 'Figma'] },
  { name: 'Specialties', icon: <Layers size={32} />, items: ['Responsive Design', 'Accessibility', 'UX/UI'] },
];

export default function About({ isTechMode }: { isTechMode: boolean }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className={`section-title ${isTechMode ? 'neon-text-cyan' : ''}`}>
          {isTechMode ? 'SYSTEM.INFO()' : 'About Me'}
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center', marginTop: '2rem' }}>
          <div className="glass-panel text-main" style={{ padding: '3rem' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Hello! I'm Janasi Rajput, a frontend developer who loves blending art and logic. My work focuses on creating <span className={isTechMode ? "neon-text-pink" : ""} style={{ fontWeight: 'bold', color: isTechMode ? '' : 'var(--primary-pink)' }}>dynamic</span>, <span className={isTechMode ? "neon-text-cyan" : ""} style={{ fontWeight: 'bold', color: isTechMode ? '' : 'var(--primary-cyan)' }}>interactive</span>, and visually striking web experiences. 
              {isTechMode 
                ? " I treat every project like a digital scrapbook page — a place to experiment with bold colors, smooth animations, and solid code architecture."
                : " I am passionate about building accessible, performant, and user-centric applications tailored to solve real business problems."}
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              {isTechMode 
                ? "When I'm not writing code, I'm probably conceptualizing new, futuristic UI transitions or learning about the latest in web rendering technologies."
                : "When I'm not coding, I'm continuously exploring modern web standards and architectural patterns to keep my skills sharp."}
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {skills.map((skill, index) => (
              <div key={index} className={`glass-panel ${isTechMode ? 'animate-float' : ''}`} style={{ animationDelay: isTechMode ? `${index * 0.5}s` : '0s', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
                <div style={{ color: index % 2 === 0 ? 'var(--primary-pink)' : (isTechMode ? 'var(--primary-cyan)' : 'var(--primary-cyan)'), marginBottom: '1.5rem' }}>
                  {skill.icon}
                </div>
                <h3 className={isTechMode ? "tech-font" : ""} style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 'bold' }}>{skill.name}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {skill.items.map((item, i) => (
                    <li key={i} style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
