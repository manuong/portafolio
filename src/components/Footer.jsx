import ButtonCV from './ButtonCV';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapperFooter}>
      <div>
        <h3>Contactos y más...</h3>
      </div>

      <div className={styles.contacts}>
        <div>
          <p>manumtz.job@gmail.com</p>
          <p>+52 56 1282 8043</p>
        </div>

        <div>
          <p>in/manuong</p>
          <p>github.com/manuong</p>
        </div>

        <div>
          <p>instagram</p>
          <p>facebook</p>
          <p>spotify</p>
        </div>

        <div className={styles.divcv}>
          <p>manuong</p>
          <ButtonCV name={'Descargar CV'} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
