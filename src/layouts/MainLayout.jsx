import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <header>

            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                
            </footer>
        </>
    );
};

export default MainLayout;