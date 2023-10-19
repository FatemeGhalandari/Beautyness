import { Members } from "../../data";

const MemberCard = () => (
  <div className="flex flex-row">
    {Members.map((member) => (
      <div key={member.id} className="flex flex-row bg-[#1E2C30]">
        <p className="text-[#FFF] font-playfair text-[22px] font-semibold leading-[130%] tracking-tight">
          {member.title}
        </p>
      </div>
    ))}
  </div>
);

export default MemberCard;
