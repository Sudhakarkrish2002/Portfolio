import React from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className="backdrop-blur-lg bg-[#0a0a0a]/80 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">Portfolio</h1>
          </div>
          <nav className="hidden md:flex gap-10 text-lg font-semibold">
            <a href="#home" className="px-3 py-1 rounded transition-colors text-white hover:text-blue-400 hover:bg-white/10 border-none shadow-none no-underline">Home</a>
            <a href="#about" className="px-3 py-1 rounded transition-colors text-white hover:text-blue-400 hover:bg-white/10 border-none shadow-none no-underline">About</a>
            <a href="#projects" className="px-3 py-1 rounded transition-colors text-white hover:text-blue-400 hover:bg-white/10 border-none shadow-none no-underline">Projects</a>
            <a href="#contact" className="px-3 py-1 rounded transition-colors text-white hover:text-blue-400 hover:bg-white/10 border-none shadow-none no-underline">Contact</a>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
