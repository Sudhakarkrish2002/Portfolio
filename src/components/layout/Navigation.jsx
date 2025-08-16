import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">Sudhakar N</h1>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
