import styles from './ButtonCV.module.scss';

const ButtonCV = ({ name }) => {
  return (
    <a href="/emmanuel-martinez-cv.pdf" target="_blank" rel="noreferrer">
      <button className={styles.wrapperButton}>{name}</button>
    </a>
  );
};

export default ButtonCV;
