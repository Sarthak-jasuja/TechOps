import React from 'react';

const Navbar = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-lime-40 opacity-10 blur-2xl z-[-1]"></div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 items-center h-16 text-center">
            <a 
              href="#Home"
              className="text-5xl font-bold tracking-tight text-white">
              Nudge
            </a>
            <a
              href="#features"
              className="text-white font-medium text-lg transition-transform transform hover:scale-105 duration-200"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-white font-medium text-lg transition-transform transform hover:scale-105 duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white font-medium text-lg transition-transform transform hover:scale-105 duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
