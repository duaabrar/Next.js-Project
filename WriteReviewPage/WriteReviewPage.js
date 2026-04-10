"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, Camera, Star, ArrowRight } from 'lucide-react';

const WriteReviewPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [searchQuery, setSearchQuery] = useState("");
  const [rating, setRating] = useState(0);

  // --- NEW STATES FOR VALIDATION ---
  const [formData, setFormData] = useState({
    title: "",
    comment: ""
  });
  const [errors, setErrors] = useState({});

  const categories = [
    { name: "Electronics", image: "/slogo.png" },
    { name: "Food", image: "/slogo.png" },
    { name: "Services", image: "/slogo.png" },
    { name: "Shopping", image: "/slogo.png" },
  ];

  // --- VALIDATION LOGIC ---
  const validateForm = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.comment.trim()) newErrors.comment = "Review comment is required";
    else if (formData.comment.length < 10) newErrors.comment = "Review must be at least 10 characters";
    if (rating === 0) newErrors.rating = "Please select a star rating";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully!", { ...formData, rating, selectedCategory });
      alert("Review submitted successfully!");
      // Reset form if needed
      setFormData({ title: "", comment: "" });
      setRating(0);
      setErrors({});
    }
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans py-8 md:py-12 px-4">
      
      {/* --- HERO SECTION --- */}
      <div className="text-center mb-8 md:mb-12">
        <nav className="text-sm text-gray-400 mb-4">
          Homepage <span className="mx-1">&gt;</span> <span className="text-gray-800 font-medium">Write a review</span>
        </nav>
        <h1 className="text-[#1A2B3B] text-[28px] sm:text-[32px] md:text-[48px] lg:text-[56px] font-extrabold leading-tight mb-8 px-2">
          Write A Review On Products <br className="hidden md:block" /> & Services
        </h1>

        <div className="relative flex items-center bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-full p-1.5 md:p-2 max-w-[800px] mx-auto border border-gray-100">
            <div className="relative">
              <button 
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 md:px-6 py-2 md:py-3 border-r border-gray-100 text-gray-600 font-medium shrink-0 hover:bg-gray-50 transition-colors rounded-l-full"
              >
                <img 
                  src="/slogo.png" 
                  alt="Logo" 
                  className="w-4 h-4 md:w-5 md:h-5 object-contain" 
                />
                <span className="hidden sm:inline truncate max-w-[100px]">{selectedCategory}</span> 
                <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
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
              className="flex-1 px-3 md:px-6 outline-none text-gray-700 bg-transparent min-w-0 text-sm md:text-base"
            />
            
            <button 
              type="button"
              className="bg-[#00D084] p-2.5 md:p-4 rounded-full text-white hover:bg-[#00b875] transition-all shrink-0"
            >
              <Search size={18} className="md:w-[22px] md:h-[22px]" strokeWidth={2.5} />
            </button>
          </div>
      </div>

      {/* --- MAIN CARD SECTION --- */}
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row bg-[#F1F5F9] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-sm border border-gray-100">
          
          {/* LEFT GREEN SIDE */}
          <div className="lg:w-[45%] bg-[#05442E] p-8 md:p-14 flex flex-col items-center text-center relative overflow-hidden">
            <p className="text-white text-sm md:text-base mb-2">Can't Wait to Read Your Thoughts!</p>
            <h2 className="text-white text-[24px] md:text-[36px] font-bold leading-tight mb-8 md:mb-12">
              Select a Company & Contribute <br className="hidden md:block" /> Your Feedback Today!
            </h2>
            
            <div className="relative w-full flex justify-center mt-auto">
                <div className="absolute left-0 top-0 bg-white p-3 rounded-2xl shadow-xl z-20 w-[160px] text-left hidden lg:block">
                   <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-[10px] text-white">★</div>
                        <span className="text-[10px] font-bold text-gray-800">How was your order?</span>
                   </div>
                   <p className="text-[8px] text-gray-400 mb-1">Give us a review</p>
                   <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(s => <div key={s} className="w-3 h-3 bg-[#99D9BD] rounded-sm"></div>)}
                   </div>
                </div>

                <img 
                  src="/Young-man.png" 
                  alt="Reviewer" 
                  className="w-[250px] sm:w-[300px] md:w-[400px] object-contain relative z-10"
                />
                
               <div className="absolute top-24 right-5 hidden lg:block z-20">
            <img src="/Rating.png" alt="detailed review" className="w-24" /> 
        </div>
            </div>
          </div>

          {/* RIGHT FORM SIDE */}
          <div className="lg:w-[55%] p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-[#F1F5F9]">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-[#1A2B3B] text-sm font-bold mb-2">
                  Title of your review<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Summarize your review in few words"
                  className={`w-full h-14 px-6 bg-white border ${errors.title ? 'border-red-500' : 'border-gray-100'} rounded-2xl outline-none focus:ring-2 focus:ring-[#00D084]/20 transition-all text-gray-700 placeholder:text-gray-300 shadow-sm`}
                />
                {errors.title && <p className="text-red-500 text-xs mt-1 ml-2">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-[#1A2B3B] text-sm font-bold mb-2">
                  Write Review<span className="text-red-500 ml-0.5">*</span>
                </label>
                <textarea 
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  placeholder="Enter comments"
                  className={`w-full h-40 p-6 bg-white border ${errors.comment ? 'border-red-500' : 'border-gray-100'} rounded-[24px] md:rounded-[32px] outline-none focus:ring-2 focus:ring-[#00D084]/20 transition-all text-gray-700 placeholder:text-gray-300 shadow-sm resize-none`}
                />
                {errors.comment && <p className="text-red-500 text-xs mt-1 ml-2">{errors.comment}</p>}
              </div>

              {/* Rating Section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-2">
                <div className="flex flex-col">
                  <span className="text-gray-600 text-sm font-bold">How do you rate?</span>
                  {errors.rating && <span className="text-red-500 text-[10px]">{errors.rating}</span>}
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <button 
                      key={star} 
                      type="button"
                      onClick={() => {
                        setRating(star);
                        if(errors.rating) setErrors({...errors, rating: null});
                      }}
                      className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors ${rating >= star ? 'bg-[#00D084] text-white' : 'bg-[#99D9BD] text-white hover:bg-[#00D084]'}`}
                    >
                      <Star size={18} fill={rating >= star ? "white" : "none"} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              <div>
                <label className="block text-gray-600 text-sm font-bold mb-4">
                  Add Photos <span className="text-gray-400 font-normal">(Optional)</span><span className="text-red-500 ml-0.5">*</span>
                </label>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {[1,2,3,4].map((i) => (
                    <button key={i} type="button" className="w-16 h-16 md:w-20 md:h-20 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center text-gray-400 hover:border-[#00D084] hover:text-[#00D084] transition-all bg-white">
                      <Camera size={24} />
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit"
                className="w-full h-14 md:h-16 bg-[#1A2B3B] text-white rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-[#121d29] transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98] mt-6 md:mt-8"
              >
                Submit Review <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReviewPage;