import React from 'react';
import projects from 'projects';
import styles from './core.module.scss';

const Navigation = () => (
  <div
    id="meny"
    className={styles.meny}
  >
    <nav>
      <a href="/" title="James Rosenthal, home">
        James Rosenthal
        {' '}
        <br />
        {' '}
        <em>web design &amp; development</em>
      </a>
      <hr />
      {projects.map((project, key) => (
        <a
          key={String(key)}
          href={project.name}
          title={project.display}
        >
          {project.display}
        </a>
      ))}
    </nav>
  </div>
);

export default Navigation;
