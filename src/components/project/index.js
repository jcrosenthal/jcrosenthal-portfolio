import React from 'react';

const Project = ({ project }) => (
  <section className="contents product-page">
    <div className="hero">
      <div className="project-title">
        <h1>
          { project.display }
        </h1>
        <h2>
          { project.summary }
        </h2>
        <div className="overlay" />
      </div>
    </div>

    <div className="project_details">
      <div className="row">
        <img src="project.heroImg" alt="" />
      </div>
    </div>
  </section>
);

export default Project;
