import { latest1, latest2, latest3 } from "../assets";
import styles from "../styles";
const Latest = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <p className={`${styles.paragraph} uppercase`}>Our Blog</p>
    <h2 className="text-[#141414] font-playfair sm:text-[30px] text-[24px] font-semibold leading-[120%]">
      Latest Updates
    </h2>
    <div className="flex flex-wrap flex-col md:flex-row items-center justify-center mt-4 gap-4 sm:mx-2 mx-3">
      <div className="flex flex-wrap flex-col items-start justify-center bg-[#EBF3F5] p-4 rounded-md">
        <img
          src={latest1}
          alt="latest1"
          className="w-[370px] h-[341px] object-cover rounded-[4px]"
        />
        <p className="text-[#555] font-manrope text-[15px] font-normal leading-[165%] max-w-[327px] mt-6 uppercase">
          11TH AUGUST 2023 - BY PETER BERGSON
        </p>
        <h4 className="text-[#141414] font-playfair sm:text-[22px] text-[24px] tracking-wide font-semibold leading-[120%] mt-2 max-w-[370px]">
          The hydrotherapy pool energy
        </h4>
        <p className={`${styles.paragraph}`}>
          This blog looks at how choosing the right environmental control system
          can help save you thousands of pounds by providing a sustainable and
          efficient solution for your hydrotherapy pool energy costs.
        </p>
      </div>
      <div className="flex flex-wrap flex-col items-start justify-center bg-[#EBF3F5] p-4 rounded-md">
        <img
          src={latest2}
          alt="latest2"
          className="w-[370px] h-[341px] object-cover rounded-[4px]"
        />
        <p className="text-[#555] font-manrope text-[15px] font-normal leading-[165%] max-w-[327px] mt-6 uppercase">
          9th july 2023 - By Wella Savvy
        </p>
        <h4 className="text-[#141414] font-playfair sm:text-[22px] text-[24px] tracking-wide font-semibold leading-[120%] mt-2 max-w-[370px]">
          Textural Color Effects collection
        </h4>
        <p className={`${styles.paragraph}`}>
          This month, we bring you the Textural Color Effects collection. Within
          these three looks they have created a deliberate random of light and
          dark, soft and dense color with cut, style and texture.
        </p>
      </div>
      <div className="flex flex-wrap flex-col items-start justify-center bg-[#EBF3F5] p-4 rounded-md">
        <img
          src={latest3}
          alt="latest3"
          className="w-[370px] h-[341px] object-cover rounded-[4px]"
        />
        <p className="text-[#555] font-manrope text-[15px] font-normal leading-[165%] max-w-[327px] mt-6 uppercase">
          1st june 2023 - BY sharon smith
        </p>
        <h4 className="text-[#141414] font-playfair sm:text-[22px] text-[24px] tracking-wide font-semibold leading-[120%] mt-2 max-w-[370px]">
          Enhance your client's hair color
        </h4>
        <p className={`${styles.paragraph}`}>
          Discover three exclusive services featuring Majirel: #myflashluminizer
          for an incredible shine; #myreflectsneutralizer to get rid of
          brassiness; and #mycolorsculptor for a multi-dimensional color result.
        </p>
      </div>
    </div>
    <button type="button" className={`${styles.bt}`}>
      <span className={`${styles.btSpan}`}>VIEW MORE STORIES</span>
    </button>
  </div>
);
export default Latest;
