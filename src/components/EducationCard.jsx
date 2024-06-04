import styles from './EducationCard.module.scss';

const EducationCard = ({ image, name, title, time }) => {
  return (
    <article className={styles.wrapperCard}>
      <img src={image} alt="logo de la escuela" />
      <div>
        <h3>{name}</h3>
        <p className={styles.title}>{title}</p>
        <p>{time}</p>
      </div>
    </article>
  );
};

export default EducationCard;
