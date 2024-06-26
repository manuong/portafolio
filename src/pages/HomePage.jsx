import About from '../components/About';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapperHome}>
      <About />
      <Projects />
      <Technologies />
      <Education />
      <Footer />
    </div>
  );
};

export default HomePage;
