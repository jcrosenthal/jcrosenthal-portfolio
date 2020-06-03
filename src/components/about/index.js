import React from 'react';
import styles from './core.module.scss';

const About = () => (
  <div className={styles['about-me']}>
    <div className={styles['about-me-row']}>
      <div className={styles.copy}>
        <h2>About Me</h2>
        <p>Web design and development is my bread &amp; butter. HTML, CSS, SASS, PHP, and a ton of Javascript (React/Angularjs/Express) are the languages I use day to day. I get unreasonably excited about front end dev.</p>
      </div>

      <div className="large-6 small-12 columns text-right">
        <img src="https://res.cloudinary.com/jcrosenthal/image/upload/v1408069179/about-me_q3byu4.jpg" alt="James Rosenthal - Web Designer / Developer" />
      </div>
    </div>
  </div>
);

export default About;
