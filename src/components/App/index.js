import React from 'react';
import Navigation from 'components/Navigation';
import Foot from 'components/Foot';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import routes from 'routes';
import 'services/ga_tracker';
import Head from 'components/Head';
import styles from './core.module.scss';

const App = () => (
  <>
    <Navigation />
    <div
      id="contents"
      className={styles.contents}
    >
      <Head />
      <Router>
        <Switch>
          {routes.map((route, key) => (
            <Route
              exact
              path={route.path}
              key={String(key)}
              render={route.render}
            />
          ))}
        </Switch>
      </Router>
      <Foot />
    </div>
  </>
);

export default App;
