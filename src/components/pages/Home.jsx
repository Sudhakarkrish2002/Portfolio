import React from 'react';
import Button from '../common/Button';

const Home = () => {
  const RESUME_PATH = '/Resume/SUDHAKAR N (FULL-STACK DEVELOPER RESUME) .pdf';

const downloadResume = () => {
  try {
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.setAttribute('download', 'Sudhakar_N_FULLSTACK_RESUME.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Resume download initiated');
  } catch (error) {
    console.error('Download error:', error);
    window.open(RESUME_PATH, '_blank');
  }
};

  return (
    <section id="home" className="hero-section">
      {/* Floating Elements */}
      <div className="floating-element">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="2" fill="#38bdf8" opacity="0.3"/>
        </svg>
      </div>
      <div className="floating-element">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="10" height="10" fill="#38bdf8" opacity="0.25"/>
        </svg>
      </div>
      <div className="floating-element">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="25,5 30,20 45,25 30,30 25,45 20,30 5,25 20,20" fill="#38bdf8" opacity="0.25"/>
        </svg>
      </div>

      <div className="hero-content" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: '180px' }}>
        <img 
          src="/images/Avatar_image-portfolio.svg" 
          alt="Professional Avatar" 
          className="hero-avatar"
          style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 0 0 8px rgba(56,189,248,0.10), 0 8px 32px rgba(56,189,248,0.25)', border: '6px solid #fff', position: 'absolute', top: '0px', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
        />
        <div style={{ paddingTop: '190px' }}></div>
        <h1 className="hero-title">Sudhakar N</h1>
        <p className="hero-subtitle">Full-Stack Developer</p>
        <p className="hero-description">
          MERN Full Stack Developer & AI Integrator dedicated to building intelligent, scalable, and visually engaging solutions.<br/>
          Passionate about innovation—combining AI and modern web technologies to deliver future-ready applications.
        </p>
        <div className="hero-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" onClick={downloadResume}>
            Download Resume
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
      </div>
    </section>
  );
};

export default Home;
