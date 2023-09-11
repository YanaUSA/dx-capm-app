import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import StakeDashboard from "../StakeDashboard/StakeDashboard";

// import styles from './AppBar.module.scss';

const AppBar = () => {
  return (
    <div>
      <header>
        <Header />
        <StakeDashboard />
      </header>      
      <Navigation />
    </div>
  );
};

export default AppBar;
