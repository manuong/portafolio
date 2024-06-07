import styles from './ProjectCard.module.scss';
import ButtonLink from './buttons/ButtonLink/ButtonLink';

const ProjectCard = ({ foto, name, description, additional, technologies, demo, github }) => {
  return (
    <article className={styles.wrapperCard}>
      <img src={foto} alt="imagen del proyecto" />

      <div className={styles.content}>
        <div className={styles.title}>
          <h3>{name}</h3>
          <div className={styles.wrapperButtons}>
            {demo && (
              <div>
                <ButtonLink name={'Demo'} url={demo} icon={'globe-outline'} />
              </div>
            )}
            <div>
              <ButtonLink name={'Repositorio'} url={github} icon={'logo-octocat'} />
            </div>
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
