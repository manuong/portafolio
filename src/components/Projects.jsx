import styles from './Projects.module.scss';
import data from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className={styles.wrapperSection}>
      <h2>Projectos</h2>
      <div className={styles.wrapperCards}>
        <div>
          {data.map((project, index) => {
            const { foto, name, description, additional, technologies, demo, github } = project;

            return (
              <ProjectCard
                key={index}
                foto={foto}
                name={name}
                description={description}
                additional={additional}
                technologies={technologies}
                demo={demo}
                github={github}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
