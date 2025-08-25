import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaCode, FaFolder, FaEnvelope } from "react-icons/fa";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "about", label: "About", icon: FaUser },
    { id: "skills", label: "Skills", icon: FaCode },
    { id: "projects", label: "Projects", icon: FaFolder },
    { id: "contact", label: "Contact", icon: FaEnvelope },
  ];

  // Smooth scroll function
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden fixed top-4 right-4 z-[60] h-10 w-10 
                   flex flex-col justify-center items-center gap-1 p-1.5 
                   rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg hover:shadow-xl
                   hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105
                   border border-blue-300"
      >
        <span className="h-0.5 w-5 bg-white rounded-full transition-all duration-300" />
        <span className="h-0.5 w-5 bg-white rounded-full transition-all duration-300" />
        <span className="h-0.5 w-5 bg-white rounded-full transition-all duration-300" />
      </button>

      {/* Overlay - Only visible on mobile when menu is open */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-[55]"
        />
      )}

      {/* Simple Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 
                    bg-white shadow-2xl z-[65] 
                    transform transition-all duration-300 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setOpen(false)}
            className="h-8 w-8 flex items-center justify-center
                       rounded-full bg-gray-200 text-gray-600 
                       hover:bg-gray-300 transition-all duration-300"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <nav className="p-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setOpen(false);
              }}
              className="flex items-center w-full px-4 py-3 mb-2
                         text-left transition-all duration-300
                         hover:bg-blue-50 bg-white hover:text-blue-600
                         rounded-lg text-gray-700"
            >
              {React.createElement(link.icon, { 
                className: "text-lg mr-3" 
              })}
              <span className="font-medium">
                {link.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
