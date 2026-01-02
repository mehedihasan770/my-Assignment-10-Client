import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../authContext/AuthContext";
import { CgProfile } from "react-icons/cg";
import { IoBagAddSharp, IoBagCheckSharp, IoBookmarks, IoHome, IoLogOutOutline, IoSunnySharp } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
import { IoIosHome } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
    const {user,  loading} = useContext(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const links = <>
        <li><NavLink to={'/'}><IoHome />Home</NavLink></li>
        <li><NavLink to={'/services'}><LuBaggageClaim />Services</NavLink></li>
        <li><NavLink to={'/about'}><LuBaggageClaim />About</NavLink></li>
        <li><NavLink to={'/terms-privacy'}><LuBaggageClaim />Terms Privacy</NavLink></li>
    </>


    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute('data-theme', theme)
        localStorage.setItem("theme", theme);
    }, [theme]);
    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
<div className='bg-[#0058DD]/80 backdrop-blur-sm shadow-sm'>
<div className="navbar px-2 md:px-0 md:max-w-10/12 mx-auto p-0">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="z-200 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to={'/'} className="flex items-center">
      <IoIosHome className="md:text-2xl text-[20px] font-bold text-[#F3601A]"/>
      <a className="md:text-2xl text-[20px] font-bold text-[#F3601A]">Home Hero</a>
    </Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    { loading ?   <div class="loader">
    <span class="loader-text">loading</span>
      <span class="load"></span>
  </div> : user ? 
    <div className="flex justify-center items-center space-x-3">
      <div className="dropdown dropdown-end z-200 cursor-pointer">
        <img tabIndex={0} role="button" className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
        <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
          <div className="w-45">
            <h1 className="text-center mb-1 font-semibold">{user?.displayName}</h1>
            <Link to={'/dashboard'} className="btn h-7 mb-2 w-full btn-soft hover:bg-[#F3601A] hover:text-white"><CgProfile />Dashboard</Link>
          </div>
        </div>
      </div>
      <span onClick={handleTheme}>
          <span className="cursor-pointer">{theme === "dark" ? (<FaMoon size={30} />) : (<IoSunnySharp size={30} />)}</span>
      </span>
    </div> :
    <div className="flex space-x-3 items-center">
      <Link to={'/sign_in'} className="btn border-2 md:text-[16px] border-[#F3601A] bg-[#0058DD] text-[#ffffff] font-bold hover:text-white hover:bg-[#0058DD] w-16 h-8 md:w-32 md:h-10">Signin</Link>
      <Link to={'/sign_up'} className="btn md:text-[16px] border-2 border-[#F3601A] bg-[#F3601A] text-white w-16 h-8 md:w-32 md:h-10">Signup</Link>
      <span onClick={handleTheme}>
          <span className="cursor-pointer">{theme === "dark" ? (<FaMoon size={30} />) : (<IoSunnySharp size={30} />)}</span>
      </span>
    </div>
    }
  </div>
</div>
</div>
    );
};

export default Navbar;