import styles from './ButtonCV.module.scss';

const ButtonCV = ({ name }) => {
  return <button className={styles.wrapperButton}>{name}</button>;
};

export default ButtonCV;
