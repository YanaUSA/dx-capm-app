import { tokenName } from '@constants/constants';
import { AvailableBalanceProps } from './AvailableBalance.types';
import styles from './AvailableBalance.module.scss';

const AvailableBalance: React.FC<AvailableBalanceProps> = ({
    availableAmount,
}) => {
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
