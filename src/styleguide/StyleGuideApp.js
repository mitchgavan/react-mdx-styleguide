import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import emotionNormalize from 'emotion-normalize';
import theme from '../theme';
import Layout from './Layout/Layout';
import Button from '../components/Button/Button.mdx';

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
      <Layout>
        <Router>
          <Switch>
            <Route path="/" component={Button} />
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
