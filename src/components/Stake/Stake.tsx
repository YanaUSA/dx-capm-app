import { useState, ChangeEvent } from 'react';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';

import Input from '@kit/Input/Input';
import Button from '@kit/Button/Button';
import AvailableBalance from '@/components/AvailableBalance/AvailableBalance';
import RewardRate from '@components/RewardRate/RewardRate';

import { formatToWei, formatFromWeiToEther } from '@helpers/helpersFunctions';
import userAbi from '@contracts/userAbi.json';
import abi from '@contracts/abi.json';

import styles from './Stake.module.scss';

import { toast } from 'react-toastify';

const Stake: React.FC = () => {
    const { address } = useAccount();
    const [stake, setStake] = useState<number | string>();
    const [stakeError, setStakeError] = useState<string>('');

    //---- contract logic -----//
    const { isLoading, write } = useContractWrite({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'stake',
    });

    const userBalance = useContractRead({
        address: '0x59Ec26901B19fDE7a96f6f7f328f12d8f682CB83',
        abi: userAbi,
        functionName: 'balanceOf',
        args: [address],
    });

    const userBalanceData = userBalance.data;
    const userBalanceError = userBalance.error;

    let availableToStake = '0.00';
    if (userBalanceData) {
        availableToStake = formatFromWeiToEther(userBalanceData).toFixed(2);
    } else {
        console.log(userBalanceError);
    }

    //------ handlers logic -------//
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStake(e?.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!stake) {
            setStakeError('This field can not be empty');
        }

        if (stake && userBalanceData) {
            const sendStakeToken = formatToWei(stake);

            if (sendStakeToken > Number(userBalanceData)) {
                toast.error(
                    `You do not have enough tokens. Please try again`
                );
            }

                write?.({ args: [sendStakeToken] });
        }

        //--- input reset ---//
        setStake('');
    };

    // if (isSuccess) {
    //     toast.success(`${stake} STRU successfully added to Staking`);
    // } else if (isError) {
    //     toast.error('Something went wrong');
    // } else if (isLoading) {
    //     toast.info(`Adding ${stake} STRU to Staking`);
    // }

    return (
        <div className={styles.stakeContainer}>
            <div className={styles.titleContainer}>
                <h2>Stake</h2>
                <RewardRate userInput={stake} />
            </div>

            <Input
                name="stake"
                id="stake"
                placeholder="Enter stake amount"
                type="number"
                value={stake}
                labelTextStyle={styles.regLabelText}
                inputStyle={styles.inputStyle}
                inputError={stakeError}
                onChange={handleChange}
                ariaLabel="Input to enter stake amount"
                ariaInvalid={stakeError ? true : false}
                ariaDescribedby="stake-error"
                required
            />

            <AvailableBalance availableAmount={availableToStake} />

            <Button
                id="stake"
                type="submit"
                buttonText="Stake"
                onClick={handleSubmit}
                ariaLabel="Button to stake"
                loading={isLoading}
            />
        </div>
    );
};

export default Stake;
