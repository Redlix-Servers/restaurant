'use client';

import React, { useState } from 'react';

const ReserveTableSection: React.FC = () => {
  const [isBooked, setIsBooked] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('19:00 PM');
  const [selectedGuests, setSelectedGuests] = useState('2 Persons');

  const handleBooking = () => {
    if (!selectedDate) {
      alert('Please select a date for your reservation.');
      return;
    }
    // Simulate booking process
    setIsBooked(true);
    
    // Auto-hide modal after 5 seconds if not closed
    setTimeout(() => {
      setIsBooked(false);
    }, 5000);
  };

  return (
    <section id="reserve" className="relative py-32 bg-[#FDFDFD] overflow-hidden border-b border-[#F0F0F0]">
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

        {/* Booking Form Interface */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-xl border border-[#F0F0F0] relative z-20">
          <div className="flex flex-col items-start px-6 md:border-r border-[#F0F0F0] w-full md:w-auto">
            <span className="text-xs uppercase text-gray-400 mb-1 tracking-widest font-bold">Select Date</span>
            <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-transparent text-[#333] outline-none cursor-pointer w-full" 
            />
          </div>
          <div className="flex flex-col items-start px-6 md:border-r border-[#F0F0F0] w-full md:w-auto">
            <span className="text-xs uppercase text-gray-400 mb-1 tracking-widest font-bold">Time Slot</span>
            <select 
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="bg-transparent text-[#333] outline-none cursor-pointer w-full p-0"
            >
              <option>19:00 PM</option>
              <option>20:00 PM</option>
              <option>21:00 PM</option>
              <option>22:00 PM</option>
            </select>
          </div>
          <div className="flex flex-col items-start px-6 md:border-r border-[#F0F0F0] w-full md:w-auto">
            <span className="text-xs uppercase text-gray-400 mb-1 tracking-widest font-bold">Guests</span>
            <select 
              value={selectedGuests}
              onChange={(e) => setSelectedGuests(e.target.value)}
              className="bg-transparent text-[#333] outline-none cursor-pointer w-full p-0"
            >
              <option>2 Persons</option>
              <option>4 Persons</option>
              <option>6+ Persons</option>
            </select>
          </div>
          <button 
            onClick={handleBooking}
            className="md:ml-4 px-12 py-5 bg-[#FF7A00] text-white font-bold text-[14px] uppercase tracking-[0.1em] hover:bg-[#FF8C00] transition-all duration-300 rounded-[2px] shadow-lg w-full md:w-auto active:scale-95"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Success Modal / Popup */}
      {isBooked && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in transition-all">
          <div className="bg-white rounded-2xl p-10 max-w-[500px] w-full shadow-2xl flex flex-col items-center text-center scale-up-center animate-in zoom-in-95 duration-300">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 relative">
              <span className="text-5xl">👑</span>
              <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-3xl font-bold text-[#333] mb-4">Reservation Successful!</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Your table for <span className="text-[#FF7A00] font-bold">{selectedGuests}</span> on <span className="text-[#FF7A00] font-bold">{selectedDate}</span> at <span className="text-[#FF7A00] font-bold">{selectedTime}</span> has been booked. <br/> A royal welcome awaits you!
            </p>
            <button 
              onClick={() => setIsBooked(false)}
              className="px-10 py-4 bg-[#FF7A00] text-white font-bold text-[14px] uppercase tracking-[0.1em] hover:bg-[#FF8C00] transition-all duration-300 rounded-[2px] shadow-lg"
            >
              Got it, Thanks!
            </button>
          </div>
        </div>
      )}

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-[120px] opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-[120px] opacity-30 -z-10"></div>
    </section>
  );
};

export default ReserveTableSection;
