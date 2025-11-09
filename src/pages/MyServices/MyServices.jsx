import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AuthContext } from '../../authContext/AuthContext';
import toast from 'react-hot-toast';

const MyServices = () => {
    const {user} = useContext(AuthContext)
    const modalRef = useRef()
    const [myServices, setMyServices] = useState([])
    const [singleServices1, setSingleServices] = useState({})
    const [shouldFetch, setShouldFetch] = useState(false);
    useEffect(() => {
        if(user){
            fetch(`http://localhost:3000/services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyServices(data)
            })
        }
    }, [user, shouldFetch])

    const handleFindEditServices = id => {
        modalRef.current.showModal()
        const singleServices = myServices.find(services => services._id === id)
        setSingleServices(singleServices)
    }

    const handleUpdateServices = e => {
        e.preventDefault();
        const service_name = e.target.service_name.value;
        const service_category = e.target.service_category.value;
        const service_Price = e.target.service_Price.value;
        const service_imageURL = e.target.service_imageURL.value;
        const provider_name = e.target.provider_name.value;
        const provider_email = user?.email;
        const contact_email = e.target.contact_email.value;
        const service_description = e.target.description.value;
        const newService = {service_name, service_category, service_Price, service_imageURL, provider_name, contact_email, provider_email, service_description}
        fetch(`http://localhost:3000/services/${singleServices1?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setShouldFetch(false)
            toast.success('Service Edit Successful')
        })
        modalRef.current.close()
    }

    const handleDeleteServices = id => {
        console.log(id)
        fetch(`http://localhost:3000/services/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setShouldFetch(false)
        })
    }

    return (
        <div>
            <h1 className="md:text-4xl text-center mb-5 text-[20px] font-bold text-[#F3601A] mt-10 md:mt-20">My Service</h1>
            <div className="overflow-x-auto">
  <table className="table w-full min-w-[600px]">
    <thead>
      <tr>
        <th className="">Photo</th>
        <th className="tebel">Service Name</th>
        <th className="tebel">Price</th>
        <th className="tebel">Category</th>
      </tr>
    </thead>
    <tbody>
        { myServices.map(services => 
      <tr key={services._id} className='hover:shadow-lg duration-400'>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={services?.service_imageURL} alt="Service"/>
            </div>
          </div>
        </td>
        <td className="tebel font-semibold">{services?.service_name}</td>
        <td className="tebel"><p className='bg-[#0058DD] w-fit py-1 px-2.5 text-white font-bold rounded-2xl'>${services?.service_Price}</p></td>
        <td className="tebel font-semibold">{services?.service_category}</td>
        <td>
          <button onClick={() => handleFindEditServices(services._id)} className="btn border-2 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]"><FaEdit />Edit</button>
        </td>
        <td>
          <button onClick={() => {
            handleDeleteServices(services._id)
            setShouldFetch(true)
          }} className="btn border-2 border-[#FF0000] text-[#FF0000] font-bold hover:text-white hover:bg-[#FF0000]"><RiDeleteBin5Fill />Delete</button>
        </td>
      </tr>)}
    </tbody>
  </table>
  </div>
        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form onSubmit={handleUpdateServices}>
                    <fieldset className="fieldset">

                    <div className='md:flex md:justify-between space-x-3'>
                        <div className='w-full'>
                            <label className="label mb-1">Service Name</label>
                            <input type="text" className="input w-full" defaultValue={singleServices1?.service_name} name='service_name' required placeholder="Service Name" />
                        </div>
                        <div className='w-full'>
                            <label className="label mb-1">Service Category</label>
                            <input type="text" className="input w-full" defaultValue={singleServices1?.service_category} name='service_category' required placeholder="Service Category" />
                        </div>
                    </div>
    
                    <label className="label">Service Price</label>
                    <input type="number" className="input w-full" defaultValue={singleServices1?.service_Price} name='service_Price' required placeholder="Service Price" />

                    <label className="label">Service ImageURL</label>
                    <input type="text" className="input w-full" defaultValue={singleServices1?.service_imageURL} name='service_imageURL' required placeholder="Service ImageURL" />

                    <label className="label">Provider Name</label>
                    <input type="text" className="input w-full" defaultValue={singleServices1?.provider_name} name='provider_name' required placeholder="Provider Name" />

                    <label className="label">Contact Email</label>
                    <input type="email" className="input w-full" defaultValue={singleServices1?.contact_email} name='contact_email' required placeholder="Contact Email" />

                    <label className="label">Description</label>
                    <textarea name="description" defaultValue={singleServices1?.service_description} required placeholder="Enter product description" rows="4" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"></textarea>

                    <button onClick={() => setShouldFetch(true)} className="btn border-2 md:text-[16px] border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD] mt-4">Click To Edit Service</button>
                </fieldset>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
    );
};

export default MyServices;