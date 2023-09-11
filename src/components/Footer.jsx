import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Logo_white } from "../assets";
import styles from "../styles";
import { footerLinks } from "../constants";

const Footer = () => (
  <div className="flex flex-col ">
    <div className="flex flex-col bg-[#1E2C30] divide-y-2 divide-[#5C8692] md:px-32 px-8">
      <div className="flex sm:flex-row flex-col py-8 sm:px-24 px-4">
        <div className="flex flex-1 md:justify-start md:items-start justify-center py-4">
          <img
            src={Logo_white}
            alt="Logo_white"
            className="w-[298px] h-[65px] object-contain"
          />
        </div>
        <div className="flex md:justify-end justify-center items-center md:ml-auto ml-2 md:gap-2 sm:gap-4 gap-8">
          <FontAwesomeIcon
            icon={faFacebookF}
            style={{ color: "#FFF" }}
            className="border-[3px] border-[#5C8692] p-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#FFF" }}
            className="border-[3px] border-[#5C8692] p-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#FFF" }}
            className="border-[3px] border-[#5C8692] p-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#FFF" }}
            className="border-[3px] border-[#5C8692] p-2 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-row sm:py-8 py-2 sm:px-24 px-4 mx-3 w-full justify-between items-start flex-wrap ">
        {footerLinks.map((footerLink) => (
          <div className="flex flex-col ss:my-4 my-2 min-w-[150px] max-w-[324px]">
            <h4 className={`${styles.footers}`}>{footerLink.title}</h4>
            <ul className="list-none sm:mt-4 mt-2">
              {footerLink.links.map((link, index) => (
                <li
                  key={index}
                  className={`text-[#EDF5F7] font-manrope text-[15px] font-normal leading-[165%] max-w-[200px] cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-2" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center justify-center bg-[#111E22] py-2">
      <p className="text-[#FFF] font-manrope sm:text-[18px] text-center text-[15px] font-normal leading-[200%] py-1 px-3">
        © Copyright 2023 Beautyness. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
