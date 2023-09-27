import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import {toast } from 'react-toastify';
import Button from '@kit/Button/Button';
import AvailableBalance from '@components/AvailableBalance/AvailableBalance';

import { formatFromWeiToEther } from '@/helpers/helpersFunctions';
import abi from '@contracts/abi.json';

import styles from './ClaimRewards.module.scss';

const ClaimRewards: React.FC = () => {
    const { address } = useAccount();

        //---- contract logic -----//
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

    const { isLoading, isSuccess, isError, write } = useContractWrite({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'claimReward',
    });

    //------ handlers logic -------//
    const handleSubmit =(e: any)=>{
        e.preventDefault();  

            write?.()
    }
    

    if (isSuccess) {
        toast.success("Rewards successfully withdrawn")
    } else if (isError) {
        toast.error("Something went wrong...")
    } else if (isLoading){
        toast.info("Sending data...")
    } 

    return (
        <div className={styles.withdrawContainer}>
            <div className={styles.titleContainer}>
                <h2>Claim rewards</h2>
            </div>

            <AvailableBalance availableAmount={userReward} />

            <Button
                id="rewards"
                type="submit"
                buttonText="Claim rewards"
                onClick={handleSubmit}
                ariaLabel="Button to Claim rewards"
                loading={isLoading}
            />
        </div>
    );
};

export default ClaimRewards;
