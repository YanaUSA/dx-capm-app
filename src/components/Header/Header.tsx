import { Link } from 'react-router-dom';
import Button from '@kit/Button/Button';
import Icon from '@kit/Icon/Icon';

import styles from './Header.module.scss';

const Header: React.FC = () => {
    const clientSite = 'https://dexola.com/';
    return (
        <div className={styles.header}>
            <div className={styles.headerBox}>
                <Link
                    to={clientSite}
                    target="_blank"
                    className={styles.logoLink}
                    aria-label="Link to Dexola homepage"
                >
                    <Icon name="icon-Logo" widthSize="35" heightSize="20" />
                </Link>

                <Button
                    className={styles.headerBtn}
                    type="submit"
                    ariaLabel="Connect wallet"
                >
                    Connect wallet
                </Button>
            </div>
        </div>
    );
};

export default Header;
