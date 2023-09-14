import ButtonIconWrapper from '@kit/ButtonIconWrapper/ButtonIconWrapper';
import Icon from '@kit/Icon/Icon';
import { tokenName } from '@constants/constants';
import useMatchMedia from '@hooks/useMatchMedia';

import styles from './StakeDashboard.module.scss';

const StakeDashboard = () => {
    const { isMobile, isTablet } = useMatchMedia();

    return (
        <div className={styles.dashboard}>
            <h1 aria-label="Main application title">
                StarRunner Token staking
            </h1>
            <ul
                className={styles.infoList}
                aria-label="staking information dashboard"
            >
                <li className={styles.infoList__item}>
                    <div
                        className={styles.infoItemBox}
                        // style={
                        //     isTablet
                        //         ? { marginRight: '27px' }
                        //         : { marginRight: '0px' }
                        // }
                        aria-label="staked balance amount"
                        aria-describedby="info item desc"
                    >
                        <span
                            className={styles.itemValue}
                            // style={
                            //     isMobile
                            //         ? { marginRight: '4px' }
                            //         : { marginRight: '8px' }
                            // }
                        >
                            0.00
                        </span>
                        <span
                            className={styles.itemValueDesc}
                            aria-label="name of blockchain tokens"
                        >
                            {tokenName}
                        </span>
                        <ButtonIconWrapper
                            type="button"
                            className={styles.infoIconBtn}
                            ariaLabel="icon-button opening info desc pop-up"
                        >
                            <Icon
                                name="icon-help-circle"
                                widthSize="16"
                                heightSize="16"
                                fill="white"
                            />
                        </ButtonIconWrapper>

                        <span id="info item desc" className={styles.itemDesc}>
                            Staked balance
                        </span>
                    </div>
                </li>

                <li className={styles.infoList__item}>
                    <div
                        className={styles.infoItemBox}
                        style={{ width: '55px' }}
                        aria-label="reward percentage"
                        aria-describedby="info item desc"
                    >
                        <span className={styles.itemValue}>
                            &#8776;{8}&#37;
                        </span>
                        <ButtonIconWrapper
                            type="button"
                            className={styles.infoIconBtn}
                            ariaLabel="icon-button opening info desc pop-up"
                        >
                            <Icon
                                name="icon-help-circle"
                                widthSize="16"
                                heightSize="16"
                                fill="white"
                            />
                        </ButtonIconWrapper>

                        <span id="info item desc" className={styles.itemDesc}>
                            APY
                        </span>
                    </div>
                </li>

                <li className={styles.infoList__item}>
                    <div
                        className={styles.infoItemBox}
                        // style={
                        //     isTablet
                        //         ? { marginRight: '71px' }
                        //         : { marginRight: '0px' }
                        // }
                        aria-label="number of days"
                        aria-describedby="info item desc"
                    >
                        <span className={styles.itemValue}>0</span>

                        <span id="info item desc" className={styles.itemDesc}>
                            Days
                        </span>
                    </div>
                </li>

                <li className={styles.infoList__item}>
                    <div
                        className={styles.infoItemBox}
                        // style={
                        //     isTablet
                        //         ? { marginRight: '156px' }
                        //         : { marginRight: '0px' }
                        // }
                        aria-label="reward amount"
                        aria-describedby="info item desc"
                    >
                        <span
                            className={styles.itemValue}
                            // style={
                            //     isMobile
                            //         ? { marginRight: '2px' }
                            //         : isTablet
                            //         ? { marginRight: '4px' }
                            //         : { marginRight: '8px' }
                            // }
                        >
                            0
                        </span>
                        <span
                            className={styles.itemValueDesc}
                            aria-label="name of blockchain tokens"
                        >
                            {tokenName}
                        </span>

                        <ButtonIconWrapper
                            type="button"
                            className={styles.infoIconBtn}
                            ariaLabel="icon-button opening info desc pop-up"
                        >
                            <Icon
                                name="icon-help-circle"
                                widthSize="16"
                                heightSize="16"
                                fill="white"
                            />
                        </ButtonIconWrapper>
                        <span id="info item desc" className={styles.itemDesc}>
                            Rewards
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default StakeDashboard;
