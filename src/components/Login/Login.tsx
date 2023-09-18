import Button from '@kit/Button/Button';
import Icon from '../../kit/Icon/Icon';

import styles from './Login.module.scss';

const Login = () => {
    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.titleContainer}>
                <Icon
                    name="icon-wallet"
                    widthSize="96"
                    heightSize="96"
                    className={styles.walletIcon}
                />
                <h2 className={styles.loginPageTitle}>To start staking you need to connect you wallet first</h2>
            </div>
            <Button
                className={styles.loginBtn}
                type="submit"
                buttonText="Connect wallet"
                ariaLabel="Connect wallet"
            />
        </div>
    );
};

export default Login;
