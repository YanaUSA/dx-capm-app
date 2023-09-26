// import { useState, ChangeEvent, FormEvent } from 'react';

import Button from '@kit/Button/Button';


import AvailableBalance from '../AvailableBalance/AvailableBalance';

import styles from './ClaimRewards.module.scss';

const ClaimRewards: React.FC = () => {
  
    const availableToClaim = '1111111';

    const handleSubmit =()=>{
        console.log("handleSubmit Claim rewards")
    }

    return (
        <div className={styles.withdrawContainer}>
            <div className={styles.titleContainer}>
                <h2>Claim rewards</h2>
            </div>

            <AvailableBalance availableAmount={availableToClaim} />

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
