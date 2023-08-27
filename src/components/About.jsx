import { about1, about2, about3, aboutGirl } from "../assets";
import styles from "../styles";

const About = () => (
  <div className={`${styles.coloredBg}`}>
    <div className=" flex flex-col items-start justify-center px-16 sm:px-32 md:px-24 py-24 md:w-[50%] w-full ">
      <p className="text-[#5C8692] font-normal font-manrope uppercase sm:text-[16px] text-[14px]">
        about us
      </p>
      <h2 className="text-[#141414] font-playfair sm:text-[70px] text-[50px] font-bold leading-[115%] max-w-[510px] mt-4">
        The Beauty is about being Comfortable in your own skin!
      </h2>
      <p className="text-[#5C8692] font-normal font-manrope sm:text-[18px] text-[16px] max-w-[508px]  mt-6">
        At Beautyness, helping clients to look and feel fabulous is what we
        do best. As our list of treatments continues to grow, we love
        introducing the latest trends to our beauty salon, giving our lovely
        clients tons of options to choose from
      </p>
      
    </div>
    
  </div>
);

export default About;
