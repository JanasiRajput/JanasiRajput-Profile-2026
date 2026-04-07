import { Terminal, ChevronDown } from 'lucide-react';

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Hero({ isTechMode }: { isTechMode: boolean }) {
  return (
    <section id="home" className="section" style={{ position: 'relative', justifyContent: 'center' }}>
      <div className="container" style={{ zIndex: 1, position: 'relative' }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: isTechMode ? '0' : '0 auto', textAlign: isTechMode ? 'left' : 'center' }}>
          
          {isTechMode ? (
            <p className="neon-text-cyan tech-font" style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Terminal size={20} />
              SYSTEM.INIT()
            </p>
          ) : (
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-pink)', fontWeight: '600' }}>
              Welcome to my portfolio
            </p>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1rem', justifyContent: isTechMode ? 'flex-start' : 'center', flexWrap: 'wrap' }}>
            <img 
              src="/profile.jpg" 
              alt="Janasi Rajput" 
              style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                objectFit: 'cover', 
                border: isTechMode ? '2px solid var(--primary-cyan)' : '4px solid #fff',
                boxShadow: isTechMode ? '0 0 20px rgba(0, 243, 255, 0.4)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }} 
            />
            <div>
              <h1 className={isTechMode ? "neon-text-pink" : ""} style={{ fontSize: 'clamp(2.2rem, 8vw, 5rem)', lineHeight: 1.1, fontWeight: 'bold' }}>
                JANASI RAJPUT
              </h1>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: isTechMode ? 'flex-start' : 'center' }}>
                <a href="https://www.linkedin.com/in/janasi-rajput-837469284/" target="_blank" rel="noreferrer" style={{ color: isTechMode ? 'var(--primary-cyan)' : 'var(--text-main)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary-pink)'} onMouseOut={e => e.currentTarget.style.color = isTechMode ? 'var(--primary-cyan)' : 'var(--text-main)'}>
                  <LinkedinIcon size={24} />
                </a>
                <a href="https://github.com/JanasiRajput" target="_blank" rel="noreferrer" style={{ color: isTechMode ? 'var(--primary-cyan)' : 'var(--text-main)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary-pink)'} onMouseOut={e => e.currentTarget.style.color = isTechMode ? 'var(--primary-cyan)' : 'var(--text-main)'}>
                  <GithubIcon size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <h2 className={isTechMode ? "text-gradient tech-font" : ""} style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '2rem', color: isTechMode ? 'inherit' : 'var(--text-muted)' }}>
            Creative Frontend Developer
          </h2>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6, margin: isTechMode ? '0 0 3rem 0' : '0 auto 3rem auto' }}>
            Crafting digital experiences with interactive flair, unique artistic touches, and high-performance code.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: isTechMode ? 'flex-start' : 'center' }}>
            <a href="#projects" className={`btn ${isTechMode ? 'animate-pulse-glow' : ''}`}>
              {isTechMode ? 'VIEW_PROJECTS.exe' : 'View Projects'}
            </a>
            <a href="#contact" className="btn btn-cyan">
              {isTechMode ? 'INIT_CONTACT()' : 'Contact Me'}
            </a>
          </div>
        </div>
      </div>
        
      {isTechMode && (
        <div className="animate-float" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p className="neon-text-cyan tech-font" style={{ fontSize: '0.8rem', marginBottom: '0.5rem', letterSpacing: '3px' }}>SCROLL</p>
          <ChevronDown size={24} color="var(--primary-cyan)" />
        </div>
      )}
    </section>
  );
}
