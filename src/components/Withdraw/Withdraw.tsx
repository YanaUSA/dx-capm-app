import { useState, ChangeEvent } from 'react';

import Input from '@kit/Input/Input';
import Button from '@kit/Button/Button';
import Available from '../Available/Available';

import styles from './Withdraw.module.scss';
import LoadingMessage from '../LoadingMessage/LoadingMessage';



const Withdraw: React.FC = () => {
    const [withdraw, setWithdraw] = useState<string>('');
    const [withdrawError, setWithdrawError] = useState<string>('');


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;

        setWithdraw(value);
    };

    const handleSubmit =()=>{
      console.log("handleSubmit Claim rewards")
  }

    return (
        <div className={styles.withdrawContainer}>
            <div className={styles.titleContainer}>
                <h2>Withdraw</h2>
            </div>

            <Input
                name="withdraw"
                id="withdraw"
                placeholder="Enter withdraw amount"
                type="number"
                value={withdraw}
                labelTextStyle={styles.regLabelText}
                inputStyle={styles.inputStyle}
                inputError={withdrawError}
                // handleBlur={handleBlurChange}
                onChange={handleChange}
                ariaLabel="Input to enter withdraw amount"
                ariaInvalid={withdrawError ? 'true' : 'false'}
                ariaDescribedby="withdraw-error"
                required
            />

            <Available />

            <Button
                id="withdraw"
                type="submit"
                buttonText="Withdraw"
                onClick={handleSubmit}
                ariaLabel="Button to withdraw"
            />
        </div>
    );
};

export default Withdraw;
