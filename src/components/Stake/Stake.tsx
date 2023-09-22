import { useState, ChangeEvent, MouseEvent } from 'react';

import Input from '@kit/Input/Input';
import Button from '@kit/Button/Button';
import Available from '../Available/Available';

import { tokenName } from '@constants/constants';

import styles from './Stake.module.scss';


const Stake: React.FC = () => {
    const [stake, setStake] = useState<string>('');
    const [stakeError, setStakeError] = useState<string>('');

    const tokenAmount = '354';

    const weeklyReward = '1';

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;

        setStake(value);
        validateStakeValue(stake);
    };

    //------- validation part ----------------//
    const validateStakeValue = (value: any) => {
        // const stakeToNumber: number = Number(value);

        if (value.trim() === '') {
            setStakeError('This field can not be empty');
        }
        // else if (stakeToNumber === Math.round(stakeToNumber)) {
        //     setStakeError('Please enter the round number for staking');
        // } else {
        setStakeError('');
        // }
        ///////////////////////////////////
    };

    console.log('stakeError', stakeError);

    const handleSubmit = (e) => {
        e.preventDefault();

        // validateStakeValue(stake);

        if (!stakeError) {
            //     // Submit form and send validated data
            console.log('SUCCESS!!!!!!!!!!!!!!!!!!');
        }

        console.log('stake:', stake);

        //--- input reset ---//
        setStake('');
    };

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
