import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { PopUpProps } from './popUp.types';

const contentStyle = {  
    width: '200px',
    padding: "8px 12px",
    background: "white",
    fontFamily: 'Roboto Mono',
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "1",
    letterSpacing: "0.02em",
    color: "rgba(0, 0, 0, 0.8)"
};
    


const PopUp: React.FC<PopUpProps> = ({ children, content }) => (
    <Popup
        trigger={open => (
            <button type="button" className="button">
                {children}
                {open}
            </button>
        )}
        position="top center"
        on={['hover', 'focus']}
        {...{ contentStyle}}
        closeOnDocumentClick
        
    >
        <span>{content}</span>
    </Popup>
);

export default PopUp;
