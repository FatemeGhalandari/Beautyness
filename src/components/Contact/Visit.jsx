import { visit } from "../../assets";
import VisitCard from "./VisitCard";
const Visit = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center md:py-20 py-8 gap-8 px-8">
      <img
        src={visit}
        alt="visit"
        className="rounded-sm sm:object-cover object-contain sm:w-[550px] sm:h-[545px]"
      />
      <div className="flex flex-col gap-4">
        <p className="text-[#7A9CA5] font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
          The Perfect Service
        </p>
        <h4 className="text-[#141414] font-playfair sm:text-[50px] text-[40px] font-semibold leading-[120%] tracking-tight max-w-[650px]">
          Service to Elevate <br /> the Better lifestyle
        </h4>
        <p className="text-[#5C8692] font-manrope sm:text-[16px] text-[14px] font-normal leading-[154.5%] tracking-wide max-w-[520px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal these content
          here, making it look like readable English.
        </p>
        <VisitCard />
      </div>
    </div>
  );
};

export default Visit;
