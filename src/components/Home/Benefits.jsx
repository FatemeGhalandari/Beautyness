import BenefitCard from "./BenefitCard";
import { benefits } from "../../data";

const Benefits = () => (
  <div className="flex flex-col py-24 ">
    <div className="flex flex-col items-center justify-center">
      <p className="text-[#5C8692] font-manrope sm:text-[15px] text-[13px] font-normal leading-[154%] max-w-[327px] uppercase tracking-wider">
        Our Awesome Benefits
      </p>
      <h2 className="text-[#141414] font-playfair sm:text-[45px] text-[30px] text-center mx-4 font-bold leading-[130%] mt-4 tracking-tight">
        Actually what you’ll get from
      </h2>
      <div className="flex flex-row flex-wrap justify-center w-full mt-4 ">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} {...benefit} />
        ))}
      </div>
    </div>
  </div>
);

export default Benefits;
