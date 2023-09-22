import Header from '../Header/Header';
import StakeDashboard from '../StakeDashboard/StakeDashboard';

import styles from './AppBar.module.scss';

const AppBar: React.FC = () => {
    return (
        <>
            <div className={styles.appBarContainer}>
                <Header />
                <StakeDashboard />
            </div>
        </>
    );
};

export default AppBar;
