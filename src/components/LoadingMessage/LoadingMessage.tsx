import Icon from '@kit/Icon/Icon';
import { tokenName } from '@constants/constants';

import { LoadingMessageProps } from './LoadingMessage.types';

import styles from './LoadingMessage.module.scss';

const LoadingMessage: React.FC<LoadingMessageProps> = ({stakeAmount}) => {
    return (
        <div className={styles.LoadingMessageContainer}>
            <Icon
                name="icon-loader"
                widthSize={'32'}
                heightSize={'32'}
                className={styles.iconStyles}
                ariaLabel="Loading circle icon"
            />
            <div className={styles.messageContainer}>
                <span className={styles.spanStyle}>Adding</span>
                <span
                    className={styles.spanStyle}
                    style={{ fontWeight: '700' }}
                >
                    {stakeAmount}
                </span>
                <span
                    className={styles.spanStyle}
                    style={{ fontWeight: '700' }}
                >
                    {tokenName}
                </span>
                <span className={styles.spanStyle}>to Staking</span>
            </div>
        </div>
    );
};

export default LoadingMessage;
