import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../authContext/AuthContext";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { IoBagAddSharp, IoBagCheckSharp, IoBookmarks, IoHome, IoLogOutOutline, IoSunnySharp } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
import { IoIosHome } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
    const {user, signOutUser, loading} = useContext(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const links = <>
        <li><NavLink to={'/'}><IoHome />Home</NavLink></li>
        <li><NavLink to={'/services'}><LuBaggageClaim />Services</NavLink></li>
        {
          user && <>
            <li><NavLink to={'/my_services'}><IoBagCheckSharp />My Services</NavLink></li>
            <li><NavLink to={'/add_services'}><IoBagAddSharp />Add Service</NavLink></li>
            <li><NavLink to={'/my_bookings'}><IoBookmarks />My Bookings</NavLink></li>
          </>
        }
    </>

    const handleSignoutUser = () => {
      signOutUser()
      .then(() => {
          toast.success('Signout Successful')
      })
      .catch(error => {
          toast.error(error.message)
      })
    }

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute('data-theme', theme)
        localStorage.setItem("theme", theme);
    }, [theme]);
    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
<div className='bg-base-100 shadow-sm'>
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
    <a className="md:text-2xl text-[20px] font-bold text-[#F3601A]"><IoIosHome className="-mb-2.5 -ml-[3.5px]"/>Home Hero</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    { loading ? <h1>Loading...</h1> : user ? 
    <div className="flex justify-center items-center space-x-3">
      <div className="dropdown dropdown-end z-200 cursor-pointer">
        <img tabIndex={0} role="button" className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
        <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
          <div className="w-35">
            <h1 className="text-center mb-1 font-semibold">{user?.displayName}</h1>
            <Link to={'/my_profile'} className="btn h-7 mb-2 w-full btn-soft btn-primary"><CgProfile />Profile</Link>
            <button onClick={handleSignoutUser} className="btn h-7 w-full btn-soft btn-primary"><IoLogOutOutline />Log out</button>
          </div>
        </div>
      </div>
      <span onClick={handleTheme}>
          <span>{theme === "dark" ? (<FaMoon size={30} />) : (<IoSunnySharp size={30} />)}</span>
      </span>
    </div> :
    <div className="space-x-3">
      <Link to={'/sign_in'} className="btn border-2 md:text-[16px] border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD] w-16 h-8 md:w-32 md:h-10">Signin</Link>
      <Link to={'/sign_up'} className="btn md:text-[16px] border-2 border-[#F3601A] bg-[#F3601A] text-white w-16 h-8 md:w-32 md:h-10">Signup</Link>
    </div>
    }
  </div>
</div>
</div>
    );
};

export default Navbar;