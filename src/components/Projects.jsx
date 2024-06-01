import styles from './Projects.module.scss';
import ProjectCard from './ProjectCard';
import foto1 from '../assets/projectos/care-with-love.jpeg';
import foto2 from '../assets/projectos/countries.jpeg';
import foto3 from '../assets/projectos/notes-api.jpeg';

const Projects = () => {
  return (
    <section className={styles.wrapperSection}>
      <h2>Projectos</h2>
      <div className={styles.wrapperCards}>
        <ProjectCard
          foto={foto1}
          name={'Care With Love'}
          description={
            'Página web desarrollada en equipo donde su principal objetivo es conectar clientes con proveedores para el cuidado de un adulto mayor; incluye: método de pago, autenticación con terceros, dashboard, chat en vivo, y más funcionalidades'
          }
          additional={
            'Trabajé en el back end diseñando rutas que incluía filtros y ordenamiento, manejo de errores y token de seguridad'
          }
          technologies={'React, Redux, SASS, Express, Sequelize, PostgreSQL'}
          demo={'https://proyecto-final-front-ashy.vercel.app'}
          github={'https://github.com/pablo0261/proyecto-final-front'}
        />
        <ProjectCard foto={foto2} />
        <ProjectCard foto={foto3} />
      </div>
    </section>
  );
};

export default Projects;
