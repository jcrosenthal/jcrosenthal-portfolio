import React from 'react';

const Foot = () => (
  <footer className="container">
    <div className="row">
      <div className="col-4">
        <span>Portfolio</span>
        <nav>
          <a href="/">Home</a>
          <a href="/almost66">Web Design</a>
          <a href="/jvw">Branding</a>
          <a href="/illustration">Illustration</a>
        </nav>
      </div>
      <div className="col-4">
        <span>Let's Work Together!</span>
        <a
          title="email"
          href="mailto:jcrosenthal@gmail.com"
        >
          jcrosenthal@gmail.com
        </a>
      </div>
      <div className="col-4">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jcrosenthal"
            title="James Rosenthal Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
          linkedin
          </a>
          <a
            href="https://www.behance.net/JCROSENTHAd34b"
            title="James Rosenthal Behance"
            target="_blank"
            rel="noopener noreferrer"
            className="behance"
          >
          behance
          </a>
        </div>
      </div>
      <div className="copyright col-12">
        Copyright &copy; James Rosenthal
        {' '}
        {(new Date()).getFullYear()}
        . All rights reserved.
      </div>
    </div>
  </footer>
);

export default Foot;
