import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Services = () => {
    const [service, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    }, [])
    return (
        <div>
            <h1 className="md:text-4xl mb-5 bg-[#0058DD] mx-auto py-2 rounded-2xl text-white px-3 w-fit text-[20px] font-bold mt-10 md:mt-20">All Service</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                { service.map( ser => 
                <div key={ser._id} className="p-3 rounded-2xl shadow-lg dark:shadow-gray-700 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-600 duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="relative">
                        <img src={ser.service_imageURL} alt="ser.service_imageURL" className="w-full rounded-2xl max-h-60 object-cover hover:scale-105 transition-transform duration-400"/>
                        <span className="absolute top-3 left-3 text-white bg-blue-500 text-sm font-semibold px-3 py-1 rounded-full shadow-md">${ser.service_Price}</span>
                    </div>
            <div className="p-5">
                <h2 className="text-xl font-semibold dark:text-gray-100 mb-3">{ser.service_name}</h2>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-300">
            <div>
                <p className="font-medium dark:text-gray-200">{ser.provider_name}</p>
                <p className="text-xs">{ser.service_category}</p>
            </div>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">{ser.contact_email}</span>
            </div>
            <Link><button className="cursor-pointer mt-4 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-600 transition duration-200 font-medium shadow-md">View Details</button></Link>
      </div>
    </div>
)}
            </div>
        </div>
    );
};

export default Services;