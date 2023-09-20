
import { useAccount } from "wagmi";

import Login from "@/components/Login/Login";
import { NavLink } from "react-router-dom";

import {PATHS} from '@constants/path'



const LoginPage = () => {
    const { isConnected } = useAccount();
    
    return (
        <>
        {isConnected ? <NavLink to={PATHS.STAKE}/> : <Login/>}
            
        </>
    );
};

export default LoginPage;
