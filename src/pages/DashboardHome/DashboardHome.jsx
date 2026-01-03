import React, { useState, useEffect, use } from 'react';// আপনার AuthContext path
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import { AuthContext } from '../../authContext/AuthContext';
import toast from 'react-hot-toast';
import Skeleton from '../../components/Dashboard/Skeleton';

const DashboardHome = () => {
    const { user } = use(AuthContext)
    const [services, setServices] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetchData();
        }
    }, [user?.email]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const servicesRes = await fetch(`https://home-hero-server-ten.vercel.app/services?email=${user?.email}`);
            const bookingsRes = await fetch(`https://home-hero-server-ten.vercel.app/bookings?email=${user?.email}`);
            
            const servicesData = await servicesRes.json();
            const bookingsData = await bookingsRes.json();
            
            setServices(servicesData);
            setBookings(bookingsData);
        } catch (error) {
            toast.success("Something wrong", error);
        } finally {
            setLoading(false);
        }
    };

    const overviewData = [
        {
            title: 'Total Services',
            value: services.length,
            color: '#0058DD',
            icon: '📊'
        },
        {
            title: 'Total Bookings',
            value: bookings.length,
            color: '#F3601A',
            icon: '📅'
        },
        {
            title: 'Active Services',
            value: services.filter(s => s.status === 'active').length,
            color: '#10B981',
            icon: '✅'
        },
        {
            title: 'Pending Bookings',
            value: bookings.filter(b => b.status === 'pending').length,
            color: '#F59E0B',
            icon: '⏳'
        }
    ];

    const categoryData = services.reduce((acc, service) => {
        const category = service.service_category || 'Uncategorized';
        const existing = acc.find(item => item.name === category);
        if (existing) {
            existing.value += 1;
        } else {
            acc.push({ name: category, value: 1 });
        }
        return acc;
    }, []);

    const bookingStatusData = bookings.reduce((acc, booking) => {
        const status = booking.status || 'pending';
        const existing = acc.find(item => item.name === status);
        if (existing) {
            existing.value += 1;
        } else {
            acc.push({ name: status, value: 1 });
        }
        return acc;
    }, []);

    const monthlyData = bookings.reduce((acc, booking) => {
        const date = new Date(booking.createdAt || booking.date || new Date());
        const month = date.getMonth();
        const year = date.getFullYear();
        const key = `${year}-${month}`;
        
        const existing = acc.find(item => item.month === key);
        if (existing) {
            existing.bookings += 1;
        } else {
            acc.push({
                month: key,
                bookings: 1,
                monthName: date.toLocaleString('default', { month: 'short' })
            });
        }
        return acc;
    }, []).sort((a, b) => a.month.localeCompare(b.month));

    const COLORS = ['#0058DD', '#F3601A', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444'];

    if (loading) {
        return <Skeleton></Skeleton>
    }

    return (
        <div className="min-h-screen p-4 md:p-6 space-y-6">

            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[#F3601A]">Dashboard Overview</h1>
                <p className="text-gray-500 mt-2">Welcome back, {user?.displayName || user?.email}</p>
            </div>

            {/* Overview Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {overviewData.map((card, i) => (
                    <div 
                        key={i}
                        className="rounded-xl p-6 shadow hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">{card.title}</p>
                                <h3 className="text-3xl font-bold mt-2" style={{ color: card.color }}>
                                    {card.value}
                                </h3>
                            </div>
                            <div className="text-3xl">{card.icon}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
                <div className="rounded-xl shadow p-6">
                    <h3 className="text-xl font-bold text-[#F3601A] mb-4">Monthly Bookings</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={monthlyData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="monthName" stroke="#6B7280" />
                                    <YAxis stroke="#6B7280" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="bookings" fill="#0058DD" name="Bookings" />
                                </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="rounded-xl shadow p-6">
                        <h3 className="text-xl font-bold text-[#F3601A] mb-4">Service Categories</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={categoryData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={60}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {categoryData.map((entry, i) => (
                                            <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="rounded-xl shadow p-6">
                        <h3 className="text-xl font-bold text-[#F3601A] mb-4">Booking Status</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={bookingStatusData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="name" stroke="#6B7280" />
                                    <YAxis stroke="#6B7280" />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#10B981" name="Bookings" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl shadow p-6">
                <h3 className="text-xl font-bold text-[#F3601A] mb-4">Recent Services</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Service Name
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Created
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {services.slice(0, 5).map((service, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-3 text-sm text-gray-500">
                                        {service.service_name}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-500">
                                        {service.service_category}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-500 font-medium">
                                        ${service.service_Price}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            service.status === 'active' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {service.status || 'active'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-500">
                                        {new Date(service.createdAt || new Date()).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {services.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        No services found
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardHome;