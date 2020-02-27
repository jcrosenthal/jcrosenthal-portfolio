import React from 'react';
import projects from 'projects';
import styles from './core.module.scss';

const links = [{
  url: '/linkedin',
  display: 'linkedin',
}, {
  url: '/behance',
  display: 'behance',
}];

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
      {links.map((link, key) => (
        <a
          key={String(key)}
          href={link.url}
          title={link.display}
        >
          {link.display}
        </a>
      ))}
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
