"use client";
import React from 'react';

export default function NeutralSpaceSection() {
  return (
    <section className="bg-white py-16 md:py-32 px-6 lg:px-20 flex justify-center">

      <div className="max-w-[1280px] w-full flex flex-col md:flex-row items-center gap-12 lg:gap-32">
    
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <h2 className="text-[30px] md:text-[32px] lg:text-[34px] font-semibold text-[#011B32] leading-[1.1] mb-8">
            A neutral space for dialogue <br/>and collaboration
          </h2>
          
        
          <p className="text-[#516373] text-[16px] md:text-[18px] leading-[1.8] mb-10 max-w-[500px]">
            "We're open to all. We believe this is the best way to help <br/> consumers 
            make informed decisions when buying products <br/>and services."
          </p>

   
          <div className="flex flex-col border-l-2 border-[#011B32] pl-4">
            <span className="font-semibold text-[#011B32] text-[16px]">Ben Martin Director of Privacy</span>
            
          </div>
        </div>

   
        <div className="w-full md:w-1/2">
          <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
            <img 
              src="/Radiooo.png" 
              alt="Dialogue and collaboration"
              className="w-full h-full object-cover aspect-[4/3] md:aspect-[5/4]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}