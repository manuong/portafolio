import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapperHome}>
      <About />
      <Projects />
      <Technologies />
    </div>
  );
};

export default HomePage;
