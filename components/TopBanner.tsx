import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-[#FF7A00] text-white text-[12px] py-3.5 px-8 flex justify-between items-center font-medium tracking-[0.05em] uppercase border-b border-black/5 shadow-sm">
      <div className="flex items-center gap-8">
        <span className="flex items-center gap-2">
          <span className="opacity-80">Call Us:</span>
          <a href="tel:07013206341" className="hover:underline">070132 06341</a>
        </span>
        <span className="hidden md:flex items-center gap-2 border-l border-white/20 pl-8">
          <span className="opacity-80">Hours:</span>
          <span>Open Until 11:00 PM</span>
        </span>
      </div>
      <div className="flex items-center gap-6">
        <a 
          href="#reserve" 
          className="hover:opacity-80 cursor-pointer transition-all duration-300 font-bold border-r border-white/20 pr-6 mr-6 hidden sm:block"
        >
          Book Your Table
        </a>
        <div className="flex items-center gap-3">
          <span className="opacity-80">Reservations:</span>
          <span className="font-bold">Swiggy • Zomato</span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;