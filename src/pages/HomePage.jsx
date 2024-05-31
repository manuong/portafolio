import About from '../components/About';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapperHome}>
      <About />
    </div>
  );
};

export default HomePage;
