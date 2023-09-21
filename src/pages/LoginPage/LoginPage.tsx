import { NavLink } from "react-router-dom";
import { useAccount } from "wagmi";

import Login from "@/components/Login/Login";
import Stake from "@/components/Stake/Stake";



import {PATHS} from '@constants/path'



const LoginPage = () => {
    const { isConnected } = useAccount();
    
    return (
        <>
        {/* {!isConnected ? <Login/> : <Stake/>} */}
        
        {/* {!isConnected ? <Login/> : <NavLink to={PATHS.STAKE}/>} */}
            
        </>
    );
};

export default LoginPage;
