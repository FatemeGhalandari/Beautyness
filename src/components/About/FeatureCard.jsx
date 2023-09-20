import { values } from "../../constants";

const FeatureCard = () => (
  <div className="flex flex-col py-4 justify-center items-center">
    {values.map((value) => (
      <div
        key={value.id}
        className="flex sm:flex-row flex-col items-center justify-center sm:gap-12 gap-2 "
      >
        <img
          src={value.avatar}
          alt={value.avatar}
          className="w-[100px] h-[100px] border-2 border-[#1E2C30] p-4  bg-[#F2FCFF]"
        />
        <div className="flex flex-col pb-4">
          <h4 className="text-[#141414] text-center font-playfair text-[22px] font-bold leading-[120%] pb-4">
            {value.title}
          </h4>
          <p className="text-[#555] text-center font-manrope sm:text-[18px] text-[15px] font-normal leading-[170%] max-w-[458px] ">
            {value.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default FeatureCard;
