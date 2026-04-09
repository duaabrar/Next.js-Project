"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation"; 

const categories = [
  { name: "Electronics", image: "/Electronics.png" },
  { name: "Clothing", image: "/Clotings.png" },
  { name: "Real Estate", image: "/real-estate.png" },
  { name: "Hotels", image: "/Hotels.png" },
  { name: "Bank", image: "/credit-card.png" },
  { name: "Restaurants", image: "/restaurants.png" },
  { name: "Furniture Store", image: "/furniture.png" },
  { name: "Other", image: "/slogo.png" }, 
];

export default function HeroSection() {
  const router = useRouter(); 
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Categories");

 
  const otherCategoryLink = "/CategoryCard"; 

  const handleCategorySelect = (catName) => {
    if (catName === "Other") {
      router.push(otherCategoryLink);
    } else {
      setSelectedCategory(catName);
    }
    setIsOpen(false);
  };

  return (
    <section suppressHydrationWarning
      className="relative w-full min-h-[700px] lg:min-h-[800px] flex flex-col items-center justify-center pt-24 pb-12 bg-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg1.png')" }}
    >
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#E8F9F2] rounded-full blur-[80px] md:blur-[120px] opacity-50" />
        <div className="absolute bottom-[5%] right-[-5%] w-[350px] md:w-[550px] h-[350px] md:h-[550px] bg-[#F0F4FF] rounded-full blur-[90px] md:blur-[130px] opacity-60" />
      </div>

      <div className="absolute left-[1%] xl:left-[4%] top-[1%] hidden lg:block z-20 animate-bounce-slow">
        <img src="/hayley.png" alt="Review" className="w-[160px] xl:w-[220px] drop-shadow-xl" />
      </div>
      
      <div className="absolute right-[1%] xl:right-[2%] top-[28%] hidden lg:block z-20 animate-bounce-slow">
        <img src="/john.png" alt="Review" className="w-[160px] xl:w-[220px] drop-shadow-xl" />
      </div>
      
      <div className="absolute right-[15%] xl:right-[18%] top-[28%] hidden lg:block z-10 opacity-40 xl:opacity-100">
        <img src="/Vector (5).png" alt="Icon" className="w-[60px] xl:w-auto" />
      </div>

      <div className="relative z-30 max-w-[1200px] mx-auto text-center px-6">
        <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] xl:text-[50px] font-bold text-[#17253F] leading-[1.1] mb-6">
          Find Top Businesses & Services, <br className="hidden sm:block" />
          Trusted by Your Reviews
        </h1>
        <p className="text-[16px] sm:text-[20px] lg:text-[22px] text-gray-700 mb-10 max-w-[700px] mx-auto leading-relaxed">
          Millions of unbiased reviews. Trusted by 700 Million+ users
        </p>

        <div className="relative flex flex-col sm:flex-row items-center bg-white shadow-2xl rounded-[24px] sm:rounded-full p-1.5 max-w-[850px] mx-auto border border-gray-100 w-full">
          
          <div className="relative w-full sm:w-auto">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between sm:justify-start gap-3 w-full px-6 py-4 sm:border-r border-gray-100 text-gray-600 font-semibold hover:bg-gray-50 transition-all rounded-t-[20px] sm:rounded-l-full"
            >
              <div className="flex items-center gap-2">
                <img src="/slogo.png" alt="Logo" className="w-5 h-5 object-contain" />
                <span className="whitespace-nowrap">{selectedCategory}</span> 
              </div>
              <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute top-[105%] left-0 w-full sm:w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden z-[100] mt-2 animate-in fade-in slide-in-from-top-2">
                <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                  {categories.map((cat, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handleCategorySelect(cat.name)}
                      className="px-6 py-3.5 hover:bg-[#F0FDF4] cursor-pointer flex items-center gap-4 text-[#17253F] text-sm transition-all border-b border-gray-50 last:border-0"
                    >
                      <img src={cat.image} className="w-6 h-6 object-contain" alt="" />
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
            placeholder="Search company or product..."
            className="flex-1 px-6 py-4 sm:py-0 outline-none text-gray-700 bg-transparent w-full placeholder:text-gray-400"
          />
          
          <button 
            onClick={() => console.log("Search:", searchQuery, selectedCategory)}
            className="bg-[#00D084] w-[95%] sm:w-auto p-4 sm:p-5 rounded-[18px] sm:rounded-full text-white hover:bg-[#00b875] hover:scale-105 active:scale-95 transition-all flex justify-center items-center shadow-lg shadow-green-200 mb-2 sm:mb-0"
          >
            <Search size={22} strokeWidth={3} />
            <span className="sm:hidden ml-3 font-bold">Search Now</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 mt-20 lg:mt-32 w-full overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-[26px] lg:text-[38px] font-bold text-[#17253F] text-center md:text-left leading-tight">
            What you are looking for?
          </h2>
          <button className="flex items-center gap-2 text-[#17253F] border-2 border-[#04DA8D] px-8 py-3 rounded-full text-[16px] font-bold bg-white hover:bg-[#04DA8D] hover:text-white transition-all duration-300">
            See More <span>→</span>
          </button>
        </div>

        <div className="flex w-full group">
          <div className="flex gap-6 animate-marquee whitespace-nowrap py-4">
            {[...categories, ...categories].map((cat, index) => (
              <div 
                key={index}
                onClick={() => handleCategorySelect(cat.name)} // Marquee items par bhi link click kaam karega
                className="flex-shrink-0 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-[24px] cursor-pointer shadow-sm hover:border-[#00D084] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-[160px] lg:w-[200px] h-[130px] lg:h-[160px]"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 mb-3 flex items-center justify-center">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[13px] lg:text-[15px] font-semibold text-[#17253F] text-center px-4">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #00D084;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}