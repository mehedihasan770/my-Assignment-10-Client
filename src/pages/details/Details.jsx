import  { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../authContext/AuthContext';
import Swal from 'sweetalert2';

const Details = () => {
    const {user} = useContext(AuthContext)
    const {id} = useParams()
    const [details, setDetails] = useState({})
    const modalRef = useRef()
    useEffect(() => {
        fetch(`http://localhost:3000/services/${id}`)
        .then(res => res.json())
        .then(data => {
            setDetails(data)
        })
    }, [id])
    console.log(details)

    const handleBook = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const date = e.target.date.value;
        const price = e.target.price.value;
        const name = details.service_name;
        const photo = details.service_imageURL;
        const services_id = details._id;
        const newBooking = {email, date, name, price, photo, services_id}
        fetch('http://localhost:3000/bookings', {
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
                    title: "Update Successful",
                    icon: "success",
                    draggable: true
                }); 
                e.target.reset()
            }
        })
        modalRef.current.close()
    }

    return (
        <div>
            <h1 className="md:text-4xl mb-5 bg-[#0058DD] mx-auto py-2 rounded-2xl text-white px-3 w-fit text-[20px] font-bold mt-5 md:mt-10">Service details</h1>
            <div className='flex lg:flex-row rounded-2xl p-5 space-x-4 flex-col shadow-sm'>
                <div className='flex-1'>
                    <img src={details?.service_imageURL} alt="" className='w-2xl md:h-[600px] border border-gray-400 rounded-2xl' />
                </div>
                <div className='flex-1'>
                    <h1 className='text-2xl font-bold border border-[#0058DD] w-fit px-2 py-1 rounded-2xl mt-2'>{details?.service_name}</h1>
                    <div className='border-t mt-3 mb-3 border-gray-400'></div>
                    <h1 className='bg-[#0058DD] w-fit py-1 px-2.5 text-white font-bold rounded-2xl'>price ${details?.service_Price}</h1>
                    <h1 className='font-semibold text-gray-600'>{details?.service_category}</h1>
                    <h1 className='font-semibold text-gray-600'>{details?.provider_name}</h1>
                    <h1 className='font-semibold text-gray-600'>{details?.contact_email}</h1>
                    <div className='border-t mt-3 mb-3 border-gray-400'></div>
                    <p className='text-gray-400'>{details?.service_description}</p>
                    <div className='border-t mt-3 mb-3 border-gray-400'></div>
                    { user?.email === details?.provider_email ? <p className='bg-[#0058DD] font-semibold py-2 rounded-2xl text-left text-white px-3 w-fit'>You built this service. So, you won’t be able to book.</p> : <button onClick={() => modalRef.current.showModal()} className='btn border-2 md:text-[16px] border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]'>Book now</button>}
                </div>
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
                        <input type="number" className="input w-full"  name='price' required placeholder='Price' />

                        <button className="btn border-2 mt-3 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]">Click to confirm Edit</button>
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