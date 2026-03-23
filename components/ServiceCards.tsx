'use client';

import React from 'react';

const ServiceCards: React.FC = () => {
  const services = [
    {
      title: 'Reserve Table',
      icon: '/icons/reserve-table.png',
      bgColor: 'bg-[#FFF0ED]',
      accentColor: 'text-[#E84E4E]',
      href: '/reserve',
    },
    {
      title: 'Happiness Cards',
      icon: '/icons/happiness-cards.png',
      bgColor: 'bg-[#E8FFD9]',
      accentColor: 'text-[#7CB342]',
      href: '/gifts',
    },
    {
      title: 'Catering',
      icon: '/icons/catering.png',
      bgColor: 'bg-[#FFF0D9]',
      accentColor: 'text-[#FB8C00]',
      href: '/catering',
    },
    {
      title: 'Delivery/ Takeaway',
      icon: '/icons/delivery.png',
      bgColor: 'bg-[#E0F7FF]',
      accentColor: 'text-[#039BE5]',
      href: '/delivery',
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a 
              key={index} 
              href={service.href}
              className={`${service.bgColor} group rounded-3xl p-10 flex flex-col items-center justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-[320px] border border-transparent hover:border-white/50 backdrop-blur-sm`}
            >
              <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" 
                />
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <span className="text-[#333] font-semibold text-lg tracking-tight">{service.title}</span>
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* WhatsApp Floating Button - Updated to Official Icon */}
      <div className="fixed bottom-10 right-10 z-[100] group">
        <div className="absolute -inset-4 bg-green-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <a 
          href="https://wa.me/your-number" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative block w-16 h-16 transition-transform duration-300 hover:scale-110 active:scale-95"
          title="Chat on WhatsApp"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="Official WhatsApp" 
            className="w-full h-full drop-shadow-lg" 
          />
        </a>
      </div>
    </section>
  );
};

export default ServiceCards;
