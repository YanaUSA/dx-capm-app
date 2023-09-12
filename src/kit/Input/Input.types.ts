import { InputHTMLAttributes, HTMLInputTypeAttribute } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    labelTitle?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    title?: string;
    disabled?: boolean;
    value?: string;
    labelStyle?: string;
    labelTextStyle?: string;
    inputStyle?: string;
    inputError?: string;
    handleBlur: () => void;
    onChange: () => void;
    ariaLabel?: string;
    ariaInvalid?: string;
    ariaDescribedby?: string;
    required: boolean;
}
