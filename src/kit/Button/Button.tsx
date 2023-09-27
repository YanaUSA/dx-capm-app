import LoaderIcon from '@assets/icons/loader.svg';

import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
    type,
    id,
    value,
    buttonText,
    disabled = false,
    loading,
    onClick,
    children,
    className,
    ariaLabel,
}) => {
    return (
        <button
            id={id}
            type={type}
            value={value}
            disabled={disabled}
            onClick={onClick}
            className={`${styles.button} ${className}`}
            aria-label={ariaLabel}
        >
            {!loading ? (
                buttonText || children
            ) : (
                <object
                    data={LoaderIcon}
                    width="24"
                    height="24"
                    className={styles.button__spinner}
                ></object>
            )}
        </button>
    );
};

export default Button;
