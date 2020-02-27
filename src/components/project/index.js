import React from 'react';

const Project = ({ project }) => (
  <section className="product-page">
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
      <div className="">
        <img src={`https://res.cloudinary.com/jcrosenthal/image/upload/${project.heroImg}`} alt="" />
      </div>
      {project.images.map((image, key) => (
        <img
          src={`https://res.cloudinary.com/jcrosenthal/image/upload/${image}`}
          key={String(key)}
          alt=""
        />
      ))}
    </div>
  </section>
);

export default Project;
