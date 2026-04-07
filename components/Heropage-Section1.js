'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import BusinessCard from "./BusinessCard";

const cardsData = [
  { id: 1, title: "Trip Insure", website: "www.businesstoolkit.com", rating: "4.9", reviews: "7891", logoIcon: "/Cloudy-logo.png", logoText: "Cloudly" },
  { id: 2, title: "The Business Kit", website: "www.businesstoolkit.com", rating: "4.9", reviews: "7891", logoIcon: "/Camera.png", logoText: "Camera" },
  { id: 3, title: "Cafe Nostra Cosa", website: "www.businesstoolkit.com", rating: "4.9", reviews: "7891", logoIcon: "/Cloudy-logo.png", logoText: "Cloudly" },
  { id: 4, title: "SadaPay Banking", website: "www.businesstoolkit.com", rating: "4.8", reviews: "7891", logoIcon: "/Camera.png", logoText: "Camera" },
];

export default function TopPicks() {
  return (
    <section className="pt-10 pb-20 bg-white px-4 md:px-6 w-full">
      <div className="max-w-[1240px] mx-auto">
        {/* Title Section */}
        <h2 className="text-[36px] md:text-[42px] font-extrabold text-[#17253F] mb-12 text-center">
          Top picks for you
        </h2>
        
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          emulateTouch={true}
         
          renderIndicator={(onClickHandler, isSelected, index) => {
            if (isSelected) {
              return (
                <li className="w-9 h-2.5 bg-[#17253F] rounded-full inline-block mx-1" />
              );
            }
            return (
              <li
                onClick={onClickHandler}
                className="w-2.5 h-2.5 border-2 border-gray-200 rounded-full cursor-pointer hover:bg-gray-100 inline-block mx-1"
                key={index}
                role="button"
                tabIndex={0}
              />
            );
          }}
        >
      
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center pb-12 px-2">
            {cardsData.map((data) => (
              <BusinessCard key={`slide1-${data.id}`} {...data} />
            ))}
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center pb-12 px-2">
            {cardsData.map((data) => (
              <BusinessCard key={`slide2-${data.id}`} {...data} />
            ))}
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center pb-12 px-2">
            {cardsData.map((data) => (
              <BusinessCard key={`slide3-${data.id}`} {...data} />
            ))}
          </div>
        </Carousel>
      </div>

   
      <style jsx global>{`
        .carousel .slide {
          background: transparent !important;
        }
        .carousel .control-dots {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 20px !important;
        }
        /* Mobile pe agar cards stretch ho rahe hon toh ye fix karega */
        .carousel .slide img {
            width: auto !important;
            display: inline-block !important;
        }
      `}</style>
    </section>
  );
}