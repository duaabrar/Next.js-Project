"use client";
import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, ChevronRight, ChevronLeft, 
  Sparkles, Home, ShoppingBag, Briefcase, 
  Trophy, HeartPulse, Dog, Music, Flower2 
} from 'lucide-react';

const CategoryCard = ({ title, icon: Icon, items, headerBg }) => (
  <div className="bg-[#F3F7FA] rounded-[32px] overflow-hidden flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    
    <div className={`${headerBg} p-6 flex items-center gap-3 text-white`}>
      <div className="bg-white/20 p-2 rounded-lg">
        <Icon size={24} />
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    
    
    <div className="p-2 flex flex-col">
      {items.map((item, idx) => (
        <button 
          key={idx} 
          className="flex items-center justify-between p-3 px-4 hover:bg-white rounded-xl transition-colors group text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00D084]" />
            <span className="text-[#1A2B3B] text-sm font-medium">{item}</span>
          </div>
          <ChevronRight size={14} className="text-gray-400 group-hover:text-[#00D084] group-hover:translate-x-1 transition-all" />
        </button>
      ))}
    </div>
  </div>
);

const CategoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories = [
    { title: "Beauty & Well-Being", icon: Sparkles, headerBg: "bg-[#99D9BD]", items: ["African & Pacific Cuisine", "Bars & Cafes", "Chinese & Korean Cuisine", "European Cuisine", "General Restaurants", "Japanese Cuisine"] },
    { title: "Home Services", icon: Home, headerBg: "bg-[#1E293B]", items: ["Cleaning Service Providers", "Craftsman", "House Services", "House Sitting & Security", "Moving & Storage", "Plumbing & Sanitation"] },
    { title: "Shopping & Fashion", icon: ShoppingBag, headerBg: "bg-[#064E3B]", items: ["Accessories", "Cultural Goods", "Clothing Rental & Repair", "Costume & Wedding", "Jewelry & Watches", "Malls & Marketplaces"] },
    { title: "Business Services", icon: Briefcase, headerBg: "bg-[#99D9BD]", items: ["Administration & Services", "Associations & Centers", "HR & Recruiting", "IT & Communication", "Office Space & Supplies", "Sales & Marketing"] },
    { title: "Sports", icon: Trophy, headerBg: "bg-[#1E293B]", items: ["Ball Games", "Bat-and-ball Games", "Bowls & Lawn Sports", "Dancing & Gymnastics", "Extreme Sports", "Golf & Ultimate"] },
    { title: "Health Medical", icon: HeartPulse, headerBg: "bg-[#064E3B]", items: ["Clinics", "Dental Services", "Diagnostics & Testing", "Health Equipment", "Mental Health", "Physical Aids"] },
    { title: "Animal & Pets", icon: Dog, headerBg: "bg-[#99D9BD]", items: ["Animal Health", "Animal Parks & Zoo", "Cats & Dogs", "Horses & Riding", "Pet Services", "Pet Stores"] },
    { title: "Events & Entertainment", icon: Music, headerBg: "bg-[#1E293B]", items: ["Adult Entertainment", "Children's Entertainment", "Clubbing & Nightlife", "Gaming", "Museums & Exhibits", "Music & Movies"] },
    { title: "Home & Garden", icon: Flower2, headerBg: "bg-[#064E3B]", items: ["Bathroom & Kitchen", "Cultural Goods", "Decoration & Interior", "Fabric & Stationery", "Furniture Stores", "Garden & Pond"] },

    { title: "New Tech", icon: Sparkles, headerBg: "bg-[#99D9BD]", items: ["AI Tools", "Software", "Hardware", "Cloud", "Gadgets", "Mobile"] },
  ];

  
  const itemsPerPage = 9;
  const totalPages = Math.ceil(allCategories.length / itemsPerPage);
  
  const currentItems = useMemo(() => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    return allCategories.slice(firstIndex, lastIndex);
  }, [currentPage, allCategories]);

  return (
    <div className="w-full bg-white font-sans">
      
      {/* --- HERO SEARCH SECTION --- */}
      <div className="pt-16 pb-20 px-4 text-center bg-gradient-to-b from-blue-50/50 to-white">
        <div className="text-sm text-gray-500 mb-4">
          Homepage <span className="mx-2 font-bold text-gray-800">&gt;</span> <span className="text-gray-800 font-medium">Categories</span>
        </div>
        <h1 className="text-[#1A2B3B] text-4xl md:text-5xl font-bold mb-10">
          What are you looking for?
        </h1>

        {/* Search Bar Container */}
        <div className="max-w-3xl mx-auto relative">
          <div className="flex items-center bg-white border border-gray-200 rounded-full p-2 shadow-lg pl-6">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 font-medium pr-4 border-r border-gray-200 transition-colors ${isFilterOpen ? 'text-[#00D084]' : 'text-gray-600'}`}
            >
              <Filter size={18} />
              Filter
            </button>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search company or categories" 
              className="flex-1 px-4 outline-none text-gray-700 placeholder:text-gray-400"
            />
            <button className="bg-[#00D084] p-4 rounded-full text-white hover:bg-[#00b372] transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* --- FILTER DROPDOWN --- */}
          {isFilterOpen && (
            <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 p-4 text-left animate-in fade-in slide-in-from-top-2">
              <p className="text-xs font-bold text-gray-400 uppercase mb-3">Sort By</p>
              <ul className="space-y-2">
                <li className="hover:text-[#00D084] cursor-pointer text-sm py-1">A - Z (Alphabetical)</li>
                <li className="hover:text-[#00D084] cursor-pointer text-sm py-1">Most Reviews</li>
                <li className="hover:text-[#00D084] cursor-pointer text-sm py-1">Newly Added</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* --- CATEGORIES GRID SECTION --- */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 pb-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[#1A2B3B] text-2xl md:text-4xl font-bold">Explore companies by category</h2>
          <button className="hidden md:flex items-center gap-2 px-6 py-2 border border-[#00D084] text-black rounded-full font-medium hover:bg-[#00D084] hover:text-white transition-all group">
            See More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((cat, index) => (
            <CategoryCard 
              key={index}
              title={cat.title}
              icon={cat.icon}
              items={cat.items}
              headerBg={cat.headerBg}
            />
          ))}
        </div>

        {/* --- PAGINATION LOGIC --- */}
        <div className="mt-16 flex justify-center items-center gap-2">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className={`p-2 rounded-lg transition-colors ${currentPage === 1 ? 'text-gray-200' : 'text-gray-400 hover:bg-gray-100'}`}
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-10 h-10 rounded-full font-medium transition-all ${
                currentPage === num 
                ? 'bg-[#00D084] text-white shadow-md shadow-[#00D084]/30' 
                : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {num}
            </button>
          ))}

          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className={`p-2 rounded-lg transition-colors ${currentPage === totalPages ? 'text-gray-200' : 'text-gray-400 hover:bg-gray-100'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;