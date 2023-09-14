import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import StakeDashboard from "../StakeDashboard/StakeDashboard";

// import styles from './AppBar.module.scss';

const AppBar = () => {
  return (
    <>
      <header>
        <Header />
        <StakeDashboard />
        <Navigation />
      </header>        
    </>
  );
};

export default AppBar;
