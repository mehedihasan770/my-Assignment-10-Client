import { NavLink } from "react-router";

const Navbar = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li><NavLink to={'/my_services'}>My Services</NavLink></li>
        <li><NavLink to={'/add_services'}>Add Service</NavLink></li>
        <li><NavLink to={'/my_bookings'}>My Bookings</NavLink></li>
    </>

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
        className="z-200 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="md:text-2xl text-[20px] font-bold text-[#F3601A]">Home Hero</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    <a className="btn border-2 md:text-[16px] border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD] w-16 h-8 md:w-32 md:h-10">login</a>
    <a className="btn md:text-[16px] border-2 border-[#F3601A] bg-[#F3601A] text-white w-16 h-8 md:w-32 md:h-10">Signup</a>
  </div>
</div>
</div>
    );
};

export default Navbar;