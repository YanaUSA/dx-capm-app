import { Route, Routes } from "react-router-dom";
import Layout from '@components/Layout/Layout';
import LoginPage from "@pages/LoginPage/LoginPage";
// import HomePage from "@pages/HomePage/HomePage";
import StakePage from "@pages/StakePage/StakePage";
import WithdrawPage from "@pages/WithdrawPage/WithdrawPage";
import RewardsPage from "@pages/RewardsPage/RewardsPage";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";

import "./App.scss";

const App = () => {
  return (
      <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route index element={<LoginPage />} />        
        <Route path="/stake" element={<StakePage />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
  );
};

export default App;
