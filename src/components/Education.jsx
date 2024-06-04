import styles from './Education.module.scss';
import schools from '../data/education.json';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <section className={styles.wrapperSection}>
      <div>
        <h2>Educación</h2>
        <div className={styles.wrapperCards}>
          {schools.map(({ image, name, title, time }, index) => {
            return <EducationCard key={index} image={image} name={name} title={title} time={time} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
