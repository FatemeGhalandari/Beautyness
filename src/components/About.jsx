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
        At Beautyness, helping clients to look and feel fabulous is what we do
        best. As our list of treatments continues to grow, we love introducing
        the latest trends to our beauty salon, giving our lovely clients tons of
        options to choose from
      </p>
      <div className="flex flex-wrap sm:flex-row flex-col items-start justify-center mt-8 gap-4">
        <div className="flex flex-col items-center justify-center border-2 bg-white px-3 py-2 border-[#5C8692]">
          <img src={about1} alt="about1" />
          <p className="text-[#141414] font-playfair text-center sm:text-[22px] text-[25px] font-bold leading-[115%] mt-4 max-w-[143px]">
            Beauty Experts
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-2 bg-white px-3 py-2 border-[#5C8692]">
          <img src={about2} alt="about2" />
          <p className="text-[#141414] font-playfair text-center sm:text-[22px] text-[25px]  font-bold leading-[115%] mt-4 max-w-[143px]">
            Great Services
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-2 bg-white px-3 py-2 border-[#5C8692] ">
          <img src={about3} alt="about3" />
          <p className="text-[#141414] text-center font-playfair sm:text-[22px] text-[25px]  font-bold leading-[115%] mt-4 max-w-[143px]">
            100% Genuine
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[#84A8B2] md:w-[50%] w-full">
      <div className="bg-bg1 w-full flex lg:py-[170px] md:py-[274px] py-[120px] sm:pr-2 pr-4">
        <img
          src={aboutGirl}
          alt="aboutGirl"
          className="w-[500px] h-[576px] object-cover border-[#EBF3F5] border-solid sm:border-8 sm:border-l-0 border-l-0 border-4 p-4 pl-0"
        />
      </div>
    </div>
  </div>
);

export default About;
