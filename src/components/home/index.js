import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import About from 'components/About';
import Head from 'components/Head';
import routes from 'routes';

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

          <div id="grid" className="main small-block-grid-2 large-block-grid-4">

            <div className="web_design">
              <a href="almost66" title="Almost 6 6">
                <img src="http://res.cloudinary.com/jcrosenthal/image/upload/v1408050965/web%20design%20thumbs/almost_sixsix.jpg" alt="Almost Six Six" />
              </a>
            </div>

            <div className="web_design">
              <a href="almost66" title="Almost 6 6">
                <img src="http://res.cloudinary.com/jcrosenthal/image/upload/v1408050965/web%20design%20thumbs/almost_sixsix.jpg" alt="Almost Six Six" />
              </a>
            </div>

            <div className="web_design">
              <a href="almost66" title="Almost 6 6">
                <img src="http://res.cloudinary.com/jcrosenthal/image/upload/v1408050965/web%20design%20thumbs/almost_sixsix.jpg" alt="Almost Six Six" />
              </a>
            </div>

          </div>

        </div>

        <About />
      </>
    );
  }
}

export default Home;
