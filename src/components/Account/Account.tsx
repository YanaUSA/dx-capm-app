import { useAccount, useBalance } from 'wagmi';

import Icon from '@kit/Icon/Icon';

import useMatchMedia from '@hooks/useMatchMedia';

import { tokenName, gasTokenName } from '@constants/constants';
import tokenAvatar from '@assets/images/STRU.png';

import { AccountProps } from './Account.types';
import styles from './Account.module.scss';

const Account: React.FC<AccountProps> = props => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    const acc = props.currentAccount;
    const formattedAcc = `${acc.slice(0, 16)}...`;

    // const formattedTokenBalance = Number(props.tokenAmount).toFixed(2);
    const formattedEthBalance = Number(props.ethBalance).toFixed(3);


    return (
        <div className={styles.accountContainer}>
            <div className={styles.contentBox}>
                <img
                    className={styles.accItem}
                    src={tokenAvatar}
                    alt={`${tokenName} avatar`}
                    width={isMobile ? '24' : '32'}
                />
                <div className={styles.accItem}>{props.tokenAmount}</div>
                <span className={styles.accItem}>{tokenName}</span>
            </div>

            <div className={styles.contentBox}>
                <Icon
                    className={styles.accItem}
                    name="icon-cryptocurrency-eth"
                    widthSize={isMobile ? '24' : '32'}
                    heightSize={isMobile ? '24' : '32'}
                    ariaLabel={`${gasTokenName} avatar`}
                />
                <div className={styles.accItem}>{formattedEthBalance}</div>
                <span className={styles.accItem}>{gasTokenName}</span>
                {(isTablet || isDesktop) && (
                    <div className={styles.contentBox}>
                        <span className={styles.accItem}>|</span>
                        <span className={styles.accItem}>{formattedAcc}</span>
                    </div>
                )}
            </div>

            {/* <button onClick={disconnect}>Disconnect</button> */}
        </div>
    );
};

export default Account;
