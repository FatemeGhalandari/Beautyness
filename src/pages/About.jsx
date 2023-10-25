import Banner from "../components/About/Banner";
import Features from "../components/About/Features";
import AboutUs from "../components/About/AboutUs";
import Experts from "../components/About/Experts";
import Testimonials from "../components/Home/Testimonials";
import Share from "../components/About/Share";

import styles from "../styles";

const About = () => (
  <div className="w-full bg-white overflow-hidden">
    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Banner />
        <Features />
        <AboutUs />
        <Experts />
        <Testimonials />
        <Share />
      </div>
    </div>
  </div>
);

export default About;
