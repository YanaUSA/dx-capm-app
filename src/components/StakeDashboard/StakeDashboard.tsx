import { useAccount, useContractRead } from 'wagmi';
import abi from '@contracts/abi.json';
import { tokenName } from '@constants/constants';
import useMatchMedia from '@hooks/useMatchMedia';
import { formatFromWeiToEther } from '@helpers/helpersFunctions';

import PopUp from '@components/popUp/popUp';
import Icon from '@/kit/Icon/Icon';
import styles from './StakeDashboard.module.scss';


const SECONDS_IN_DAY = 24 * 60 * 60;

const StakeDashboard: React.FC = () => {
    const { isMobile, isTablet } = useMatchMedia();
    const { address } = useAccount();

    //------- STRU Staked Balance ------//
    const { data, error } = useContractRead({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'balanceOf',
        args: [address],
    });

    let struToken = '0.00';
    if (data) {
        struToken = formatFromWeiToEther(data).toFixed(2);
    } else {
        console.log(error);
    }

    //--------- APR ---------//
    const rewardDuration = useContractRead({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'getRewardForDuration',
    });

    const rewardDurationData = rewardDuration.data;
    const rewardDurationError = rewardDuration.error;

    const totalStakes = useContractRead({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'totalSupply',
    });

    const totalStakesData = totalStakes.data;
    const totalStakesError = totalStakes.error;

    let APR = '0';
    if (rewardDurationData && totalStakesData) {
        APR = (
            (Number(rewardDurationData) * 100) /
            Number(totalStakesData)
        ).toFixed(0);
    } else {
        console.log(rewardDurationError || totalStakesError);
    }

    //--------- Days ---------//
    const periodFinish = useContractRead({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'periodFinish',
    });

    const periodFinishData = periodFinish.data;
    const periodFinishError = periodFinish.error;

    let days = '0';
    if (periodFinishData) {
        const currenTimestamp = Date.now() / 1000; //ms to seconds
        days = (
            (Number(periodFinishData) - currenTimestamp) /
            SECONDS_IN_DAY
        ).toFixed(0);
    } else {
        console.log(periodFinishError);
    }

    //---------- Rewards -----------//
    const earnedReward = useContractRead({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'earned',
        args: [address],
    });

    const earnedRewardData = earnedReward.data;
    const earnedRewardError = earnedReward.error;

    let userReward = '0';
    if (earnedRewardData) {
        userReward = formatFromWeiToEther(earnedRewardData).toFixed(2);
    } else {
        console.log(earnedRewardError);
    }

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
                        style={
                            isTablet
                                ? { marginRight: '27px' }
                                : { marginRight: '0px' }
                        }
                        aria-label="staked balance amount"
                        aria-describedby="info item desc"
                    >
                        <span
                            className={styles.itemValue}
                            style={
                                isMobile
                                    ? { marginRight: '4px' }
                                    : { marginRight: '8px' }
                            }
                        >
                            {struToken}
                        </span>
                        <span
                            className={styles.itemValueDesc}
                            aria-label="name of blockchain tokens"
                        >
                            {tokenName}
                        </span>
                        <div className={styles.infoIconBtn}>
                            <PopUp content="Staking rewards get allocated on this sum">
                                <Icon
                                    name="icon-help-circle"
                                    widthSize="18"
                                    heightSize="18"
                                    stroke="white"
                                    ariaLabel="icon-button opening info desc pop-up"
                                />
                            </PopUp>
                        </div>
                    </div>
                    <span id="info item desc" className={styles.itemDesc}>
                        Staked balance
                    </span>
                </li>

                <li className={styles.infoList__item}>
                    <div
                        className={styles.infoItemBox}
                        aria-label="reward percentage"
                        aria-describedby="info item desc"
                    >
                        <span className={styles.itemValue}>
                            &#8776;{APR}&#37;
                        </span>
                        <div className={styles.infoIconBtn}>
                            <PopUp
                                content="Displays the average for APR.
                                Interest rate is calculated for each amount of tokens."
                            >
                                <Icon
                                    name="icon-help-circle"
                                    widthSize="18"
                                    heightSize="18"
                                    stroke="white"
                                    ariaLabel="icon-button opening info desc pop-up"
                                />
                            </PopUp>
                        </div>
                    </div>
                    <span id="info item desc" className={styles.itemDesc}>
                        APR
                    </span>
                </li>

                <li className={styles.infoList__item}>
                    <div
                        className={styles.infoItemBox}
                        style={
                            isTablet
                                ? { marginRight: '71px' }
                                : { marginRight: '0px' }
                        }
                        aria-label="number of days"
                        aria-describedby="info item desc"
                    >
                        <span className={styles.itemValue}>{days}</span>
                    </div>
                    <span id="info item desc" className={styles.itemDesc}>
                        Days
                    </span>
                </li>

                <li className={styles.infoList__item}>
                    <div
                        className={styles.infoItemBox}
                        style={
                            isTablet
                                ? { marginRight: '156px' }
                                : { marginRight: '0px' }
                        }
                        aria-label="reward amount"
                        aria-describedby="info item desc"
                    >
                        <span
                            className={styles.itemValue}
                            style={
                                isMobile
                                    ? { marginRight: '2px' }
                                    : isTablet
                                    ? { marginRight: '4px' }
                                    : { marginRight: '8px' }
                            }
                        >
                            {userReward}
                        </span>
                        <span
                            className={styles.itemValueDesc}
                            aria-label="name of blockchain tokens"
                        >
                            {tokenName}
                        </span>

                        <div className={styles.infoIconBtn}>
                            <PopUp
                                content="Rewards get allocated every second"
                            >
                                <Icon
                                    name="icon-help-circle"
                                    widthSize="18"
                                    heightSize="18"
                                    stroke="white"
                                    ariaLabel="icon-button opening info desc pop-up"
                                />
                            </PopUp>
                        </div>
                    </div>
                    <span id="info item desc" className={styles.itemDesc}>
                        Rewards
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default StakeDashboard;
