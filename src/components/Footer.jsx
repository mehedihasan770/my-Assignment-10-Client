import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black py-20 mt-5'>
        <div>
            <div className='max-w-10/12 mx-auto text-white flex flex-col lg:flex-row justify-between'>
                <div>
                    <div className="flex items-center -mb-4 -ml-5">
                        <div>
                            <img className="w-20 h-20" src='' alt="" />
                        </div>
                        <a className="text-xl -ml-3 font-bold">WarmPaws</a>
                    </div>
                    <p className='max-w-92 text-gray-400'>Cat & Dog is a pet-focused medical and advisory website where you can ask questions about your beloved cats and dogs — whether it's about health issues, behavioral concerns, food-related queries, or general care. Our goal is to ensure every pet receives proper care, love, and timely medical guidance. Cat & Dog always strives to support you with reliable information in simple language, so your furry companion stays healthy, happy, and safe.</p>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4'>privacy policy</h1>
                    <div className='text-gray-400 space-y-2 flex flex-col'>
                        <a href="">Information Collection</a>
                        <a href="">Use of Information</a>
                        <a href="">Data Security</a>
                        <a href="">Policy Updates</a>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4'>Contact info</h1>
                    <div className='text-gray-400 space-y-2 flex flex-col'>
                        <a href="">+880 12345678921</a>
                        <a href="">warmpaws@gmail.com</a>
                        <a href="">sport@gmail.com</a>
                        <a href="">thakurgon, Rangpur, Bangladesh</a>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='mb-4'>Social</h1>
                    <div className='text-gray-400 space-y-2 flex flex-col'>
                        <a href="">Join us on Facebook</a>
                        <a href="">See more on Instagram</a>
                        <a href="">Follow on YouTube</a>
                        <a href="">Connect via LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-500 max-w-10/12 mx-auto mt-5'>
                <h1 className='text-center text-gray-500 mt-8'>© 2025 WarmPaws. All rights reserved.</h1>
            </div>
        </div>
        </div>
    );
};

export default Footer;