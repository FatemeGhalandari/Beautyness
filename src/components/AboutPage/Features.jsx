import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 sm:px-0 px-6">
      <p className="text-[#5C8692] font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
        Our Values
      </p>
      <h4 className="text-[#141414] font-playfair sm:text-[45px] text-[30px] text-center font-semibold leading-[130%] tracking-tight">
        The work values we thrive for
      </h4>
      <div className="flex flex-col py-8">
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;
