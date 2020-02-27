import React from 'react';

const Foot = () => (
  <footer>
    <div className="row">
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
        <span>Let's Work Together!</span>
        <a href="mailto:jcrosenthal@gmail.com">jcrosenthal@gmail.com</a>
      </div>
      <div className="large-4 columns">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jcrosenthal"
            rel="noopener noreferrer"
            title="James Rosenthal Linkedin"
            target="_blank"
            className="linkedin"
          />
          <a
            href="https://www.behance.net/JCROSENTHAd34b"
            rel="noopener noreferrer"
            title="James Rosenthal Behance"
            target="_blank"
            className="behance"
          />
        </div>
      </div>
      <div className="copyright">
        Copyright &copy;
        {(new Date()).getFullYear()}
, James Rosenthal.  All rights reserved.
      </div>
    </div>
  </footer>
);

export default Foot;
