import React from 'react';

const Signin = () => {
    return (
        <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
            <form>
                <h1 className="md:text-4xl text-center mb-5 text-[20px] font-bold text-[#F3601A]">Login now!</h1>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-90 border p-4">

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn w-full border-2 md:text-[16px] mt-3 border-[#0058DD]  font-bold text-white bg-[#0058DD] h-8 md:h-10">Signin</button>
                    <div className="flex items-center">
                        <hr className="grow border-t border-gray-300" />
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <hr className="grow border-t border-gray-300" />
                    </div>
                    <button className="btn md:text-[16px] border-2 border-[#F3601A] bg-[#F3601A] text-white h-8 md:h-10">Signup</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Signin;