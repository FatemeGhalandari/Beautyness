import MemberCard from "./MemberCard";

const Membership = () => (
  <div className="flex sm:flex-row flex-col py-20 items-center justify-center px-4 bg-[#EBF3F5]">
    <div className="flex flex-col justify-center sm:items-start items-center px-12 gap-4 sm:py-0 py-4">
      <p className="text-[#5C8692] font-manrope sm:text-[20px] text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
        SCHEDULE YOUR PRESENCE
      </p>
      <h4 className="text-[#141414] sm:text-start text-center font-playfair sm:text-[50px] text-[40px] font-semibold leading-[120%] tracking-tight">
        Make an Appointment
      </h4>
      <p className="text-[#5C8692] font-manrope sm:text-[17px] text-[15px] font-normal leading-[154.5%] tracking-wide sm:max-w-[522px]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal these content
        here, making it look like readable English.
      </p>
    </div>
    <MemberCard />
  </div>
);

export default Membership;
