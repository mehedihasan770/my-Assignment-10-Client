import React, { useContext, useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AuthContext } from '../../authContext/AuthContext';

const MyServices = () => {
    const {user} = useContext(AuthContext)
    const [myServices, setMyServices] = useState([])
    useEffect(() => {
        if(user){
            fetch(`http://localhost:3000/services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyServices(data)
            })
        }
    }, [user])

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
      <tr key={services._id} className='hover:shadow-lg duration-600'>
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
          <button className="btn border-2 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]"><FaEdit />Edit</button>
        </td>
        <td>
          <button className="btn border-2 border-[#FF0000] text-[#FF0000] font-bold hover:text-white hover:bg-[#FF0000]"><RiDeleteBin5Fill />Delete</button>
        </td>
      </tr>)}
    </tbody>
  </table>
  </div>
        </div>
    );
};

export default MyServices;