import ICON_NAMES from '../constants/iconNames';
import CONTACTS from '../constants/urlContacts';
import ContactLabel from './ContactLabel/ContactLabel';
import styles from './Footer.module.scss';
import ButtonCV from './buttons/ButtonCV/ButtonCV';

const Footer = () => {
  return (
    <footer className={styles.wrapperFooter}>
      <div>
        <h3>Contactos y más...</h3>
      </div>

      <div className={styles.contacts}>
        <div>
          <ContactLabel
            url={CONTACTS.GMAIL}
            icon={ICON_NAMES.GMAIL}
            reference={'manumtz.job@gmail.com'}
          />
          <ContactLabel
            url={CONTACTS.WHATSAPP}
            icon={ICON_NAMES.WHATSAPP}
            reference={'+52 56 1282 8043'}
          />
        </div>

        <div>
          <ContactLabel url={CONTACTS.LINKEDIN} icon={ICON_NAMES.LINKEDIN} reference={'in/manuong'} />
          <ContactLabel
            url={CONTACTS.GITHUB}
            icon={ICON_NAMES.GITHUB}
            reference={'github.com/manuong'}
          />
        </div>

        <div className={styles.divcv}>
          <div className={styles.name}>
            manuong<span>.dev</span>
          </div>
          <ButtonCV name={'Descargar CV'} />
        </div>
      </div>

      <div className={styles.social}>
        <div>
          <a href={CONTACTS.INSTAGRAM} target="_blank" rel="noreferrer">
            <ion-icon name={ICON_NAMES.INSTAGRAM}></ion-icon>
          </a>
        </div>
        <div>
          <a href={CONTACTS.FACEBOOK} target="_blank" rel="noreferrer">
            <ion-icon name={ICON_NAMES.FACEBOOK}></ion-icon>
          </a>
        </div>
        <div>
          <a href={CONTACTS.SPOTIFY} target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/?size=100&id=11116&format=png&color=ffffff" alt="logo" />
          </a>
        </div>
        <div>
          <a href={CONTACTS.DISCORD} target="_blank" rel="noreferrer">
            <ion-icon name={ICON_NAMES.DISCORD}></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
