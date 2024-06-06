import styles from './ProjectCard.module.scss';

const ProjectCard = ({ foto, name, description, additional, technologies, demo, github }) => {
  return (
    <article className={styles.wrapperCard}>
      <img src={foto} alt="imagen del proyecto" />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{description}</p>
        {additional && <p>{additional}</p>}
        <p>{technologies}</p>
        <div>
          {demo && <a href={demo}>Demo</a>}
          <a href={github}>Repositorio</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
