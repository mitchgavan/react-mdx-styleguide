import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import components from './components';
import Button from '../components/Button/Button';

const StyleGuide = () => {
  return (
    <Router>
      <Layout components={components}>
        <Switch>
          {components.map((component) => (
            <Route
              key={component.name}
              path={`/styleguide/components/${component.name.toLowerCase()}`}
              component={require(`../components/${component.path}`).default}
            />
          ))}
          <Route path="/styleguide/button" component={Button} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default StyleGuide;
