"use client";
import React from 'react';

const AboutUs = () => {
  return (
    
    <section className="bg-white py-12 md:py-16 px-4 md:px-0 flex flex-col items-center overflow-x-hidden">

      <div className="flex items-center gap-1 md:gap-3 py-4 px-2 md:px-4 lg:px-10 font-sans">

  <span className="text-[#8B93A1] text-[15px] md:text-[15px] font-light">
    Homepage
  </span>


  <span className="text-[#1A2B3B] text-[15px] md:text-[16px] font-bold px-1">
    &gt;
  </span>


  <span className="text-[#1A2B3B] text-[15px] md:text-[16px] font-semibold">
    About Us
  </span>
</div>
      <div className="max-w-4xl mx-auto px-6 mb-10 md:mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
          Trusty Feedback connects people with <br className="hidden md:block" /> great local businesses.
        </h2>
      </div>

      {/* Upper Text Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start text-left gap-6 md:gap-8 mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 md:w-1/2 leading-tight">
          Meet Our Founder & CEO
        </h2>
        <p className="text-gray-600 text-sm md:text-base md:w-1/2 leading-relaxed">
          Our vision is to become the universal symbol of trust, empowering consumers to make 
          confident, informed buying decisions while allowing businesses to credibly signal 
          the quality of their services and to gain actionable insights to improve them.
        </p>
      </div>

  
      <div className="w-full max-w-[1170px] px-6 z-20 relative">
        <div className="rounded-[20px] md:rounded-[25px] overflow-hidden shadow-2xl">
          <img 
            src="/uncle.png" 
            alt="Founder and CEO" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

  
      <div 
        className="w-full max-w-[1440px] bg-[#004D31] rounded-[25px] md:rounded-[40px] overflow-hidden 
                   flex flex-col md:flex-row items-center 
                   -mt-[100px] sm:-mt-[150px] md:-mt-[250px] 
                   pt-[120px] sm:pt-[180px] md:pt-[280px] pb-12 md:pb-0"
        style={{ minHeight: 'auto', height: 'auto' }} 
      >
     
        <div className="hidden lg:block" style={{ height: '635.95px' }}></div>

        {/* Left Side: Circle Images */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-8">
          <img 
            src="/Circle-Images.png" 
            alt="Business Ecosystem" 
            className="w-[80%] md:max-w-[80%] h-auto"
          />
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full md:w-1/2   md:pr-20 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white">
          <h3 className="text-2xl md:text-[42px] font-bold leading-tight mb-4">
            We're Trustyfeedback, Committed to Growing Your Business!
          </h3>
          <p className="text-gray-200 text-sm md:text-[16px] mb-6 opacity-90 leading-relaxed max-w-[500px]">
            At Trustyfeedback, our mission is to help your business thrive through genuine, 
            trusted reviews from real customers. We connect you with authentic feedback 
            that builds credibility, drives improvement, and enhances your reputation.
          </p>
          <button className="bg-[#04DA8D] hover:bg-white text-[#004D31] font-bold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all duration-300 shadow-md">
            Get Started
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default AboutUs;