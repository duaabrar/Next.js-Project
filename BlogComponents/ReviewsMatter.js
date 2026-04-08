"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Calendar, MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsMatter = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const blogs = [
    { id: 1, tag: "Review Matters", date: "July 30, 2024", title: "The FTC’s fake reviews ruling and what it means for you", desc: "The prevalence of influencers in our daily lives means we see them everywhere.", image: "/Rectangle2a.png" },
    { id: 2, tag: "Review Matters", date: "July 30, 2024", title: "Voice search optimization: Speak your way to success on search", desc: "The prevalence of influencers in our daily lives means we see them everywhere.", image: "/Rectangle2b.png" },
    { id: 3, tag: "Review Matters", date: "July 30, 2024", title: "Voice search optimization: Speak your way to success on search", desc: "The prevalence of influencers in our daily lives means we see them everywhere.", image: "/Rectangle2c.png" },
    { id: 4, tag: "Review Matters", date: "July 30, 2024", title: "Voice search optimization: Speak your way to success on search", desc: "The prevalence of influencers in our daily lives means we see them everywhere.", image: "/Rectangle1b.png" }
  ];

  // Scroll function for dots and buttons
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.blog-card').offsetWidth + 24; // 24 is gap-6
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  // Update active dot on manual scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.blog-card').offsetWidth + 24;
      const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth);
      if (newIndex !== activeIndex) setActiveIndex(newIndex);
    }
  };

  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 lg:px-20 font-sans relative group">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[#1A2B3B] text-3xl md:text-4xl font-bold">
          Reviews Matter
        </h2>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-3">
          <button 
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={20} className="text-[#1A2B3B]" />
          </button>
          <button 
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === blogs.length - 1}
            className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 disabled:opacity-30 transition-all"
          >
            <ChevronRight size={20} className="text-[#1A2B3B]" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
      >
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="blog-card min-w-[300px] md:min-w-[340px] flex-1 bg-[#F3F7FA] rounded-[32px] p-5 flex flex-col group hover:shadow-lg transition-all"
          >
            {/* Blog Image */}
            <div className="rounded-2xl overflow-hidden mb-5 h-[200px]">
              <img 
                src={blog.image} 
                alt="blog" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Tags & Date */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-4 py-1.5 bg-white rounded-full text-[12px] font-medium text-gray-600 shadow-sm">
                {blog.tag}
              </span>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full text-[12px] font-medium text-gray-600 shadow-sm">
                <Calendar size={14} className="text-gray-400" />
                {blog.date}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <h3 className="text-[#1A2B3B] text-lg font-bold leading-tight line-clamp-2 group-hover:text-[#00D084] transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                {blog.desc}
              </p>
            </div>

            {/* Read More Link */}
            <button className="flex items-center gap-2 text-[#00D084] font-bold text-sm mt-5 group/link">
              Read Article <MoveRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Dots Logic */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {blogs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === idx 
                ? "w-8 h-2 bg-[#1A2B3B]" 
                : "w-2 h-2 border border-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsMatter;