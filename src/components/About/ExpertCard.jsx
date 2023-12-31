import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { experts } from "../../data";
import styles from "../../styles";

const ExpertCard = () => {
  return (
    <div className="flex md:flex-row flex-col md:px-0 px-2 items-center justify-center py-8 gap-8">
      {experts.map((expert) => (
        <div
          key={expert.id}
          className="flex flex-col items-center justify-center hover:bg-[#EDF5F7] p-3 rounded-lg"
        >
          <img
            src={expert.avatar}
            alt={expert.id}
            className="ss:w-[370px] ss:h-[350px] rounded-sm ss:object-none object-contain"
          />
          <h4 className="text-[#141414] text-center font-playfair text-[24px] font-semibold leading-[120%] tracking-tight max-w-[650px] pt-4">
            {expert.name}
          </h4>
          <p className="text-[#5C8692] text-center font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase pt-2">
            {expert.job}
          </p>
          <p className="text-[#555] font-manrope text-[18px] font-normal leading-[170%] max-w-[336px] text-center pt-3">
            {expert.description}
          </p>
          <div className="flex flex-row gap-6 items-center justify-center pt-4">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: "#5C8692" }}
              className={styles.socialIcon}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#5C8692" }}
              className={styles.socialIcon}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#5C8692" }}
              className={styles.socialIcon}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertCard;
