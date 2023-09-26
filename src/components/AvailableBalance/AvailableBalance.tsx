import { useAccount, useContractRead } from 'wagmi';
import { tokenName } from '@constants/constants';
// import userAbi from '@contracts/userAbi.json';

import { AvailableBalanceProps } from './AvailableBalance.types';

import styles from './AvailableBalance.module.scss';

const AvailableBalance: React.FC<AvailableBalanceProps> = ({
    availableAmount,
}) => {
    const { address, isConnecting, isConnected } = useAccount();

    // const { data, isError, isLoading } = useContractRead({
    //     address: '0x59Ec26901B19fDE7a96f6f7f328f12d8f682CB83',
    //     abi: userAbi,
    //     functionName: 'balanceOf',
    //     args: [address],
    // });

    // const formattedTokenBalance = Number(data) / 1000000000000000000;

    return (
        <div className={styles.availableContainer}>
            <span className={styles.spanStyle}>Available:</span>
            <span
                className={styles.spanAmountStyle}
                aria-label="Amount of available tokens on account"
            >
                {availableAmount}
            </span>
            <span className={styles.spanDescription} aria-label="Token name">
                {tokenName}
            </span>
        </div>
    );
};

export default AvailableBalance;
