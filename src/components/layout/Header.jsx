import React from 'react';
import MobileMenu from './MobileMenu';
import { FaHome, FaUser, FaCode, FaFolder, FaEnvelope } from 'react-icons/fa';

/**
 * Header Component
 * 
 * Navigation header with:
 * - Portfolio title/logo
 * - Desktop navigation menu with smooth scrolling
 * - Mobile menu for smaller screens
 * 
 * @component
 * @returns {JSX.Element} The header navigation component
 */
const Header = () => {
  /**
   * Handles smooth scrolling to sections
   * @param {string} sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        console.log(`Scrolling to ${sectionId} section`);
      } else {
        console.warn(`Section ${sectionId} not found`);
      }
    } catch (error) {
      console.error('Scroll error:', error);
    }
  };

  return (
    <header className="backdrop-blur-lg bg-gradient-to-r from-black/90 via-slate-900/90 to-black/90 shadow-2xl fixed top-0 left-0 right-0 z-50 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Title */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <FaCode className="text-2xl md:text-3xl text-blue-400" />
              <h1 
                className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent tracking-wide cursor-pointer hover:from-blue-300 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('home')}
              >
                Portfolio
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-lg font-semibold">
            <button 
              onClick={() => scrollToSection('home')}
              className="px-4 py-2 rounded-lg transition-all duration-300 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 transform hover:scale-105 flex items-center gap-2"
            >
              <FaHome className="text-lg" />
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-4 py-2 rounded-lg transition-all duration-300 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 transform hover:scale-105 flex items-center gap-2"
            >
              <FaUser className="text-lg" />
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="px-4 py-2 rounded-lg transition-all duration-300 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 transform hover:scale-105 flex items-center gap-2"
            >
              <FaCode className="text-lg" />
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-4 py-2 rounded-lg transition-all duration-300 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 transform hover:scale-105 flex items-center gap-2"
            >
              <FaFolder className="text-lg" />
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-lg transition-all duration-300 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 transform hover:scale-105 flex items-center gap-2"
            >
              <FaEnvelope className="text-lg" />
              Contact
            </button>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
