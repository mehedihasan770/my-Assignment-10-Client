import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import 'aos/dist/aos.css';
import { FcRating } from 'react-icons/fc';
// import loading from '../../components/Loading/Loading'

const Services = () => {
    const [service, setServices] = useState([])
    const [load, setLoad] = useState(false)
    const [reLoad, setReLoad] = useState(true)
    const placeholders = Array.from({ length: 8 });
    const [allServices, setAllServices] = useState([])
    const [categories, setCategories] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortOption, setSortOption] = useState("default")
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(8)

    Aos.init({
          duration: 1000,
          once: true, 
    });

    useEffect(() => {
        setLoad(true)
        fetch('https://home-hero-server-ten.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setAllServices(data)
            
            const uniqueCategories = [...new Set(data.map(item => item.service_category))]
            setCategories(["all", ...uniqueCategories])
            setLoad(false)
        })
    }, [reLoad])

    const handleFilterServices = e => {
        e.preventDefault();
        setLoad(true)
        const min = e.target.min.value;
        const max = e.target.max.value;
        fetch(`https://home-hero-server-ten.vercel.app/service/filter?min=${min}&max=${max}`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
            e.target.reset();
            setLoad(false)
        })
    }

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase()
        setSearchTerm(value)
        
        let filtered = allServices
        
        if (value) {
            filtered = filtered.filter(item => 
                item.service_name.toLowerCase().includes(value) ||
                item.service_description.toLowerCase().includes(value) ||
                item.provider_name.toLowerCase().includes(value)
            )
        }
        
        if (selectedCategory !== "all") {
            filtered = filtered.filter(item => item.service_category === selectedCategory)
        }
        
        filtered = sortServices(filtered, sortOption)
        
        setServices(filtered)
        setCurrentPage(1)
    }
    
    const handleCategoryFilter = (category) => {
        setSelectedCategory(category)
        
        let filtered = allServices
        
        if (category !== "all") {
            filtered = filtered.filter(item => item.service_category === category)
        }
        
        if (searchTerm) {
            filtered = filtered.filter(item => 
                item.service_name.toLowerCase().includes(searchTerm) ||
                item.service_description.toLowerCase().includes(searchTerm) ||
                item.provider_name.toLowerCase().includes(searchTerm)
            )
        }
        
        filtered = sortServices(filtered, sortOption)
        
        setServices(filtered)
        setCurrentPage(1)
    }
    
    const sortServices = (data, option) => {
        const sortedData = [...data]
        
        switch(option) {
            case "price-low":
                return sortedData.sort((a, b) => a.service_Price - b.service_Price)
            case "price-high":
                return sortedData.sort((a, b) => b.service_Price - a.service_Price)
            case "rating":
                return sortedData.sort((a, b) => b.avaregRating - a.avaregRating)
            case "name-asc":
                return sortedData.sort((a, b) => a.service_name.localeCompare(b.service_name))
            case "name-desc":
                return sortedData.sort((a, b) => b.service_name.localeCompare(a.service_name))
            default:
                return sortedData
        }
    }
    
    const handleSortChange = (e) => {
        const value = e.target.value
        setSortOption(value)
        
        let filtered = allServices
        
        if (searchTerm) {
            filtered = filtered.filter(item => 
                item.service_name.toLowerCase().includes(searchTerm) ||
                item.service_description.toLowerCase().includes(searchTerm) ||
                item.provider_name.toLowerCase().includes(searchTerm)
            )
        }
        
        if (selectedCategory !== "all") {
            filtered = filtered.filter(item => item.service_category === selectedCategory)
        }
        
        const sortedData = sortServices(filtered, value)
        
        setServices(sortedData)
        setCurrentPage(1)
    }

    const iOfLastItem = currentPage * itemsPerPage
    const iOfFirstItem = iOfLastItem - itemsPerPage
    const currentItems = service.slice(iOfFirstItem, iOfLastItem)
    const totalPages = Math.ceil(service.length / itemsPerPage)
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className='py-20'>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search services by name, description or provider..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-3 border-2 border-[#0058DD] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0058DD]"
                />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap gap-2">
                    {categories.length === 0 ? 
                    (
                        <div className="space-y-2 flex flex-wrap gap-2">
                            <div className="h-4 bg-gray-300 px-15 py-5 rounded-2xl"></div>
                            <div className="h-4 bg-gray-300 px-15 py-5 rounded-2xl"></div>
                            <div className="h-4 bg-gray-300 px-15 py-5 rounded-2xl"></div>
                            <div className="h-4 bg-gray-300 px-15 py-5 rounded-2xl"></div>
                            <div className="h-4 bg-gray-300 px-15 py-5 rounded-2xl"></div>
                            <div className="h-4 bg-gray-300 px-15 py-5 rounded-2xl"></div>
                        </div>
                    )
                    : categories.map((category, i) => (
                        <button
                            key={i}
                            onClick={() => handleCategoryFilter(category)}
                            className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all ${
                                selectedCategory === category 
                                ? 'bg-[#F3601A] text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {category === "all" ? "All Categories" : category}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <span className="font-bold">Sort by :</span>
                    <select 
                        value={sortOption}
                        onChange={handleSortChange}
                        className="border-2 border-[#0058DD] bg-white/10 text-gray-500 rounded-xl p-2 focus:outline-none"
                    >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rating</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>
                </div>
            </div>

            <form onSubmit={handleFilterServices} className="flex gap-1 my-4">
                <input
                type="number"
                name='min'
                required
                placeholder="Min Price"
                className="input input-bordered"
                />
                <input
                type="number"
                name='max'
                required
                placeholder="Max Price"
                className="input input-bordered"
                />
                <button className="btn border-2 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]">Filter</button>
                <button type='button' onClick={() => setReLoad(!reLoad)} className="btn border-2 border-[#F3601A] text-[#F3601A] font-bold hover:text-white hover:bg-[#F3601A]">Reload page</button>
            </form>
            
            <div className="text-2xl mb-5 text-[#F3601A] font-bold">
                Showing {currentItems.length} of {service.length} services
            </div>

            {load ? '' : service.length === 0 && <div className='text-3xl flex justify-center text-gray-400 font-bold items-center min-h-[calc(100vh-180px)]'><h1>No Data</h1></div>}
            <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {load ? placeholders.map((_, i) => (
                    <div
                        key={i}
                        className="p-3 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 animate-pulse"
                    >
                        <div className="relative">
                            <div className="w-full h-60 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-3"></div>
                            <div className="flex space-x-2 absolute top-3 left-3">
                                <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                                <div className="h-6 w-20 bg-gray-300 rounded-full flex items-center justify-center"></div>
                            </div>
                        </div>
                        <div className="p-5 space-y-3">
                            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                            </div>
                            <div className="h-5 bg-gray-300 rounded w-1/2 mt-2"></div>
                            <div className="h-10 bg-gray-300 rounded w-full mt-3"></div>
                        </div>
                    </div>
                )) : currentItems.map( ser => (
                    
                    <div key={ser._id} className="p-3 rounded-2xl shadow-lg dark:shadow-gray-700 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-600 duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="relative">
                            <img src={ser.service_imageURL} alt="ser.service_imageURL" className="w-full rounded-2xl h-60 overflow-hidden object-cover hover:scale-105 transition-transform duration-400"/>
                            <div className='flex space-x-1 absolute top-3 left-3'>
                                <span className="text-white bg-blue-500 text-sm font-semibold px-3 py-1 rounded-full shadow-md">${ser.service_Price}</span>
                                <div className='flex space-x-1 items-center text-white bg-blue-500 text-sm font-semibold px-3 py-1 rounded-full shadow-md'>
                                    <FcRating size={20}/>
                                    <span className="">{ser?.avaregRating?.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-[#F3601A] dark:text-gray-100 mb-2">{ser.service_name}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2 h-10 overflow-hidden">
                                {ser.service_description || "No description available"}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-300">
                                <div>
                                    <p className="font-medium dark:text-gray-200">{ser.provider_name}</p>
                                </div>
                                <p className="text-xs">{ser.service_category}</p>
                            </div>
                            <span className="text-xs bg-[#F3601A] text-white dark:bg-gray-700 px-3 py-1 rounded-full">{ser.contact_email}</span>
                            <Link to={`/details/${ser._id}`}>
                                <button className="btn border-2 w-full mt-3 border-[#0058DD] text-[#0058DD] font-bold hover:text-white hover:bg-[#0058DD]">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>

                ))}
            </div>

            {service.length > itemsPerPage && (
                <div className="flex justify-center items-center gap-2 mt-10">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-xl font-medium ${
                            currentPage === 1 
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                            : 'bg-[#0058DD] text-white cursor-pointer hover:bg-[#0058DD]/90'
                        }`}
                    >
                        Prev
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`px-4 py-2 rounded-xl font-medium ${
                                currentPage === pageNumber 
                                ? 'bg-[#F3601A] text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-xl font-medium ${
                            currentPage === totalPages 
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                            : 'bg-[#0058DD] text-white cursor-pointer hover:bg-[#0058DD]/90'
                        }`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Services;