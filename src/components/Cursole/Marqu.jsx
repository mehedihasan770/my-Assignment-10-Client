import React from 'react';
import Marquee from "react-fast-marquee";
import { FaBolt, FaBroom, FaShower, FaSoap, FaTools } from 'react-icons/fa';
import { Link } from 'react-router';

const Marqu = () => {
    return (
        <div className='py-20'>
            <h2 className="text-4xl font-bold mb-6 text-center">
                All in<span className="text-[#F3601A] text-center">One Place</span>
            </h2>
        <div className='mt-5 mb-5 relative rounded-2xl py-8'>
            <div className="absolute top-0 rounded-2xl left-0 h-full w-40 bg-linear-to-r from-black/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 rounded-2xl right-0 h-full w-40 bg-linear-to-l from-black/30 to-transparent z-10 pointer-events-none" />
            <Marquee>
                <Link to={'/services'}>
                <div className="cursor-pointer  min-w-[18rem] h-40 max-w-xs border border-amber-300 rounded-xl shadow-md p-4 mx-4 transition duration-300">
                    <h3 className="text-xl font-bold mb-2"><FaBolt className='mr-1 inline-block'/>Electrical Line Inspection</h3>
                    <p className="text-sm text-gray-600">We inspect your home's electrical lines to ensure safety and prevent future hazards.</p>
                </div>
                </Link>
                <Link to={'/services'}>
                <div className="cursor-pointer  min-w-[18rem] h-40 max-w-xs border border-amber-300 rounded-xl shadow-md p-4 mx-4 transition duration-300">
                    <h3 className="text-xl font-bold mb-2"><FaBroom className='mr-1 inline-block'/>Home Cleaning Service</h3>
                    <p className="text-sm text-gray-600">Our cleaners make your home sparkle with fast, thorough, and eco-friendly cleaning.</p>
                </div>
                </Link>
                <Link to={'/services'}>
                <div className="cursor-pointer  min-w-[18rem] h-40 max-w-xs border border-amber-300 rounded-xl shadow-md p-4 mx-4 transition duration-300">
                    <h3 className="text-xl font-bold mb-2"><FaShower className='mr-1 inline-block'/>Bathroom Fixture Repair</h3>
                    <p className="text-sm text-gray-600">We fix showers, taps, and bathroom fittings to restore comfort and functionality.</p>
                </div>
                </Link>
                <Link to={'/services'}>
                <div className="cursor-pointer  min-w-[18rem] h-40 max-w-xs border border-amber-300 rounded-xl shadow-md p-4 mx-4 transition duration-300">
                    <h3 className="text-xl font-bold mb-2"><FaTools className='mr-1 inline-block'/>Pipe Leak Repair</h3>
                    <p className="text-sm text-gray-600">Leaky pipes? Our plumbers detect and repair them with durable, long-lasting solutions.</p>
                </div>
                </Link>
                <Link to={'/services'}>
                <div className="cursor-pointer  min-w-[18rem] h-40 max-w-xs border border-amber-300 rounded-xl shadow-md p-4 mx-4 transition duration-300">
                    <h3 className="text-xl font-bold mb-2"><FaSoap className='mr-1 inline-block'/>Deep Cleaning Service</h3>
                    <p className="text-sm text-gray-600">Deep cleaning for stubborn dirt and grime—perfect for seasonal or post-renovation refresh.</p>
                </div>
                </Link>
            </Marquee>
        </div>
        </div>
    );
};

export default Marqu;