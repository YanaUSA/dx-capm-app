import { useState, ChangeEvent } from 'react';
import { toast } from "react-toastify";
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import Input from '@kit/Input/Input';
import Button from '@kit/Button/Button';
import AvailableBalance from '@/components/AvailableBalance/AvailableBalance';

import abi from '@contracts/abi.json';
import {formatToWei, formatFromWeiToEther} from '@helpers/helpersFunctions'

import styles from './Withdraw.module.scss';

const Withdraw: React.FC = () => {
    const [withdraw, setwithdraw] = useState<number | string>();
    const [withdrawError, setWithdrawError] = useState<string>('');
    const { address } = useAccount();

    //---- contract logic -----//
    const userBalance = useContractRead({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'balanceOf',
        args: [address],
    });

    const userBalanceData = userBalance.data;
    const userBalanceError = userBalance.error;

    let availableToWithdraw = '0.00';
    if (userBalanceData) {
        availableToWithdraw = formatFromWeiToEther(userBalanceData).toFixed(2);
    } else {
        console.log(userBalanceError);
    }

    const { isLoading, write } = useContractWrite({
        address: '0x2F112ED8A96327747565f4d4b4615be8fb89459d',
        abi: abi,
        functionName: 'withdraw',
    });

    //------ handlers logic -------//
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setwithdraw(e?.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!withdraw) {
            setWithdrawError('This field can not be empty');
            
        }

        if (withdraw && userBalanceData) {
            const getWithdraw = formatToWei(withdraw);

            if (getWithdraw > Number(userBalanceData)) {
                toast.error(
                    'The amount of tokens you try to withdraw is is too big. Please try again'
                );
            }
            write?.({ args: [getWithdraw] });
        }

        // //--- input reset ---//
        setwithdraw('');
    };

    // if (isSuccess) {
    //     toast.success("Stakes are successfully withdrawn")
    // } else if (isError) {
    //     toast.error("Something went wrong")
    // } 

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
                onChange={handleChange}
                ariaLabel="Input to enter withdraw amount"
                ariaInvalid={withdrawError ? true : false}
                ariaDescribedby="withdraw-error"
                required
            />

            <AvailableBalance availableAmount={availableToWithdraw} />

            <Button
                id="withdraw"
                type="submit"
                buttonText="Withdraw"
                onClick={handleSubmit}
                ariaLabel="Button to withdraw"
                loading={isLoading}
            />
        </div>
    );
};

export default Withdraw;
