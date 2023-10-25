import Banner from "../components/Service/Banner";
import About from "../components/Service/About";
import Membership from "../components/Service/Membership";
import Benefits from "../components/Home/Benefits";
import styles from "../styles";
const Reservation = () => (
  <div className="w-full bg-white overflow-hidden">
    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Banner />
        <About />
        <Membership />
        <Benefits />
      </div>
    </div>
  </div>
);

export default Reservation;
