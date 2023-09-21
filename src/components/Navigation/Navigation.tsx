import { NavLink } from 'react-router-dom';
import { PATHS } from '@constants/path';
// import { useAccount } from 'wagmi';

import styles from './Navigation.module.scss';


const navigation = [
    { id: 1, name: 'Stake', to: PATHS.STAKE },
    { id: 2, name: 'Withdraw', to: PATHS.WITHDRAW },
    { id: 3, name: 'Claim rewards', to: PATHS.REWARDS },
    // { id: 4, name: 'Home', to: PATHS.HOME },
];

const Navigation = () => {
    // const { isConnected } = useAccount();

    return (
      <div className={styles.navContainer}>
        <nav className={styles.navigation}>

            {/* {isLoggedIn && ( */}
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/stake">Stake</NavLink>
            <NavLink to="/withdraw">Withdraw</NavLink>
            <NavLink to="/rewards">Claim rewards</NavLink> */}
            {/* )} */}

            <ul className={styles.navLinkList}>
                {navigation.map(({ id, name, to }) => (
                    <li key={id} className={styles.navItem}>
                        <NavLink to={to} className={styles.navItemLink}>{name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav></div>
        
    );
};

export default Navigation;
