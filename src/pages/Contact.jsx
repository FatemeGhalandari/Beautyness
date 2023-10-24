import Banner from "../components/Contact/Banner";
import Membership from "../components/Service/Membership";
import styles from "../styles";
import Visit from "../components/Contact/Visit";
const Reservation = () => (
  <div className="w-full bg-white overflow-hidden">
    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Banner />
        <Visit />
        <Membership />
      </div>
    </div>
  </div>
);

export default Reservation;
