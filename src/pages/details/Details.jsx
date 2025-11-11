import  { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../authContext/AuthContext';
import Swal from 'sweetalert2';
import { FcRating } from 'react-icons/fc';
import Loading from '../../components/Loading/Loading';
import { useLoading } from '../../Hooks/useLoading';

const Details = () => {
    const {user} = useContext(AuthContext)
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

    if(loading1){
        return <Loading></Loading>
    }

    return (
        <div className='mt-5'>
            <div className='flex lg:flex-row rounded-2xl p-5 space-x-4 flex-col shadow-sm'>
                <div className='flex-1'>
                    <img src={details?.service_imageURL} alt="" className='w-2xl md:h-[600px] border border-gray-400 rounded-2xl' />
                </div>
                <div className='flex-1'>
                    <h1 className='text-2xl font-bold border border-[#0058DD] w-fit px-2 py-1 rounded-2xl mt-2'>{details?.service_name}</h1>
                    <div className='border-t mt-3 mb-3 border-gray-400'></div>
                    <h1 className='bg-[#0058DD] w-fit py-1 px-2.5 text-white font-bold rounded-md'>price ${details?.service_Price}</h1>
                    <h1 className='font-semibold text-gray-600'>{details?.service_category}</h1>
                    <h1 className='font-semibold text-gray-600'>{details?.provider_name}</h1>
                    <h1 className='font-semibold text-gray-600'>{details?.contact_email}</h1>
                    <div className='border-t mt-3 mb-3 border-gray-400'></div>
                    <p className='font-semibold'>description</p>
                    <p className='text-gray-400'>{details?.service_description}</p>
                    <div className='border-t mt-3 mb-3 border-gray-400'></div>
                    { user?.email === details?.provider_email ? <button onClick={() => modalRef.current.showModal()} className='btn border-2 md:text-[16px] border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD] btn-disabled'>Book now</button> : <button onClick={() => modalRef.current.showModal()} className='btn border-2 md:text-[16px] border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]'>Book now</button>}
                </div>
            </div>
            <div className='border-t mt-10 border-gray-400'></div>
             <h1 className='text-center text-2xl font-bold mb-5 mt-5 text-[#F3601A]'>All Rating</h1>
             {details?.reviews?.length <=0 ? <h1 className='md:text-4xl text-center font-bold text-gray-400 mt-10'>No Rating</h1> : ""}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    details?.reviews?.map((review, index) => 
                        <div key={index} className='border border-[#F3601A] rounded-md shadow-lg p-5'>
                            <div className='flex items-center space-x-1 mb-2'>
                                <FcRating size={25}/>
                                <h1 className='font-bold'>{review.rating}</h1>
                            </div>
                            <h1 className='font-semibold mb-1 text-gray-600'>{review.email}</h1>
                            <h1 className='text-gray-500'>{review.comment}</h1>
                        </div>
                    )
                }
            </div>
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