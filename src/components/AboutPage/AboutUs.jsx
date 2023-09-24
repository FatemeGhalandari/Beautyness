import { about4 } from "../../assets";
const About = () => {
  return (
    <div className="flex flex-row bg-[#EBF3F5] items-center justify-center sm:px-8 px-0 ss:py-12 py-0">
      <div className="flex sm:flex-row flex-col bg-[#1E2C30] md:my-8 my-0 py-8 sm:px-6 px-4 items-center justify-center ss:rounded-[20px] rounded-none">
        <div className="bg-bg1 items-center justify-center rounded-lg sm:px-0 ss:px-16 px-2">
          <img
            src={about4}
            alt="about4"
            className="sm:w-[388px] sm:h-[550px] sm:mx-4 mx-auto h-[350px] w-[288px] object-cover"
          />
        </div>
        <div className="flex flex-col md:px-16 px-0 pl-8 md:py-0 sm:py-6 py-4">
          <p className="text-[#FFF] font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
            about us
          </p>
          <h4 className="text-[#FFF] font-playfair md:text-[50px] text-[36px] font-semibold leading-[130%] tracking-tight max-w-[460px] pt-4">
            Style is a Reflection of your Attitude & your Personality
          </h4>
          <p className="text-[#FFF] font-manrope text-[16px] font-normal leading-[154.5%] tracking-wide sm:max-w-[508px] max-w-[400px] py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
            injected humour, or randomized words which don't look even many
            desktop publishing packages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
