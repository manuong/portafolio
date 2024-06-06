import styles from './About.module.scss';
import foto from '../assets/foto-de-perfil.jpg';

const About = () => {
  return (
    <div className={styles.wrapperAbout}>
      <div className={styles.bubble1}></div>
      <section className={styles.about}>
        <img className={styles.foto} src={foto} alt="foto de perfil" />
        <div>
          <h1>
            Emmanuel Martínez <span className={styles.hidden}>Zamudio</span>
          </h1>
          <h2>
            Full Stack Developer <span className={styles.hidden}>| Front-end & Back-end</span>
          </h2>
          <p>Actualmente llevo 2 años en el desarrollo IT</p>
          <p>
            Desde chico, me ha gustado pasar mi tiempo libre navegando por la web, chateando o escuchando
            música. Me he dado cuenta de la evolución que han tenido los programas, aplicaciones y
            páginas web. Ahora me gustaría ser yo quien brinde esas experiencias y herramientas.
          </p>
        </div>
      </section>
      <div className={styles.bubble2}></div>
      <div className={styles.bubble3}></div>
    </div>
  );
};

export default About;
