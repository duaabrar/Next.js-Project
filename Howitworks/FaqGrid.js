import React from 'react';

export default function FaqGrid() {
  const faqData = [
    {
      title: "Being open is in our DNA",
      desc: "Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening or moderating what consumers actually read.",
      icon: "/Electronics.png" 
    },
    {
      title: "Consumers own their reviews",
      desc: "We consider reviews to be user-generated content owned by their author, and they are the only one who can edit or permanently delete their reviews. This can be done through their user account. Unless a user permanently deletes their individual reviews.",
      icon: "/Electronics.png"
    },
    {
      title: "Fighting fake reviews",
      desc: "Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening.",
      icon: "/Electronics.png"
    },
    {
      title: "Flagging reviews",
      desc: "Trustpilot was created in 2007 as an independent, open platform that sits between businesses and consumers, and empowers both by enabling collaboration. We allow anyone to post a review, which prevents businesses from pre-screening.",
      icon: "/Electronics.png"
    }
  ];

  return (
    <section className="bg-[#E7F4EF] py-12 md:py-20 px-4 sm:px-6 flex justify-center">
      {/* - grid-cols-1: Mobile par 1 column
          - sm:grid-cols-2: Tablet aur Desktop par 2 columns
          - gap-4: Mobile par thoda kam gap
          - md:gap-6: Tablet/Desktop par zyada gap
      */}
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 border border-gray-100 p-2 rounded-xl bg-white">
                <img 
                  src={item.icon} 
                  alt="icon" 
                  className="w-6 h-6 md:w-8 md:h-8 object-contain" 
                />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-bold text-[#011B32] leading-tight">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#516373] text-[14px] md:text-[15px] leading-[1.6] md:leading-[1.7]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}