import ButtonCV from './ButtonCV';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <header className={styles.wrapperHeader}>
      <nav className={styles.navbar}>
        <div className={styles.name}>
          manuong<span>.dev</span>
        </div>
        <div className={styles.contacts}>
          <span>manumtz.job@gmail.com</span>
          <span>+52 56 1282 8043</span>
          <span>in/manuong</span>
          <ButtonCV name={'Descargar CV'} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
