import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';


const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>
                <main>
                    <Outlet />
                </main>
            </Suspense>
            <Footer />
        </div>
    );
};

export default Layout