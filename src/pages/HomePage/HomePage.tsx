import { useAccount } from "wagmi";

import Login from '@/components/Login/Login';
import Stake from "@/components/Stake/Stake";

const HomePage = () => {
  const { isConnected } = useAccount();

    return (
        <>
          {!isConnected ? <Login/> : <Stake/>}
        </>
    );
};

export default HomePage;
