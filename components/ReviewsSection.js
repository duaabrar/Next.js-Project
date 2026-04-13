"use client";
import React from 'react';
import { Star } from 'lucide-react';
import Marquee from "react-fast-marquee";

const ReviewCard = ({ companyName, companyUrl, reviewText, userImage, userName, userTitle, timeAgo }) => {
  return (
    <div className="bg-[#EFF3F7] rounded-[24px] p-6 shadow-sm border border-gray-50 flex flex-col justify-between h-[320px] w-[350px] mx-3 hover:shadow-md transition-shadow duration-300">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-gray-100">
             <div className="w-10 h-10 bg-gray-100 rounded-lg"></div>
          </div>
          <div>
            <h4 className="font-bold text-[#17253F] text-[16px] leading-tight">{companyName}</h4>
            <p className="text-gray-400 text-[12px]">{companyUrl}</p>
          </div>
          <div className="ml-auto flex items-center justify-center w-5 h-5 bg-[#00D084] rounded-full shrink-0">
             <svg width="8" height="6" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex bg-[#00B67A] p-1 rounded-[3px] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill="white" color="white" />
            ))}
          </div>
          <span className="text-[13px] font-bold text-[#17253F]">5.0</span>
        </div>

        <p className="text-gray-600 text-[13px] leading-relaxed mb-4 line-clamp-3">
          {reviewText}
        </p>
        
        <button className="text-[#00D084] text-[12px] font-bold underline mb-4 block">
          Read Review →
        </button>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <img 
          src={userImage} 
          alt={userName} 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <h5 className="text-[#17253F] font-bold text-[14px] leading-tight">{userName}</h5>
          <p className="text-gray-400 text-[11px]">{userTitle} <span className="text-[#E9B62F]">★</span></p>
        </div>
        <span className="text-gray-400 text-[10px] whitespace-nowrap">{timeAgo}</span>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const baseReviews = [
    { id: 1, userName: "Brooklyn Simmons", userImage: "/A.png", companyName: "Tech Wizards" },
    { id: 2, userName: "Floyd Miles", userImage: "/B.png", companyName: "Tech Wizards" },
    { id: 3, userName: "Guy Hawkins", userImage: "/C.png", companyName: "Tech Wizards" },
    { id: 4, userName: "Jerome Bell", userImage: "/D.png", companyName: "Tech Wizards" },
    { id: 5, userName: "Arlene McCoy", userImage: "/E.png", companyName: "Tech Wizards" },
    { id: 6, userName: "Ralph Edwards", userImage: "/F.png", companyName: "Tech Wizards" },
    { id: 7, userName: "Courtney Henry", userImage: "/G.png", companyName: "Tech Wizards" },
    { id: 8, userName: "Theresa Webb", userImage: "/D.png", companyName: "Tech Wizards" },
  ].map(review => ({
    ...review,
    companyUrl: "techwizards.com",
    userTitle: "Top Contributor",
    timeAgo: "15 mins ago",
    reviewText: "Had a great experience with Tech Wizards when my laptop crashed. They were able to recover all my files and had my computer running like new again."
  }));

  // Masla hal karne ke liye list ko double kar rahe hain
  const allReviews = [...baseReviews, ...baseReviews];

  const firstRow = allReviews.slice(0, 8);
  const secondRow = allReviews.slice(8, 16);

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto mb-16 px-4">
        <h2 className="text-center text-[#17253F] text-3xl md:text-[40px] font-bold">
          Discover What People Like and Dislike
        </h2>
      </div>

      <div className="mb-6">
        <Marquee 
          speed={50} 
          gradient={false} // Gap khatam karne ke liye gradient false karke check karein
          pauseOnHover={true}
        >
          {firstRow.map((review, index) => (
            <ReviewCard key={`row1-${review.id}-${index}`} {...review} />
          ))}
        </Marquee>
      </div>

      <div>
        <Marquee 
          speed={50} 
          direction="right" 
          gradient={false}
          pauseOnHover={true}
        >
          {secondRow.map((review, index) => (
            <ReviewCard key={`row2-${review.id}-${index}`} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ReviewsSection;