import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
    type,
    value,
    disabled = false,
    onClick,
    children,
    className,
    ariaLabel,
}) => {
    return (
        <button
            type={type}
            value={value}
            disabled={disabled}
            onClick={onClick}
            className={`${styles.button} ${className}`}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default Button;
