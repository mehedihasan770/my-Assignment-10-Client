import { useEffect, useState } from 'react';
import CarouselSlider from '../../components/carouselSlider/CarouselSlider';
import { Link } from 'react-router';
import { FcRating } from 'react-icons/fc';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoading } from '../../Hooks/useLoading';
import Loading from '../../components/Loading/Loading';
import Marqu from '../../components/Cursole/Marqu';

const Home = () => {
    const [topServices, setTopServices] = useState([])
    const {loading1} = useLoading()

    AOS.init({
      duration: 1000,
      once: true, 
    });

    useEffect(() => {
        fetch('http://localhost:3000/average_top_rating')
        .then(res => res.json())
        .then(data => {
            setTopServices(data)
        })
    })

    if(loading1){
        return <Loading></Loading>
    }

    return (
        <div className='mt-10'>
            <header>
                <CarouselSlider></CarouselSlider>
            </header>
            <div className='border-t mt-10 mb-3 border-gray-400'></div>
            <h1 className='text-center text-2xl font-bold text-[#F3601A]'>Top (6) Services</h1>
            <main>
                <div className='mt-5'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                { topServices.map( ser => 
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
            </main>
        </div>
    );
};

export default Home;