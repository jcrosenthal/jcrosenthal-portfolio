import React from 'react';
import Navigation from 'components/Navigation';
import Foot from 'components/Foot';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import routes from 'routes';

const App = () => (
  <div>
    <Navigation />
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
);

export default App;
