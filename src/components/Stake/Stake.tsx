import { useState, ChangeEvent } from 'react';
import {
    useAccount,
    useContractRead,
    useContractWrite,
    // usePrepareContractWrite,
} from 'wagmi';

import Input from '@kit/Input/Input';
import Button from '@kit/Button/Button';
import AvailableBalance from '@/components/AvailableBalance/AvailableBalance';
// import LoadingMessage from '@components/LoadingMessage/LoadingMessage';
import RewardRate from '@components/RewardRate/RewardRate';

import {formatToWei, formatFromWeiToEther} from '@helpers/helpersFunctions'
import userAbi from '@contracts/userAbi.json';
import abi from '@contracts/abi.json';

import styles from './Stake.module.scss';

const Stake: React.FC = () => {
    const { address, isConnecting, isConnected } = useAccount();
    const [stake, setStake] = useState<number | string>();
    const [stakeError, setStakeError] = useState<string>('');

    //---- contract logic -----//
    const { data, isLoading, isSuccess, write } = useContractWrite({
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
    const userBalanceIsError = userBalance.isError;
    const userBalanceIsLoading = userBalance.isLoading;

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
                return alert(
                    'Amount of tokens you try to send is more than you have on a balance. Please enter correct amount of STRU'
                );
            }
            write?.({ args: [sendStakeToken] });
        }

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
                // handleBlur={handleBlurChange}
                onChange={handleChange}
                ariaLabel="Input to enter stake amount"
                ariaInvalid={stakeError ? true : false}
                ariaDescribedby="stake-error"
                required
            />

            <AvailableBalance availableAmount={availableToStake}/>

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
