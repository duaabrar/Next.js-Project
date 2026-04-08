"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Elizabeth Olsen",
      image: "/Elisabeth.png",
      rating: "5/5",
      text: "Trustyfeedback has completely transformed our business! The reviews are genuine, and the insights have helped us grow immensely. Thanks to Trustyfeedback, we've built stronger customer relationships and gained valuable feedback. Highly recommend!"
    },
    {
      id: 2,
      name: "Hayley Marshall",
      image: "/hay.png",
      rating: "5/5",
      text: "Trustyfeedback gave us the tools we needed to improve. We've seen a noticeable boost in our reputation! This platform makes collecting and responding to reviews seamless. Our customers love the engagement, and so do we!"
    },
    {
      id: 3,
      name: "Elizabeth Olsen",
      image: "/Elisabeth.png",
      rating: "5/5",
      text: "Trustyfeedback has completely transformed our business! The reviews are genuine, and the insights have helped us grow immensely."
    }
  ];

  return (
    <section className="px-6 md:px-20 bg-white pb-16">
  
      <div className="max-w-7xl mx-auto bg-[#E7F4EF] rounded-[30px] md:rounded-[40px] py-12 md:py-16 px-6 md:px-12 relative overflow-hidden -mt-25 shadow-xl border border-white/20">
        
        <h2 className="text-2xl md:text-[36px] font-bold text-[#1A2B3B] text-center pb-10">
          What people say about Trusty Feedback
        </h2>

        <div className="relative z-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
            className="testimonial-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="pt-12 pb-6">
                <div className="relative">
                  {/* Fixed Floating Badge: Added w-fit and adjusted -top-6 */}
                  <div className="absolute -top-9 left-6 right-auto flex w-fit items-center gap-4 bg-white rounded-full px-5 py-2.5 shadow-lg z-20 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <img src={review.image} alt={review.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
                      <span className="font-bold text-gray-800 text-xs md:text-sm whitespace-nowrap">{review.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs md:text-sm font-medium border-l pl-3 border-gray-100">
                      <span className="text-gray-500">{review.rating}</span>
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#00D690] text-[#00D690]" />
                    </div>
                  </div>

                  {/* Review Card */}
                  <div className="bg-white rounded-[24px] p-6 md:p-8 pt-12 md:pt-14 min-h-[240px] flex flex-col justify-between relative shadow-sm border border-gray-50">
                    <Quote className="absolute top-4 right-6 w-6 h-6 text-[#00D690] opacity-20" fill="#00D690" />
                    
                    <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mt-4 italic relative z-10">
                      "{review.text}"
                    </p>

                    <div className="flex justify-end mt-4">
                      <Quote className="w-6 h-6 text-[#00D690] opacity-20 rotate-180" fill="#00D690" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center items-center gap-2 mt-8"></div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #9ca3af;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 10px;
          background: #1A2B3B !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;