import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MitOurExpart = () => {

    AOS.init({
        duration: 1000,
        once: true, 
    });

    return (
        <div>
            <div className="py-20">
                <h2 className="text-4xl font-bold mb-6 text-center">
                    Meet Our<span className="text-[#F3601A] text-center">Experts</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div data-aos="fade-up" data-aos-duration="1500" className="rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg duration-300 border border-amber-300">
                        <img src={img3} alt="" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                        <h3 className="text-xl font-semibold">Alex Rahman</h3>
                        <p className="text-sm text-indigo-600 font-medium mb-2">Senior Electrician</p>
                        <p className="text-sm mb-2">5+ years of experience</p>
                        <p className="text-sm">Expert in residential wiring, smart home setup, and emergency electrical repairs.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg duration-300 border border-amber-300">
                        <img src={img2} alt="" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                        <h3 className="text-xl font-semibold">Nadia Islam</h3>
                        <p className="text-sm text-indigo-600 font-medium mb-2">Professional Cleaner</p>
                        <p className="text-sm mb-2">4+ years of experience</p>
                        <p className="text-sm">Expert in deep cleaning, stain removal, and eco-friendly home sanitization.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg duration-300 border border-amber-300">
                        <img src={img4} alt="" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                        <h3 className="text-xl font-semibold">Tanvir Hossain</h3>
                        <p className="text-sm text-indigo-600 font-medium mb-2">Master Plumber</p>
                        <p className="text-sm mb-2">6+ years of experience</p>
                        <p className="text-sm">Handles pipe replacements, leak detection, and bathroom fixture installations with precision.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg duration-300 border border-amber-300">
                        <img src={img5} alt="" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                        <h3 className="text-xl font-semibold">Rina Akter</h3>
                        <p className="text-sm text-indigo-600 font-medium mb-2">Home Cleaning Specialist</p>
                        <p className="text-sm mb-2">3+ years of experience</p>
                        <p className="text-sm">Focused on kitchen, window, and floor cleaning with attention to detail and hygiene.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg duration-300 border border-amber-300">
                        <img src={img1} alt="" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                        <h3 className="text-xl font-semibold">Sajid Karim</h3>
                        <p className="text-sm text-indigo-600 font-medium mb-2">Electrical Technician</p>
                        <p className="text-sm mb-2">4+ years of experience</p>
                        <p className="text-sm">Experienced in fan/light installation, circuit troubleshooting, and load balancing.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg duration-300 border border-amber-300">
                        <img src={img6} alt="" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                        <h3 className="text-xl font-semibold">Farzana Chowdhury</h3>
                        <p className="text-sm text-indigo-600 font-medium mb-2">Plumbing Assistant</p>
                        <p className="text-sm mb-2">2+ years of experience</p>
                        <p className="text-sm">Assists in pipe fitting, drainage solutions, and water system maintenance for homes and offices.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MitOurExpart;