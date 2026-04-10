"use client";
import React from 'react';
import { ArrowRight, MoveRight } from 'lucide-react'; 

const BlogSection = () => {
  return (
    <section className="w-full bg-white font-sans overflow-hidden">
      
      
      <div className="pt-10 pb-16 px-4 md:px-10 lg:px-20 text-center relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F0FDF4] rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F0F9FF] rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="flex justify-center items-center gap-1 text-sm mb-6">
          <span className="text-gray-400">Homepage</span>
          <span className="text-gray-800 font-bold px-1">&gt;</span>
          <span className="text-gray-800 font-medium">Blogs</span>
        </div>

        <h1 className="text-[#1A2B3B] text-3xl md:text-5xl lg:text-[50px] font-bold max-w-4xl mx-auto leading-tight">
          Fresh Perspectives & Expert Advice
        </h1>
      </div>

      
      <div className="px-4 md:px-10 lg:px-20 pb-20">
        
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-[#1A2B3B] text-3xl md:text-4xl font-bold">Trends in Trust</h2>
          <button className="flex items-center gap-2 px-6 py-2 border border-[#00D084] text-black rounded-full font-medium hover:bg-[#00D084] hover:text-white transition-all group">
            See More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          
          <div className="bg-[#F3F7FA] rounded-[32px] overflow-hidden p-6 flex flex-col h-full">
            <div className="rounded-2xl overflow-hidden mb-6 h-[300px]">
              <img 
                src="/Rectangle1a.png" 
                alt="Feature" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-white rounded-full text-xs font-medium text-gray-500 shadow-sm">
                Trends In Trust
              </span>
              <h3 className="text-[#1A2B3B] text-2xl font-bold leading-snug">
                Quarterly bug fixes and feature releases
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                At Trustpilot we're committed to continually improving our platform to better serve your needs. As part of our wider strategy to ensure transparency...
              </p>
              <button className="flex items-center gap-2 text-[#1A2B3B] font-bold text-sm hover:underline pt-2">
                Read Article <MoveRight size={16} />
              </button>
            </div>
          </div>

          
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Romance scams: Spot the signs",
                img: "/Rectangle1b.png",
                desc: "The prevalence of influencers in our daily lives means we see them everywhere.",
                link: "/SingleBlogPageMy" 
              },
              {
                title: "Holiday hoaxes: How scammers take advantage of the holiday.",
                img: "/Rectangle1c.png",
                desc: "The prevalence of influencers in our daily lives means we see them everywhere.",
                link: "#"
              },
              {
                title: "Gift card scams: What to look out for and how to avoid them",
                img: "/Rectangle1d.png",
                desc: "The prevalence of influencers in our daily lives means we see them everywhere.",
                link: "#"
              }
            ].map((blog, idx) => (
              <div key={idx} className="bg-[#F3F7FA] rounded-[28px] p-4 flex items-center gap-5 group hover:shadow-md transition-shadow">
                <div className="w-32 h-32 md:w-40 md:h-32 shrink-0 rounded-2xl overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[#1A2B3B] font-bold text-lg leading-tight group-hover:text-[#00D084] transition-colors">
                    {blog.title}
                  </h4>
                  <p className="text-gray-400 text-xs line-clamp-2">
                    {blog.desc}
                  </p>
                  
                  
                  <a 
                    href={blog.link} 
                    className="flex items-center gap-2 text-[#1A2B3B] font-bold text-xs pt-1 hover:underline cursor-pointer"
                  >
                    Read Article <MoveRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;