import ICON_NAMES from '../constants/iconNames';
import CONTACTS from '../constants/urlContacts';
import ButtonCV from './buttons/ButtonCV/ButtonCV';
import ContactLabel from './ContactLabel/ContactLabel';
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
            <ContactLabel
              icon={ICON_NAMES.GMAIL}
              url={CONTACTS.GMAIL}
              reference={'manumtz.job@gmail.com'}
            />
          </div>
          <div>
            <ContactLabel
              icon={ICON_NAMES.WHATSAPP}
              url={CONTACTS.WHATSAPP}
              reference={'+52 56 1282 8043'}
            />
          </div>
          <div>
            <ContactLabel icon={ICON_NAMES.LINKEDIN} url={CONTACTS.LINKEDIN} reference={'in/manuong'} />
          </div>

          <ButtonCV name={'Descargar CV'} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
