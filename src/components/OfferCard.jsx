import { fifty, dots } from "../assets";
const OfferCard = () => (
  <div className="flex md:flex-row flex-col justify-center items-center md:gap-8 gap-2">
    <div className="flex flex-col py-2 ml-12 md:gap-4">
      <div className="flex flex-row gap-4">
        <img src={dots} alt="dots" className="w-[30px] h-[45px]" />
        <div className="flex flex-col">
          <h2 className="text-[#141414] font-manrope text-[14px] font-extrabold leading-[150%] uppercase tracking-widest">
            MAIL US :
          </h2>
          <p className="text-[#141414] font-manrope text-[15px] font-medium leading-[150%] tracking-wide">
            info@beautyness.com
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <img src={dots} alt="dots" />
        <div className="flex flex-col">
          <h2 className="text-[#141414] font-manrope text-[14px] font-extrabold leading-[150%] uppercase tracking-widest">
            CALL US :
          </h2>
          <p className="text-[#141414] font-manrope text-[15px] font-medium leading-[150%] tracking-wide">
            (+22) 123 4568 00
          </p>
        </div>
      </div>
    </div>
    <div className="flex md:flex-col flex-row bg-[#1E2C30] md:items-start items-center justify-center px-8 md:w-auto w-full py-4 ml-auto gap-4  rounded-r-[2px]">
      <h2 className="text-[#FFF] font-manrope text-[15px] font-bold leading-[175%] tracking-widest uppercase">
        - Get Flat -
      </h2>
      <img src={fifty} alt="fifty" className="w-[97.57px] h-[48.75px]" />
      <h2 className="text-[#FFF] font-manrope text-[18px] font-bold leading-[175%] tracking-widest">
        {" "}
        Discount
      </h2>
    </div>
  </div>
);

export default OfferCard;
