import React, { useContext, useEffect, useState } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AuthContext } from '../../authContext/AuthContext';
import { FaStreetView } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyBookings = () => {
    const {user} = useContext(AuthContext)
    const [myBooking, setMyBooking] = useState([])
    const [shouldFetch, setShouldFetch] = useState(false);
    useEffect(() => {
        if(user){
            fetch(`http://localhost:3000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyBooking(data)
            })
        }
    }, [user, shouldFetch])
    console.log(myBooking)
    const handleDeleteBooking = id => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, cancel it!"
            })
            .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    Swal.fire({
                        title: "canceled!",
                        text: "Your booking has been canceled.",
                        icon: "success"
                    });
                    setShouldFetch(false)
                }
            })
            }
        });
        }

    return (
        <div>
            <div className='overflow-x-auto'> 
                <table className="table w-full min-w-[600px]">
                    <thead>
                      <tr>
                        <th className="">Photo</th>
                        <th className="tebel">Service Name</th>
                        <th className="tebel">Price</th>
                        <th className="tebel">date</th>
                      </tr>
                    </thead>
                    <tbody>
                        { myBooking.map(bookData =>
                      <tr key={bookData._id}  className='hover:shadow-lg duration-400'>
                        <td>
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={bookData.photo} alt="Service"/>
                            </div>
                          </div>
                        </td>
                        <td className="tebel font-semibold">{bookData.name}</td>
                        <td className="tebel"><p className='bg-[#0058DD] w-fit py-1 px-2.5 text-white font-bold rounded-2xl'>{bookData.price}</p></td>
                        <td className="tebel font-semibold">{bookData.date}</td>
                        <td>
                        <button className="btn border-2 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]">Add Review</button>
                        </td>
                        <td>
                          <button onClick={() => {
                            handleDeleteBooking(bookData._id)
                            setShouldFetch(true)
                          }} className="btn border-2 border-[#FF0000] text-[#FF0000] font-bold hover:text-white hover:bg-[#FF0000]"><RiDeleteBin5Fill />Book Cancel</button>
                        </td>
                      </tr>
                      )}
                    </tbody>
                  </table>
            </div>
        </div>
    );
};

export default MyBookings;