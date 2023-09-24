import { Link } from 'react-router-dom';
import { useAccount, useConnect, useBalance, useContractRead } from 'wagmi';

// import type { Address } from 'wagmi';

import Button from '@kit/Button/Button';
import Icon from '@kit/Icon/Icon';
import { clientSite } from '@constants/constants';

// import userAbi from '@contracts/userAbi.json';

import Account from '@components/Account/Account';

import styles from './Header.module.scss';

const Header: React.FC = () => {
    const { connect, connectors, isLoading, error, pendingConnector } = useConnect();

    const { address, isConnecting, isConnected, isDisconnected } = useAccount();

    // const userBalance = useBalance({
    //     address: address,
    // });

    // const balanceData = userBalance.data;
    // const balanceIsError = userBalance.isError;
    // const balanceIsLoading = userBalance.isLoading;

    const mainConnector = connectors.find(
        connector => connector.id === 'metaMask'
    );

    // const { data, isError, isLoading } = useContractRead({
    //     address: '0x59Ec26901B19fDE7a96f6f7f328f12d8f682CB83',
    //     abi: userAbi,
    //     functionName: 'balanceOf',
    //     args: [address],
    // });

   


    // console.log('data in header', typeof formData);
    // console.log('data in header', formData);

    return (
        <header className={styles.header}>
            {/* <div className={styles.headerBox}> */}
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
                        <Account
                            // currentAccount={address as Address}
                            // tokenAmount={data}
                            // ethBalance={balanceData?.formatted}
                        />
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
                        )}
                    </div>
                )}
            {/* </div> */}
        </header>
    );
};

export default Header;
