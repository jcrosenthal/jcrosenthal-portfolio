import React from 'react';
import sociallinks from 'scss/social-links.module.scss';
import styles from './core.module.scss';

const Foot = () => (
  <footer className={styles.footer}>
    <div className={styles['footer-row']}>
      <div className="large-4 columns">
        <span>Portfolio</span>
        <nav>
          <a href="/">Home</a>
          <a href="/almost66">Web Design</a>
          <a href="/jvw">Branding</a>
          <a href="/illustration">Illustration</a>
        </nav>
      </div>
      <div className="large-4 columns">
        <span>Let&lsquo;s Work Together!</span>
        <a href="mailto:jcrosenthal@gmail.com">jcrosenthal@gmail.com</a>
      </div>
      <div className="large-4 columns">
        <div className={sociallinks['social-links']}>
          <a
            href="https://www.linkedin.com/in/jcrosenthal"
            rel="noopener noreferrer"
            title="James Rosenthal Linkedin"
            target="_blank"
            className={sociallinks.linkedin}
          >
          Linkedin
          </a>
          <a
            href="https://www.behance.net/JCROSENTHAL"
            rel="noopener noreferrer"
            title="James Rosenthal Behance"
            target="_blank"
            className={sociallinks.behance}
          >
          Behance
          </a>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>
      Copyright &copy;
      {(new Date()).getFullYear()}
      , James Rosenthal.  All rights reserved.
    </div>
  </footer>
);

export default Foot;
