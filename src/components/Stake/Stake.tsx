import { useState, ChangeEvent, MouseEvent } from 'react';

import {
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
} from 'wagmi';
import abi from '@contracts/abi.json';

import Input from '@kit/Input/Input';
import Button from '@kit/Button/Button';
import Available from '../Available/Available';

import { tokenName } from '@constants/constants';

import styles from './Stake.module.scss';
import LoadingMessage from '../LoadingMessage/LoadingMessage';

const Stake: React.FC = () => {
    const [stake, setStake] = useState<number | string>();
    const [stakeError, setStakeError] = useState<string>('');

    console.log('stake', stake);

    const tokenAmount = '354';

    const weeklyReward = '1';

    const stakeAmount = '100';

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStake(e?.target.value);
        // validateStakeValue(stake);
    };

    //------- validation part ----------------//
    // const validateStakeValue = (value: any) => {
    //     // const stakeToNumber: number = Number(value);

    //     if (value.trim() === '') {
    //         setStakeError('This field can not be empty');
    //     }
    //     // else if (stakeToNumber === Math.round(stakeToNumber)) {
    //     //     setStakeError('Please enter the round number for staking');
    //     // } else {
    //     setStakeError('');
    //     // }
    //     ///////////////////////////////////
    // };

    function formatToWei(value: any) {
        return value * 1000000000000000000;
    }

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'stake',
    });

    const handleSubmit = e => {
        e.preventDefault();
        const sendTokenStru = formatToWei(stake);
        console.log('sendTokenStru', sendTokenStru);

        write?.({ args: [sendTokenStru] });
        console.log('stake send submit', stake);

        //--- input reset ---//
        setStake("");
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // validateStakeValue(stake);

    //     if (!stakeError) {
    //         //     // Submit form and send validated data
    //         console.log('SUCCESS!!!!!!!!!!!!!!!!!!');
    //     }

    //     console.log('stake:', stake);

    //     //--- input reset ---//
    //     setStake('');
    // };

    return (
        <div className={styles.stakeContainer}>
            <div className={styles.titleContainer}>
                <h2>Stake</h2>
                <div className={styles.rewardRateContainer}>
                    <span className={styles.spanStyle}>Reward rate:</span>
                    <span
                        className={styles.spanAmountStyle}
                        aria-label="Amount of weekly reward"
                    >
                        {weeklyReward}
                    </span>
                    <span className={styles.spanDescription}>
                        {tokenName}/week
                    </span>
                </div>
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
                // handleBlur={handleBlurChange}
                onChange={handleChange}
                ariaLabel="Input to enter stake amount"
                ariaInvalid={stakeError ? 'true' : 'false'}
                ariaDescribedby="stake-error"
                required
            />

            <Available tokenAmount={tokenAmount} />

            <LoadingMessage stakeAmount={stakeAmount} />

            <Button
                id="stake"
                type="submit"
                buttonText="Stake"
                onClick={handleSubmit}
                ariaLabel="Button to stake"
            />
        </div>
    );
};

export default Stake;
