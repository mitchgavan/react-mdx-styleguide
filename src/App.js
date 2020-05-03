import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import theme from './theme';
import Home from './views/Home/Home';

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
      <Home />
    </ThemeProvider>
  );
};

export default App;
