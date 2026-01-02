import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import 'aos/dist/aos.css';
import Loading from '../../components/Loading/Loading';

const Services = () => {
    const [service, setServices] = useState([])
    const [load, setLoad] = useState(false)
    const [reLoad, setReLoad] = useState(true)
    const placeholders = Array.from({ length: 8 });

    Aos.init({
          duration: 1000,
          once: true, 
    });

    useEffect(() => {
        setLoad(true)
        fetch('https://home-hero-server-ten.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLoad(false)
        })
    }, [reLoad])

    const handleFilterServices = e => {
        e.preventDefault();
        setLoad(true)
        const min = e.target.min.value;
        const max = e.target.max.value;
        fetch(`https://home-hero-server-ten.vercel.app/service/filter?min=${min}&max=${max}`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
            e.target.reset();
            setLoad(false)
        })
    }

    return (
        <div className='mt-10'>
            <form onSubmit={handleFilterServices} className="flex gap-1 my-4">
                <input
                type="number"
                name='min'
                required
                placeholder="Min Price"
                className="input input-bordered"
                />
                <input
                type="number"
                name='max'
                required
                placeholder="Max Price"
                className="input input-bordered"
                />
                <button className="btn border-2 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]">Filter</button>
                <button type='button' onClick={() => setReLoad(!reLoad)} className="btn border-2 border-[#F3601A] text-[#F3601A] font-bold hover:text-white hover:bg-[#F3601A]">Reload page</button>
            </form>
            {load ? '' : service.length === 0 && <div className='text-3xl flex justify-center text-gray-400 font-bold items-center min-h-[calc(100vh-180px)]'><h1>No Data</h1></div>}
            <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {load ? placeholders.map((_, i) => (
            <div
              key={i}
              className="p-3 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 animate-pulse"
            >
              <div className="relative">
  
                <div className="w-full h-60 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-3"></div>

                <div className="flex space-x-2 absolute top-3 left-3">
                  <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-20 bg-gray-300 rounded-full flex items-center justify-center"></div>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>

                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                </div>

                <div className="h-5 bg-gray-300 rounded w-1/2 mt-2"></div>
                <div className="h-10 bg-gray-300 rounded w-full mt-3"></div>
              </div>
            </div>)) : service.map( ser => 
                <div key={ser._id} data-aos="fade-up" data-aos-duration="1500" className="p-3 rounded-2xl shadow-lg dark:shadow-gray-700 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-600 duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="relative">
                        <img src={ser.service_imageURL} alt="ser.service_imageURL" className="w-full rounded-2xl h-60 overflow-hidden object-cover hover:scale-105 transition-transform duration-400"/>
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
            <Link to={`/details/${ser._id}`}><button className="btn border-2 w-full mt-2 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]">View Details</button></Link>
      </div>
    </div>
)}
            </div>
        </div>
    );
};

export default Services;