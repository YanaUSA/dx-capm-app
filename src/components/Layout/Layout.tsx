import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import styles from './Layout.module.scss';

// const Layout: React.FC  = () => {
//     return (
//         <div className={styles.container}>
//             <AppBar />
//             <Suspense fallback={null}>
//                 <main>
//                     <Outlet />
//                 </main>
//             </Suspense>
//             <Footer />
//         </div>
//     );
// };

const Layout: React.FC = () => {
    return (
        <>
            <div className={styles.mainWrapper}>
                <AppBar /></div>
                <div className={styles.mainContainer}>
                    <Navigation />
                    <Suspense fallback={null}>
                        <main>
                            <Outlet />
                        </main>
                    </Suspense>
                    <Footer />
                
            </div>
        </>
    );
};

export default Layout;
