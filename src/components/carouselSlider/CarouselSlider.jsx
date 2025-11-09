import React from 'react';
import { Link } from 'react-router';

const CarouselSlider = () => {
    return (
        <div>
            <div className="carousel w-full rounded-2xl">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 to-black/20 z-10"></div>
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute xl:top-20 lg:top-10 md:top-5 md:left-20 left-6 z-15 text-white">
        <h3 className='md:text-[25px] text-[12px] md:mt-0 mt-2 font-semibold lg:mb-3'>Sparkling Clean Homes, Every Time</h3>
        <p className='max-w-[800px] md:text-[16px] text-[8px] text-white/85'>Our cleaning experts turn your home into a spotless haven. We use eco-friendly products and advanced tools to remove dust, stains, and allergens. Whether it’s a deep clean or regular care, we ensure a fresh, healthy space for your family.</p>
        <Link to={'/services'}><button className="text-[#0058DD] cursor-pointer lg:mt-3 md:text-[16px] md:top-0 text-[8px]">explore more...</button></Link> 
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 to-black/20 z-10"></div>
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 to-black/20 z-10"></div>
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 to-black/20 z-10"></div>
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default CarouselSlider;