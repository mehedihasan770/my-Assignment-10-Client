import React, { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';

const AddService = () => {
    const {user} = useContext(AuthContext)

    const handleAddService = e => {
        e.preventDefault();
        const service_name = e.target.service_name.value;
        const service_category = e.target.service_category.value;
        const service_Price = e.target.service_Price.value;
        const service_imageURL = e.target.service_imageURL.value;
        const provider_name = e.target.provider_name.value;
        const provider_email = user?.email;
        const contact_email = e.target.contact_email.value;
        const service_description = e.target.description.value;
        console.log({service_name, service_category, service_Price, service_imageURL, provider_name, contact_email, provider_email, service_description,})
    }
    return (
        <div className='max-w-[700px] border mx-auto rounded-2xl p-5 mt-10 md:mt-20'>
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

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddService;