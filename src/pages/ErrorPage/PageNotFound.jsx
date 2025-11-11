import { Link } from "react-router";
import error from '../../assets/Error.jpg'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer";

const PageNotFound = () => {
    return (
        <div className="min-h-[calc(100vh-100px)] flex justify-center items-center text-center">
            <div className='space-y-5'>
                <div>
                    <img className='w-[200px] rounded-2xl md:w-[300px] lg:w-[400px] mx-auto' src={error} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl md:text-5xl font-semibold'>Oops, page not found!</h1>
                </div>
                <div>
                    <p className='text-gray-500'>The page you are looking for is not available.</p>
                </div>
                <div className="w-fit mx-auto">
                    <Link to={'/'}><button className='btn border-2 md:text-[16px] border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]'>Back To Home!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;