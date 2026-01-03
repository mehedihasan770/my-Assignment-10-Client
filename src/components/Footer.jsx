import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoIosHome } from 'react-icons/io';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='shadow-[0_-4px_10px_rgba(0,0,0,0.1)] mt-5 px-3 md:px-0 py-10'>
        <div className='md:max-w-10/12 mx-auto border-2 border-gray-300 rounded-3xl p-8 shadow-md'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <div className="flex items-center">
                        <IoIosHome className="md:text-2xl text-[20px] font-bold text-[#F3601A]"/>
                        <a className="md:text-2xl text-[20px] font-bold text-[#F3601A]">Home Hero</a>
                    </div>
                    <p className='max-w-96 mt-5 mb-5 text-gray-400'>Trusted home services—electric, cleaning, plumbing & more. Safe, professional, and on-time support. Contact us anytime.</p>
                    <div className='flex space-x-3 items-center'>
                        <a href="https://www.linkedin.com/" target='blank' className='text-gray-600'><FaLinkedin size={25}/></a>
                        <a href="https://x.com/" target='blank' className='text-gray-600'><FaXTwitter size={25}/></a>
                        <a href="https://www.instagram.com/" target='blank' className='text-gray-600'><FiInstagram size={25}/></a>
                        <a href="https://github.com/" target='blank' className='text-gray-600'><FaGithub size={25}/></a>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-15 mt-15 lg:mt-0'>
                    <div>
                        <h1 className='font-bold'>Contact Information</h1>
                        <ul className='text-gray-400 space-y-2 mt-5'>
                            <li className='hover:underline'> <FaPhone color='gray' className='inline-block mr-1'/>+880 1712345678</li>
                            <li className='hover:underline'> <MdMarkEmailUnread className='inline-block mr-1'/>support@gmail.com</li>
                            <li className='hover:underline'> <MdMarkEmailUnread className='inline-block mr-1'/>home_hero@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold'>Company</h1>
                        <ul className='text-gray-400 space-y-2 mt-5'>
                            <li><Link to={'/about'} className='hover:underline'>About</Link></li>
                            <li><Link to={'/terms-privacy'} className='hover:underline'>Privacy</Link></li>
                            <li><Link to={'/services'} className='hover:underline'>All Services</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-gray-300 mt-5'>
                <div className='mt-4 text-gray-400 flex justify-between lg:flex-row flex-col-reverse'>
                    <h1>© 2026 Home Hero. All rights reserved.</h1>
                    <div>
                        <Link to={'terms-privacy'} className='underline'>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;