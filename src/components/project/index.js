import React from 'react';
import styles from './core.module.scss';

const Project = ({ project }) => (
  <section className={styles['product-page']}>
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(https://res.cloudinary.com/jcrosenthal/image/upload/${project.images.find((image) => image.type === 'hero').src})`,
      }}
    >
      <div className={styles['project-title']}>
        <h1>
          { project.display }
        </h1>
        <h2>
          { project.summary }
        </h2>
        <div className={styles.overlay} />
      </div>
    </div>
    <div className={styles.project_details}>
      {project.images.map((image, key) => image.type === 'portfolio' && (
        <img
          src={`https://res.cloudinary.com/jcrosenthal/image/upload/${image.src}`}
          key={String(key)}
          alt={project.name}
        />
      ))}
    </div>
  </section>
);

export default Project;
