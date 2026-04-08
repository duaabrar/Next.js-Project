"use client";
import React, { useState } from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openId, setOpenId] = useState(1); 

  const faqs = [
    {
      id: 1,
      question: "What types of loans do you offer?",
      answer: "We offer a variety of loans, including personal loans, business loans, foreigner loans, payday loans, and debt consolidation loans, tailored to meet your specific needs."
    },
    {
      id: 2,
      question: "How quickly can I get my loan approved?",
      answer: "Our approval process is designed to be fast and efficient. Most applications are reviewed and processed within 24 hours."
    },
    {
      id: 3,
      question: "What documents do I need to apply for a loan?",
      answer: "Typically, you'll need identification (IC or Passport), proof of income (CPF statements or payslips), and proof of residence."
    },
    {
      id: 4,
      question: "Can I apply for a loan if I have bad credit?",
      answer: "Yes, we look beyond just credit scores. We evaluate your current financial situation and ability to repay the loan."
    },
    {
      id: 5,
      question: "How do I make repayments on my loan?",
      answer: "Repayments can be made through GIRO, bank transfers, or at our physical branches, depending on your convenience."
    },
    {
      id: 6,
      question: "Is there a penalty for early repayment?",
      answer: "We offer flexible terms, and in many cases, early repayment is encouraged without heavy penalties. Please check your specific contract for details."
    }
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[42px] font-bold text-[#1A2B3B] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Here are some common questions about our Reviews and their answers
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="border-b border-gray-200 pb-4 transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${openId === faq.id ? 'text-[#1A2B3B]' : 'text-[#1A2B3B] group-hover:text-[#00D690]'}`}>
                  {faq.question}
                </span>
                
                {/* Dynamic Icon Circle */}
                <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-300 ${openId === faq.id ? 'bg-gray-200 text-gray-600' : 'bg-[#00D690] text-white rotate-0'}`}>
                  {openId === faq.id ? (
                    <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  )}
                </div>
              </button>

              {/* Answer Section with Animation */}
              <div className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed pr-12 pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default FAQ;