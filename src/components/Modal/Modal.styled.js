@import "@styles/breakpoints.module.scss";
@import "@styles/theme-colors.module.scss";
@import "@styles/fonts.module.scss";
@import "@styles/mixins.module.scss";


import styled from 'styled-components';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1200;
`;

export const ModalWindow = styled.div`
    background-color: ${props => props.theme.colors.white};
    margin: auto;
    padding: 20px;
    width: 60%;
    border-radius: ${props => props.theme.spacing(3)};
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
    z-index: 150;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);

    /* @media screen and (min-width: 480px) {
        .modal {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 450px;
            height: 609px;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @media screen and (min-width: 1200px) {
        .modal {
            width: 528px;
            height: 581px;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @media screen and (min-width: 1199px) {
        .modal__title {
            line-height: 1.15;
        }
    } */
`;
