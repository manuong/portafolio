import styles from './ProjectCard.module.scss';

const ProjectCard = ({ foto, name, description, additional, technologies, demo, github }) => {
  return (
    <article className={styles.wrapperCard}>
      <img src={foto} alt="imagen del proyecto" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{additional}</p>
      <p>{technologies}</p>
      <div>
        <a href={demo}>Demo</a>
        <a href={github}>Repositorio</a>
      </div>
    </article>
  );
};

export default ProjectCard;
