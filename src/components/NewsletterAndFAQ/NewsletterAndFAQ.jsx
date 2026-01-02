import React from "react";

const faqs = [
  {
    question: "How quickly can you respond to an emergency call?",
    answer: "We guarantee arrival within 60 minutes for emergency services in our coverage area, 24/7."
  },
  {
    question: "Are your technicians certified and insured?",
    answer: "Yes, all our plumbers, electricians, cleaners, and carpenters are fully licensed, background-checked, and insured."
  },
  {
    question: "Do you provide free quotes?",
    answer: "Absolutely. We offer free, no-obligation quotes for all services before any work begins."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit/debit cards, bank transfers, and popular digital wallets."
  },
  {
    question: "Is there a satisfaction guarantee?",
    answer: "Yes, we offer a 100% satisfaction guarantee. If you're not happy, we'll make it right or refund your money."
  },
  {
    question: "Do you offer regular maintenance plans?",
    answer: "Yes, we provide customizable annual maintenance packages for plumbing, electrical, and cleaning services at discounted rates."
  },
];

const NewsletterAndFAQ = () => {
  return (
    <div className="py-20">
      
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-[#F3601A]">Our Community</span> in Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied homeowners who trust our professional services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-[#F3601A]/30">
            <div className="text-5xl font-bold text-[#0058DD] mb-3">10K+</div>
            <div className="text-gray-500 font-medium">Subscribers</div>
          </div>
          
          <div className="text-center p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-[#F3601A]/30">
            <div className="text-5xl font-bold text-[#0058DD] mb-3">98%</div>
            <div className="text-gray-500 font-medium">Satisfaction Rate</div>
          </div>
          
          <div className="text-center p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-[#F3601A]/30">
            <div className="text-5xl font-bold text-[#0058DD] mb-3">24/7</div>
            <div className="text-gray-500 font-medium">Support</div>
          </div>
          
          <div className="text-center p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-[#F3601A]/30">
            <div className="text-5xl font-bold text-[#0058DD] mb-3">500+</div>
            <div className="text-gray-500 font-medium">Tips Published</div>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why <span className="text-[#F3601A]">Subscribe</span> to Our Newsletter?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Get exclusive access to professional home care insights and offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-10 border border-gray-200 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-linear-to-br from-[#F3601A]/10 to-blue-500/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-[#F3601A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0058DD] mb-4">Weekly Home Tips</h3>
            <p className="text-gray-500">
              Expert advice on maintaining your home systems with step-by-step guides
            </p>
          </div>
          
          <div className="p-10 border border-gray-200 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-linear-to-br from-[#F3601A]/10 to-blue-500/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-[#F3601A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0058DD] mb-4">Exclusive Discounts</h3>
            <p className="text-gray-500">
              Special offers and promotions available only to our newsletter subscribers
            </p>
          </div>
          
          <div className="p-10 border border-gray-200 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-linear-to-br from-[#F3601A]/10 to-blue-500/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-[#F3601A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0058DD] mb-4">Pro Maintenance Guides</h3>
            <p className="text-gray-500">
              Professional tutorials and maintenance schedules from industry experts
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked <span className="text-[#F3601A]">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything you need to know about our professional home services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl p-10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#F3601A]/10 to-blue-500/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-[#F3601A]">Q{index + 1}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-[#0058DD]">
                      {faq.question}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-8"></div>
                  
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-lg leading-relaxed mb-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsletterAndFAQ;