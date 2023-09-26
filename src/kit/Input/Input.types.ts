import { InputHTMLAttributes, HTMLInputTypeAttribute, ChangeEvent } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    labelTitle?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    title?: string;
    disabled?: boolean;
    value?: string | number | undefined;
    labelStyle?: string;
    labelTextStyle?: string;
    inputStyle?: string;
    inputError?: string;
    handleBlur?: () => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    ariaLabel?: string;
    ariaInvalid?: boolean;
    ariaDescribedby?: string;
    required?: boolean;
}
