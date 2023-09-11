import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faBookOpen,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const OfferForm = () => (
  <div className=" flex flex-col justify-start items-start py-12 bg-[#FFF] ss:px-16 px-6 shadow-[#5C8692] shadow-md rounded-[3px]">
    <div className=" flex flex-col gap-3 w-full">
      <Input
        label="Name"
        icon={<FontAwesomeIcon icon={faUser} style={{ color: "#5C8692" }} />}
      />
      <Input
        label="Email"
        icon={
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#5C8692" }} />
        }
      />
      <Input
        label="Phone"
        icon={<FontAwesomeIcon icon={faPhone} style={{ color: "#5C8692" }} />}
      />
      <Input
        label="Service You Need"
        icon={
          <FontAwesomeIcon icon={faBookOpen} style={{ color: "#5C8692" }} />
        }
      />
      <Input
        label="Any Note For Us"
        icon={<FontAwesomeIcon icon={faEdit} style={{ color: "#5C8692" }} />}
        className="h-[135px] "
      />
      <button
        type="button"
        className="flex items-center justify-center w-full py-4 bg-[#7A9CA5] mt-24 rounded-[2px] hover:bg-[#647f93]"
      >
        <span className="text-[#FFF] font-medium font-manrope text-[14px] uppercase tracking-widest relative">
          get an appointment
        </span>
      </button>
    </div>
  </div>
);

export default OfferForm;
