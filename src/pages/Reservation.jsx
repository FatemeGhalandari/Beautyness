import Banner from "../components/ServicePage/Banner";
import About from "../components/ServicePage/About";
import Appointment from "../components/ServicePage/Appointment";
import Membership from "../components/ServicePage/Membership";
import Benefits from "../components/Benefits";
import styles from "../styles";
const Reservation = () => (
  <div className="w-full bg-white overflow-hidden">
    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Banner />
        <About />
        <Membership />
        <Appointment />
        <Benefits />
      </div>
    </div>
  </div>
);

export default Reservation;
