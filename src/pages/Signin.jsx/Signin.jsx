import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../authContext/AuthContext';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';

const Signin = () => {
    const {setUser, signinWithEP, signInWithGoogle, setLoading} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleEPSignin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        signinWithEP(email, pass)
        .then(res => {
            setLoading(false)
            setUser(res.user)
            toast.success('Signin Successful')
            navigate('/')
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
            toast.success('Signin Successful')
            navigate('/')
        })
        .catch(error => {
            setLoading(false)
            toast.error(error.message)
        })
    }

    return (
        <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
            <form onSubmit={handleEPSignin}>
                <h1 className="md:text-4xl text-center mb-5 text-[20px] font-bold text-[#F3601A]">Login now!</h1>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-90 border p-4">

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" name='pass' placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn w-full border-2 md:text-[16px] mt-3 border-[#0058DD]  font-bold text-white bg-[#0058DD] h-8 md:h-10">Login</button>
                    <div className="flex items-center">
                        <hr className="grow border-t border-gray-300" />
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <hr className="grow border-t border-gray-300" />
                    </div>
                    <button type='button' onClick={handleGSignin} className="btn md:text-[16px] border-2 border-[#F3601A] h-8 md:h-10"><FcGoogle size={25} />Login with Email</button>
                    <h2 className="font-semibold pt-3">
                        Dont't Have An Account ?{" "}
                        <Link className="text-secondary" to={"/sign_up"}>Signup</Link>
                    </h2>
                </fieldset>
            </form>
        </div>
    );
};

export default Signin;