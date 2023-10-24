import ServiceCard from "./ServiceCard";

const Service = () => (
  <div className="flex flex-col py-20 items-center">
    <div className="flex flex-col px-8">
      <p className="text-[#5C8692] text-center font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
        Our Services
      </p>
      <h4 className="text-[#141414] text-center font-playfair sm:text-[50px] text-[40px] font-semibold leading-[120%] tracking-tight max-w-[650px]">
        We are Experienced in making you very Beautiful
      </h4>
    </div>
    <div>
      <ServiceCard />
    </div>
  </div>
);

export default Service;
