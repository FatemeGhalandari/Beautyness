import { bannerGirl, welcome } from "../assets";
import styles from "../styles";

const Banner = () => (
  <div className={`${styles.coloredBg}`}>
    <div className=" flex flex-col items-start justify-center px-16 sm:px-32 md:px-24 py-24 md:w-[50%] w-full ">
      <div className="flex flex-row">
        <img src={welcome} alt="welcome" className="w-[22px] h-[22px] sm:mr-4 mr-2" />
        <p className="text-[#5C8692] font-normal font-manrope uppercase sm:text-[15px] text-[13px]">
          Welcome to Beautyness!!!
        </p>
      </div>
      <h2 className="text-[#141414] font-playfair sm:text-[70px] text-[45px] font-bold leading-[115%] sm:mt-4 mt-2">
        Beauty is power a smile is its sword.
      </h2>
      <p className="text-[#5C8692] font-normal font-manrope sm:text-[19px] text-[14px] sm:mt-8 mt-4">
        We all deserve to treat ourselves to a little extra TLC! Whether there’s
        nothing you adore more than a visit to your favorite beauty salon or
        you are looking to book a well-deserved pamper session for the first
        time, our top beauty treatment list of 2022 is here to ensure that you
        definitely won’t be short for options.
      </p>
      <button
        type="button"
        className="flex justify-center items-start py-4 sm:px-8 px-4 bg-[#5C8692] sm:mt-8 mt-4 rounded-[4px]"
      >
        <span className="text-[#FFF] text-center font-Manrope sm:text-[14px] text-[12px] font-semibold tracking-widest leading-[125%] uppercase">
          Make a reservation
        </span>
      </button>
    </div>
    <div className="bg-[#1E2C30] md:w-[50%] w-full sm:relative">
      <div className="bg-bg1 w-full flex lg:py-44 md:py-48 py-32 sm:pr-2 pr-4 sm:relative ">
        <img
          src={bannerGirl}
          alt="bannerGirl"
          className="sm:w-[550px] sm:h-[545px] border-[#76AAB6] sm:relative border-solid sm:border-8 sm:border-l-0 border-l-0 border-4 p-4 pl-0 sm:object-cover object-contain"
        />
      </div>
    </div>
  </div>
);

export default Banner;
