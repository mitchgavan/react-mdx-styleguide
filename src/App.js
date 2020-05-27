import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import theme from './theme';

const Home = lazy(() => import('./views/Home/Home'));
const StyleGuide = lazy(() => import('./styleguide/StyleGuide'));

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
        <Suspense fallback="Loading...">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/styleguide" component={StyleGuide} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
