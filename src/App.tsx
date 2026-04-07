import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Code2, Menu, X, Sun, Moon } from 'lucide-react';

function App() {
  const [isTechMode, setIsTechMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isTechMode) {
      document.body.classList.remove('no-tech-mode');
    } else {
      document.body.classList.add('no-tech-mode');
    }
  }, [isTechMode]);

  return (
    <div style={{ minHeight: '100vh' }}>
      {isTechMode && <div className="scanlines"></div>}
      
      {/* Background ambient light */}
      {isTechMode && (
        <>
          <div style={{ 
            position: 'fixed', top: '-20%', left: '-10%', width: '50vw', height: '50vw', 
            background: 'radial-gradient(circle, rgba(255,0,127,0.15) 0%, rgba(0,0,0,0) 70%)', 
            zIndex: -1, pointerEvents: 'none' 
          }}></div>
          <div style={{ 
            position: 'fixed', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', 
            background: 'radial-gradient(circle, rgba(0,243,255,0.1) 0%, rgba(0,0,0,0) 70%)', 
            zIndex: -1, pointerEvents: 'none' 
          }}></div>
        </>
      )}

      {/* Navigation */}
      <nav className="nav-container" style={{ 
        position: 'fixed', top: 0, width: '100%', padding: '1.5rem', 
        zIndex: 100, background: isTechMode ? 'linear-gradient(to bottom, rgba(5,5,5,0.9), transparent)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(5px)',
        borderBottom: isTechMode ? 'none' : '1px solid var(--glass-border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 101 }}>
          <Code2 size={28} className={isTechMode ? "neon-text-pink" : ""} style={{ color: isTechMode ? '' : 'var(--primary-pink)' }} />
          <span className={`tech-font ${isTechMode ? 'text-gradient' : ''}`} style={{ fontWeight: 'bold', fontSize: '1.2rem', color: isTechMode ? '' : 'var(--text-main)' }}>
            {isTechMode ? 'JR.sys' : 'Janasi Rajput'}
          </span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links / Mobile Drawer */}
        <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''} ${isTechMode ? "tech-font" : ""}`}>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-main)', fontSize: '0.9rem', transition: 'color 0.3s' }}>
            {isTechMode ? '/ABOUT' : 'About'}
          </a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-main)', fontSize: '0.9rem', transition: 'color 0.3s' }}>
            {isTechMode ? '/PROJECTS' : 'Projects'}
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-main)', fontSize: '0.9rem', transition: 'color 0.3s' }}>
            {isTechMode ? '/CONTACT' : 'Contact'}
          </a>
          
          <button 
            onClick={() => setIsTechMode(!isTechMode)}
            className="theme-toggle-btn"
            title={isTechMode ? "Switch to Minimalist Mode" : "Switch to Tech Mode"}
          >
            {isTechMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero isTechMode={isTechMode} />
        <Projects isTechMode={isTechMode} />
        <About isTechMode={isTechMode} />
        <Contact isTechMode={isTechMode} />
      </main>
      
      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: `1px solid ${isTechMode ? 'rgba(255,255,255,0.05)' : 'var(--glass-border)'}`, marginTop: '4rem' }}>
        <p className={isTechMode ? "tech-font" : ""} style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} JANASI RAJPUT {isTechMode && '// END_OF_FILE'}
        </p>
      </footer>
    </div>
  );
}

export default App;
