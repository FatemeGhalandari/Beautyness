import StoryCard from "./StoryCard";
import styles from "../../styles";
import { NavLink } from "react-router-dom";
const Story = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 sm:px-20 px-4">
      <StoryCard />
      <NavLink to="/Blog">
        <button type="button" className={`${styles.bt}`}>
          <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
          <span className={`${styles.btSpan}`}>VIEW MORE STORIES</span>
        </button>
      </NavLink>
    </div>
  );
};

export default Story;
