"use client";
import React from 'react';
import { Star } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

const BusinessCard = ({ title, website, logoIcon, logoText, rating, reviews, detailsLink }) => {
  return (
    <div className="w-full max-w-[300px] border border-gray-100 rounded-[32px] p-5 bg-[#EFF3F7] shadow-sm hover:shadow-md transition-all duration-300">
      
   
      <div className="bg-white rounded-[24px] h-[130px] flex items-center justify-center mb-6 overflow-hidden">
        <div className="flex items-center gap-2">
          <Image 
            src={logoIcon} 
            alt={`${logoText} logo`} 
            width={40} 
            height={40}
            className="object-contain"
          />

    
          <span className="text-[26px] font-bold text-[#17253F] tracking-tight">
            {logoText}
          </span>
        </div>
      </div>

  
      <div className="px-1 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-[19px] text-[#17253F] truncate">{title}</h3>
          
          <div className="w-5 h-5 bg-[#00D084] rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M1 4L3.5 6.5L9 1" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm -mt-1">{website}</p>

       
        <div className="flex items-center gap-2 py-1">
          <div className="flex bg-[#00B67A] p-1 rounded-[3px] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} fill="white" color="white" />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-[#17253F]">{rating}/5.0</span>
            <span className="text-[11px] text-gray-400">({reviews})</span>
          </div>
        </div>

       
        {detailsLink ? (
          <Link href={detailsLink} className="inline-flex items-center gap-2 text-[#17253F] text-[15px] font-bold mt-4 hover:text-[#00D084] transition-colors group">
            View Details 
            <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
          </Link>
        ) : (
          <button className="flex items-center gap-2 text-[#17253F] text-[15px] font-bold mt-4 hover:text-[#00D084] transition-colors group">
            View Details 
            <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default BusinessCard;