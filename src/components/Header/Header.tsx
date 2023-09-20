import { Link } from 'react-router-dom';
import {
    useAccount,
    // useConnect,
    // useDisconnect,
    // useEnsAvatar,
    // useEnsName,
} from 'wagmi';

import Button from '@kit/Button/Button';
import Icon from '@kit/Icon/Icon';
import { clientSite } from '@constants/constants';

import Account from '../Account/Account';

import styles from './Header.module.scss';

const Header: React.FC = () => {
    const { connector: activeConnector, isConnected } = useAccount();

    return (
        <header className={styles.header}>
            <div className={styles.headerBox}>
                <Link
                    to={clientSite}
                    target="_blank"
                    className={styles.logoLink}
                    aria-label="Link to Dexola homepage"
                >
                    <Icon name="icon-Logo" widthSize="35" heightSize="20" />
                </Link>

                {isConnected ? (
                    <Account
                        currentAccount={
                            '0x3159515F1dFc44C8fc9db8107290a4EA657E2547'
                        }
                        tokenAmount={'345'}
                        gasBalance={'4.5111111554202'}
                    />
                ) : (
                    <Button
                        className={styles.headerBtn}
                        type="submit"
                        buttonText="Connect wallet"
                        ariaLabel="Connect wallet"
                    />
                )}
            </div>
        </header>
    );
};

export default Header;
