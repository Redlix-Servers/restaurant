'use client';

import React, { useState, useEffect } from 'react';

interface NavbarProps {
  logoSrc?: string; // Optional prop for the logo source
  logoAlt?: string; // Optional prop for the logo alt text
}

const Navbar: React.FC<NavbarProps> = ({ 
  logoSrc = "https://ik.imagekit.io/dypkhqxip/Screenshot_2026-03-23_at_18.46.33-removebg-preview.png", 
  logoAlt = "Maharaja Express Logo" 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const textColorClass = isScrolled ? 'text-[#333]' : 'text-white';

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 w-full ${isScrolled ? 'top-0 py-4 bg-white/95 backdrop-blur-md border-b border-[#E0E0E0] shadow-sm' : 'top-14 py-8 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        {/* Left Container: Logo and Links */}
        <div className="flex items-center gap-16">
          {/* Logo Section */}
          <a href="/" className="flex items-center group">
            <img 
              src={logoSrc} 
              alt={logoAlt} 
              className={`h-22 md:h-28 w-auto object-contain transition-all duration-300 transform group-hover:scale-105`} 
            />
          </a>

          {/* Links (Aligned to the left, next to the logo) */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${textColorClass} hover:text-[#FF7A00] text-[17px] font-normal transition-all duration-300 relative group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF7A00] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Container: CTA */}
        <div className="flex items-center gap-6">
          <button className="px-8 py-3 bg-[#FF7A00] text-white font-bold text-[14px] uppercase tracking-[0.1em] hover:bg-[#FF8C00] transition-all duration-300 rounded-[2px] shadow-lg">
            Reservation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;