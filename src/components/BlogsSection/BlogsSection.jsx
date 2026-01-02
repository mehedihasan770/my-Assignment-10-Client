import React from "react";

const blogPosts = [
  {
    title: "10 Essential Plumbing Tips for Homeowners",
    date: "January 02, 2026",
    excerpt: "Prevent common plumbing issues and save on repairs with these expert maintenance tips.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    category: "Plumbing"
  },
  {
    title: "Understanding Home Electrical Safety",
    date: "December 20, 2025",
    excerpt: "Key factors for safe wiring and preventing electrical hazards in your home.",
    image: "https://magnifyelectric.com/wp-content/uploads/2025/08/Causes-of-Circuit-Breaker-Tripping-1024x701.jpg",
    category: "Electrical"
  },
  {
    title: "The Ultimate Deep Cleaning Guide",
    date: "December 10, 2025",
    excerpt: "Room-by-room checklist for a thorough, professional-level home clean.",
    image: "https://images.squarespace-cdn.com/content/v1/611b3a86fb6a226aadffcf79/d80f38e6-d7a9-4711-bd43-3b7dc4cf959e/Deepcleaningnew.jpg",
    category: "Cleaning"
  },
  {
    title: "Mastering Home Carpentry Projects",
    date: "November 25, 2025",
    excerpt: "Essential checklist and tips for precision woodwork and repairs.",
    image: "https://awiqcp.org/wp-content/uploads/2024/01/working-cutting-mdf-board-1.webp",
    category: "Carpentry"
  },
  {
    title: "Emergency Home Repair Essentials",
    date: "November 15, 2025",
    excerpt: "What to do before professional help arrives in plumbing or electrical emergencies.",
    image: "https://www.customhomegroup.com/wp-content/uploads/2020/01/electrical-hazards-outlet-overloaded-with-multiple-power-strips-scaled.jpg",
    category: "Emergency"
  },
  {
    title: "Seasonal Home Maintenance Checklist",
    date: "October 30, 2025",
    excerpt: "Prepare your home year-round with professional service recommendations.",
    image: "https://images.squarespace-cdn.com/content/v1/5fd3d1865f4f391288e896f7/f2a890d0-4e8c-4040-9a40-c436a483acf4/Everything+You+Need+To+Know+About+Deep+House+Cleaning.png",
    category: "Maintenance"
  },
];

const BlogsSection = () => {
  return (
    <div className="py-20">
      <section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Expert <span className="text-[#F3601A]">Insights</span> & Tips
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional advice on home maintenance, repairs and services from industry experts
          </p>
        </div>
        
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <article
              key={i}
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
            
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
               
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#F3601A] font-semibold rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
         
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-[#F3601A] text-white font-semibold rounded-full text-sm">
                    {post.date.split(" ")[0]}
                  </span>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post?.date}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-500 mb-5 group-hover:text-[#F3601A] transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsSection;