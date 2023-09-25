import { useConnect } from 'wagmi';

import Button from '@kit/Button/Button';
import Icon from '@kit/Icon/Icon';

import styles from './Login.module.scss';

const Login: React.FC = () => {
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect();

    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.titleContainer}>
                <h2 className={styles.pageTitle}>Login page</h2>
                <Icon
                    name="icon-wallet"
                    widthSize="96"
                    heightSize="96"
                    className={styles.walletIcon}
                    ariaLabel="Wallet icon"
                />
                <p
                    className={styles.loginPageDescription}
                    aria-label="Page title description"
                >
                    To start staking you need to connect you wallet first
                </p>
            </div>
            <div className={styles.loginBtnWrapper}>
                {connectors.map(connector => (
                    <Button
                        className={styles.loginBtn}
                        disabled={!connector.ready}
                        key={connector.id}
                        onClick={() => connect({ connector })}
                        type="submit"
                        // buttonText="Connect wallet"
                        ariaLabel={`Connect wallet via ${connector.name}`}
                    >
                        {connector.name}
                        {!connector.ready && ' (unsupported)'}
                        {isLoading &&
                            pendingConnector?.id === connector.id &&
                            ' (connecting)'}
                    </Button>
                ))}
            </div>
            {error && <div aria-label="Error message">{error.message}</div>}
        </div>
    );
};

export default Login;
