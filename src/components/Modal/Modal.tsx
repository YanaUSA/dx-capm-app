import { createPortal } from 'react-dom';
// import { ModalBackdrop, ModalWindow } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

type  {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};


export const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handleEscape = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    const handleBackdrop = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div onClick={handleBackdrop}>
            <div>{children}</div>
        </div>,
        modalRoot
    );
};

