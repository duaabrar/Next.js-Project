import React from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { SlLike } from "react-icons/sl";
import { IoShareOutline } from "react-icons/io5";
import Ratings from './Ratings';

const DetailCard = ({ name, role, avatar, title, comment, date, }) => {
  return (
    <div className="bg-[#EFF3F7] border-b border-gray-100 pb-8 mb-8 p-4 rounded-xl">

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3 items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-[#000000] text-base leading-tight">{name}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
    
                 <Ratings starStyle='text-white bg-[#00B57A] sm:w-6 sm:h-6 p-0.5 h-4 w-4 '/>
      </div>


      <div className="space-y-3">
        <h5 className="font-bold text-[#000000] text-lg">"{title}"</h5>
        <p className="text-[#000000] text-[15px] leading-relaxed">
          {comment}
        </p>
        <p className="text-gray-500 text-sm pt-2">
          <span className="font-semibold text-gray-700">Date of experience:</span> {date}
        </p>
      </div>
<div className='border border-gray-200 w-full mt-5 mb-5'/>
      <div className="pt-6 flex gap-6 border-t border-gray-100 ">
        <button className="flex items-center gap-2 text-[#17253F] hover:opacity-70 transition-opacity text-sm font-medium">
          <SlLike size={18} />
          Useful
        </button>
        <button className="flex items-center gap-2 text-[#17253F] hover:opacity-70 transition-opacity text-sm font-medium">
          <IoShareOutline size={20} />
          Share
        </button>
      </div>
    </div>
  );
};

export default DetailCard;