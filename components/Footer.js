import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-4 py-10 md:px-10 lg:px-20 bg-white font-sans">
      
      <div className="bg-[#98E9C1] rounded-[30px] p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
        
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center">
             
              <img 
                src="/Logo.png" 
                alt="Trusty Feedback Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            
            <p className="text-[#1A2B3B] text-[15px] leading-relaxed opacity-90 ">
              Our vision is to become a global symbol of trust, empowering consumers to shop confidently.
            </p>

            <div className="space-y-4">
              <h4 className="font-bold text-[#1A2B3B]">Follow Us:</h4>
              <div className="flex gap-3">
               
                <a href="#" className="hover:scale-110 transition-transform">
                  <img src="/Facebook.png" alt="Facebook"  />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <img src="/X.png" alt="Twitter"  />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <img src="/Instagram.png" alt="Instagram"/>
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <img src="/Twitter.png" alt="Linkedin"  />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:pl-10">
            <h4 className="font-bold text-[#1A2B3B] text-lg">Quick Links</h4>
            <ul className="space-y-2 text-[#1A2B3B] text-[15px] opacity-80">
              <li className="hover:font-semibold cursor-pointer transition-all">About Us</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Contact Us</li>
              <li className="hover:font-semibold cursor-pointer transition-all">How it works</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Blog</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Categories</li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#1A2B3B] text-lg">Community</h4>
            <ul className="space-y-2 text-[#1A2B3B] text-[15px] opacity-80">
              <li className="hover:font-semibold cursor-pointer transition-all">Write a review</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Help Centre</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Log In</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Sign Up</li>
            </ul>
          </div>

          {/* Businesses Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#1A2B3B] text-lg">Businesses</h4>
            <ul className="space-y-2 text-[#1A2B3B] text-[15px] opacity-80">
              <li className="hover:font-semibold cursor-pointer transition-all">Own a business</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Products</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Plan & Pricing</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Business Login</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Blog for Business</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[#1A2B3B] text-lg">Other Links</h4>
            <ul className="space-y-2 text-[#1A2B3B] text-[15px] opacity-80">
              <li className="hover:font-semibold cursor-pointer transition-all">Legal</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Privacy Policy</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Terms & Condition</li>
              <li className="hover:font-semibold cursor-pointer transition-all">Guidelines</li>
              <li className="hover:font-semibold cursor-pointer transition-all">System status</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright Center Mein */}
        <div className="mt-16 pt-8 border-t border-[#1A2B3B]/10 text-center">
          <p className="text-[#1A2B3B] text-[14px] font-medium opacity-80">
            © Copyright 2024 All Right Reserved By Trusty Feedback
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;