import Icon from '@kit/Icon/Icon';
import { tokenName, gasTokenName } from '@constants/constants';
import useMatchMedia from '@hooks/useMatchMedia';
import tokenAvatar from '@assets/images/STRU.png';

import { AccountProps } from './Account.types';
import styles from './Account.module.scss';

const Account: React.FC<AccountProps> = props => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    const acc = props.currentAccount;
    const formattedAcc = `${acc.slice(0, 16)}...`;

    const formattedTokenBalance = Number(props.tokenAmount).toFixed(4);
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
                <div className={styles.accItem} aria-label="Amount of tokens">
                    {formattedTokenBalance}
                </div>
                <span className={styles.accItem} aria-label="Token name">
                    {tokenName}
                </span>
            </div>

            <div className={styles.contentBox}>
                <Icon
                    className={styles.accItem}
                    name="icon-cryptocurrency-eth"
                    widthSize={isMobile ? '24' : '32'}
                    heightSize={isMobile ? '24' : '32'}
                    ariaLabel={`${gasTokenName} avatar`}
                />
                <div className={styles.accItem} aria-label="Amount of tokens">
                    {formattedEthBalance}
                </div>
                <span className={styles.accItem} aria-label="Token name">
                    {gasTokenName}
                </span>
                {(isTablet || isDesktop) && (
                    <div className={styles.contentBox}>
                        <span className={styles.accItem}>|</span>
                        <span
                            className={styles.accItem}
                            aria-label="Wallet account"
                        >
                            {formattedAcc}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Account;
