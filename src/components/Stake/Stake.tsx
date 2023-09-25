import { useState, ChangeEvent, MouseEvent } from 'react';
import {
    useContractWrite,
    // usePrepareContractWrite,
    // useWaitForTransaction,
} from 'wagmi';
import abi from '@contracts/abi.json';

import Input from '@kit/Input/Input';
import Button from '@kit/Button/Button';
import Available from '@components/Available/Available';
import LoadingMessage from '@components/LoadingMessage/LoadingMessage';
import RewardRate from '@components/RewardRate/RewardRate';

// import { tokenName } from '@constants/constants';

import styles from './Stake.module.scss';


const Stake: React.FC = () => {
    const [stake, setStake] = useState<number | string>();
    const [stakeError, setStakeError] = useState<string>('');

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
        // console.log('sendTokenStru', sendTokenStru);

        write?.({ args: [sendTokenStru] });
        // console.log('stake send submit', stake);

        //--- input reset ---//
        setStake('');

    };

    // console.log("data****", data)
    // if(data) {
    //     window.location.reload(true)
    // }

    return (
        <div className={styles.stakeContainer}>
            <div className={styles.titleContainer}>
                <h2>Stake</h2>
                <RewardRate userInput={stake}/>
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

            <Available />

            {/* <LoadingMessage stakeAmount={stake} /> */}

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
