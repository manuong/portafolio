import ButtonCV from './buttons/ButtonCV/ButtonCV';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <header className={styles.wrapperHeader}>
      <nav className={styles.navbar}>
        <div className={styles.name}>
          manuong<span>.dev</span>
        </div>
        <div className={styles.contacts}>
          <div>
            <div className={styles.icons}>
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <span>manumtz.job@gmail.com</span>
          </div>
          <div>
            <div className={styles.icons}>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            <span>+52 56 1282 8043</span>
          </div>
          <div>
            <div className={styles.icons}>
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
            <span>in/manuong</span>
          </div>
          <ButtonCV name={'Descargar CV'} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
