import  { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../authContext/AuthContext';
import Swal from 'sweetalert2';
import { FcRating } from 'react-icons/fc';
import Loading from '../../components/Loading/Loading';
import { useLoading } from '../../Hooks/useLoading';

const Details = () => {
    const {user} = useContext(AuthContext)
    const [activeImage, setActiveImage] = useState(0);
    const {id} = useParams()
    const [details, setDetails] = useState({})
    const modalRef = useRef()
    const {loading1} = useLoading()
    useEffect(() => {
        fetch(`https://home-hero-server-ten.vercel.app/services/${id}`)
        .then(res => res.json())
        .then(data => {
            setDetails(data)
        })
    }, [id])

    const handleBook = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const date = e.target.date.value;
        const price = parseInt(e.target.price.value);
        const name = details.service_name;
        const photo = details.service_imageURL;
        const services_id = details._id;
        const newBooking = {email, date, name, price, photo, services_id}
        fetch('https://home-hero-server-ten.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
               Swal.fire({
                    title: "Booking Successful",
                    icon: "success",
                    draggable: true
                }); 
                e.target.reset()
            }
        })
        modalRef.current.close()
    }

    return (
        <div className='py-20'>
            {loading1 ? (
                <div className='bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-gray-900 border border-gray-200 dark:border-gray-700 animate-pulse'>
    <div className='flex flex-col lg:flex-row gap-8'>
        <div className='lg:w-1/2'>
            <div className='w-full h-[400px] md:h-[500px] bg-gray-300 dark:bg-gray-700 rounded-2xl'></div>
        </div>
        
        <div className='lg:w-1/2 space-y-6'>
            <div className='space-y-4'>
                <div className='h-8 bg-gray-300 dark:bg-gray-700 rounded-xl w-3/4'></div>
                
                <div className='flex items-center gap-4 flex-wrap'>
                    <div className='h-10 bg-gray-300 dark:bg-gray-700 rounded-xl w-24'></div>
                    <div className='h-10 bg-gray-300 dark:bg-gray-700 rounded-xl w-32'></div>
                </div>
            </div>

            <div className='space-y-4 py-4 border-y border-gray-200 dark:border-gray-700'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full'></div>
                    <div className='space-y-2'>
                        <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-32'></div>
                        <div className='h-3 bg-gray-300 dark:bg-gray-700 rounded w-40'></div>
                    </div>
                </div>
            </div>

            <div className='space-y-3'>
                <div className='h-6 bg-gray-300 dark:bg-gray-700 rounded w-32'></div>
                <div className='space-y-2'>
                    <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded'></div>
                    <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6'></div>
                    <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6'></div>
                </div>
            </div>

            <div className='h-12 bg-gray-300 dark:bg-gray-700 rounded-xl'></div>
        </div>
    </div>

    <div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-700'>
        <div className='text-center mb-10 space-y-2'>
            <div className='h-8 bg-gray-300 dark:bg-gray-700 rounded-xl w-48 mx-auto'></div>
            <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-32 mx-auto'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
            {[...Array(2)].map((_, i) => (
                <div 
                    key={i} 
                    className='bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700'
                >
                    <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full'></div>
                            <div className='space-y-2'>
                                <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-24'></div>
                                <div className='h-3 bg-gray-300 dark:bg-gray-700 rounded w-16'></div>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-2 pl-2'>
                        <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded'></div>
                        <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6'></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>) : 
            (<div className='bg-white/10 dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow'>
    <div className='flex flex-col lg:flex-row gap-8'>
        <div className='lg:w-1/2'>
            <div className='relative w-full h-[400px] md:h-[500px] rounded-2xl shadow overflow-hidden group'>
                <img 
                    src={details?.service_imageURL} 
                    alt={details?.service_name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${activeImage === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                />
                <img 
                    src={details?.service_imageURL2} 
                    alt={`${details?.service_name} - view 2`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${activeImage === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                />
                
                <button 
                    onClick={() => setActiveImage(prev => prev === 0 ? 1 : 0)}
                    className='absolute border border-[#F3601A] top-1/2 cursor-pointer right-4 z-20 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110'
                >
                    <svg className="w-6 h-6 text-[#F3601A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                
                <div className='absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex gap-2'>
                    <button 
                        onClick={() => setActiveImage(0)}
                        className={`w-3 h-3 rounded-full transition-all ${activeImage === 0 ? 'bg-[#F3601A] scale-125' : 'bg-white/60 hover:bg-white/80'}`}
                    />
                    <button 
                        onClick={() => setActiveImage(1)}
                        className={`w-3 h-3 rounded-full transition-all ${activeImage === 1 ? 'bg-[#F3601A] scale-125' : 'bg-white/60 hover:bg-white/80'}`}
                    />
                </div>
            </div>
        </div>
        
        <div className='lg:w-1/2 space-y-6'>
            <div className='space-y-4'>
                <h1 className='text-3xl font-bold text-[#F3601A]'>
                    {details?.service_name}
                </h1>
                
                <div className='flex items-center gap-4 flex-wrap'>
                    <span className='bg-[#0058DD] text-white font-bold py-2 px-4 rounded-xl shadow-md'>
                        ${details?.service_Price}
                    </span>
                    <span className='bg-[#F3601A]/10 text-[#F3601A] font-semibold py-2 px-4 rounded-xl'>
                        {details?.service_category}
                    </span>
                </div>
            </div>

            <div className='space-y-4 py-4 border-y border-gray-200 dark:border-gray-700'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-[#0058DD]/20 rounded-full flex items-center justify-center'>
                        <span className='text-[#0058DD] font-bold'>{details?.provider_name?.charAt(0)}</span>
                    </div>
                    <div>
                        <h3 className='font-bold text-[#0058DD]'>{details?.provider_name}</h3>
                        <p className='text-sm text-gray-500'>{details?.contact_email}</p>
                    </div>
                </div>
            </div>

            <div className='space-y-3'>
                <h3 className='text-xl font-bold flex items-center gap-2'>
                    <span className='w-2 h-6 bg-[#F3601A] rounded-full'></span>
                    Description
                </h3>
                <p className='text-gray-500 leading-relaxed shadow dark:bg-gray-900 p-4 rounded-xl'>
                    {details?.service_description}
                </p>
            </div>

            <button 
                onClick={() => modalRef.current.showModal()}
                disabled={!user?.email || user?.email === details?.provider_email}
                className={`w-full py-3 rounded-xl cursor-pointer font-bold transition-all duration-300 ${!user?.email || user?.email === details?.provider_email 
                    ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-[#F3601A] text-white hover:shadow-lg hover:scale-[1.02]'
                }`}
            >
                {!user?.email || user?.email === details?.provider_email ? 'Book Unavailable' : 'Book Now'}
            </button>
        </div>
    </div>

    <div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-700'>
        <div className='text-center mb-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#F3601A] inline-block'>
                Customer Reviews
            </h2>
            <p className='text-gray-500 dark:text-gray-400 mt-2'>What people are saying</p>
        </div>

        {details?.reviews?.length <= 0 ? (
            <div className='text-center py-12'>
                <div className='w-20 h-20 mx-auto bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mb-4'>
                    <span className='text-3xl'>🌟</span>
                </div>
                <h3 className='text-xl font-bold text-gray-400 dark:text-gray-500'>No Reviews Yet</h3>
                <p className='text-gray-500 dark:text-gray-600'>Be the first to share your experience!</p>
            </div>
        ) : (
            <div className='grid md:grid-cols-2 gap-6'>
                {details?.reviews?.map((review, i) => (
                    <div 
                        key={i} 
                        className='rounded-2xl p-6 shadow hover:shadow-xl transition-shadow duration-300'
                    >
                        <div className='flex items-center justify-between mb-4'>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 bg-linear-to-r from-[#0058DD]/20 to-[#F3601A]/20 rounded-full flex items-center justify-center'>
                                    <span className='font-bold text-[#0058DD]'>{review.email?.charAt(0).toUpperCase()}</span>
                                </div>
                                <div>
                                    <h4 className='font-bold text-[#0058DD]'>{review.email}</h4>
                                    <div className='flex items-center gap-1'>
                                        <FcRating size={20}/>
                                        <span className='font-bold text-[#F3601A] ml-1'>{review.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-500 italic pl-2 border-l-4 border-[#0058DD]'>
                            "{review.comment}"
                        </p>
                    </div>
                ))}
            </div>
        )}
    </div>
</div>)}
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleBook}>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='bg-[#0058DD] w-fit py-1 px-2.5 text-white font-bold rounded-2xl'>price ${details?.service_Price}</h1>
                            <h1 className='text-2xl font-bold border border-[#0058DD] w-fit px-2 py-1 rounded-2xl mt-2'>{details?.service_name}</h1>
                            <h1 className='font-semibold text-gray-600'>Provider Name: {details?.provider_name}</h1>
                            <h1 className='font-semibold text-gray-600'>Contact Email: {details?.contact_email}</h1>
                        </div>
                    <fieldset className="fieldset border-base-300 rounded-box p-4">

                        <label className="label">Your Email</label>
                        <input type="email" className="input w-full" defaultValue={user?.email} readOnly name='email' required placeholder="Email" />

                        <label className="label">Preferred service date</label>
                        <input type="date" className="input w-full"  name='date' required />

                        <label className="label">Enter Your Price</label>
                        <input type="number" className="input w-full" defaultValue={details?.service_Price} name='price' required placeholder='Price' />

                        <button className="btn border-2 mt-3 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]">Click to add booking</button>
                    </fieldset>
                    </form>
                <div className="modal-action">
                <form method="dialog" className='w-full'>
                    <button className="btn w-full">Cancel</button>
                </form>
            </div>
  </div>
</dialog>
        </div>
    );
};

export default Details;