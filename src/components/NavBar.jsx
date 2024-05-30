import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <span>Mas proyectos</span>
      <span>Mas sobre mi</span>
      <button>Descargar CV</button>
    </nav>
  );
};

export default NavBar;
