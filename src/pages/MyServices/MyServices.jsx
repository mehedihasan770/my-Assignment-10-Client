import React from 'react';

const MyServices = () => {
    return (
        <div>
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
      <tr>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src="https://cleanandservice.xyz/storage/uploads/services/cover/img-671bd205ef9a8.jpg" alt="Service"/>
            </div>
          </div>
        </td>
        <td className="tebel">Premium Cleaning</td>
        <td className="tebel">$200</td>
        <td className="tebel">Home Service</td>
        <td>
          <button className="btn w-18 h-9 border-2 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]">Edit</button>
        </td>
        <td>
          <button className="btn w-18 h-9 border-2 border-[#FF0000] text-[#FF0000] font-bold hover:text-white hover:bg-[#FF0000]">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
        </div>
    );
};

export default MyServices;