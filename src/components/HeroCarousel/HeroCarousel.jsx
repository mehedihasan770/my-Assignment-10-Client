import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router";

const slides = [
  {
    title: "Expert Plumbing Solutions",
    subtitle: "Fast & Reliable Pipe Repair and Installation",
    image: "https://img.freepik.com/premium-photo/male-plumber-fixing-sink-pipe-bathroom_85574-3373.jpg?w=1060",
  },
  {
    title: "Professional Electrician Services",
    subtitle: "Safe Wiring, Repairs & Upgrades",
    image: "https://img.freepik.com/free-photo/electrician-working-near-board-with-wires-installation-connection-electrics_169016-5875.jpg?w=1060",
  },
  {
    title: "Premium House Cleaning",
    subtitle: "Deep Clean for a Healthy & Spotless Home",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Skilled Carpentry & Handyman",
    subtitle: "Custom Woodwork and Home Repairs",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

const HeroCarousel = () => {
  return (
    <section className="relative h-[65vh] min-h-[500px] max-h-[800px] overflow-hidden md:h-[70vh] rounded-2xl">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        speed={1000}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent md:from-black/80 md:via-black/50" />

              <div className="relative container mx-auto h-full flex items-center px-6 sm:px-10 md:px-12 lg:px-20">
                <div className="max-w-3xl text-left md:text-left lg:max-w-4xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F3601A] font-extrabold leading-tight mb-4 md:mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium mb-8 md:mb-12 opacity-95">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Link to={'/services'}>
                    <button className="border-2 cursor-pointer border-[#0058DD] text-[#0058DD] font-semibold py-4 px-10 sm:py-5 sm:px-12 rounded-full text-lg sm:text-xl hover:bg-[#0058DD] hover:text-white transition-all duration-300">
                      Book Now
                    </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-lg">
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;