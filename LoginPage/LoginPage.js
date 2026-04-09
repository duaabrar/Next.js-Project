"use client";

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const LoginSection = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans py-12 md:py-20 px-4">
      
      {/* --- HERO TEXT --- */}
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-[#1A2B3B] text-lg md:text-xl font-semibold mb-2">Log In Now</p>
        <h1 className="text-[#1A2B3B] text-[32px] sm:text-[48px] md:text-[64px] font-extrabold tracking-tight leading-[1.1]">
          Read. Write. Discover.
        </h1>
      </div>

      {/* --- MAIN LOGIN CARD --- */}
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row bg-[#F1F5F9] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-sm border border-gray-100">
          
          {/* LEFT GREEN SIDE - Updated for Top Alignment */}
          <div className="lg:w-[48%] bg-[#05442E] p-10 md:p-14 flex flex-col items-start justify-start relative overflow-hidden">
            {/* Text moved to the very top */}
            <h2 className="text-white text-[25px] md:text-[28px] lg:text-[28px] font-bold relative z-10  mb-6">
              Be Part of the 
              Millions Giving 
              Feedback Daily!
            </h2>
            
            {/* Vector Image Placeholder directly under text */}
            <div className="relative z-10">
              <img 
                src="/arrowww.png" 
                alt="Feedback Vector" 
               
              />
            </div>

            {/* Background pattern/overlay */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>

          {/* RIGHT FORM SIDE */}
          <div className="lg:w-[58%] p-8 md:p-14 lg:p-20 bg-[#F1F5F9] flex flex-col justify-center">
            <h3 className="text-[#1A2B3B] text-[24px] md:text-[32px] font-bold text-center mb-10">
              Log in or sign up below
            </h3>

            {/* SOCIAL BUTTONS GRID */}
            <div className="grid grid-cols-3 gap-3 md:gap-5 mb-10">
              {/* Google */}
              <button className="h-[60px] md:h-[80px] bg-white border border-gray-200 rounded-[20px] md:rounded-[24px] flex items-center justify-center hover:shadow-lg transition-all active:scale-95">
                <img src="/google-logo.png" alt="Google" className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              
              {/* Facebook */}
              <button className="h-[60px] md:h-[80px] bg-[#1877F2] rounded-[20px] md:rounded-[24px] flex items-center justify-center hover:shadow-lg transition-all active:scale-95">
                <img src="/fb-logo.png" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert" />
              </button>

              {/* Apple */}
              <button className="h-[60px] md:h-[80px] bg-black rounded-[20px] md:rounded-[24px] flex items-center justify-center hover:shadow-lg transition-all active:scale-95">
                <img src="/apple-logo.png" alt="Apple" className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert" />
              </button>
            </div>

            {/* OR DIVIDER */}
            <div className="relative flex items-center justify-center mb-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <span className="relative px-4 bg-[#F1F5F9] text-gray-400 font-bold text-xs md:text-sm tracking-widest uppercase">
                OR
              </span>
            </div>

            {/* EMAIL FORM */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-3">
                  Enter Email Address<span className="text-red-500 ml-0.5">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="name@gmail.com"
                    className="w-full h-[60px] pl-14 pr-6 bg-white border border-transparent rounded-[20px] md:rounded-[24px] outline-none focus:ring-2 focus:ring-[#1A2B3B]/10 transition-all text-gray-700 placeholder:text-gray-300 shadow-sm"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full h-[60px] bg-[#1A2B3B] text-white rounded-[20px] md:rounded-[24px] font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#121d29] transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98]"
              >
                Continue with email
                <ArrowRight size={22} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginSection;