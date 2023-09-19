import { about4 } from "../../assets";
const About = () => {
  return (
    <div className="flex flex-row bg-[#EBF3F5] items-center justify-center py-12">
      <div className="flex flex-row bg-[#1E2C30] my-8 items-center justify-center rounded-[20px]">
        <img src={about4} alt="about4" className="w-[388px] h-[550px] bg-bg1 pl-4" />
        <div className="flex flex-col px-16">
          <p className="text-[#FFF] font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
            about us
          </p>
          <h4 className="text-[#FFF] font-playfair text-[45px] font-semibold leading-[130%] tracking-tight max-w-[460px] pt-4">
            Style is a Reflection of your Attitude & your Personality
          </h4>
          <p className="text-[#FFF] font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide max-w-[508px] py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
            injected humour, or randomised words which don't look even many
            desktop publishing packages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
