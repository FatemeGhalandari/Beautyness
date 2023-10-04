import styles from "../../styles";
import { services } from "../../data";

const ServiceCard = () => (
  <div className="flex flex-col py-12 items-start justify-center gap-8 ">
    {services.map((service) => (
      <div
        key={service.id}
        className="flex flex-row border-b-2 border-[#5C8692] py-8"
      >
        <img
          src={service.avatar}
          alt={service.id}
          className="w-[500px] h-[540px] rounded-sm"
        />
        <div className="flex flex-col gap-4 py-2 px-8 ">
          {service.experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col gap-2 border-[#9BB7BF] border-b py-2"
            >
              <p className={styles.serviceItem}>{experience.item}</p>
              <p className={styles.serviceDesc}>{experience.desc}</p>
            </div>
          ))}

          <div className="flex py-8">
            <button type="button" className={`${styles.bt}`}>
              <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
              <span className={`${styles.btSpan}`}>get an appointment</span>
            </button>
          </div>
        </div>{" "}
      </div>
    ))}
  </div>
);

export default ServiceCard;
