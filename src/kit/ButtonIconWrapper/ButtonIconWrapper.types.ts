import {ButtonHTMLAttributes} from 'react'

export interface ButtonIconWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset' | undefined;
    value?: string;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
    className?: string;
    ariaLabel?: string;
}