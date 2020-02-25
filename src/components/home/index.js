import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from 'components/About';
import routes from 'routes';

console.log('routes', routes);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  async componentDidMount() {
    await routes;
  }

  render() {
    return (
      <main className="contents">
        <div className="river">
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
          <ul id="grid" className="main small-block-grid-2 large-block-grid-4">
            {
              routes.map((route, key) => (
                <Link
                  key={String(key)}
                  to={route.path}
                >
                  {route.display}
                </Link>
              ))
            }
          </ul>
        </div>
        <About />
      </main>
    );
  }
}

export default Home;
