import styles from "../styles";
import Banner from "../components/ServicesPage/Banner";
import Service from "../components/ServicesPage/Service";

const Services = () => (
  <div className="w-full bg-white overflow-hidden">
    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Banner />
        <Service />
      </div>
    </div>
  </div>
);

export default Services;
