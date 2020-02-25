import React from 'react';

import Home from 'components/Home';
import Project from 'components/Project';

import projects from './projects';

const routes = [{
  path: '/',
  name: 'home',
  render: () => <Home />,
}].concat(
  projects.map((project) => ({
    path: `/${project.name}`,
    name: project.name,
    display: project.display,
    render: () => (<Project project={project} />),
  })),
);

export default routes;
