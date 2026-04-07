import React from 'react';
import BusinessCard from './BusinessCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BusinessSections = () => {
  const travelCompanies = [
    { title: "Trip Insure", website: "www.businesstoolkit.com", logoText: "Techlify", logoIcon: "/Techlify.png", rating: "4.8", reviews: "150" },
    { title: "The Business Kit", website: "www.businesstoolkit.com", logoText: "Restaurant", logoIcon: "/Res.png", rating: "4.8", reviews: "150" },
    { title: "Cafe Nostra Cosa", website: "www.businesstoolkit.com", logoText: "Techlify", logoIcon: "/Techlify.png", rating: "4.8", reviews: "150" },
    { title: "SadaPay Banking", website: "www.businesstoolkit.com", logoText: "Restaurant", logoIcon: "/Res.png", rating: "4.8", reviews: "150" },
    { title: "Extra Card", website: "www.businesstoolkit.com", logoText: "Techlify", logoIcon: "/Techlify.png", rating: "4.8", reviews: "150" },
  ];

  const bankCompanies = [
    { title: "Trip Insure", website: "www.businesstoolkit.com", logoText: "Codelify", logoIcon: "/Codefy.png", rating: "4.8", reviews: "150" },
    { title: "The Business Kit", website: "www.businesstoolkit.com", logoText: "Techlify", logoIcon: "/Techlify.png", rating: "4.8", reviews: "150" },
    { title: "Cafe Nostra Cosa", website: "www.businesstoolkit.com", logoText: "Codelify", logoIcon: "/Codefy.png", rating: "4.8", reviews: "150" },
    { title: "SadaPay Banking", website: "www.businesstoolkit.com", logoText: "Techlify", logoIcon: "/Techlify.png", rating: "4.8", reviews: "150" },
  ];

  return (
    <section className="w-full bg-[#E7F4EF] h-[1178.5621337890625px] py-16 px-4 md:px-10 lg:px-20 space-y-20 overflow-hidden">
      
      {/* Travel Companies - CAROUSEL */}
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#17253F]">
            Best in Travel Insurance Company
          </h2>
          
          {/* Buttons with unique classes */}
          <div className="flex gap-3">
            <button className="travel-prev w-10 h-10 rounded-full bg-[#00D084] flex items-center justify-center text-white hover:opacity-80 transition-all cursor-pointer z-10">
              <span className="text-xl">‹</span>
            </button>
            <button className="travel-next w-10 h-10 rounded-full bg-[#17253F] flex items-center justify-center text-white hover:opacity-80 transition-all cursor-pointer z-10">
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          // Navigation link properly
          navigation={{
            prevEl: '.travel-prev',
            nextEl: '.travel-next',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper !overflow-visible" // Overflow visible taaki shadow/cards cut na hon
        >
          {travelCompanies.map((item, index) => (
            <SwiperSlide key={index}>
              <BusinessCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bank Companies - MARQUEE */}
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#17253F]">
            Top Verified Banks
          </h2>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee gap-6 py-4">
            {/* Double the array for seamless scrolling */}
            {[...bankCompanies, ...bankCompanies].map((item, index) => (
              <div key={index} className="w-[280px] md:w-[320px] flex-shrink-0">
                <BusinessCard {...item} />
              </div>
            ))}
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 12px)); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
              display: flex;
              width: max-content;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}} />
        </div>
      </div>

    </section>
  );
};

export default BusinessSections;