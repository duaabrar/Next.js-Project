import React from 'react';

const TrustyFeedbackPage = () => {
  return (
    
    <div className="font-sans text-slate-900 bg-white">
      
  
      <section className="py-16 px-4 text-center max-w-6xl mx-auto">
        <nav className="text-sm text-gray-500 mb-4">
          Homepage &gt; <span className="text-gray-900">How it Works</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">We're open to all.</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          A platform where customers rate businesses, sharing reviews to guide others and help companies improve.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-sm max-w-5xl mx-auto">
         
          <img 
            src="/FullScreen.png" 
            alt="Team working" 
          />
        </div>
      </section>

    
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">How do reviews get on Trusty Feedback?</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Reviews on Trusty Feedback are written by consumers from across the globe. Anyone who has had a recent
            buying or service experience can write a review, for free, as long as they have a Trusty Feedback user account,
            follow our Guidelines for Reviewers, and don't have a conflict of interest with the business they're reviewing. A
            user account must be connected to an email address so we can get in touch for account- and service-related
            issues.
          </p>
          <p>
            All reviews about a business are shown on their profile page. This is where consumers can read and write
            reviews, and find other relevant information about the business, such as the overall TrustScore and star rating.
            A Trusty Feedback review can start in two ways:
          </p>
        </div>

    
      </section>
    </div>
  );
};

export default TrustyFeedbackPage;