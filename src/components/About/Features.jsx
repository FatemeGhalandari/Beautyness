import { about1, about2, about3 } from "../../assets";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <p className="text-[#5C8692] font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
        Our Values
      </p>
      <h4 className="text-[#141414] font-playfair text-[45px] font-semibold leading-[130%] tracking-tight">
        The work values we thrive for
      </h4>
      <div className="flex flex-col py-8">
        <div className="flex flex-col py-4">
          <div className="flex flex-row gap-12">
            <img
              src={about1}
              alt="feature1"
              className="w-[100px] h-[100px] border-2 border-[#1E2C30] py-4 bg-[#F2FCFF]"
            />
            <div className="flex flex-col gap-2">
              <h4 className="text-[#141414] font-playfair text-[22px] font-bold leading-[120%]">
                Beauty Experts
              </h4>
              <p className="text-[#555] font-manrope text-[18px] font-normal leading-[170%] max-w-[458px] ">
                The majority have suffered alteration in some form, buying to
                injected humour, or randomised words which desktop publishing
                packages.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-[#D3D3D3] border-t-2 py-6">
          <div className="flex flex-row gap-12">
            <img
              src={about2}
              alt="feature2"
              className="w-[100px] h-[100px] border-2 border-[#1E2C30] py-4 bg-[#F2FCFF]"
            />
            <div className="flex flex-col gap-2">
              <h4 className="text-[#141414] font-playfair text-[22px] font-bold leading-[120%]">
                Beauty Experts
              </h4>
              <p className="text-[#555] font-manrope text-[18px] font-normal leading-[170%] max-w-[458px] ">
                The majority have suffered alteration in some form, buying to
                injected humour, or randomised words which desktop publishing
                packages.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-[#D3D3D3] border-t-2 py-6">
          <div className="flex flex-row gap-12">
            <img
              src={about3}
              alt="feature3"
              className="w-[100px] h-[100px] border-2 border-[#1E2C30] py-4 bg-[#F2FCFF]"
            />
            <div className="flex flex-col gap-2">
              <h4 className="text-[#141414] font-playfair text-[22px] font-bold leading-[120%]">
                Beauty Experts
              </h4>
              <p className="text-[#555] font-manrope text-[18px] font-normal leading-[170%] max-w-[458px] ">
                The majority have suffered alteration in some form, buying to
                injected humour, or randomised words which desktop publishing
                packages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
