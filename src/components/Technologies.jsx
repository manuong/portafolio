import icons from '../data/technologies.json';
import styles from './Technologies.module.scss';

const Technologies = () => {
  return (
    <section className={styles.wrapperSection}>
      <div>
        <h2>Tecnologías</h2>
        <div className={styles.wrapperIcons}>
          {icons.map((icon, index) => {
            return (
              <div key={index}>
                <img src={icon.url} alt="icono de tecnologia" />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.bubble1}></div>
      <div className={styles.bubble2}></div>
      <div className={styles.bubble3}></div>
    </section>
  );
};

export default Technologies;
