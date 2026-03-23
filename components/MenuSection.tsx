'use client';

import React, { useState } from 'react';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Mains');

  const categories = ['Starters', 'Mains', 'Desserts', 'Drinks'];

  const menuItems = [
    { name: 'Murgh Tikka Angare', price: '₹425', desc: 'Succulent chicken morsels marinated in Kashmiri chilies and yogurt.', category: 'Starters' },
    { name: 'Gilafi Seekh Kebab', price: '₹495', desc: 'Minced lamb wrapped with bell peppers and grilled in tandoor.', category: 'Starters' },
    { name: 'Paneer Lababdar', price: '₹385', desc: 'Cubes of cottage cheese in a rich tomato and onion gravy with cream.', category: 'Mains' },
    { name: 'Nalli Nihari', price: '₹645', desc: 'Slow-cooked lamb shank in a spiced marrow gravy, a royal delicacy.', category: 'Mains' },
    { name: 'Hyderabadi Dum Biryani', price: '₹525', desc: 'Fragrant basmati rice layered with spiced meat and saffron.', category: 'Mains' },
    { name: 'Dal Maharaja', price: '₹345', desc: 'Our signature slow-cooked black lentils with butter and cream.', category: 'Mains' },
    { name: 'Shahi Tukda', price: '₹225', desc: 'Double-fried bread soaked in saffron-infused milk and nuts.', category: 'Desserts' },
    { name: 'Kesari Phirni', price: '₹185', desc: 'Traditional rice pudding flavored with saffron and served chilled.', category: 'Desserts' },
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[#FF7A00] text-[14px] font-semibold tracking-[0.2em] uppercase mb-4">
            Our Royal Menu
          </h2>
          <h1 className="text-[#333] text-[clamp(28px,4vw,42px)] font-medium leading-[1.2] tracking-tight text-center">
            A Culinary Journey Through <br /> <span className="text-[#FF7A00]">Indian Heritage</span>
          </h1>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 md:gap-12 mb-16 border-b border-[#F0F0F0]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-4 text-[15px] font-medium tracking-wide transition-all duration-300 relative ${activeCategory === cat ? 'text-[#FF7A00]' : 'text-gray-400 hover:text-[#333]'}`}
            >
              {cat}
              {activeCategory === cat && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF7A00] animate-in fade-in slide-in-from-left-2 shadow-[0_0_10px_rgba(255,122,0,0.3)]"></div>
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Menu List */}
          <div className="flex-1 w-full space-y-10">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-xl font-medium text-[#333] group-hover:text-[#FF7A00] transition-colors duration-300 uppercase tracking-tight">
                    {item.name}
                  </h3>
                  <div className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></div>
                  <span className="text-xl font-semibold text-[#FF7A00]">{item.price}</span>
                </div>
                <p className="text-gray-500 font-light text-[15px] italic">{item.desc}</p>
              </div>
            ))}
            <div className="pt-8">
              <button className="px-10 py-4 border-[1px] border-[#FF7A00] text-[#FF7A00] font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-[#FF7A00] hover:text-white transition-all duration-300 rounded-[2px]">
                Download Full Menu (PDF)
              </button>
            </div>
          </div>

          {/* Featured Dish Image */}
          <div className="flex-1 w-full">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/menu-highlight.png" 
                alt="Signature Dish" 
                className="w-full h-[550px] object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                <span className="text-[#FF7A00] text-sm font-bold uppercase tracking-widest mb-2">Signature Dish</span>
                <h4 className="text-white text-3xl font-medium">Chef&apos;s Special Platter</h4>
              </div>
              <div className="absolute top-6 right-6 w-24 h-24 bg-[#FF7A00] text-white rounded-full flex flex-col items-center justify-center font-bold shadow-xl border-2 border-white/20 animate-pulse">
                <span className="text-[10px] uppercase">Starting</span>
                <span className="text-xl">₹245</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
