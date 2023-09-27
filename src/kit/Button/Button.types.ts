import {ButtonHTMLAttributes} from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset' | undefined;
    id?: string;
    value?: string;
    buttonText?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: (e: any) => void;
    children?: React.ReactNode;
    className?: string;
    ariaLabel?: string;
}