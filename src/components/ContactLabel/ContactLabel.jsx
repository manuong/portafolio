import styles from './ContactLabel.module.scss';

const ContactLabel = ({ url, icon, reference }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className={styles.wrapperIcon}>
        <div className={styles.icon}>
          <ion-icon name={icon}></ion-icon>
        </div>
        <span>{reference}</span>
      </div>
    </a>
  );
};

export default ContactLabel;
