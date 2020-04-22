import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import Home from './views/Home/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
