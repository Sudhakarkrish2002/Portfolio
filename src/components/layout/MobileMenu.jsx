// import React, { useState, useEffect } from 'react';

// const MobileMenu = () => {
//   const [open, setOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('#home');

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [open]);

//   useEffect(() => {
//     const sections = document.querySelectorAll('section[id]');
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setActiveLink(`#${entry.target.id}`);
//         }
//       });
//     }, { rootMargin: '-50% 0px -50% 0px' });

//     sections.forEach(section => observer.observe(section));
//     return () => sections.forEach(section => observer.unobserve(section));
//   }, []);

//   const navLinks = [
//     { href: '#home', label: 'Home' },
//     { href: '#about', label: 'About' },
//     { href: '#skills', label: 'Skills' },
//     { href: '#projects', label: 'Projects' },
//     { href: '#contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       <button
//         className="md:hidden fixed top-4 right-4 z-50 flex flex-col justify-around w-8 h-8 bg-blue-400/80 hover:bg-blue-500/80 backdrop-blur-sm p-2 rounded-full border-2 border-blue-400 shadow-lg focus:outline-none"
//         onClick={() => setOpen(!open)}
//         aria-label="Toggle menu"
//         aria-expanded={open}
//       >
//         <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
//         <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${open ? 'opacity-0' : ''}`}></span>
//         <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
//       </button>
      
//       <div
//         className={`fixed top-0 right-0 h-full w-56 bg-[#0a0a0a]/90 backdrop-blur-lg text-white z-40 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0 shadow-2xl' : 'translate-x-full'} md:hidden`}
//       >
//         <nav className="flex flex-col h-full justify-center items-start space-y-2 text-lg font-semibold pt-16 p-6">
//           {navLinks.map((link, index) => (
//             <a 
//               key={link.href}
//               href={link.href} 
//               onClick={() => setOpen(false)} 
//               className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 no-underline transform ${activeLink === link.href ? 'text-blue-300 bg-blue-500/20' : 'text-gray-300 hover:text-white hover:bg-white/10'} ${open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
//               style={{ transitionDelay: open ? `${150 + index * 50}ms` : '0ms' }}
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>
//       </div>
      
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-30 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default MobileMenu;

// 

// import React, { useState } from "react";

// const MobileMenu = () => {
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#skills", label: "Skills" },
//     { href: "#projects", label: "Projects" },
//     { href: "#contact", label: "Contact" },
//   ];

//   return (
//     <div className="relative">
//       {/* Hamburger */}
//       <button
//         onClick={() => setOpen(true)}
//         aria-label="Open menu"
//         className="md:hidden fixed top-4 right-4 z-50 h-10 w-10 
//                    flex flex-col justify-between p-2 
//                    rounded-lg bg-blue-600 text-white shadow-md"
//       >
//         <span className="h-0.5 w-full bg-white" />
//         <span className="h-0.5 w-full bg-white" />
//         <span className="h-0.5 w-full bg-white" />
//       </button>

//       {/* Overlay */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//         />
//       )}

//       {/* Sidebar Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full text-center w-52 
//                     bg-slate-900 text-white shadow-xl z-50
//                     transform transition-transform duration-300
//                     ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Close button */}
//         <div className="flex justify-end p-4">
//           <button
//             onClick={() => setOpen(false)}
//             className="text-white text-3xl font-bold hover:text-red-400 transition"
//             aria-label="Close menu"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Nav Links */}
//         <nav className="flex flex-col gap-6 p-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={() => setOpen(false)}
//               className="block text-lg font-medium rounded-md px-3 py-2 
//                          hover:bg-blue-600 transition"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;



import React, { useState, useEffect } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // disable scroll + overflow
    } else {
      document.body.style.overflow = "auto"; // reset
    }
  }, [open]);

  return (
    <div className="relative">
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden fixed top-4 right-4 z-50 h-10 w-10 
                   flex flex-col justify-between p-2 
                   rounded-lg bg-blue-600 text-white shadow-md"
      >
        <span className="h-0.5 w-full bg-white" />
        <span className="h-0.5 w-full bg-white" />
        <span className="h-0.5 w-full bg-white" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-64 
                    bg-slate-900 text-white shadow-xl z-50 
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl font-bold hover:text-red-400 transition"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-6 p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium rounded-md px-3 py-2 
                         hover:bg-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
