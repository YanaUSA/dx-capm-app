// import { useState, ChangeEvent, FormEvent } from 'react';

import Button from '@kit/Button/Button';
import Available from '@components/Available/Available'

import styles from './ClaimRewards.module.scss';

const ClaimRewards: React.FC = () => {
  
    const tokenAmount = '354';

    const handleSubmit =()=>{
        console.log("handleSubmit Claim rewards")
    }

    return (
        <div className={styles.withdrawContainer}>
            <div className={styles.titleContainer}>
                <h2>Claim rewards</h2>
            </div>

            <Available tokenAmount={tokenAmount}/>

            <Button
                id="rewards"
                type="submit"
                buttonText="Claim rewards"
                onClick={handleSubmit}
                ariaLabel="Button to Claim rewards"
            />
        </div>
    );
};

export default ClaimRewards;
