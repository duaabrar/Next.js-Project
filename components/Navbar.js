"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('business');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 flex items-center h-[70px] md:h-[80px] justify-between">
        
        {/* 1. LOGO */}
        <div className="flex-shrink-0">
          <Image 
            src="/Logo.png"      
            alt="Trusty Feedback" 
            width={168} 
            height={51} 
            className="w-[120px] md:w-[140px] xl:w-[168px]"
            priority
          />
        </div>

    
        <div className="flex items-center gap-4 lg:gap-6 xl:gap-10">
          
          {/* Main Links - Hidden on smaller desktops/tablets to avoid crowding */}
          <div className="hidden xl:flex items-center gap-6 text-[15px] xl:text-[16px] text-[#17253F] font-normal whitespace-nowrap">
            <Link href="/WriteReviewPage" className="hover:text-green-600 transition-colors">Write a review</Link>
            <Link href="/Howitworks" className="hover:text-green-600 transition-colors">How it Works</Link>
            <Link href="/about" className="hover:text-green-600 transition-colors">About Us</Link>
            <Link href="/blog" className="hover:text-green-600 transition-colors">Blog</Link>
          </div>

          {/* Action Items */}
          <div className="flex items-center gap-3 md:gap-4 xl:gap-6">
            <Link href="/login" className="hidden lg:block font-semibold text-[15px] xl:text-[16px] text-[#17253F] hover:text-black">
              Log In
            </Link>

            {/* Pill Toggle - Adjusted for Tablet & Mobile */}
            <div className="hidden md:flex items-center border border-[#E5E7EB] rounded-full p-1 bg-white w-[220px] lg:w-[260px] xl:w-[353px] h-[44px] lg:h-[52px] xl:h-[60px] relative">
              <button 
                onClick={() => setActiveTab('business')}
                className={`flex-1 h-full rounded-full text-[11px] lg:text-[13px] xl:text-[16px] font-semibold transition-all duration-300 z-10 ${
                  activeTab === 'business' 
                  ? 'bg-[#17253F] text-white shadow-sm' 
                  : 'text-[#17253F]'
                }`}
              >
                For Businesses
              </button>

              <button 
                onClick={() => setActiveTab('consumer')}
                className={`flex-1 h-full rounded-full text-[11px] lg:text-[13px] xl:text-[16px] font-semibold transition-all duration-300 z-10 ${
                  activeTab === 'consumer' 
                  ? 'bg-[#17253F] text-white shadow-sm' 
                  : 'text-[#17253F]'
                }`}
              >
                For Consumer
              </button>
            </div>

            {/* Hamburger Button - Visible on both Tablet (lg) and Mobile */}
            <button 
              className="xl:hidden p-2 text-[#17253F] hover:bg-gray-50 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden absolute top-[70px] md:top-[80px] left-0 w-full bg-white border-b shadow-2xl z-40 py-8 px-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6 text-[18px] font-medium text-[#17253F] max-w-[600px] mx-auto">
            {/* Tablet/Mobile Pill Toggle (Show here if hidden above) */}
            <div className="flex md:hidden items-center border border-[#E5E7EB] rounded-full p-1 bg-gray-50 h-[50px] mb-4">
              <button onClick={() => setActiveTab('business')} className={`flex-1 h-full rounded-full text-sm font-bold ${activeTab === 'business' ? 'bg-[#17253F] text-white' : ''}`}>Businesses</button>
              <button onClick={() => setActiveTab('consumer')} className={`flex-1 h-full rounded-full text-sm font-bold ${activeTab === 'consumer' ? 'bg-[#17253F] text-white' : ''}`}>Consumer</button>
            </div>

            <Link href="/WriteReviewPage" onClick={() => setIsOpen(false)} className="hover:text-green-600 transition-colors border-b border-gray-50 pb-3">Write a review</Link>
            <Link href="/Howitworks" onClick={() => setIsOpen(false)} className="hover:text-green-600 transition-colors border-b border-gray-50 pb-3">How it Works</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-green-600 transition-colors border-b border-gray-50 pb-3">About Us</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-green-600 transition-colors border-b border-gray-50 pb-3">Blog</Link>
            <div className="pt-2 flex flex-col gap-4">
               <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-4 rounded-xl bg-gray-100 font-bold">Log In</Link>
          
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;