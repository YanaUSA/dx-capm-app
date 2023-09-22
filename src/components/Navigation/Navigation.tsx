import { NavLink } from 'react-router-dom';
import { PATHS } from '@constants/path';
import { useAccount } from 'wagmi';

import styles from './Navigation.module.scss';

const navigation = [
    { id: 1, name: 'Stake', to: PATHS.STAKE },
    { id: 2, name: 'Withdraw', to: PATHS.WITHDRAW },
    { id: 3, name: 'Claim rewards', to: PATHS.REWARDS },
];

const Navigation: React.FC = () => {
    const { isConnected } = useAccount();

    return (
        <div className={styles.navContainer}>
            <nav className={styles.navigation} aria-label="Navigation panel">
                <ul className={styles.navLinkList}>
                    {navigation.map(({ id, name, to }) => (
                        <li key={id} className={styles.navItem}>
                            <NavLink
                                to={isConnected ? `${to}` : '/'}
                                className={styles.navItemLink}
                                aria-label={`Navigate to ${name}`}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
