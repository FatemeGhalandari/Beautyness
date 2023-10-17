import { aboutService } from "../../assets";
import Stage from "./Stage";
const About = () => (
  <div className="flex flex-row bg-[#EBF3F5]">
    <div className="flex flex-col justify-center items-start py-10 px-28 md:w-[50%] w-[100%] gap-4">
      <p className="text-[#5C8692] font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
        What Includes?
      </p>
      <h4 className="text-[#141414] font-playfair sm:text-[50px] text-[40px] font-semibold leading-[120%] tracking-tight ">
        About the service
      </h4>
      <p className="text-[#5C8692] font-manrope text-[16px] font-normal leading-[154.5%] tracking-wide max-w-[530px]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal these content
        here, making it look like readable English.
      </p>
      <p className="text-[#141414] font-playfair text-[22px] font-semibold leading-[130%] tracking-tight">
        Our Methodology :
      </p>
      <Stage />
    </div>
    <img src={aboutService} alt="aboutService" className="w-[50%]" />
  </div>
);

export default About;
