import { tokenName } from '@constants/constants';
import {AvailableProps} from './Available.types'

import styles from './Available.module.scss';

const Available: React.FC<AvailableProps> = (props) => {
    return (
        <div className={styles.availableContainer}>
            <span className={styles.spanStyle}>Available:</span>
            <span
                className={styles.spanAmountStyle}
                aria-label="Amount of available tokens on account"
            >
                {props.tokenAmount}
            </span>
            <span
                className={styles.spanDescription}
                aria-label="Token name"
            >
                {tokenName}
            </span>
        </div>
    );
};

export default Available;
