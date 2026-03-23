'use client';

import React from 'react';

const ReserveTableSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#FDFDFD] overflow-hidden border-b border-[#F0F0F0]">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col items-center text-center">
        <h2 className="text-[#FF7A00] text-[14px] font-semibold tracking-[0.2em] uppercase mb-6">
          Make a Reservation
        </h2>
        <h1 className="text-[#333] text-[clamp(32px,4vw,48px)] font-medium leading-[1.2] mb-8 tracking-tight max-w-[800px]">
          Secure Your Spot for a <span className="text-[#FF7A00]">Royal Dining</span> Experience
        </h1>
        <p className="text-gray-500 text-[18px] font-light max-w-[650px] mb-12 leading-relaxed">
          Whether it&apos;s a romantic dinner, a family celebration, or a corporate gathering, 
          ensure your evening is flawless by booking your table in advance.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-xl border border-[#F0F0F0]">
          <div className="flex flex-col items-start px-6 border-r border-[#F0F0F0]">
            <span className="text-xs uppercase text-gray-400 mb-1 tracking-widest font-bold">Select Date</span>
            <input type="date" className="bg-transparent text-[#333] outline-none cursor-pointer" />
          </div>
          <div className="flex flex-col items-start px-6 border-r border-[#F0F0F0]">
            <span className="text-xs uppercase text-gray-400 mb-1 tracking-widest font-bold">Time Slot</span>
            <select className="bg-transparent text-[#333] outline-none cursor-pointer">
              <option>19:00 PM</option>
              <option>20:00 PM</option>
              <option>21:00 PM</option>
              <option>22:00 PM</option>
            </select>
          </div>
          <div className="flex flex-col items-start px-6 border-r border-[#F0F0F0]">
            <span className="text-xs uppercase text-gray-400 mb-1 tracking-widest font-bold">Guests</span>
            <select className="bg-transparent text-[#333] outline-none cursor-pointer">
              <option>2 Persons</option>
              <option>4 Persons</option>
              <option>6+ Persons</option>
            </select>
          </div>
          <button className="ml-4 px-12 py-5 bg-[#FF7A00] text-white font-bold text-[14px] uppercase tracking-[0.1em] hover:bg-[#FF8C00] transition-all duration-300 rounded-[2px] shadow-lg">
            Book Now
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-20 -z-10"></div>
    </section>
  );
};

export default ReserveTableSection;
