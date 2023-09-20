import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { experts } from "../../constants";

const ExpertCard = () => {
  return (
    <div className="flex flex-row items-center justify-center py-8 gap-8">
      {experts.map((expert) => (
        <div
          key={expert.id}
          className="flex flex-col items-center justify-center"
        >
          <img
            src={expert.avatar}
            alt={expert.id}
            className="w-[370px] h-[350px] rounded-sm"
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
              className="cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#5C8692" }}
              className=" cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#5C8692" }}
              className="cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#5C8692" }}
              className="cursor-pointer hover:beat"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertCard;
