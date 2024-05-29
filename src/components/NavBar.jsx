import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>Mas Proyectos</li>
        <li>Mas Sobre Mi</li>
      </ul>
      <button className={styles.button}>Descargar CV</button>
    </nav>
  );
};

export default NavBar;
