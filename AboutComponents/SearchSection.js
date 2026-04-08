"use client";
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const SearchSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    { name: "All Categories", image: "/slogo.png" },
    { name: "Electronics", image: "/slogo.png" },
    { name: "Fashion", image: "/slogo.png" },
    { name: "Home & Garden", image: "/slogo.png" },
    { name: "Health", image: "/slogo.png" },
  ];

  return (
    <section 
   
      className="w-full bg-white py-0 my-0 px-4 md:px-10 lg:px-20 font-sans overflow-hidden"
      style={{ height: '374.48px' }} 
    >
      <div className="bg-[#05442E] w-full h-full rounded-[25px] flex flex-col items-center justify-center px-4">
        <div className="max-w-[800px] w-full text-center space-y-8">
          <div className="space-y-2">
            <h3 className="text-white text-2xl md:text-4xl font-bold">
              Brought Something Recently?
            </h3>
            <p className="lg:pt-5 text-sm md:text-base text-gray-200">
              Recently made a purchase? Share your experience to help others & provide feedback to businesses!
            </p>
          </div>

          {/* --- SEARCH BAR --- */}
          <div className="relative flex items-center bg-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] rounded-full p-2 max-w-[800px] mx-auto border border-white/10 w-full">
            
            <div className="relative">
              <button 
                type="button"
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

              {/* Dropdown Menu */}
              {isOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-[998]" 
                    onClick={() => setIsOpen(false)}
                  ></div>
                  
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
                </>
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
              type="button"
              onClick={() => console.log("Searching:", searchQuery, "in", selectedCategory)}
              className="bg-[#00D084] p-3 md:p-4 rounded-full text-white hover:bg-[#00b875] transition-all shrink-0 flex items-center justify-center"
            >
              <Search size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;