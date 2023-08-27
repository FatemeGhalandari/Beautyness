import {
  About,
  Appointment,
  Banner,
  Benefits,
  Features,
  Footer,
  Header,
  Latest,
  Testimonials,
} from "./components";

import styles from "./styles";
const App = () => (
  <div className="w-full bg-white overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={` ${styles.boxWidth}`}>
        <Header />
      </div>
    </div>
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
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
