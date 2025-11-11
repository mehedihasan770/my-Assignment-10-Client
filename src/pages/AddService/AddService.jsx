import React, { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import Swal from 'sweetalert2';
import { useLoading } from '../../Hooks/useLoading';
import Loading from '../../components/Loading/Loading';

const AddService = () => {
    const {user} = useContext(AuthContext)
    const {loading1} = useLoading()

    const handleAddService = e => {
        e.preventDefault();
        const service_name = e.target.service_name.value;
        const service_category = e.target.service_category.value;
        const service_Price = parseInt(e.target.service_Price.value);
        const service_imageURL = e.target.service_imageURL.value;
        const provider_name = e.target.provider_name.value;
        const provider_email = user?.email;
        const reviews = [];
        const contact_email = e.target.contact_email.value;
        const service_description = e.target.description.value;
        const newService = {service_name, reviews, service_category, service_Price, service_imageURL, provider_name, contact_email, provider_email, service_description}
        fetch('http://localhost:3000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: "Services Added Successful",
                    icon: "success",
                    draggable: true
                });
                e.target.reset();
            }
        })
    }

    if(loading1){
        return <Loading></Loading>
    }

    return (
        <div className='mt-10'>
            <h1 className='text-center text-2xl font-bold mb-5 text-[#F3601A]'>Add Your Home Services</h1>
        <div className='max-w-[700px] border border-[#F3601A] mx-auto rounded-2xl p-5'>
            <form onSubmit={handleAddService}>
                <fieldset className="fieldset">

                    <div className='md:flex md:justify-between space-x-3'>
                        <div className='w-full'>
                            <label className="label mb-1">Service Name</label>
                            <input type="text" className="input w-full" name='service_name' required placeholder="Service Name" />
                        </div>
                        <div className='w-full'>
                            <label className="label mb-1">Service Category</label>
                            <input type="text" className="input w-full" name='service_category' required placeholder="Service Category" />
                        </div>
                    </div>
    
                    <label className="label">Service Price</label>
                    <input type="number" className="input w-full" name='service_Price' required placeholder="Service Price" />

                    <label className="label">Service ImageURL</label>
                    <input type="text" className="input w-full" name='service_imageURL' required placeholder="Service ImageURL" />

                    <label className="label">Provider Name</label>
                    <input type="text" className="input w-full" defaultValue={user?.displayName} name='provider_name' required placeholder="Provider Name" />

                    <label className="label">Contact Email</label>
                    <input type="email" className="input w-full" defaultValue={user?.email} name='contact_email' required placeholder="Contact Email" />

                    <label className="label">Description</label>
                    <textarea name="description" required placeholder="Enter product description" rows="4" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"></textarea>

                    <button className="btn border-2 md:text-[16px] border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD] mt-4">Click To Add Service</button>
                </fieldset>
            </form>
        </div>
        </div>
    );
};

export default AddService;