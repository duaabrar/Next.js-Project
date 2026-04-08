"use client";
import React from 'react';

const SingleBlogPage = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* 1. Blog Header Section */}
      <section className="pt-16 pb-10 px-4 max-w-4xl mx-auto text-center">
        <nav className="text-sm text-gray-400 mb-6 flex justify-center gap-2">
          <span>Homepage</span> &gt; <span>Blogs</span> &gt; <span className="text-gray-600">Romance Scams</span>
        </nav>
        
        <h1 className="text-[#1A2B3B] text-3xl md:text-5xl font-extrabold mb-8">
          Romance scams: Spot the signs
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img src="/hay.png" alt="author" className="w-full h-full object-cover" />
            </div>
            <span>Article by: <span className="font-semibold text-gray-700">TrustyFeedback</span></span>
          </div>
          <div>
            Published: <span className="font-semibold text-gray-700">July 30, 2024</span>
          </div>
        </div>
      </section>

      {/* 2. Main Image Section */}
      <section className="px-4 max-w-5xl mx-auto mb-12">
        <div className="rounded-[32px] overflow-hidden shadow-xl h-[300px] md:h-[500px]">
          <img 
            src="/Bluemobile.png" 
            alt="Romance Scam" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Content Section */}
      <section className="px-4 max-w-4xl mx-auto text-[#1A2B3B] leading-relaxed">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to make your day better. We get it. We like to squeeze the most out of every day and we want to help you live your best life too. Whether you're working hard or working out, a night owl or and early bird, staying focused or staying Zen, Boost Patches give your that little extra something. We want you to give yourself a boost into better health, fitness, and mindfulness.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Dive In! SeaQuest Lynchburg</h2>
            <p className="text-gray-600 mb-6">
              Looking for an incredible, interactive, and affordable animal experience in central Virginia? SeaQuest Lynchburg is a perfect choice! Boasting over 20,000 square feet of fun-packed adventures, SeaQuest Lynchburg is one of the few places in the state that offers hands-on encounters where visitors get to touch, feel, and feed animals from a variety of ecosystems found throughout the world.
            </p>
            <p className="text-gray-600">
              You'll journey through the Amazon, Caribbean, Egyptian Desert, and Mayan Jungle as you interact with sharks, snakes, turtles, and lizards during your quest.
            </p>
          </div>

          {/* Mid Content Image */}
          <div className="rounded-[32px] overflow-hidden my-10 h-[350px]">
            <img 
              src="/TFBlog.png" 
              alt="Trusty Feedback" 
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Let's Find</h2>
            <p className="text-gray-600">
              Our mission is to make your day better. We get it. We like to squeeze the most out of every day and we want to help you live your best life too. Whether you're working hard or working out, a night owl or and early bird, staying focused or staying Zen, Boost Patches give your that little extra something.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Conclusion Section (Light Green Box) */}
      <section className="px-4 max-w-4xl mx-auto my-16">
        <div className="bg-[#E9F5F1] rounded-[32px] p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4 text-[#1A2B3B]">Conclusion</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make your day better. We get it. We like to squeeze the most out of every day and we want to help you live your best life too. Whether you're working hard or working out, a night owl or and early bird, staying focused or staying Zen, Boost Patches give your that little extra something. We want you to give yourself a boost into better health, fitness, and mindfulness.
          </p>
        </div>
      </section>

      {/* 5. Leave A Reply (Comment Form) */}
      <section className="px-4 max-w-4xl mx-auto pb-20">
        <h2 className="text-3xl font-bold mb-8 text-[#1A2B3B]">Leave A Reply</h2>
        <form className="space-y-6">
          <div className="relative">
            <textarea 
              placeholder="Comment*"
              className="w-full border border-gray-200 rounded-[20px] p-5 h-40 focus:outline-none focus:ring-2 focus:ring-[#00D084] transition-all resize-none bg-white"
              required
            ></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name*" 
              className="w-full border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#00D084] transition-all bg-white"
              required
            />
            <input 
              type="email" 
              placeholder="Email*" 
              className="w-full border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#00D084] transition-all bg-white"
              required
            />
          </div>

          <button 
            type="submit" 
            className="bg-[#1A2B3B] text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all shadow-lg"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default SingleBlogPage;