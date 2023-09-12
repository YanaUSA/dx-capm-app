import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import {ModalProps} from './Modal.types'

import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root')!;

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    useEffect(() => {
        const handleEscape = (e:KeyboardEvent) => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className={styles.modalBackdrop} onClick={handleBackdrop}>
            <div className={styles.modalWindow} >{children}</div>
        </div>,
        modalRoot
    );
};

