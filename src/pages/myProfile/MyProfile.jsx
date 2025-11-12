import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import toast from 'react-hot-toast';
import { useLoading } from '../../Hooks/useLoading';
import Loading from '../../components/Loading/Loading';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
    const {user, updateProfileUser, setLoading} = useContext(AuthContext)
    const {loading1} = useLoading()
    const modalRef = useRef()
    const handleProfileUpdateUser = e => {
        e.preventDefault()
        const displayName = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        if(displayName.length < 5) return toast.error('Name must be at least 5 characters.')
        updateProfileUser(displayName, photoURL)
        .then(() => {
            setLoading(false)
            toast.success('Update successful')
        })
        .catch(error => {
            setLoading(false)
            toast.error(error.message)
        })
        modalRef.current.close()
    }

    if(loading1){
        return <Loading></Loading>
    }

    return (
        <div className='flex mt-10 justify-center'>
            <div className="max-w-sm w-full dark:bg-gray-900 border border-[#F3601A] dark:border-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
                <img src={user.photoURL} alt="" className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-sm"/>
                <h2 className="mt-4 text-lg font-bold text-gray-600">{user?.displayName}</h2>
                <p className="text-sm font-semibold text-gray-600"><MdMarkEmailUnread  className='inline-block mr-1' />{user?.email}</p>
                <p className="text-sm text-gray-400"><span className='text-gray-600 font-semibold'>last Login date :</span> {user?.metadata?.lastSignInTime.split(' ').slice(0, 4).join(' ')}</p>
                <button onClick={() => modalRef.current.showModal()} className="btn btn-outline border-2 mt-3 btn-primary"><FaEdit />Edit Profile</button>
            </div>
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleProfileUpdateUser}>
                    <fieldset className="fieldset rounded-box p-4">

                        <label className="label">Name</label>
                        <input type="text" className="input w-full" defaultValue={user?.displayName} name='name' required placeholder="Name" />

                        <label className="label">PhotoURL</label>
                        <input type="text" className="input w-full" defaultValue={user?.photoURL} name='photoURL' required placeholder="Photo URL" />

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

export default MyProfile;