import About from '../components/About';
import Projects from '../components/Projects';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapperHome}>
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;
