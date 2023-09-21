import Banner from "../components/AboutPage/Banner";
import Features from "../components/AboutPage/Features";
import AboutUs from "../components/AboutPage/AboutUs";
import Experts from "../components/AboutPage/Experts";
import Testimonials from "../components/Testimonials";
import Share from "../components/AboutPage/Share";

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
