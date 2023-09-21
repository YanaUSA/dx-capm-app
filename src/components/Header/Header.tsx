import { Link } from 'react-router-dom';
import { useAccount, useConnect, useBalance } from 'wagmi';

import type { Address } from 'wagmi'

import Button from '@kit/Button/Button';
import Icon from '@kit/Icon/Icon';
import { clientSite } from '@constants/constants';

import Account from '../Account/Account';

import styles from './Header.module.scss';

const Header: React.FC = () => {
    const { address, isConnected } = useAccount();
    const { connect, connectors, error, pendingConnector } =
        useConnect();

    const { data, isError, isLoading } = useBalance({
        address: address as Address,
    });

    const mainConnector = connectors.find(
        connector => connector.id === 'metaMask'
    );

    console.log('data', data)

    console.log('typeof-address', typeof address)

    console.log('typeof-data', typeof data?.formatted)

    if (isLoading) return <div>Fetching balance…</div>;
    if (isError) return <div>Error fetching balance</div>;

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
                    <div>
                    Balance: {data?.formatted} {data?.symbol}

                
                    <Account
                    currentAccount={address}
                        // currentAccount={
                        //     '0x3159515F1dFc44C8fc9db8107290a4EA657E2547'
                        // }
                        tokenAmount={'345'}
                        // gasBalance={'4.5111111554202'}
                        ethBalance={data?.formatted}
                    /></div>
                ) : (
                    <div>
                        {/* {connectors.map(
                            connector =>
                                connector === mainConnector && (
                                    <Button
                                        className={styles.headerBtn}
                                        type="submit"
                                        disabled={!connector.ready}
                                        key={connector.id}
                                        onClick={() => connect({ connector })}
                                        // buttonText="Connect wallet"
                                        ariaLabel={`Connect wallet via ${connector.name}`}
                                    >
                                        {connector.name}
                                        {!connector.ready && ' (unsupported)'}
                                        {isLoading &&
                                            pendingConnector?.id ===
                                                connector.id &&
                                            ' (connecting)'}
                                    </Button>
                                )
                        )} */}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
