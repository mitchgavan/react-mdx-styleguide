import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Button from './components/Button/Button.mdx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  );
};

export default App;
