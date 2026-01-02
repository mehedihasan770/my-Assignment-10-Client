import React from "react";

const features = [
  {
    title: "Professional Plumbing",
    description: "24/7 emergency repairs, installations and maintenance by certified experts.",
    svg: (
      <svg className="w-12 h-12 mb-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: "Expert Electrician",
    description: "Safe wiring, lighting installation, panel upgrades and electrical safety checks.",
    svg: (
      <svg className="w-12 h-12 mb-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Premium House Cleaning",
    description: "Eco-friendly deep cleaning for kitchens, bathrooms and entire home.",
    svg: (
      <svg className="w-12 h-12 mb-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Skilled Carpentry",
    description: "Custom furniture, repairs, deck building and precision woodwork.",
    svg: (
      <svg className="w-12 h-12 mb-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Fast Response Time",
    description: "Guaranteed arrival within 60 minutes for emergency service calls.",
    svg: (
      <svg className="w-12 h-12 mb-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guarantee",
    description: "100% money-back if not completely satisfied with our service.",
    svg: (
      <svg className="w-12 h-12 mb-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-[#F3601A]">Our Core Services</span> & Benefits
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Professional home services delivered with expertise and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center shadow p-2 rounded-2xl group transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center">
                {feature.svg}
              </div>
              <h3 className="text-2xl font-semibold text-[#0058DD] mb-3">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;