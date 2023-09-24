import { useAccount, useConnect, useBalance, useContractRead } from 'wagmi';
import Icon from '@kit/Icon/Icon';
import { tokenName, gasTokenName } from '@constants/constants';
import useMatchMedia from '@hooks/useMatchMedia';
import tokenAvatar from '@assets/images/STRU.png';

import userAbi from '@contracts/userAbi.json';

import { AccountProps } from './Account.types';
import styles from './Account.module.scss';

const Account: React.FC<AccountProps> = props => {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();
    const { address, isConnecting, isConnected, isDisconnected } = useAccount();

    const userBalance = useBalance({
        address: address,
    });

    const balanceData = userBalance.data?.formatted;

    console.log("balanceData", balanceData)

    const { data, isError, isLoading } = useContractRead({
        address: '0x59Ec26901B19fDE7a96f6f7f328f12d8f682CB83',
        abi: userAbi,
        functionName: 'balanceOf',
        args: [address],
    });

    const formattedTokenBalance = Number(data) / 1000000000000000000;  
    const formattedEthBalance = Number(balanceData).toFixed(4);
    const formattedAcc = `${address?.slice(0, 16)}...`;

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
