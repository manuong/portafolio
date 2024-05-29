import foto from '../assets/foto-de-perfil.jpg';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.aboutWrapper}>
      <section className={styles.about}>
        <img className={styles.foto} src={foto} alt="foto de perfil" />
        <h1>Emmanuel Martinez Zamudio</h1>
        <h2>Full Stack Developer | Front-end & Back-end</h2>
        <p>Actualmente llevo 2 años en el desarrollo IT</p>
        <p>
          Desde chico me a gustado pasar mi tiempo libre navegando por la web, chateando o escuchando
          música, y en todo ese tiempo me eh dado cuenta de la evolución que han tenido los programas,
          aplicación y paginas web, es por eso que me gustaría ser yo ahora quien brinde esas
          experiencias y herramientas
        </p>
      </section>
    </div>
  );
};

export default HomePage;
