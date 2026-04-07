import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-center">
      {/* Header Text */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Trusty Feedback connects people with <br className="hidden md:block" /> great local businesses.
        </h2>
      </div>
    {/* Upper Text Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 md:w-1/2 leading-tight">
          Meet Our Founder & CEO
        </h2>
        <p className="text-gray-600 text-sm md:text-base md:w-1/2 leading-relaxed">
          Our vision is to become the universal symbol of trust, empowering consumers to make 
          confident, informed buying decisions while allowing businesses to credibly signal 
          the quality of their services and to gain actionable insights to improve them.
        </p>
      </div>

      {/* Main Image Card */}
      <div className=" relative">
        <div className="rounded-[25px] overflow-hidden">
          <img 
            src="/uncle.png" // Apni picture ka path yahan lagayein
            alt="Founder and CEO" 
            className="w-[1170px] h-[489.4206px] "
          />
        </div>
      </div>

      {/* Bottom Green Section */}
      <div className="max-w-7xl mx-auto bg-[#004D31] rounded-[40px] overflow-hidden flex flex-col md:flex-row min-h-[450px]">
        
        {/* Left Side: Circular Graphic Area */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center p-12 overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          {/* Animated Circles Placeholder */}
          <div className="absolute border border-white/20 rounded-full w-64 h-64"></div>
          <div className="absolute border border-white/10 rounded-full w-48 h-48"></div>
          
          <div className="z-10 text-center text-white">
            <p className="text-xs tracking-[0.3em] font-light opacity-80 mb-2 uppercase">Your</p>
            <h4 className="text-3xl font-bold tracking-wider uppercase">Business</h4>
          </div>

          {/* Small Floating Avatars (Positioning logic) */}
          <div className="absolute top-20 left-1/4 w-10 h-10 bg-gray-400 rounded-full border-2 border-white shadow-lg"></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-gray-400 rounded-full border-2 border-white shadow-lg"></div>
          <div className="absolute top-1/2 right-10 w-10 h-10 bg-gray-400 rounded-full border-2 border-white shadow-lg"></div>
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            We're Trustyfeedback, Committed to Growing Your Business!
          </h3>
          <p className="text-gray-200 text-sm md:text-base mb-8 opacity-90 leading-relaxed">
            At Trustyfeedback, our mission is to help your business thrive through genuine, 
            trusted reviews from real customers. We connect you with authentic feedback 
            that builds credibility, drives improvement, and enhances your reputation.
          </p>
          <button className="bg-[#ADFF2F] hover:bg-white text-[#004D31] font-bold py-4 px-10 rounded-full w-fit transition-all duration-300 shadow-lg">
            Get Started
          </button>
        </div>
      
</div>
      
    </section>
  );
};

export default AboutUs;