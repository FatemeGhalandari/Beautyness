import styles from "../styles";
import Banner from "../components/ServicesPage/Banner";
import Service from "../components/ServicesPage/Service";
import Appointment from '../components/Appointment'
const Services = () => (
  <div className="w-full bg-white overflow-hidden">
    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Banner />
        <Service />
        <Appointment />
      </div>
    </div>
  </div>
);

export default Services;
