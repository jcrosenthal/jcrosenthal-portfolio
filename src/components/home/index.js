import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import About from 'components/About';
import Head from 'components/Head';
import routes from 'routes';
import projects from 'projects';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await routes;
  }

  render() {
    return (
      <>
        <div className="river">

          <Head />

          <div className="row name-hero">
            <span className="my-name-is">My name is</span>
            <span className="name">James Rosenthal</span>
            <span className="subtitle">web design / front end development / branding</span>
          </div>
        </div>

        <div className="portfolio-sections">
          <div className="row">
            <div id="web_design" className="section-link"><span>Web Design</span></div>
            <div id="branding" className="section-link"><span>Branding</span></div>
            <div id="illustration" className="section-link"><span>Illustration</span></div>
          </div>
        </div>

        <div className="portfolio-samples">

          <div id="grid" className="portfolio-grid">

            {projects.map((project, key) => (
              <div className={project.type}>
                <a
                  key={String(key)}
                  href={project.name}
                  title={project.display}
                >
                  {project.images.map((image) => image.type === 'thumb' && (
                    <img
                      src={`https://res.cloudinary.com/jcrosenthal/image/upload/${image.src}`}
                      alt={project.display}
                    />
                  ))}
                </a>
              </div>
            ))}

          </div>

        </div>

        <About />
      </>
    );
  }
}

export default Home;
