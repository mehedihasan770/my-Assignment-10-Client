import React from 'react';
import { Link } from 'react-router';
import s1 from '../../assets/S1.jpg'
import s2 from '../../assets/Ant.jpg'
import s3 from '../../assets/S3.jpg'

const CarouselSlider = () => {
    return (
        <div>
            <div className="carousel w-full rounded-2xl max-h-[500px] overflow-x-hidden">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 to-black/20 z-10"></div>
    <img
      src={s1}
      className="w-full" />
    <div className="absolute ml-10 mt-5 z-15 text-white">
        <h3 className='mt-2 font-semibold'>Restaurant & Pub bar cleaning</h3>
        <p className='max-w-[800px] text-white/85'>We provide the Hotel Restaurant cleaning Service anywhere in Dhaka. If you are looking for a Restaurant cleaning Service Provider Company near Dhaka. Call Clean&green and get information on Restaurant cleaning Service. Call us for Restaurant cleaning Service.</p>
        <Link to={'/services'}><button className="text-[#0058DD] cursor-pointer">explore more...</button></Link> 
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 to-black/20 z-10"></div>
    <img
      src={s2}
      className="w-full" />
      <div className="absolute ml-10 mt-5 z-15 text-white">
        <h3 className='mt-2 font-semibold'>Hotel cleaning & house keeping</h3>
        <p className='max-w-[800px] text-white/85'>Our cleaning experts turn your home into a spotless haven. We use eco-friendly products and advanced tools to remove dust, stains, and allergens. Whether it’s a deep clean or regular care, we ensure a fresh, healthy space for your family.</p>
        <Link to={'/services'}><button className="text-[#0058DD] cursor-pointer">explore more...</button></Link> 
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 to-black/20 z-10"></div>
    <img
      src={s3}
      className="w-full" />
      <div className="absolute ml-10 mt-5 z-15 text-white">
        <h3 className='mt-2 font-semibold'>Our Sofa Cleaning Service Process</h3>
        <p className='max-w-[800px] text-white/85'>We, Clean & Green, have been providing sofa cleaning services for a long time. Since sofas are made of fabric or leather, we plan the cleaning according to the material. Below, we describe our working method for both sofa types.</p>
        <Link to={'/services'}><button className="text-[#0058DD] cursor-pointer">explore more...</button></Link> 
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default CarouselSlider;