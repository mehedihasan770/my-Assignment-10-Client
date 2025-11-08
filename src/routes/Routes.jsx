import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Services from "../pages/Services/Services";
import MyServices from "../pages/MyServices/MyServices";
import AddService from "../pages/AddService/AddService";
import MyBookings from "../pages/MyBookings/MyBookings";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/my_services',
                element: <MyServices></MyServices>
            },
            {
                path: '/add_services',
                element: <AddService></AddService>
            },
            {
                path: '/my_bookings',
                element: <MyBookings></MyBookings>
            },
        ]
    }
])