import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='px-3 md:px-0 md:max-w-10/12 h-screen mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </>
    );
};

export default MainLayout;