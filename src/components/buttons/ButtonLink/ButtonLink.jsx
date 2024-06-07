import styles from './ButtonLink.module.scss';

const ButtonLink = ({ url, icon, name }) => {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <div className={styles.wrapperButton}>
          {icon && <ion-icon name={icon}></ion-icon>}
          <span>{name}</span>
        </div>
      </a>
    </>
  );
};

export default ButtonLink;
