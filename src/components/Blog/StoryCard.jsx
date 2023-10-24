import { stories } from "../../data";
import styles from "../../styles";
const StoryCard = () => (
  <div className="flex flex-wrap flex-col md:flex-row items-center justify-center mt-4 gap-8 sm:mx-2 mx-3">
    {stories.map((story) => (
      <div
        key={story.id}
        className="flex flex-wrap flex-col items-start justify-center bg-[#EBF3F5] p-4 rounded-md"
      >
        <img
          src={story.icon}
          alt={story.id}
          className="w-[370px] h-[341px] object-cover rounded-[4px]"
        />
        <p className="text-[#555] font-manrope text-[15px] font-normal leading-[165%] max-w-[327px] mt-6 uppercase">
          {story.caption}
        </p>
        <h4 className="text-[#141414] font-playfair sm:text-[22px] text-[24px] tracking-wide font-semibold leading-[120%] mt-2 max-w-[370px]">
          {story.title}
        </h4>
        <p className={`${styles.paragraph}`}>{story.desc}</p>
      </div>
    ))}
  </div>
);

export default StoryCard;
