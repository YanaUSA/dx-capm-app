import Header from '../Header/Header';
// import Navigation from '../Navigation/Navigation';
import StakeDashboard from '../StakeDashboard/StakeDashboard';

import styles from './AppBar.module.scss';

const AppBar = () => {
    return (
        <>
            <div className={styles.headerWrapper}>
                <div className={styles.headerContainer}>
                <Header />
                <StakeDashboard />
                </div>
            </div>         
        </>
    );
};

export default AppBar;
