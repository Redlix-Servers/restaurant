'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAFAFA] overflow-hidden border-t border-[#F0F0F0]">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* About Text Content */}
        <div className="flex-1 space-y-8 text-left">
          <div className="flex flex-col items-start animate-fade-in-up">
            <div className="w-[40px] h-[3px] bg-[#FF7A00] mb-6"></div>
            <h2 className="text-[#FF7A00] text-[14px] font-semibold tracking-[0.2em] uppercase">
              Heritage of Excellence
            </h2>
          </div>

          <h1 className="text-[#333] text-[clamp(28px,4vw,42px)] font-medium leading-[1.2] tracking-tight">
            The Legend of <br /> <span className="text-[#FF7A00]">Maharaja Express</span>
          </h1>

          <p className="text-gray-500 text-[18px] font-light leading-relaxed">
            Born from the shared passion for India&apos;s rich culinary history, Maharaja Express brings the grandeur 
            of the royal kitchens to your table. Our journey began with a simple dream: to preserve 
            and celebrate the authentic flavors that once graced the tables of Indian royalty.
          </p>

          <p className="text-gray-500 text-[18px] font-light leading-relaxed">
            Every dish we serve is a tribute to centuries of tradition, meticulously prepared with 
            saffron, cardamom, and the finest local ingredients. Experience the timeless allure 
            of Indian fine dining where every detail is a masterpiece.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#F0F0F0]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#FF7A00] text-xl font-bold">15+</div>
              <span className="text-gray-600 font-medium">Years of Culinary Royalty</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#FF7A00] text-xl font-bold">50+</div>
              <span className="text-gray-600 font-medium">Secret Royal Recipes</span>
            </div>
          </div>
          
          <div className="pt-8">
            <button className="px-12 py-5 bg-[#FF7A00] text-white font-bold text-[14px] uppercase tracking-[0.1em] hover:bg-[#FF8C00] transition-all duration-300 rounded-[2px] shadow-xl">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* About Decorative Image Grid */}
        <div className="flex-1 w-full grid grid-cols-2 gap-6 relative">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl shadow-xl h-[300px] border-[1px] border-white/50">
              <img src="/hero-bg.png" alt="Interior" className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl h-[200px] border-[1px] border-white/50">
              <img src="/menu-highlight.png" alt="Cuisine" className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700 saturate-[0.8]" />
            </div>
          </div>
          <div className="pt-12 space-y-6">
            <div className="overflow-hidden rounded-2xl shadow-xl h-[250px] border-[1px] border-white/50">
              <img src="/hero-bg.png" alt="Atmosphere" className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl h-[250px] border-[1px] border-white/50">
              <img src="/menu-highlight.png" alt="Dish" className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          
          {/* Accent Element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 border-[10px] border-[#FF7A00]/10 rounded-full animate-pulse -z-10"></div>
          <div className="absolute -top-10 -left-10 w-48 h-48 border-[10px] border-[#FF7A00]/10 rounded-full animate-pulse -z-10 delay-700"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
