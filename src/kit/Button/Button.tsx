import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
    type,
    id,
    value,
    buttonText,
    disabled = false,
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
            {buttonText || children}
        </button>
    );
};

export default Button;
