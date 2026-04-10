import Ratings from './Ratings';
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import DetailCard from './DetailCard';
import { HiOutlineMail } from "react-icons/hi";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaCheckCircle } from 'react-icons/fa';

function Cloudly() {
  const reviews = [
    {
      name: "Jhon William",
      role: "Web Designer",
      avatar: "/albert.png",
      title: "Good ole' Days Hometown Credit Union Service",
      comment: "Unbeatable customer service on every visit. This branch brings back memories of the 'good ole' days when hometown Credit Union service was first class.",
      date: "October 15, 2024",
      
    },
    {
      name: "Brooklyn Simmons",
      role: "President of Sales",
      avatar: "/brook.png",
      title: "Seamless Refinancing with Exceptional Service",
      comment: "Fantastic experience from start to finish! The team at Horizon Bank made refinancing our home a breeze. Special thanks to Mark Stevens and Jennifer Carter for their professionalism and attention to detail. We couldn't be happier with the service and will definitely recommend Horizon to all our friends and family",
      date: "October 15, 2024",
      
    },
    {   name: "Jhon William",
      role: "Web Designer",
      avatar: "/simps.png",
      title: "Good ole' Days Hometown Credit Union Service",
      comment: "Unbeatable customer service on every visit. This branch brings back memories of the 'good ole' days when hometown Credit Union service was first class.",
      date: "October 15, 2024",
      
    },
    {
      name: "Brooklyn Simmons",
      role: "President of Sales",
      avatar: "/albert.png",
      title: "Seamless Refinancing with Exceptional Service",
      comment: "Fantastic experience from start to finish! The team at Horizon Bank made refinancing our home a breeze. Special thanks to Mark Stevens...",
      date: "October 15, 2024",
      
    }
  ];

const cloudlyData = [
  {
    logo: "/Cloudy-logo.png", 
    name: "Cloudly",
    rating: 4.8,
  },
  {
    logo: "/cirrcle.png", 
    name: "Camera",
    rating: 4.8,
  },
  {
    logo: "/circular.png", 
    name: "Cloudly",
    rating: 4.8,
  },
];
  return (
    <div className='bg-[url("/default.png")] flex flex-col items-center pt-32 md:pt-45 px-6 lg:px-20 xl:px-45'>
   
      <div className='bg-[#FFFFFF] w-full border border-gray-200 mb-10 rounded-2xl px-6 md:px-10 py-8 shadow-[5px_10px_30px_rgba(23,37,63,0.08)] flex  justify-between items-center gap-6 flex-col md:flex-row'>
        <div className='flex items-center gap-8 flex-col sm:flex-row'>
          <div className='bg-[#04DA8D] rounded-xl px-9 py-10 md:px-7 md:py-7 lg:px-9 lg:py-9 flex items-center justify-center shrink-0'>
            <Image src="/wh.png" alt="click" height={70} width={106} className='w-26.5 h-17.5 object-contain' />
          </div>
          <div>
            <p className='text-[#17253F] font-semibold text-2xl md:text-3xl'>Cloudly</p>
            <p className='font-normal text-[16px] text-[#000000] mb-2 flex items-center gap-2'>
              4.9/5.0 <span className='opacity-50'>(7891)</span>
              <span className='w-1 h-1 rounded-full bg-[#585F6D]'></span>
              <span className='text-[16px]'>Excellent</span>
            </p>
            <Ratings starStyle='text-[#FFFFFF] bg-[#00B57A] w-8 h-8 p-1'/>
            <div className='rounded-full bg-[#E7EEFA] px-4 py-1.5 mt-3 flex gap-2 items-center w-fit'>
              <Image src="/badge.png" alt="verify" height={20} width={20}/>
              <p className='text-[14px] text-[#17253F]'>Verified Company</p>
            </div>
          </div>
        </div>

        <div className='border border-blue-600 bg-white rounded-3xl p-6 md:p-4 lg:p-6 flex justify-between items-center gap-10 w-31 '>
          <div>
            <p className='text-blue-600 text-[16px] font-semibold flex gap-1 items-center '><CiLink className='w-6 h-6'/>www.Cloudly.com</p>
            <p className='text-gray-500 text-sm'>Visit this website</p>
          </div>
          <FaArrowRight size={14} className='text-blue-600' />
        </div>
      </div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-6">
        

        <div className="w-[68%] ">
       
          <div className='border border-[#E1E3F6] rounded-2xl bg-white w-full flex items-center justify-between h-16 px-4 shadow-sm mb-8'>
            <div className='flex items-center gap-3 h-12'>
              <div className="w-10 h-10 rounded-4xl bg-gray-100 overflow-hidden shrink-0">
                <Image src="/half.png" alt="user" height={40} width={40} className='w-full h-full object-cover' />
              </div>
              <input 
                className='outline-none w-full md:text-base text-sm placeholder:text-gray-400' 
                placeholder='Write a review'
              />
            </div>
            <div className='flex items-center gap-1'>
               <Ratings starStyle='text-white bg-[#00B57A] sm:w-8 sm:h-8 sm:p-1 p-0.5 w-4 h-4 opacity-30 cursor-pointer hover:opacity-100 transition-opacity'/>
            </div>
          </div>

      
          <div className="space-y-6">
            {reviews.map((rev, index) => (
              <DetailCard key={index} {...rev} />
            ))}
          </div>
        </div>


        <div className="w-[30%] ">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-bold text-xl  mb-4">About Cloudly</h3>
            <p className=" text-[15px] leading-relaxed mb-6">
We're on a mission at Cloudly to do good for Southeast Texas by helping our members achieve their hopes and dreams. We believe you matter most and deserve 5-star service.            </p>
            <div className="space-y-4">
              <h4 className="font-bold ">Contact Info</h4>
              <div className="text-sm flex flex-col gap-2">
                <p className="flex items-center gap-2"><CiPhone className='text-[#292D32] w-6 h-6'/> (629) 555-0129</p>
                <p className="flex items-center gap-2"><HiOutlineMail  className='text-[#292D32] w-6 h-6'/> debbie.baker@example.com</p>
                <p className="flex items-center gap-2"><CiLocationOn  className='text-[#292D32] w-6 h-6 font'/> 2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
              </div>
            </div>
          </div>

         <div className="rounded-2xl  pb-6 sm:pr-10 md:pr-6 lg:pr-10 pr-6  pl-6 mt-4 border bg-white border-gray-100 shadow-sm">

      <h3 className="text-[#101828] font-bold text-xl leading-[1.3] mb-3 mt-6">
        People who looked at this company also looked at:
      </h3>

      <div className="space-y-6">
        {cloudlyData.map((data, index) => (
      
          <div key={index} className="flex items-center gap-4 mt-3">
         
            <div className=" w-20 h-20 bg-[#04DA8D] flex justify-center px-6 pt-5 pb-6 rounded-2xl ">
              <Image
                src={data.logo}
                alt="logo"
           width={49}
           height={32}
              />
            </div>

          
            <div className="grow">
         
              <h4 className="text-[#101828] font-bold text-lg mb-1">
                {data.name}
              </h4>

          
              <div className="flex items-center gap-1.5 mb-2">
               
               
            
                 <Ratings starStyle='text-white bg-[#00B57A] w-6 h-6 p-0.5 '/>
                <span className="text-sm font-semibold text-gray-500">
                  {data.rating.toFixed(1)}
                </span>
              </div>

             
              <div className="flex items-center gap-1.5 text-[#101828] text-sm">
                <FaCheckCircle className="text-[#00B57A]" />
                <span className="font-medium">Asking for reviews</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>

      </div>
    </div>
  )
}

export default Cloudly;