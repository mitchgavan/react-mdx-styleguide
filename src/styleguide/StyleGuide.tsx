import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import Layout from './Layout/Layout';
import components from './components';
import mdxComponents from './mdxComponents';
import ThemePage from './theme.mdx';

const StyleGuide = () => {
  return (
    <Router>
      <Layout>
        <MDXProvider components={mdxComponents}>
          <Switch>
            {components.map((component) => (
              <Route
                key={component.name}
                path={`/styleguide/components/${component.name.toLowerCase()}`}
                component={
                  require(`../components/${component.path}.mdx`).default
                }
              />
            ))}
            <Route path="/" component={ThemePage} />
          </Switch>
        </MDXProvider>
      </Layout>
    </Router>
  );
};

export default StyleGuide;
