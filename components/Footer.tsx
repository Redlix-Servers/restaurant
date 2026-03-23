'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#111111] text-white py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        
        {/* Brand & Service Options */}
        <div className="space-y-8">
          <a href="/" className="flex items-center group">
            <img 
              src="https://ik.imagekit.io/dypkhqxip/Screenshot_2026-03-23_at_18.46.33-removebg-preview.png" 
              alt="Maharaja Express Logo" 
              className="h-20 w-auto object-contain brightness-0 invert" 
            />
          </a>
          <div className="space-y-4">
            <p className="text-gray-400 text-[15px] leading-relaxed font-light italic">
              Celebrating the royal legacy of Indian cuisine. Experience authenticity, heritage, and excellence.
            </p>
            <div className="text-[#FF7A00] text-sm font-medium border-t border-white/10 pt-4 flex flex-wrap gap-2 uppercase tracking-tighter">
              <span>All you can eat</span> • <span>Private dining room</span> • <span>Vegetarian options</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#FF7A00] hover:border-[#FF7A00] transition-all duration-300">
              <span className="text-xs font-bold font-sans">FB</span>
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#FF7A00] hover:border-[#FF7A00] transition-all duration-300">
              <span className="text-xs font-bold font-sans">IG</span>
            </a>
          </div>
        </div>

        {/* Reservations & Links */}
        <div className="space-y-8">
          <h4 className="text-lg font-bold uppercase tracking-widest text-[#FF7A00]">
            Reservations
          </h4>
          <ul className="space-y-4 text-gray-400 text-[16px] font-light">
            <li><a href="https://swiggy.com" target="_blank" className="hover:text-white transition-colors duration-300 flex items-center gap-2">Swiggy</a></li>
            <li><a href="https://zomato.com" target="_blank" className="hover:text-white transition-colors duration-300 flex items-center gap-2">Zomato</a></li>
            <li><a href="https://eazydiner.com" target="_blank" className="hover:text-white transition-colors duration-300 flex items-center gap-2">Eazydiner</a></li>
            <li className="pt-4 border-t border-white/10"><a href="/menu" className="hover:text-white transition-colors duration-300">View Menu</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-8 lg:col-span-2">
          <h4 className="text-lg font-bold uppercase tracking-widest text-[#FF7A00]">
            Find Us
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ul className="space-y-6 text-gray-400 text-[16px] font-light">
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium uppercase text-xs tracking-widest">Address</span>
                <span className="leading-relaxed">
                  Sy no 373, 1 & 373, 3rd Floor, AMR Planet 1, Rd, 3, Trimulgherry - ECIL Rd, Extn, Moula Ali, Secunderabad, Telangana 500040
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium uppercase text-xs tracking-widest">Phone</span>
                <span>070132 06341</span>
              </li>
            </ul>
            <ul className="space-y-6 text-gray-400 text-[16px] font-light">
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium uppercase text-xs tracking-widest">Hours</span>
                <span className="text-[#FF7A00] font-bold">Open now</span>
                <span>Closes 11:00 PM</span>
              </li>
              <li className="flex flex-col gap-1">
                <button className="px-6 py-3 bg-white/5 border border-[#FF7A00] text-[#FF7A00] font-bold text-[12px] uppercase tracking-[0.1em] hover:bg-[#FF7A00] hover:text-white transition-all duration-300 rounded-sm w-fit mt-2">
                  Get Directions (40 mins away)
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[11px] font-medium tracking-widest uppercase">
        <span>&copy; 2024 MAHARAJA EXPRESS. ALL RIGHTS RESERVED.</span>
        <div className="flex items-center gap-10 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
