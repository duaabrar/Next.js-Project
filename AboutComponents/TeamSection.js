"use client";
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: "Team Member 1", image: "Robert.png" },
    { id: 2, name: "Team Member 2", image: "Selina.png" },
    { id: 3, name: "Team Member 3", image: "Lena.png" },
    { id: 4, name: "Team Member 4", image: "nephew.png" },
    { id: 5, name: "Team Member 5", image: "groot.png" },
    { id: 6, name: "Team Member 6", image: "Withagen.png" },
    { id: 7, name: "Team Member 7", image: "Mogheez.png" }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100"> 
      {/* border-b border-gray-100 adds the light border at the end */}
      
      <div className="max-w-7xl mx-auto text-center px-6 md:px-20">
        <h2 className="text-3xl md:text-[36px] font-bold text-black mb-12">
          Trusty Feedback’s Team
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of images */}
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group relative overflow-hidden rounded-[20px] h-[350px] w-[280px] flex-shrink-0 mx-3 cursor-pointer"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {teamMembers.map((member) => (
            <div 
              key={`dup-${member.id}`} 
              className="group relative overflow-hidden rounded-[20px] h-[350px] w-[280px] flex-shrink-0 mx-3 cursor-pointer"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tailwind Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;