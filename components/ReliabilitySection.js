import React from 'react';

const ReliabilitySection = () => {
  return (
    <section className="relative w-full px-4 md:px-10 lg:px-20 -mt-10 md:-mt-20 lg:-mt-32 pb-10 z-20"> {/* Negative margin for overlay and high z-index */}
      <div className="max-w-[1170px] h-[416.3399963378906px] mx-auto bg-[#004D31] rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center relative p-12 md:p-16 lg:p-20 shadow-xl"> {/* Reduced padding and added shadow for depth */}
        
      
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[38px] lg:w-[554px] font-bold leading-tight">
            We Provide Trusty Feedback You Can Rely On
          </h2>
          
          <p className="lg:w-[554px] text-white/80  lg:text-[16px] md:text-base">
            We're a review platform accessible to all. Our vision is to become a 
            global symbol of trust, empowering consumers to shop confidently 
            while helping businesses grow and improve.
          </p>

          <button className="bg-[#00D084] text-[#004D31] font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 mt-4">
            More About Us
          </button>
        </div>

      
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-[450px]">
            
            <img 
              src="/Young-man.png" 
              alt="Trusty Feedback User" 
              className="relative z-10 object-contain left-30 -bottom-3" 
            />
            
         
            <div className="absolute top-10 left-1 hidden lg:block z-10">
               <img src="/review.png" alt="How was your order?" /> 
            </div>

           
            <div className="absolute bottom-35 left-7 hidden lg:block z-10">
               <img src="/Vector (6).png" alt="customer rating" /> 
            </div> 
            
           
            <div className="absolute top-27 -right-10 hidden lg:block z-10">
               <img src="/Rating.png" alt="detailed review" /> 
            </div>
          </div>
        </div>

   
        <div className="absolute top-10 right-5 p-10 opacity-10">
          <svg width="350" height="350" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="white"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ReliabilitySection;