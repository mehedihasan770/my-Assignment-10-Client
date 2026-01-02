import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Services from "../pages/Services/Services";
import MyServices from "../pages/MyServices/MyServices";
import AddService from "../pages/AddService/AddService";
import MyBookings from "../pages/MyBookings/MyBookings";
import Signin from "../pages/Signin.jsx/Signin";
import Signup from "../pages/Signup/Signup";
import PrivetRouts from "../privetRouts/PrivetRouts";
import MyProfile from "../pages/myProfile/MyProfile";
import Details from "../pages/details/details";
import PageNotFound from "../pages/ErrorPage/PageNotFound";
import About from "../pages/About/About";
import TermsPrivacy from "../pages/TermsPrivacy/TermsPrivacy";
import Dashboard from "../layouts/Dashboard";

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
                path: 'services',
                element: <Services></Services>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: 'terms-privacy',
                element: <TermsPrivacy></TermsPrivacy>
            },
            {
                path: 'details/:id',
                element: <PrivetRouts><Details></Details></PrivetRouts>
            },
            {
                path: 'sign_in',
                element: <Signin></Signin>
            },
            {
                path: 'sign_up',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRouts><Dashboard></Dashboard></PrivetRouts>,
        children: [
            {
                index: true,
                element: <Navigate to={'/dashboard/home'} />
            },
            {
                path: 'home',
                element: <h1>hallo</h1>
            },
            {
                path: "my_services",
                element: <PrivetRouts><MyServices></MyServices></PrivetRouts>
            },
            {
                path: 'add_services',
                element: <PrivetRouts><AddService></AddService></PrivetRouts>
            },
            {
                path: 'my_bookings',
                element: <PrivetRouts><MyBookings></MyBookings></PrivetRouts>
            },
            {
                path: 'my_profile',
                element: <PrivetRouts><MyProfile></MyProfile></PrivetRouts>
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])