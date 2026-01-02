import { useEffect, useState } from 'react';
import CarouselSlider from '../../components/carouselSlider/CarouselSlider';
import { Link } from 'react-router';
import { FcRating } from 'react-icons/fc';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoading } from '../../Hooks/useLoading';
import Loading from '../../components/Loading/Loading';
import Marqu from '../../components/Cursole/Marqu';
import MitOurExpart from '../../components/MitOurExpart/MitOurExpart';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';

const Home = () => {
    const [topServices, setTopServices] = useState([])
    const {loading1} = useLoading()
    const placeholders = Array.from({ length: 4 });

    AOS.init({
      duration: 1000,
      once: true, 
    });

    useEffect(() => {
        fetch('https://home-hero-server-ten.vercel.app/average_top_rating')
        .then(res => res.json())
        .then(data => {
            setTopServices(data)
        })
    })

    const services = topServices.slice(1, 5)

    return (
        <div className='mt-10'>
            <header>
                <HeroCarousel></HeroCarousel>
            </header>
            <div className='border-t mt-10 mb-3 border-gray-400'></div>
            <h1 className='text-center text-2xl font-bold text-[#F3601A]'>Top (4) Services</h1>
            <main>
                <div className='mt-5'>
                    <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {loading1 ? 
                
                    placeholders.map((_, i) => (
            <div
              key={i}
              className="p-3 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 animate-pulse"
            >
              <div className="relative">
                {/* Image Skeleton */}
                <div className="w-full h-60 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-3"></div>

                {/* Price & Rating Skeleton */}
                <div className="flex space-x-2 absolute top-3 left-3">
                  <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-20 bg-gray-300 rounded-full flex items-center justify-center"></div>
                </div>
              </div>

              <div className="p-5 space-y-3">
                {/* Service Name Skeleton */}
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>

                {/* Provider & Category Skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                </div>

                {/* Contact Skeleton */}
                <div className="h-5 bg-gray-300 rounded w-1/2 mt-2"></div>

                {/* Button Skeleton */}
                <div className="h-10 bg-gray-300 rounded w-full mt-3"></div>
              </div>
            </div>))

                : services.map( ser => 
                <div key={ser._id} data-aos="fade-up" data-aos-duration="1500" className="p-3 rounded-2xl shadow-lg dark:shadow-gray-700 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-600 duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="relative">
                        <img src={ser.service_imageURL} alt="ser.service_imageURL" className="w-full rounded-2xl h-60 overflow-hidden object-cover hover:scale-105 transition-transform duration-400"/>
                        <div className='flex space-x-1 absolute top-3 left-3'>
                            <span className=" text-white bg-blue-500 text-sm font-semibold px-3 py-1 rounded-full shadow-md">${ser.service_Price}</span>
                            <div className='flex space-x-1 items-center text-white bg-blue-500 text-sm font-semibold px-3 py-1 rounded-full shadow-md'>
                                <FcRating size={20}/>
                                <span className="">{ser?.avaregRating?.toFixed(2)}</span>
                            </div>
                        </div>
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
                <div>
                    <Marqu></Marqu>
                </div>
                <div>
                    <MitOurExpart></MitOurExpart>
                </div>
            </main>
        </div>
    );
};

export default Home;