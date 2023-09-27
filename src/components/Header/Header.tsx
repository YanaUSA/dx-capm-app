import { Link } from 'react-router-dom';
import { useAccount, useConnect } from 'wagmi';
import Button from '@kit/Button/Button';
import Icon from '@kit/Icon/Icon';
import Account from '@components/Account/Account';
import { clientSite } from '@constants/constants';

import styles from './Header.module.scss';

const Header: React.FC = () => {
    const { connect, connectors, isLoading } = useConnect();
    const { isConnected } = useAccount();

    const mainConnector = connectors.find(
        connector => connector.id === 'metaMask'
    );

    return (
        <header className={styles.header}>
                <Link
                    to={clientSite}
                    target="_blank"
                    className={styles.logoLink}
                    aria-label="Link to Dexola homepage"
                >
                    <Icon name="icon-Logo" widthSize="35" heightSize="20" />
                </Link>

                {isConnected ? (
                    <div>
                        <Account/>
                    </div>
                ) : (
                    <div>
                        {connectors.map(
                            connector =>
                                connector === mainConnector && (
                                    <Button
                                        className={styles.headerBtn}
                                        type="submit"
                                        disabled={!connector.ready}
                                        loading={isLoading}
                                        key={connector.id}
                                        onClick={() => connect({ connector })}
                                        // buttonText="Connect wallet"
                                        ariaLabel={`Connect wallet via ${connector.name}`}
                                    >
                                        {connector.name}
                                        {!connector.ready && ' (unsupported)'}
                                    </Button>
                                )
                        )}
                    </div>
                )}
        </header>
    );
};

export default Header;
