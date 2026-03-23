import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-[#FF7A00] text-white text-[13px] py-3.5 px-6 flex justify-between items-center font-poppins tracking-[0.05em] uppercase border-b border-[#2A2A2A]">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <span>CALL US: +1 (555) 123-4567</span>
        </span>
        <span className="flex items-center gap-2 opacity-80 decoration-none">
          <span>MON-SUN: 11:00 AM - 11:00 PM</span>
        </span>
      </div>
      <div>
        <span className="hover:opacity-80 cursor-pointer transition-all duration-300">
          BOOK YOUR TABLE NOW
        </span>
      </div>
    </div>
  );
};

export default TopBanner;