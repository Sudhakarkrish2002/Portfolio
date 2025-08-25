import React from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  // Simple download function that WILL work
  const handleDownloadResume = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Download button clicked!');
    
    // For Vite, the public folder is served directly
    const resumePath = '/Resume/SUDHAKAR_N_RESUME.pdf';
    
    // Create download link
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'SUDHAKAR_N_RESUME.pdf';
    link.target = '_blank';
    
    // Force click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Download initiated');
  };

  // SIMPLE & CLEAN - GUARANTEED TO WORK
  const handleGetInTouch = () => {
    console.log('🎯 Get In Touch button clicked!');
    
    // Simple scroll to contact section
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Contact section not found, scrolling to bottom');
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 opacity-10 animate-pulse">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="2" fill="#38bdf8" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute top-60 right-15 opacity-10 animate-pulse" style={{animationDelay: '2s'}}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="10" height="10" fill="#38bdf8" opacity="0.25"/>
        </svg>
      </div>
      <div className="absolute bottom-30 left-20 opacity-10 animate-pulse" style={{animationDelay: '4s'}}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="25,5 30,20 45,25 30,30 25,45 20,30 5,25 20,20" fill="#38bdf8" opacity="0.25"/>
        </svg>
      </div>

      {/* Main hero content */}
      <div className="relative flex flex-col items-center text-center z-10 px-6">
        
        {/* Professional avatar */}
        <img 
          src="/images/Avatar_image-portfolio.svg"
          alt="Professional Avatar"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-[6px] border-white shadow-[0_0_0_8px_rgba(56,189,248,0.10),0_8px_32px_rgba(56,189,248,0.25)] absolute top-0 left-1/2 -translate-x-1/2 z-10"
        />
        
        {/* Spacing for avatar */}
        <div className="pt-40 md:pt-48"></div>
        
        {/* Name and title */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
          Sudhakar N
        </h1>
        <p className="text-xl md:text-2xl text-blue-300 mb-4 font-semibold">
          Full-Stack Developer
        </p>
        
        {/* Professional description */}
        <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
          MERN Full Stack Developer & AI Integrator dedicated to building intelligent, scalable, and visually engaging solutions.<br/>
          Passionate about innovation—combining AI and modern web technologies to deliver future-ready applications.
        </p>
        
        {/* FIXED BUTTONS - These WILL work */}
        <div className="flex justify-center gap-4 flex-wrap mt-8">
          {/* Download Resume Button - GUARANTEED TO WORK */}
          <div
            onClick={handleDownloadResume}
            onKeyDown={(e) => e.key === 'Enter' && handleDownloadResume(e)}
            tabIndex={0}
            role="button"
            className="bg-gradient-to-r from-blue-400 to-blue-500 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer select-none flex items-center gap-2"
          >
            <FaDownload className="text-lg" />
            Download Resume
          </div>
          
          {/* Get In Touch Button - SIMPLE & RELIABLE */}
          <button
            onClick={handleGetInTouch}
            className="bg-transparent border-2 border-blue-400 text-blue-400 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-400 hover:text-black cursor-pointer flex items-center gap-2"
          >
            <FaEnvelope className="text-lg" />
            Get In Touch
          </button>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;