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

      <div className="relative flex flex-col items-center text-center min-h-[180px]">
        <img 
          src="/images/Avatar_image-portfolio.svg" 
          alt="Professional Avatar" 
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-[6px] border-white shadow-[0_0_0_8px_rgba(56,189,248,0.10),0_8px_32px_rgba(56,189,248,0.25)] absolute top-0 left-1/2 -translate-x-1/2 z-10"
        />
        <div className="pt-40 md:pt-48"></div>
        <h1 className="hero-title">Sudhakar N</h1>
        <p className="hero-subtitle">Full-Stack Developer</p>
        <p className="hero-description">
          MERN Full Stack Developer & AI Integrator dedicated to building intelligent, scalable, and visually engaging solutions.<br/>
          Passionate about innovation—combining AI and modern web technologies to deliver future-ready applications.
        </p>
        <div className="hero-buttons flex justify-center gap-4 flex-wrap">
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
