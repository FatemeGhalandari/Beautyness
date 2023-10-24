import { NavLink } from "react-router-dom";
import { share1, share2, share3 } from "../../assets";

const Share = () => (
  <div className="flex flex-col gap-4 items-center justify-center mt-24 mb-8 xl:px-0 px-6">
    <div className="flex md:flex-row flex-col gap-6 justify-center">
      <div className="flex flex-col items-start gap-2">
        <p className="text-[#5C8692] text-center font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
          share US
        </p>
        <h4 className="text-[#141414] font-playfair sm:text-[50px] text-[40px] font-semibold leading-[120%] tracking-tight max-w-[650px]">
          Follow us on Instagram
        </h4>
        <p className="text-[#555] font-manrope sm:text-[18px] text-[15px] font-normal leading-[170%] max-w-[458px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, buying to injected
          humour, or randomized words many desktop publishing packages.
        </p>
        <img
          src={share1}
          alt="share1"
          className="md:pt-6 pt-2 w-[500px] lg:h-[547px] md:h-[455px] rounded-sm ss:object-cover object-contain"
        />
      </div>
      <div className="md:flex flex-col gap-4 hidden">
        <img
          src={share2}
          alt="share2"
          className="w-[644px] h-[380px] rounded-sm"
        />
        <img
          src={share3}
          alt="share3"
          className="w-[644px] h-[380px] rounded-sm"
        />
      </div>
    </div>
    <NavLink to="/Contact">
      <button
        type="button"
        className="flex justify-center items-start py-4 sm:px-8 px-4 bg-[#7A9CA5] sm:mt-8 mt-4 rounded-[4px] group overflow-hidden relative"
      >
        <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
        <span className="text-[#FFF] text-center font-Manrope sm:text-[14px] text-[12px] font-normal tracking-widest leading-[125%] uppercase relative">
          contact us
        </span>
      </button>
    </NavLink>
  </div>
);

export default Share;
