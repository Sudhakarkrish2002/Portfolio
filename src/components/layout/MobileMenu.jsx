import React, { useState } from 'react';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 right-4 z-50 bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full border-2 border-blue-400 shadow-lg focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a0a0a]/90 backdrop-blur-lg text-white z-40 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0 shadow-2xl' : 'translate-x-full'} md:hidden border-none outline-none`}
      >
        <nav className="flex flex-col h-full justify-center items-center space-y-8 text-xl font-bold">
          <a href="#home" onClick={() => setOpen(false)} className="w-full text-center px-4 py-2 rounded transition-colors text-white hover:text-blue-400 hover:bg-white/10 no-underline">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="w-full text-center px-4 py-2 rounded transition-colors text-white hover:text-blue-400 hover:bg-white/10 no-underline">About</a>
          <a href="#skills" onClick={() => setOpen(false)} className="w-full text-center px-4 py-2 rounded transition-colors text-white hover:text-blue-400 hover:bg-white/10 no-underline">Skills</a>
          <a href="#projects" onClick={() => setOpen(false)} className="w-full text-center px-4 py-2 rounded transition-colors text-white hover:text-blue-400 hover:bg-white/10 no-underline">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="w-full text-center px-4 py-2 rounded transition-colors text-white hover:text-blue-400 hover:bg-white/10 no-underline">Contact</a>
        </nav>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden border-none outline-none"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default MobileMenu;
