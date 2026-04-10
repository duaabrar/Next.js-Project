"use client";

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const categories = [
  { name: "Electronics", image: "/Electronics.png" },
  { name: "Clothing", image: "/Clotings.png" },
  { name: "Real Estate", image: "/real-estate.png" },
  { name: "Hotels", image: "/Hotels.png" },
  { name: "Bank", image: "/credit-card.png" },
  { name: "Restaurants", image: "/restaurants.png" },
  { name: "Furniture Store", image: "/furniture.png" },
];

const BusinessAndSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Categories");

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16 space-y-20">
    
<div className="max-w-[1200px] mx-auto bg-[#17253F] rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
  <div className="w-full md:w-1/2 space-y-6 z-10">
    <h2 className="text-white text-3xl md:text-4xl lg:text-[38px] font-bold lg:w-[551.29833984375px] lg:ml-17">
      Own a Business? Sign Up Now & Gain Genuine Reviews!
    </h2>
    <p className="text-white/70 text-sm md:text-base lg:w-[551.29833984375px] lg:ml-17">
      Register with us to build trust through authentic reviews. Showcase your services, engage with your audience, and grow your reputation.
    </p>
    <button className="bg-[#00D084] text-[#17253F] font-bold py-3 px-10 rounded-full hover:scale-105 transition-transform duration-300 lg:ml-17">
      Get Started
    </button>
  </div>

  <div className="w-full md:w-1/2 mt-10 md:mt-0 relative flex justify-center md:justify-end">
    <div className="hidden lg:block absolute -right-18 top-15 z-20 w-[183.00225830078125px] h-[197.23399353027344px]">
       <img src="/YB.png" alt="Business Interface" />
    </div>
    
    <div className="relative z-10">
       <img src="/TP.png" alt="Business Interface" />
       
       <div className="hidden lg:block absolute top-65 -left-27 z-30">
         <img src="/Top rated.png" alt="Business Interface" />
       </div>
    </div>
  </div>
</div>


      <div className="max-w-[800px] mx-auto text-center space-y-8">
        <div className="space-y-2">
          <h3 className="text-[#17253F] text-2xl md:text-4xl font-bold">
            Brought Something Recently?
          </h3>
          <p className="lg:pt-5 text-sm md:text-base">
            Recently made a purchase? Share your experience to help others & provide feedback to businesses!
          </p>
        </div>

   
        <div className="relative flex items-center bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-full p-2 max-w-[800px] mx-auto border border-gray-100">
          
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 md:px-6 py-3 border-r border-gray-100 text-gray-600 font-medium shrink-0 hover:bg-gray-50 transition-colors rounded-l-full"
            >
          
              <img 
                src="/slogo.png" 
                alt="Logo" 
                className="w-5 h-5 object-contain" 
              />
              <span className="hidden sm:inline truncate max-w-[100px]">{selectedCategory}</span> 
              <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

           
            {isOpen && (
              <div className="absolute top-[110%] left-0 w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden z-[999]">
                <div className="max-h-[280px] overflow-y-auto">
                  {categories.map((cat, idx) => (
                    <div 
                      key={idx}
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        setIsOpen(false);
                      }}
                      className="px-5 py-3 hover:bg-[#F0FDF4] cursor-pointer flex items-center gap-3 text-[#17253F] text-sm transition-colors border-b border-gray-50 last:border-0"
                    >
                      <img src={cat.image} className="w-5 h-5 object-contain" alt="" />
                      <span className="font-medium">{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search company or product"
            className="flex-1 px-4 md:px-6 outline-none text-gray-700 bg-transparent min-w-0"
          />
          
          <button 
            onClick={() => console.log("Searching:", searchQuery, "in", selectedCategory)}
            className="bg-[#00D084] p-3 md:p-4 rounded-full text-white hover:bg-[#00b875] transition-all shrink-0"
          >
            <Search size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>

    </section>
  );
};

export default BusinessAndSearch;