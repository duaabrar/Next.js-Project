"use client";
import React, { useState, useRef } from 'react';
import { Calendar, MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';

const BuyWithConfidence = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const blogs = [
    {
      id: 1,
      tag: "Review Matters",
      date: "July 30, 2024",
      title: "The FTC’s fake reviews ruling and what it means for you",
      desc: "The prevalence of influencers in our daily lives means we see them everywhere.",
      image: "/Rectangle2a.png"
    },
    {
      id: 2,
      tag: "Review Matters",
      date: "July 30, 2024",
      title: "Voice search optimization: Speak your way to success on search",
      desc: "The prevalence of influencers in our daily lives means we see them everywhere.",
      image: "/Rectangle2b.png"
    },
    {
      id: 3,
      tag: "Review Matters",
      date: "July 30, 2024",
      title: "Voice search optimization: Speak your way to success on search",
      desc: "The prevalence of influencers in our daily lives means we see them everywhere.",
      image: "/Rectangle2c.png"
    }
  ];

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.blog-card').offsetWidth + 24;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.blog-card').offsetWidth + 24;
      const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth);
      if (newIndex !== activeIndex) setActiveIndex(newIndex);
    }
  };

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 font-sans">
      <div className="bg-[#E9F5F1] rounded-[40px] p-8 md:p-12 lg:p-16">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[#1A2B3B] text-3xl md:text-4xl font-bold tracking-tight">
            Buy With Confidence
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button 
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="p-2.5 bg-[#CBDDDA] rounded-full hover:bg-gray-300 disabled:opacity-50 transition-colors"
            >
              <ChevronLeft size={24} className="text-[#1A2B3B]" />
            </button>
            <button 
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex >= blogs.length - 1}
              className="p-2.5 bg-[#1A2B3B] rounded-full hover:bg-opacity-90 disabled:opacity-50 transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="blog-card min-w-[300px] md:min-w-[380px] flex-1 bg-white rounded-[32px] p-6 flex flex-col shadow-sm group"
            >
              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden mb-6 h-[220px]">
                <img 
                  src={blog.image} 
                  alt="blog" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Badges */}
              <div className="flex items-center gap-3 mb-5">
                <span className="px-4 py-1.5 border border-gray-100 rounded-full text-[12px] font-medium text-gray-500">
                  {blog.tag}
                </span>
                <div className="flex items-center gap-1.5 text-[12px] font-medium text-gray-500">
                  <Calendar size={14} className="text-gray-400" />
                  {blog.date}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-[#1A2B3B] text-[20px] font-bold leading-[1.3] mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6">
                  {blog.desc}
                </p>
              </div>

              {/* Link */}
              <button className="flex items-center gap-2 text-[#00D084] font-bold text-sm group/link">
                Read Article 
                <MoveRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

 
        <div className="flex justify-center items-center gap-2 mt-10">
          {blogs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx 
                  ? "w-6 h-1.5 bg-[#1A2B3B]" 
                  : "w-1.5 h-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyWithConfidence;