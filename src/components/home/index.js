import React, { useState } from 'react';
import About from 'components/About';
import projects from 'projects';
import styles from './core.module.scss';

function Home() {
  const [filter, setFilter] = useState('web_design');

  return (
    <>
      <div className={styles.river}>
        <div className={`${styles.row} ${styles['name-hero']}`}>
          <span className={styles['my-name-is']}>My name is</span>
          <span className={styles.name}>James Rosenthal</span>
          <span className={styles.subtitle}>web design / front end development / branding</span>
        </div>
      </div>

      <div className={styles['portfolio-sections']}>
        <button
          type="button"
          onClick={() => setFilter('web_design')}
          className={`${styles['section-link']} ${filter === 'web_design' ? styles.active : ''}`}
        >
          Web Design
        </button>
        <button
          type="button"
          onClick={() => setFilter('branding')}
          className={`${styles['section-link']} ${filter === 'branding' ? styles.active : ''}`}
        >
          Branding
        </button>
        <button
          type="button"
          onClick={() => setFilter('illustration')}
          className={`${styles['section-link']} ${filter === 'illustration' ? styles.active : ''}`}
        >
          Illustration
        </button>
      </div>

      <div className={styles['portfolio-samples']}>

        <div className={styles['portfolio-grid']}>

          {
            projects.filter((p) => p.type === filter)
              .map((project, key) => (
                <div
                  key={String(key)}
                  className={project.type}
                >
                  <a
                    href={project.name}
                    title={project.display}
                  >
                    {project.images.map((image, idx) => image.type === 'thumb' && (
                    <img
                      key={String(idx)}
                      src={`https://res.cloudinary.com/jcrosenthal/image/upload/${image.src}`}
                      alt={project.display}
                    />
                    ))}
                  </a>
                </div>
              ))
          }
        </div>

      </div>

      <About />
    </>
  );
}

export default Home;
