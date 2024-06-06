import styles from './ProjectCard.module.scss';

const ProjectCard = ({ foto, name, description, additional, technologies, demo, github }) => {
  return (
    <article className={styles.wrapperCard}>
      <img src={foto} alt="imagen del proyecto" />
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>{name}</h3>
          <div>
            <a href={github} target="_blank" rel="noreferrer">
              Repositorio
            </a>
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            )}
          </div>
        </div>
        <p>{description}</p>
        {additional && <p>{additional}</p>}
        <p className={styles.technologyLine}>
          <span>Tecnologías: </span>
          {technologies}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
