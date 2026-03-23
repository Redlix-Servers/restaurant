'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-start overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://ik.imagekit.io/dypkhqxip/6577410-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] w-full px-8 md:px-20 text-left mt-32 md:mt-24">
        <div className="mb-6 flex flex-col items-start animate-fade-in-up">
          <div className="w-[40px] h-[2px] bg-[#FF7A00] mb-6"></div>
          <h2 className="text-[#FF7A00] text-[14px] font-medium tracking-[0.2em] uppercase mb-4 drop-shadow-md">
            Welcome to Maharaja Express
          </h2>
        </div>

        <h1 className="text-white text-[clamp(40px,5vw,60px)] font-medium leading-[1.2] mb-10 tracking-tight drop-shadow-lg max-w-[850px]">
          Experience the <span className="text-[#FF7A00]">Royalty</span> <br /> of Indian Fine Dining
        </h1>

        <p className="text-white/90 text-[16px] md:text-[18px] font-light max-w-[580px] mb-12 leading-relaxed drop-shadow-sm">
          Embark on a culinary odyssey through the heart of India. 
          Celebrate authentic flavors, timeless traditions, and world-class service onboard the Maharaja Express.
        </p>

        <div className="flex flex-col sm:flex-row items-start justify-start gap-8">
          <button className="px-12 py-5 bg-[#FF7A00] text-white font-medium text-[14px] uppercase tracking-[0.1em] hover:bg-[#FF8C00] transition-all duration-300 rounded-[2px] shadow-xl">
            View Royal Menu
          </button>
          <button className="px-12 py-5 border-[1px] border-white/50 text-white font-medium text-[14px] uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300 rounded-[2px] backdrop-blur-sm">
            Book Reservation
          </button>
        </div>
      </div>

      {/* Scroll indicator - Removed the "Explore" text as requested */}
      <div className="absolute bottom-10 left-8 md:left-20 flex flex-col items-center gap-4 opacity-70">
        <div className="w-[1px] h-[50px] bg-gradient-to-b from-[#FF7A00] to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
