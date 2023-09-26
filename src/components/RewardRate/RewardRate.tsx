import { useAccount, useContractRead } from 'wagmi';
import abi from '@contracts/abi.json';
import { tokenName } from '@constants/constants';

import { RewardsRateProps } from './RewardRate.types';
import styles from './RewardRate.module.scss';

import {formatFromWeiToEther} from '@helpers/helpersFunctions'
import {WEI_NUMBER} from '@constants/constants'


const currenTimestamp = Date.now() / 1000; //ms to seconds

const RewardRate: React.FC<RewardsRateProps> = ({ userInput }) => {
    const { address } = useAccount();

    //---------- contract logic --------//
    const periodFinish = useContractRead({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'periodFinish',
    });

    const periodFinishData = periodFinish.data;
    const periodFinishError = periodFinish.error;
    const periodFinishIsError = periodFinish.isError;
    const periodFinishIsLoading = periodFinish.isLoading;

    const rewardRate = useContractRead({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'rewardRate',
    });

    const rewardRateData = rewardRate.data;
    const rewardRateError = rewardRate.error;
    const rewardRateIsError = rewardRate.isError;
    const rewardRateIsLoading = rewardRate.isLoading;

    const { data, isError, isLoading, error } = useContractRead({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'balanceOf',
        args: [address],
    });

    const totalStakes = useContractRead({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'totalSupply',
    });

    const totalStakesData = totalStakes.data;
    const totalStakesError = totalStakes.error;
    const totalStakesIsError = totalStakes.isError;
    const totalStakesIsLoading = totalStakes.isLoading;

    let totalRewardRate = '0';
    let totalRewardRateInput = '0';
    if (rewardRateData && periodFinishData && data && totalStakesData) {
        const remainingTime = Number(periodFinishData) - currenTimestamp;

        const totalAvailbleRewards = remainingTime * Number(rewardRateData);

        const totalRewardRateInWei =
            (Number(data) * totalAvailbleRewards) /
            (Number(totalStakesData) + Number(data));

        totalRewardRate = formatFromWeiToEther(totalRewardRateInWei).toFixed(2);

        if (userInput) {
            const totalRewardRateInWeiInput =
                (Number(data) * totalAvailbleRewards) /
                (Number(totalStakesData) +
                    Number(userInput) * WEI_NUMBER);

            totalRewardRateInput = formatFromWeiToEther(
                totalRewardRateInWeiInput
            ).toFixed(2);
        }
    } else {
        console.log(
            periodFinishError || rewardRateError || totalStakesError || error
        );
    }

    return (
        <div className={styles.rewardRateContainer}>
            {!userInput ? (
                <>
                    <span className={styles.spanStyle}>Reward rate:</span>
                    <span
                        className={styles.spanAmountStyle}
                        aria-label="Amount of weekly reward"
                    >
                        {totalRewardRate}
                    </span>
                </>
            ) : (
                <>
                    <span className={styles.spanStyle}>User reward rate:</span>
                    <span
                        className={styles.spanAmountStyle}
                        aria-label="Amount of weekly reward"
                    >
                        {totalRewardRateInput}
                    </span>
                </>
            )}
            <span className={styles.spanDescription}>{tokenName}/week</span>
        </div>
    );
};

export default RewardRate;