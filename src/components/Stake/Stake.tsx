import Input from '@kit/Input/Input';
import Button from '@kit/Button/Button';

import styles from './Stake.module.scss';

const Stake = () => {
    return (
        <div className={styles.stakeContainer}>
            <div className={styles.titleContainer}>
                <h2>Stake</h2>
                <div className={styles.rewardRateContainer}>
                    <span className={styles.spanStyle}>Reward rate:</span>
                    <span className={styles.spanAmountStyle}>1</span>
                    <span className={styles.spanDescription}>STRU/week</span>
                </div>
            </div>

            <Input
                name="stake"
                placeholder="Enter stake amount"
                type="number"
                // value={stake}
                labelTextStyle={styles.regLabelText}
                inputStyle={styles.inputStyle}
                // inputError={stakeError}
                // handleBlur={handleBlurChange}
                // onChange={handleChange}
                ariaLabel="Input to enter stake amount"
                // ariaInvalid={stakeError ? "true" : "false"}
                ariaDescribedby="stake-error"
                required
            />

            <div className={styles.availableContainer}>
                <span className={styles.spanStyle}>Available:</span>
                <span className={`${styles.spanAmountStyle} ${styles.availableAmountStyle}`}>354</span>
                <span className={`${styles.spanDescription} ${styles.availableDescription}`}>STRU</span>
            </div>

            <Button type="submit" buttonText="Stake" ariaLabel="Stake" />
        </div>
    );
};

export default Stake;
