import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import theme from './theme';

const Home = lazy(() => import('./views/Home/Home'));
const StyleGuide = lazy(() => import('./styleguide/StyleGuide'));

function ErrorFallback({ error, componentStack, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <pre>{componentStack}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback="Loading...">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/styleguide" component={StyleGuide} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
};

export default App;
