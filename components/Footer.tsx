'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#111111] text-white py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        
        {/* Brand Section */}
        <div className="space-y-8">
          <a href="/" className="flex items-center group">
            <img 
              src="https://ik.imagekit.io/dypkhqxip/Screenshot_2026-03-23_at_18.46.33-removebg-preview.png" 
              alt="Maharaja Express Logo" 
              className="h-20 w-auto object-contain brightness-0 invert" 
            />
          </a>
          <p className="text-gray-400 text-[16px] leading-relaxed font-light italic">
            Celebrating the royal legacy of Indian cuisine. Experience authenticity, heritage, and excellence in every bite.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#FF7A00] hover:border-[#FF7A00] transition-all duration-300">
              <span className="text-xs font-bold">FB</span>
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#FF7A00] hover:border-[#FF7A00] transition-all duration-300">
              <span className="text-xs font-bold">IG</span>
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#FF7A00] hover:border-[#FF7A00] transition-all duration-300">
              <span className="text-xs font-bold">TW</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h4 className="text-lg font-bold uppercase tracking-widest text-[#FF7A00]">
            Quick Links
          </h4>
          <ul className="space-y-4 text-gray-400 text-[16px] font-light">
            <li><a href="/" className="hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="/menu" className="hover:text-white transition-colors duration-300">Our Menu</a></li>
            <li><a href="/about" className="hover:text-white transition-colors duration-300">About Heritage</a></li>
            <li><a href="/reserve" className="hover:text-white transition-colors duration-300">Reservations</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-8">
          <h4 className="text-lg font-bold uppercase tracking-widest text-[#FF7A00]">
            Contact Us
          </h4>
          <ul className="space-y-6 text-gray-400 text-[16px] font-light">
            <li className="flex flex-col gap-1">
              <span className="text-white font-medium uppercase text-xs tracking-widest">Address</span>
              <span>123 Royal Palace Road, New Delhi, India 110001</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-white font-medium uppercase text-xs tracking-widest">Phone</span>
              <span>+91 11-1234-5678</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-white font-medium uppercase text-xs tracking-widest">Email</span>
              <span>info@maharajaexpress.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-8">
          <h4 className="text-lg font-bold uppercase tracking-widest text-[#FF7A00]">
            Newsletter
          </h4>
          <p className="text-gray-400 text-[16px] font-light italic">
            Subscribe to receive updates on royal seasonal menus and events.
          </p>
          <div className="flex items-center bg-white/5 border border-white/10 rounded-sm p-1">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-none outline-none text-white text-[14px] flex-1 px-4 h-12"
            />
            <button className="px-6 py-3 bg-[#FF7A00] text-white font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-[#FF8C00] transition-all duration-300 rounded-sm">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[13px] tracking-widest">
        <span>&copy; 2024 MAHARAJA EXPRESS. ALL RIGHTS RESERVED.</span>
        <div className="flex items-center gap-12 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white transition-colors duration-300">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
