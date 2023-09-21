import {
    useAccount,
    useConnect,
    // useDisconnect,
    useEnsAvatar,
    useEnsName,
} from 'wagmi';

import Button from '@kit/Button/Button';
import Icon from '../../kit/Icon/Icon';

import styles from './Login.module.scss';

const Login = () => {
    const { address, connector, isConnected } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ address })
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect()

        // console.log("activeConnector", activeConnector)


    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.titleContainer}>
                <Icon
                    name="icon-wallet"
                    widthSize="96"
                    heightSize="96"
                    className={styles.walletIcon}
                />
                <h2 className={styles.loginPageTitle}>
                    To start staking you need to connect you wallet first
                </h2>
            </div>
            <div  className={styles.loginBtnWrapper}>
                {connectors.map(connector => (
                <Button
                    className={styles.loginBtn}
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    type="submit"
                    // buttonText="Connect wallet"
                    ariaLabel="Connect wallet"
                >
                    {connector.name}
                    {!connector.ready && ' (unsupported)'}
                    {isLoading &&
                        pendingConnector?.id === connector.id &&
                        ' (connecting)'}
                </Button>
            ))}
            </div>            
            {error && <div>{error.message}</div>}
        </div>
    );
};

export default Login;
