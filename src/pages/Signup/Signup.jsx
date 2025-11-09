import React, { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const Signup = () => {
    const {signupWithEP, updateProfileUser, setUser, setLoading} = useContext(AuthContext)
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

    return (
        <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
            <title>signup</title>
            <form onSubmit={handleEPSignUp}>
                    <h1 className="md:text-4xl text-center mb-5 text-[20px] font-bold text-[#F3601A]">signup now!</h1>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-90 border p-4">
            
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' required placeholder="Name" />

                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' required placeholder="Email" />

                        <label className="label">PhotoURL</label>
                        <input type="text" className="input" name='photoURL' required placeholder="Photo URL" />
            
                        <label className="label">Password</label>
                        <input type="password" className="input" name='pass' required placeholder="Password" />

                        <button className="btn w-full border-2 md:text-[16px] mt-3 border-[#F3601A]  font-bold text-white bg-[#F3601A] h-8 md:h-10">Signup</button>
                    </fieldset>
                </form>
        </div>
    );
};

export default Signup;