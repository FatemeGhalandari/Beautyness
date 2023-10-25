import {
  About,
  Appointment,
  Banner,
  Benefits,
  Features,
  Latest,
  Testimonials,
} from "../components/Home";

import styles from "../styles";

const Home = () => (
  <div className="w-full bg-white overflow-hidden">
    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Banner />
      </div>
    </div>

    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Features />
        <About />
        <Benefits />
        <Testimonials />
        <Latest />
        <Appointment />
      </div>
    </div>
  </div>
);

export default Home;
