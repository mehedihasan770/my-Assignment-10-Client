import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { FaEyeLowVision } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa';

const Signup = () => {
    const {signupWithEP, updateProfileUser, signInWithGoogle, setUser, setLoading} = useContext(AuthContext)
    const [show, setShow] = useState(true)
    const navigate = useNavigate()

    const handleEPSignUp = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        if(name.length < 5) return toast.error('Name must be at least 5 characters.')
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passwordRegex.test(pass))return toast.error('Password must be 6+ chars with A-Z & a-z.')
        signupWithEP(email, pass)
        .then(res => {
            updateProfileUser(name, photoURL)
            .then(() => {
                setLoading(false)
                setUser(res.user)
                toast.success('SignUp successful')
                navigate('/')
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message)
            })
        })
        .catch(error => {
            setLoading(false)
            toast.error(error.message)
        })
    }

    const handleGSignin = () => {
        signInWithGoogle()
        .then(res => {
            setLoading(false)
            setUser(res.user)
            toast.success('SignUp Successful')
            navigate('/')
        })
        .catch(error => {
            setLoading(false)
            toast.error(error.message)
        })
    }

    return (
        <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
            <title>signup</title>
            <form onSubmit={handleEPSignUp}>
                    <h1 className="md:text-4xl text-center mb-5 text-[20px] font-bold text-[#F3601A]">Signup now!</h1>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-90 border p-4">
            
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name='name' required placeholder="Name" />

                        <label className="label">Email</label>
                        <input type="email" className="input w-full" name='email' required placeholder="Email" />

                        <label className="label">PhotoURL</label>
                        <input type="text" className="input w-full" name='photoURL' required placeholder="Photo URL" />
            
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={show ? "password" : "text"} className="input w-full" name='pass' required placeholder="Password" />
                            <p className="absolute bottom-2.5 right-4" onClick={() => setShow(!show)}>{show ? <FaEyeLowVision size={21}/> : <FaEye size={20}/>}</p>
                        </div>

                        <button className="btn w-full border-2 md:text-[16px] mt-3 border-[#F3601A]  font-bold text-white bg-[#F3601A] h-8 md:h-10">Signup</button>
                        <div className="flex items-center">
                            <hr className="grow border-t border-gray-300" />
                            <span className="px-3 text-gray-500 text-sm">or</span>
                            <hr className="grow border-t border-gray-300" />
                        </div>
                        <button type='button' onClick={handleGSignin} className="btn md:text-[16px] border-2 border-[#F3601A] h-8 md:h-10"><FcGoogle size={25} />Signup with Email</button>
                        <h2 className="font-semibold pt-3">
                            Already Have An Account ?{" "}
                            <Link className="text-secondary" to={"/sign_in"}>Login</Link>
                        </h2>
                    </fieldset>
                </form>
        </div>
    );
};

export default Signup;