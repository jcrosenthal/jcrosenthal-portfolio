import React from 'react';

const Project = ({ project }) => (
  <section className="product-page">
    <div className="hero" style={{ backgroundImage: `url(https://res.cloudinary.com/jcrosenthal/image/upload/${project.images.find((image) => image.type === 'hero').src})` }}>
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
