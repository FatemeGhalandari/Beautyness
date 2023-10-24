import { circleTick } from "../../assets";
import styles from "../../styles";
import { Stages } from "../../data";

const Stage = () => (
  <div className="flex flex-col">
    {Stages.map((stage) => (
      <div key={stage.id} className="flex flex-row">
        <img
          src={circleTick}
          alt="circleTick"
          className="w-[33.334px] h-[33.333px] pr-2"
        />
        <div className="flex flex-col">
          <h4 className={styles.stageTitle}>{stage.title}</h4>
          <p className={styles.stageDesc}>{stage.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Stage;
