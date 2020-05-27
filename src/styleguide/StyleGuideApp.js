import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import emotionNormalize from 'emotion-normalize';
import theme from '../theme';
import Layout from './Layout/Layout';
import components from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${emotionNormalize}
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: ${theme.fonts.body};
          }
        `}
      />

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
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
