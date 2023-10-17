import { quote, star, star_half, testimonial1, testimonial2 } from "../assets";

const Testimonials = () => (
  <div className="flex flex-col bg-[#EDF5F7] py-24 px-2">
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#5C8692] font-manrope sm:text-[15px] text-[13px] font-normal leading-[154%] max-w-[327px] uppercase tracking-wider">
          Testimonials
        </p>
        <h2 className="text-[#141414] font-playfair sm:text-[45px] text-[30px] text-center mx-4 font-bold leading-[130%] mt-4 tracking-tight">
          What our Customers says...
        </h2>
      </div>
      <div className="flex md:flex-row flex-col py-12 sm:mx-4 mx-8 md:items-start items-center justify-center gap-8 ">
        <div className="flex flex-col items-center justify-center bg-[#FFF] rounded-t-[6px]">
          <p className="font-manrope text-[#141414] max-w-[585px] sm:text-[19px] text-[15px] font-normal leading-[150%] sm:px-24 px-8 py-8">
            &quot;I&apos;ve been a loyal customer of Beautyness for over two
            years now, and I can confidently say that it&apos;s the best beauty
            salon I&apos;ve ever been to. The staff is incredibly skilled and
            friendly&quot;
          </p>
          <div className="bg-[#1E2C30] flex flex-row w-full px-8 md:py-6 py-4 rounded-b-[6px]">
            <div className="flex xs:flex-row flex-col items-start justify-start ">
              <img
                src={testimonial1}
                alt="testimonial1"
                className="w-[74px] h-[74px] border-solid border-2 mr-4"
              />
              <div className="flex flex-col sm:mt-0 mt-2">
                <div className="flex flex-row">
                  <img
                    src={star}
                    alt="star"
                    className="w-[16.382px] h-[16.2px]"
                  />
                  <img
                    src={star}
                    alt="star"
                    className="w-[16.382px] h-[16.2px]"
                  />
                  <img
                    src={star}
                    alt="star"
                    className="w-[16.382px] h-[16.2px]"
                  />
                  <img
                    src={star}
                    alt="star"
                    className="w-[16.382px] h-[16.2px]"
                  />
                  <img
                    src={star_half}
                    alt="star_half"
                    className="w-[16.382px] h-[16.2px]"
                  />
                </div>
                <h2 className="text-[#fff] font-playfair sm:text-[20px] text-[15px] font-bold leading-[160%] tracking-tight">
                  James Williams
                </h2>
                <p className="text-[#fff] font-manrope sm:text-[14px] text-[12px] font-normal leading-[160%] tracking-normal">
                  United States
                </p>
              </div>
            </div>
            <div className="flex ml-auto py-2">
              <img
                src={quote}
                alt="quotes"
                className="sm:w-[70.012px] sm:h-[55.273px] w-[50.012px] h-[35.273px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-t-[6px]">
          <p className="font-manrope text-[#141414] max-w-[582px] sm:text-[19px] text-[15px] font-normal leading-[150%] sm:px-24 px-8 py-8">
            &quot;I&apos;ve been a loyal customer of Beautyness for over two
            years now, and I can confidently say that it&apos;s the best beauty
            salon I&apos;ve ever been to. The staff is incredibly skilled and
            friendly&quot;
          </p>
          <div className="bg-[#1E2C30] flex flex-row w-full px-8 md:py-6 py-4 rounded-b-[6px]">
            <div className="flex xs:flex-row flex-col items-start justify-start ">
              <img
                src={testimonial2}
                alt="testimonial2"
                className="w-[74px] h-[74px] border-solid border-2 mr-4"
              />
              <div className="flex flex-col sm:mt-0 mt-2">
                <div className="flex flex-row">
                  <img
                    src={star}
                    alt="star"
                    className="w-[16.382px] h-[16.2px]"
                  />
                  <img
                    src={star}
                    alt="star"
                    className="w-[16.382px] h-[16.2px]"
                  />
                  <img
                    src={star}
                    alt="star"
                    className="w-[16.382px] h-[16.2px]"
                  />
                  <img
                    src={star}
                    alt="star"
                    className="w-[16.382px] h-[16.2px]"
                  />
                  <img
                    src={star_half}
                    alt="star_half"
                    className="w-[16.382px] h-[16.2px]"
                  />
                </div>
                <h2 className="text-[#fff] font-playfair sm:text-[20px] text-[15px] font-bold leading-[160%] tracking-tight">
                  Leo Jessica
                </h2>
                <p className="text-[#fff] font-manrope sm:text-[14px] text-[12px] font-normal leading-[160%] tracking-normal">
                  United Kingdom
                </p>
              </div>
            </div>
            <div className="flex ml-auto py-2">
              <img
                src={quote}
                alt="quotes"
                className="sm:w-[70.012px] sm:h-[55.273px] w-[50.012px] h-[35.273px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
