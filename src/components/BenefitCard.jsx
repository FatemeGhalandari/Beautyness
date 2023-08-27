import { tick } from "../assets";
import styles from "../styles";

const BenefitCard = ({ title, content }) => {
  return (
    <div className="flex flex-col px-4 py-8 mx-12 max-w-[330px] hover:bg-[#EDF5F7] rounded-[20px] cursor-">
      <img src={tick} alt="tick" className="w-[90px] h-[90px]" />
      <h2 className={`${styles.heading2}`}>{title}</h2>
      <p className={`${styles.paragraph}` }>{content}</p>
    </div>
  );
};

export default BenefitCard;
