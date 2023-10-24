import ExpertCard from "./ExpertCard";

const Experts = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 sm:px-0 px-4">
      <p className="text-[#5C8692] text-center font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
        Meet our Experts
      </p>
      <h4 className="text-[#141414] text-center font-playfair text-[40px] font-semibold leading-[120%] tracking-tight max-w-[650px]">
        The amazing women behind Beautyness
      </h4>
      <ExpertCard />
    </div>
  );
};

export default Experts;
