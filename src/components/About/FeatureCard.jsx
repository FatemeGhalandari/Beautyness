import { values } from "../../data";

const FeatureCard = () => (
  <div className="flex flex-col py-4 ">
    {values.map((value) => (
      <div
        key={value.id}
        className="flex sm:flex-row flex-col sm:gap-12 gap-2 md:justify-normal justify-center sm:items-start items-center"
      >
        <img
          src={value.avatar}
          alt={value.avatar}
          className="w-[100px] h-[100px] border-2 border-[#1E2C30] p-4 bg-[#F2FCFF]"
        />
        <div className="flex flex-col pb-6 sm:px-0 px-4 ">
          <h4 className="text-[#141414] sm:text-left text-center font-playfair text-[22px] font-bold leading-[120%] pb-4">
            {value.title}
          </h4>
          <p className="text-[#555] sm:text-left text-center font-manrope sm:text-[18px] text-[16px] font-normal leading-[170%] sm:max-w-[458px] max-w-[390px]">
            {value.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default FeatureCard;
