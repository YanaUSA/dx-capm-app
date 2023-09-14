import { ButtonIconWrapperProps } from './ButtonIconWrapper.types';

import styles from './ButtonIconWrapper.module.scss';

const ButtonIconWrapper: React.FC<ButtonIconWrapperProps> = ({
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

export default ButtonIconWrapper;
