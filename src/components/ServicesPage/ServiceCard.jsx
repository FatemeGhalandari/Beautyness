import styles from "../../styles";
import { service1 } from "../../assets";

const ServiceCard = () => (
  <div className="flex flex-row py-12 items-start justify-center">
    <img
      src={service1}
      alt="service1"
      className="w-[600px] h-[640px] rounded-sm"
    />
    <div className="flex flex-col gap-4 py-6 px-8 ">
      <div className="flex flex-col gap-2 border-[#9BB7BF] border-b py-2">
        <p className={styles.serviceItem}>
          Full body massage ............................. $54.00
        </p>
        <p className={styles.serviceDesc}>
          The versions have evolved over the sometimes by accident.
        </p>
      </div>
      <div className="flex flex-col gap-2 border-[#9BB7BF] border-b py-2">
        <p className={styles.serviceItem}>
          Geothermal spa ................................. $54.00
        </p>
        <p className={styles.serviceDesc}>
          The versions have evolved over the sometimes by accident.
        </p>
      </div>
      <div className="flex flex-col gap-2 border-[#9BB7BF] border-b py-2">
        <p className={styles.serviceItem}>
          Sauna relax ....................................... $73.00
        </p>
        <p className={styles.serviceDesc}>
          The versions have evolved over the sometimes by accident.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className={styles.serviceItem}>
          Face masks ....................................... $48.00
        </p>
        <p className={styles.serviceDesc}>
          The versions have evolved over the sometimes by accident.
        </p>
      </div>
      <div className="flex py-8">
        <button type="button" className={`${styles.bt}`}>
          <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
          <span className={`${styles.btSpan}`}>get an appointment</span>
        </button>
      </div>
    </div>
  </div>
);

export default ServiceCard;
